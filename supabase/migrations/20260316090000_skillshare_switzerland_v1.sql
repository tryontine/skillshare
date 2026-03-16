create extension if not exists pgcrypto;
create extension if not exists citext;
create extension if not exists pg_trgm;
create extension if not exists postgis;

DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('consumer', 'provider', 'admin');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public.profile_state AS ENUM ('draft', 'pending', 'approved', 'restricted');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public.booking_mode AS ENUM ('instant', 'request', 'hybrid');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public.booking_request_status AS ENUM ('draft', 'pending', 'accepted', 'declined', 'expired', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public.booking_status AS ENUM ('awaiting_payment', 'confirmed', 'completed', 'cancelled', 'refunded');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE public.conversation_context_type AS ENUM ('service_inquiry', 'booking_request', 'booking', 'support');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.has_role(check_user uuid, check_role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = check_user and role = check_role
  );
$$;

create or replace function public.is_admin(check_user uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select public.has_role(check_user, 'admin'::public.app_role);
$$;

create or replace function public.is_thread_participant(check_thread uuid, check_user uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.conversation_participants
    where thread_id = check_thread and user_id = check_user
  );
$$;

create table if not exists public.profiles (
  id uuid primary key,
  handle citext not null unique,
  full_name text not null,
  bio text,
  city text not null,
  canton text not null,
  postal_code text,
  locale text not null default 'en-CH',
  avatar_path text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.provider_profiles (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  headline text,
  state public.profile_state not null default 'draft',
  onboarding_completed_at timestamptz,
  payout_ready boolean not null default false,
  service_radius_km integer not null default 10,
  rating_avg numeric(3,2) not null default 0,
  review_count integer not null default 0,
  response_time_minutes integer,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.consumer_profiles (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  preferred_city text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.user_roles (
  user_id uuid not null references public.profiles(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (user_id, role)
);

create table if not exists public.notification_preferences (
  user_id uuid primary key references public.profiles(id) on delete cascade,
  booking_updates boolean not null default true,
  inbox_updates boolean not null default true,
  payout_updates boolean not null default true,
  review_reminders boolean not null default true,
  marketing_updates boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  sort_order integer not null default 0,
  is_active boolean not null default true
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid not null references public.profiles(id) on delete cascade,
  category_id uuid not null references public.categories(id),
  slug text not null unique,
  title text not null,
  summary text not null,
  description text,
  booking_mode public.booking_mode not null default 'request',
  is_published boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.service_media (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  media_path text not null,
  alt_text text,
  sort_order integer not null default 0
);

create table if not exists public.service_locations (
  service_id uuid primary key references public.services(id) on delete cascade,
  canton text not null,
  city text not null,
  postal_code text,
  venue_label text not null,
  district text,
  lat double precision not null,
  lng double precision not null,
  geog geography(point, 4326) generated always as (st_setsrid(st_makepoint(lng, lat), 4326)::geography) stored,
  radius_km integer not null default 10
);

create table if not exists public.service_pricing (
  service_id uuid primary key references public.services(id) on delete cascade,
  currency text not null default 'CHF',
  price_chf integer not null,
  duration_minutes integer not null,
  instant_book_enabled boolean not null default false,
  request_book_enabled boolean not null default true
);

create table if not exists public.service_faqs (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  question text not null,
  answer text not null,
  sort_order integer not null default 0
);

create table if not exists public.service_highlights (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  label text not null,
  sort_order integer not null default 0
);

create table if not exists public.favorites (
  user_id uuid not null references public.profiles(id) on delete cascade,
  service_id uuid not null references public.services(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (user_id, service_id)
);

create table if not exists public.availability_rules (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  day_of_week integer not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  time_zone text not null default 'Europe/Zurich'
);

create table if not exists public.availability_exceptions (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  is_available boolean not null default false,
  note text
);

create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  service_id uuid not null references public.services(id) on delete cascade,
  consumer_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  status public.booking_request_status not null default 'pending',
  requested_start_at timestamptz not null,
  requested_end_at timestamptz,
  notes text,
  total_chf integer not null,
  expires_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.booking_request_status_events (
  id uuid primary key default gen_random_uuid(),
  booking_request_id uuid not null references public.booking_requests(id) on delete cascade,
  status public.booking_request_status not null,
  changed_by uuid references public.profiles(id),
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_request_id uuid unique references public.booking_requests(id) on delete set null,
  service_id uuid not null references public.services(id) on delete cascade,
  consumer_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  status public.booking_status not null default 'awaiting_payment',
  starts_at timestamptz not null,
  ends_at timestamptz,
  total_chf integer not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.booking_status_events (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  status public.booking_status not null,
  changed_by uuid references public.profiles(id),
  created_at timestamptz not null default timezone('utc', now())
);
create table if not exists public.conversation_threads (
  id uuid primary key default gen_random_uuid(),
  service_id uuid references public.services(id) on delete cascade,
  booking_request_id uuid references public.booking_requests(id) on delete cascade,
  booking_id uuid references public.bookings(id) on delete cascade,
  context_type public.conversation_context_type not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.conversation_participants (
  thread_id uuid not null references public.conversation_threads(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (thread_id, user_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.conversation_threads(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.message_read_states (
  thread_id uuid not null references public.conversation_threads(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  last_read_at timestamptz,
  primary key (thread_id, user_id)
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null unique references public.bookings(id) on delete cascade,
  service_id uuid not null references public.services(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  rating integer not null check (rating between 1 and 5),
  title text not null,
  body text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.review_responses (
  review_id uuid primary key references public.reviews(id) on delete cascade,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.platform_fee_rules (
  id uuid primary key default gen_random_uuid(),
  booking_mode public.booking_mode,
  fee_bps integer not null default 1200,
  is_default boolean not null default false,
  active_from timestamptz not null default timezone('utc', now())
);

create table if not exists public.stripe_connected_accounts (
  provider_id uuid primary key references public.profiles(id) on delete cascade,
  stripe_account_id text not null unique,
  charges_enabled boolean not null default false,
  payouts_enabled boolean not null default false,
  onboarding_completed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.payment_intents (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references public.bookings(id) on delete set null,
  stripe_payment_intent_id text not null unique,
  amount_chf integer not null,
  currency text not null default 'CHF',
  status text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.charges (
  id uuid primary key default gen_random_uuid(),
  payment_intent_id text,
  stripe_charge_id text not null unique,
  amount_chf integer not null,
  currency text not null default 'CHF',
  status text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.refunds (
  id uuid primary key default gen_random_uuid(),
  stripe_refund_id text not null unique,
  stripe_charge_id text not null,
  amount_chf integer not null,
  status text not null,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.stripe_events (
  id text primary key,
  type text not null,
  livemode boolean not null default false,
  payload jsonb not null,
  processed_at timestamptz,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.payout_ledger_entries (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references public.bookings(id) on delete set null,
  provider_id uuid not null references public.profiles(id) on delete cascade,
  stripe_event_id text references public.stripe_events(id) on delete set null,
  entry_type text not null,
  amount_chf integer not null,
  currency text not null default 'CHF',
  occurred_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.provider_metrics_daily (
  provider_id uuid not null references public.profiles(id) on delete cascade,
  metric_date date not null,
  profile_views integer not null default 0,
  saves integer not null default 0,
  bookings integer not null default 0,
  revenue_chf integer not null default 0,
  primary key (provider_id, metric_date)
);

create table if not exists public.consumer_metrics_daily (
  consumer_id uuid not null references public.profiles(id) on delete cascade,
  metric_date date not null,
  searches integer not null default 0,
  favorites integer not null default 0,
  bookings integer not null default 0,
  reviews integer not null default 0,
  primary key (consumer_id, metric_date)
);

create index if not exists services_provider_id_idx on public.services(provider_id);
create index if not exists services_title_trgm_idx on public.services using gin (title gin_trgm_ops);
create index if not exists service_locations_geog_idx on public.service_locations using gist (geog);
create index if not exists booking_requests_consumer_idx on public.booking_requests(consumer_id);
create index if not exists booking_requests_provider_idx on public.booking_requests(provider_id);
create index if not exists bookings_provider_idx on public.bookings(provider_id);
create index if not exists messages_thread_created_idx on public.messages(thread_id, created_at desc);
create index if not exists payout_ledger_provider_idx on public.payout_ledger_entries(provider_id, occurred_at desc);

create or replace view public.service_search_index_v as
select
  s.id as service_id,
  s.slug,
  s.title,
  s.summary,
  c.slug as category_slug,
  p.id as provider_id,
  p.full_name as provider_name,
  p.handle as provider_handle,
  pp.headline as provider_headline,
  sl.city,
  sl.canton,
  sp.price_chf,
  sp.duration_minutes,
  s.booking_mode,
  coalesce(avg(r.rating), 0)::numeric(3,2) as rating_avg,
  count(r.id)::integer as review_count
from public.services s
join public.categories c on c.id = s.category_id
join public.profiles p on p.id = s.provider_id
left join public.provider_profiles pp on pp.user_id = s.provider_id
join public.service_locations sl on sl.service_id = s.id
join public.service_pricing sp on sp.service_id = s.id
left join public.reviews r on r.service_id = s.id
where s.is_published = true
group by s.id, c.slug, p.id, p.full_name, p.handle, pp.headline, sl.city, sl.canton, sp.price_chf, sp.duration_minutes;

create or replace view public.provider_dashboard_v as
select
  s.provider_id,
  count(*) filter (where s.is_published) as live_services,
  count(b.id) filter (where b.status in ('awaiting_payment', 'confirmed')) as upcoming_bookings,
  coalesce(sum(case when b.status in ('confirmed', 'completed') then b.total_chf else 0 end), 0)::integer as revenue_chf,
  coalesce(avg(r.rating), 0)::numeric(3,2) as rating_avg,
  count(r.id)::integer as review_count
from public.services s
left join public.bookings b on b.provider_id = s.provider_id
left join public.reviews r on r.provider_id = s.provider_id
group by s.provider_id;

create or replace view public.consumer_dashboard_v as
select
  p.id as consumer_id,
  count(b.id) filter (where b.status in ('awaiting_payment', 'confirmed')) as upcoming_bookings,
  count(distinct f.service_id) as favorite_count,
  count(b.id) filter (where b.status = 'completed') as completed_bookings,
  count(distinct r.id) as review_count
from public.profiles p
left join public.bookings b on b.consumer_id = p.id
left join public.favorites f on f.user_id = p.id
left join public.reviews r on r.author_id = p.id
group by p.id;

create or replace function public.search_services(
  p_query text default null,
  p_category_slug text default null,
  p_city text default null,
  p_min_rating numeric default null,
  p_max_price integer default null,
  p_mode text default null,
  p_radius_km integer default null,
  p_lat double precision default null,
  p_lng double precision default null,
  p_sort text default 'recommended'
)
returns table (
  service_id uuid,
  slug text,
  title text,
  summary text,
  provider_name text,
  provider_handle text,
  city text,
  canton text,
  price_chf integer,
  duration_minutes integer,
  rating_avg numeric,
  review_count integer,
  distance_km numeric,
  booking_mode public.booking_mode
)
language sql
stable
as $$
  with base as (
    select
      idx.service_id,
      idx.slug,
      idx.title,
      idx.summary,
      idx.provider_name,
      idx.provider_handle,
      idx.city,
      idx.canton,
      idx.price_chf,
      idx.duration_minutes,
      idx.rating_avg,
      idx.review_count,
      idx.booking_mode,
      case
        when p_lat is not null and p_lng is not null then
          round((st_distance(sl.geog, st_setsrid(st_makepoint(p_lng, p_lat), 4326)::geography) / 1000)::numeric, 2)
        else null
      end as distance_km
    from public.service_search_index_v idx
    join public.service_locations sl on sl.service_id = idx.service_id
    where (p_query is null or idx.title ilike '%' || p_query || '%' or idx.summary ilike '%' || p_query || '%' or idx.provider_name ilike '%' || p_query || '%')
      and (p_category_slug is null or idx.category_slug = p_category_slug)
      and (p_city is null or idx.city = p_city)
      and (p_min_rating is null or idx.rating_avg >= p_min_rating)
      and (p_max_price is null or idx.price_chf <= p_max_price)
      and (p_mode is null or idx.booking_mode::text = p_mode or idx.booking_mode = 'hybrid')
      and (
        p_radius_km is null
        or p_lat is null
        or p_lng is null
        or st_dwithin(sl.geog, st_setsrid(st_makepoint(p_lng, p_lat), 4326)::geography, p_radius_km * 1000)
      )
  )
  select *
  from base
  order by
    case when p_sort = 'price_low' then price_chf end asc nulls last,
    case when p_sort = 'price_high' then price_chf end desc nulls last,
    case when p_sort = 'rating' then rating_avg end desc nulls last,
    case when p_sort = 'popularity' then review_count end desc nulls last,
    case when p_sort = 'recommended' then rating_avg * greatest(review_count, 1) end desc nulls last,
    title asc;
$$;

create trigger profiles_set_updated_at before update on public.profiles for each row execute function public.set_updated_at();
create trigger provider_profiles_set_updated_at before update on public.provider_profiles for each row execute function public.set_updated_at();
create trigger consumer_profiles_set_updated_at before update on public.consumer_profiles for each row execute function public.set_updated_at();
create trigger services_set_updated_at before update on public.services for each row execute function public.set_updated_at();
create trigger booking_requests_set_updated_at before update on public.booking_requests for each row execute function public.set_updated_at();
create trigger bookings_set_updated_at before update on public.bookings for each row execute function public.set_updated_at();
create trigger conversation_threads_set_updated_at before update on public.conversation_threads for each row execute function public.set_updated_at();
create trigger notification_preferences_set_updated_at before update on public.notification_preferences for each row execute function public.set_updated_at();
create trigger stripe_connected_accounts_set_updated_at before update on public.stripe_connected_accounts for each row execute function public.set_updated_at();
alter table public.profiles enable row level security;
alter table public.provider_profiles enable row level security;
alter table public.consumer_profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.notification_preferences enable row level security;
alter table public.services enable row level security;
alter table public.service_locations enable row level security;
alter table public.service_pricing enable row level security;
alter table public.service_faqs enable row level security;
alter table public.service_highlights enable row level security;
alter table public.favorites enable row level security;
alter table public.booking_requests enable row level security;
alter table public.bookings enable row level security;
alter table public.conversation_threads enable row level security;
alter table public.conversation_participants enable row level security;
alter table public.messages enable row level security;
alter table public.message_read_states enable row level security;
alter table public.reviews enable row level security;
alter table public.review_responses enable row level security;
alter table public.stripe_connected_accounts enable row level security;
alter table public.payout_ledger_entries enable row level security;

drop policy if exists profiles_public_read on public.profiles;
create policy profiles_public_read on public.profiles for select using (true);

drop policy if exists profiles_self_write on public.profiles;
create policy profiles_self_write on public.profiles
for all using (auth.uid() = id or public.is_admin(auth.uid()))
with check (auth.uid() = id or public.is_admin(auth.uid()));

drop policy if exists provider_profiles_public_read on public.provider_profiles;
create policy provider_profiles_public_read on public.provider_profiles for select using (true);

drop policy if exists provider_profiles_self_write on public.provider_profiles;
create policy provider_profiles_self_write on public.provider_profiles
for all using (auth.uid() = user_id or public.is_admin(auth.uid()))
with check (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists consumer_profiles_self_access on public.consumer_profiles;
create policy consumer_profiles_self_access on public.consumer_profiles
for all using (auth.uid() = user_id or public.is_admin(auth.uid()))
with check (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists user_roles_self_read on public.user_roles;
create policy user_roles_self_read on public.user_roles for select using (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists notification_preferences_self_access on public.notification_preferences;
create policy notification_preferences_self_access on public.notification_preferences
for all using (auth.uid() = user_id or public.is_admin(auth.uid()))
with check (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists services_public_or_owner on public.services;
create policy services_public_or_owner on public.services
for select using (is_published = true or auth.uid() = provider_id or public.is_admin(auth.uid()));

drop policy if exists services_provider_write on public.services;
create policy services_provider_write on public.services
for all using (auth.uid() = provider_id or public.is_admin(auth.uid()))
with check (auth.uid() = provider_id or public.is_admin(auth.uid()));

drop policy if exists service_locations_public_or_owner on public.service_locations;
create policy service_locations_public_or_owner on public.service_locations
for select using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.is_published = true or s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_locations_owner_write on public.service_locations;
create policy service_locations_owner_write on public.service_locations
for all using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
)
with check (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_pricing_public_or_owner on public.service_pricing;
create policy service_pricing_public_or_owner on public.service_pricing
for select using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.is_published = true or s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_pricing_owner_write on public.service_pricing;
create policy service_pricing_owner_write on public.service_pricing
for all using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
)
with check (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_faqs_public_or_owner on public.service_faqs;
create policy service_faqs_public_or_owner on public.service_faqs
for select using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.is_published = true or s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_faqs_owner_write on public.service_faqs;
create policy service_faqs_owner_write on public.service_faqs
for all using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
)
with check (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_highlights_public_or_owner on public.service_highlights;
create policy service_highlights_public_or_owner on public.service_highlights
for select using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.is_published = true or s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists service_highlights_owner_write on public.service_highlights;
create policy service_highlights_owner_write on public.service_highlights
for all using (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
)
with check (
  exists (
    select 1 from public.services s
    where s.id = service_id and (s.provider_id = auth.uid() or public.is_admin(auth.uid()))
  )
);

drop policy if exists favorites_self_access on public.favorites;
create policy favorites_self_access on public.favorites
for all using (auth.uid() = user_id or public.is_admin(auth.uid()))
with check (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists booking_requests_participants_access on public.booking_requests;
create policy booking_requests_participants_access on public.booking_requests
for select using (auth.uid() in (consumer_id, provider_id) or public.is_admin(auth.uid()));

drop policy if exists booking_requests_consumer_insert on public.booking_requests;
create policy booking_requests_consumer_insert on public.booking_requests
for insert with check (auth.uid() = consumer_id or public.is_admin(auth.uid()));

drop policy if exists booking_requests_participants_update on public.booking_requests;
create policy booking_requests_participants_update on public.booking_requests
for update using (auth.uid() in (consumer_id, provider_id) or public.is_admin(auth.uid()))
with check (auth.uid() in (consumer_id, provider_id) or public.is_admin(auth.uid()));

drop policy if exists bookings_participants_access on public.bookings;
create policy bookings_participants_access on public.bookings
for select using (auth.uid() in (consumer_id, provider_id) or public.is_admin(auth.uid()));

drop policy if exists bookings_provider_write on public.bookings;
create policy bookings_provider_write on public.bookings
for all using (auth.uid() = provider_id or public.is_admin(auth.uid()))
with check (auth.uid() = provider_id or public.is_admin(auth.uid()));

drop policy if exists threads_participants_access on public.conversation_threads;
create policy threads_participants_access on public.conversation_threads
for select using (public.is_thread_participant(id, auth.uid()) or public.is_admin(auth.uid()));

drop policy if exists messages_participants_access on public.messages;
create policy messages_participants_access on public.messages
for select using (public.is_thread_participant(thread_id, auth.uid()) or public.is_admin(auth.uid()));

drop policy if exists messages_participants_insert on public.messages;
create policy messages_participants_insert on public.messages
for insert with check (sender_id = auth.uid() and public.is_thread_participant(thread_id, auth.uid()));

drop policy if exists message_read_states_self_access on public.message_read_states;
create policy message_read_states_self_access on public.message_read_states
for all using (auth.uid() = user_id or public.is_admin(auth.uid()))
with check (auth.uid() = user_id or public.is_admin(auth.uid()));

drop policy if exists reviews_public_read on public.reviews;
create policy reviews_public_read on public.reviews for select using (true);

drop policy if exists reviews_author_insert on public.reviews;
create policy reviews_author_insert on public.reviews
for insert with check (author_id = auth.uid() or public.is_admin(auth.uid()));

drop policy if exists review_responses_public_read on public.review_responses;
create policy review_responses_public_read on public.review_responses for select using (true);

drop policy if exists review_responses_provider_write on public.review_responses;
create policy review_responses_provider_write on public.review_responses
for all using (provider_id = auth.uid() or public.is_admin(auth.uid()))
with check (provider_id = auth.uid() or public.is_admin(auth.uid()));

drop policy if exists stripe_connected_accounts_owner_access on public.stripe_connected_accounts;
create policy stripe_connected_accounts_owner_access on public.stripe_connected_accounts
for select using (provider_id = auth.uid() or public.is_admin(auth.uid()));

drop policy if exists stripe_connected_accounts_admin_write on public.stripe_connected_accounts;
create policy stripe_connected_accounts_admin_write on public.stripe_connected_accounts
for all using (public.is_admin(auth.uid()))
with check (public.is_admin(auth.uid()));

drop policy if exists payout_ledger_owner_access on public.payout_ledger_entries;
create policy payout_ledger_owner_access on public.payout_ledger_entries
for select using (provider_id = auth.uid() or public.is_admin(auth.uid()));
