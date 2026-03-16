insert into public.categories (id, slug, name, description, sort_order)
values
  ('11111111-1111-1111-1111-111111111111', 'language-coaching', 'Language coaching', 'Conversation-driven tutoring with local cultural context.', 1),
  ('22222222-2222-2222-2222-222222222222', 'photography', 'Photography', 'Portrait sessions, editing mentoring, and brand imagery.', 2),
  ('33333333-3333-3333-3333-333333333333', 'tutoring', 'Tutoring', 'Academic support, exam prep, and subject deep-dives.', 3),
  ('44444444-4444-4444-4444-444444444444', 'fitness', 'Fitness', 'Private coaching, outdoor movement, and wellness sessions.', 4),
  ('55555555-5555-5555-5555-555555555555', 'career', 'Career', 'Interview strategy, CV workshops, and leadership coaching.', 5),
  ('66666666-6666-6666-6666-666666666666', 'music', 'Music', 'Lessons, rehearsals, and performance confidence sessions.', 6)
on conflict (id) do nothing;

insert into public.profiles (id, handle, full_name, bio, city, canton, postal_code)
values
  ('00000000-0000-0000-0000-000000000001', 'lea-suter', 'Lea Suter', 'Lea runs immersive conversation walks and confidence-first language practice for expats settling into Zurich.', 'Zurich', 'ZH', '8004'),
  ('00000000-0000-0000-0000-000000000002', 'marc-delacour', 'Marc Delacour', 'Marc blends editorial direction with relaxed coaching to create modern portraits for personal brands and teams.', 'Geneva', 'GE', '1207'),
  ('00000000-0000-0000-0000-000000000003', 'sofia-keller', 'Sofia Keller', 'Sofia builds calm, rigorous study plans for students preparing for high-stakes exams in Basel and Bern.', 'Basel', 'BS', '4053'),
  ('00000000-0000-0000-0000-000000000004', 'nico-bernoulli', 'Nico Bernoulli', 'Nico coaches outdoor and studio sessions focused on sustainable strength, posture, and movement confidence.', 'Bern', 'BE', '3013'),
  ('00000000-0000-0000-0000-000000000005', 'amelie-favre', 'Amelie Favre', 'Amelie helps ambitious professionals sharpen their narrative, compensation strategy, and interview performance.', 'Lausanne', 'VD', '1003'),
  ('00000000-0000-0000-0000-000000000006', 'luca-morel', 'Luca Morel', 'Luca offers piano and music theory coaching for adults returning to performance.', 'Zurich', 'ZH', '8001'),
  ('00000000-0000-0000-0000-000000000010', 'olivia-meyer', 'Olivia Meyer', 'Launch demo consumer account for Swiss marketplace previews.', 'Zurich', 'ZH', '8002')
on conflict (id) do nothing;

insert into public.provider_profiles (user_id, headline, state, onboarding_completed_at, payout_ready, service_radius_km, rating_avg, review_count, response_time_minutes)
values
  ('00000000-0000-0000-0000-000000000001', 'Swiss German conversation coach', 'approved', timezone('utc', now()), true, 12, 4.9, 88, 60),
  ('00000000-0000-0000-0000-000000000002', 'Portrait photographer for founders', 'approved', timezone('utc', now()), true, 18, 4.8, 61, 180),
  ('00000000-0000-0000-0000-000000000003', 'Math tutor and Matura strategist', 'approved', timezone('utc', now()), true, 10, 4.9, 103, 45),
  ('00000000-0000-0000-0000-000000000004', 'Private mobility and strength coach', 'approved', timezone('utc', now()), true, 15, 4.7, 44, 120),
  ('00000000-0000-0000-0000-000000000005', 'Career strategist for global professionals', 'approved', timezone('utc', now()), true, 8, 4.9, 37, 90),
  ('00000000-0000-0000-0000-000000000006', 'Piano coach for adults', 'approved', timezone('utc', now()), true, 8, 4.8, 29, 90)
on conflict (user_id) do nothing;

insert into public.consumer_profiles (user_id, preferred_city)
values ('00000000-0000-0000-0000-000000000010', 'Zurich')
on conflict (user_id) do nothing;

insert into public.user_roles (user_id, role)
values
  ('00000000-0000-0000-0000-000000000001', 'provider'),
  ('00000000-0000-0000-0000-000000000002', 'provider'),
  ('00000000-0000-0000-0000-000000000003', 'provider'),
  ('00000000-0000-0000-0000-000000000004', 'provider'),
  ('00000000-0000-0000-0000-000000000005', 'provider'),
  ('00000000-0000-0000-0000-000000000006', 'provider'),
  ('00000000-0000-0000-0000-000000000010', 'consumer')
on conflict (user_id, role) do nothing;

insert into public.notification_preferences (user_id)
values
  ('00000000-0000-0000-0000-000000000001'),
  ('00000000-0000-0000-0000-000000000002'),
  ('00000000-0000-0000-0000-000000000003'),
  ('00000000-0000-0000-0000-000000000004'),
  ('00000000-0000-0000-0000-000000000005'),
  ('00000000-0000-0000-0000-000000000006'),
  ('00000000-0000-0000-0000-000000000010')
on conflict (user_id) do nothing;

insert into public.services (id, provider_id, category_id, slug, title, summary, description, booking_mode, is_published)
values
  ('10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 'zurich-swiss-german-conversation-walks', 'Swiss German conversation walks in Zurich', 'Confidence-building guided sessions through Zurich neighborhoods with practical speaking drills.', 'These sessions replace stiff classroom drills with practical speaking scenarios in real Zurich neighborhoods.', 'hybrid', true),
  ('10000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', '22222222-2222-2222-2222-222222222222', 'geneva-founder-portrait-session', 'Founder portrait session in Geneva', 'Editorial portraits for personal brands, press kits, and launch campaigns.', 'Marc plans location, tone, and art direction around your public presence and target audience.', 'request', true),
  ('10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', '33333333-3333-3333-3333-333333333333', 'basel-math-matura-intensive', 'Matura math intensive in Basel', 'Structured exam preparation with diagnostics, targeted drills, and stress-tested mock papers.', 'A high-rigor tutoring format for students who need clarity fast.', 'instant', true),
  ('10000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000004', '44444444-4444-4444-4444-444444444444', 'bern-strength-and-mobility-coaching', 'Private strength and mobility coaching in Bern', 'A tailored in-person training format for busy professionals who want sustainable progress.', 'Sessions are built for measurable strength gains without burnout.', 'hybrid', true),
  ('10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000005', '55555555-5555-5555-5555-555555555555', 'lausanne-career-story-and-interview-lab', 'Career story and interview lab in Lausanne', 'A strategic session to sharpen your positioning for Swiss and international hiring markets.', 'The session helps you articulate your value with more precision and more leverage.', 'request', true),
  ('10000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000006', '66666666-6666-6666-6666-666666666666', 'zurich-adult-piano-reset', 'Adult piano reset in Zurich', 'A low-ego return-to-playing format for adults who want confidence and consistency again.', 'Technique refresh, repertoire coaching, and practical musicianship in a calm private studio.', 'request', true)
on conflict (id) do nothing;

insert into public.service_locations (service_id, canton, city, postal_code, venue_label, district, lat, lng, radius_km)
values
  ('10000000-0000-0000-0000-000000000001', 'ZH', 'Zurich', '8004', 'Meet near Helvetiaplatz or your central office', 'Kreis 4', 47.3769, 8.5417, 12),
  ('10000000-0000-0000-0000-000000000002', 'GE', 'Geneva', '1207', 'Studio or on-location around central Geneva', 'Eaux-Vives', 46.2044, 6.1432, 18),
  ('10000000-0000-0000-0000-000000000003', 'BS', 'Basel', '4053', 'Quiet tutoring studio near Basel SBB', 'Grossbasel', 47.5476, 7.5896, 10),
  ('10000000-0000-0000-0000-000000000004', 'BE', 'Bern', '3013', 'Private studio near Breitenrainplatz', 'Breitenrain', 46.9480, 7.4474, 15),
  ('10000000-0000-0000-0000-000000000005', 'VD', 'Lausanne', '1003', 'Private meeting suite near Lausanne-Flon', 'Flon', 46.5197, 6.6323, 8),
  ('10000000-0000-0000-0000-000000000006', 'ZH', 'Zurich', '8001', 'Private piano studio near Bellevue', 'Altstadt', 47.3686, 8.5442, 8)
on conflict (service_id) do nothing;

insert into public.service_pricing (service_id, price_chf, duration_minutes, instant_book_enabled, request_book_enabled)
values
  ('10000000-0000-0000-0000-000000000001', 95, 75, true, true),
  ('10000000-0000-0000-0000-000000000002', 420, 120, false, true),
  ('10000000-0000-0000-0000-000000000003', 110, 90, true, false),
  ('10000000-0000-0000-0000-000000000004', 130, 60, true, true),
  ('10000000-0000-0000-0000-000000000005', 180, 90, false, true),
  ('10000000-0000-0000-0000-000000000006', 140, 60, false, true)
on conflict (service_id) do nothing;

insert into public.service_highlights (service_id, label, sort_order)
values
  ('10000000-0000-0000-0000-000000000001', 'Neighborhood format', 1),
  ('10000000-0000-0000-0000-000000000001', 'Beginner-safe', 2),
  ('10000000-0000-0000-0000-000000000002', 'Creative direction', 1),
  ('10000000-0000-0000-0000-000000000003', 'Exam diagnostics', 1),
  ('10000000-0000-0000-0000-000000000004', 'Executive schedule friendly', 1),
  ('10000000-0000-0000-0000-000000000005', 'Narrative strategy', 1),
  ('10000000-0000-0000-0000-000000000006', 'Adult beginner friendly', 1)
on conflict do nothing;
insert into public.service_faqs (service_id, question, answer, sort_order)
values
  ('10000000-0000-0000-0000-000000000001', 'Who is this best for?', 'Expats and professionals who understand standard German but struggle in daily Swiss settings.', 1),
  ('10000000-0000-0000-0000-000000000002', 'Do you shoot teams?', 'Yes, team sessions are handled as custom requests with expanded scheduling.', 1),
  ('10000000-0000-0000-0000-000000000003', 'How often should I book?', 'One to two sessions per week works best during exam season.', 1),
  ('10000000-0000-0000-0000-000000000004', 'Can I book as a pair?', 'Pair sessions are available as custom requests with adjusted pricing.', 1),
  ('10000000-0000-0000-0000-000000000005', 'Is this useful for promotions too?', 'Yes. Internal progression and promotion strategy are both common use cases.', 1),
  ('10000000-0000-0000-0000-000000000006', 'Do I need prior training?', 'No. This format is designed for returning adults and late starters.', 1)
on conflict do nothing;

insert into public.availability_rules (service_id, day_of_week, start_time, end_time)
values
  ('10000000-0000-0000-0000-000000000001', 2, '09:00', '17:00'),
  ('10000000-0000-0000-0000-000000000001', 4, '10:00', '18:00'),
  ('10000000-0000-0000-0000-000000000002', 1, '13:00', '19:00'),
  ('10000000-0000-0000-0000-000000000003', 0, '15:00', '20:00'),
  ('10000000-0000-0000-0000-000000000004', 3, '07:00', '19:00'),
  ('10000000-0000-0000-0000-000000000005', 2, '08:00', '17:00'),
  ('10000000-0000-0000-0000-000000000006', 6, '10:00', '14:00')
on conflict do nothing;

insert into public.booking_requests (id, service_id, consumer_id, provider_id, status, requested_start_at, total_chf, notes)
values
  ('20000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'accepted', timezone('utc', now()) + interval '6 day', 95, 'Prefer a quieter route for the first session.'),
  ('20000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000003', 'pending', timezone('utc', now()) + interval '8 day', 110, 'Need exam-focused prep before Matura week.'),
  ('20000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000005', 'accepted', timezone('utc', now()) - interval '10 day', 180, 'Interview loop starts next month.')
on conflict (id) do nothing;

insert into public.bookings (id, booking_request_id, service_id, consumer_id, provider_id, status, starts_at, total_chf)
values
  ('30000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000001', 'confirmed', timezone('utc', now()) + interval '6 day', 95),
  ('30000000-0000-0000-0000-000000000002', '20000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000003', 'awaiting_payment', timezone('utc', now()) + interval '8 day', 110),
  ('30000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000005', 'completed', timezone('utc', now()) - interval '10 day', 180)
on conflict (id) do nothing;

insert into public.reviews (id, booking_id, service_id, author_id, provider_id, rating, title, body)
values
  ('40000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000005', 5, 'Exactly the confidence reset I needed', 'Clear, direct, and very strategic. The session immediately improved how I tell my story in interviews.')
on conflict (id) do nothing;

insert into public.conversation_threads (id, service_id, booking_request_id, booking_id, context_type)
values
  ('50000000-0000-0000-0000-000000000001', '10000000-0000-0000-0000-000000000001', '20000000-0000-0000-0000-000000000001', '30000000-0000-0000-0000-000000000001', 'booking_request'),
  ('50000000-0000-0000-0000-000000000002', '10000000-0000-0000-0000-000000000002', null, null, 'service_inquiry'),
  ('50000000-0000-0000-0000-000000000003', '10000000-0000-0000-0000-000000000003', '20000000-0000-0000-0000-000000000002', '30000000-0000-0000-0000-000000000002', 'booking')
on conflict (id) do nothing;

insert into public.conversation_participants (thread_id, user_id)
values
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001'),
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010'),
  ('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002'),
  ('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000010'),
  ('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003'),
  ('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000010')
on conflict do nothing;

insert into public.messages (thread_id, sender_id, body)
values
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'I can shift the meeting point to Kreis 5 and start with cafe scenarios.'),
  ('50000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000010', 'That would be perfect. I am still getting comfortable with fast exchanges.'),
  ('50000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', 'Bring two structured looks and one softer option for variety.'),
  ('50000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003', 'I opened an extra Sunday slot before exam week.')
on conflict do nothing;

insert into public.favorites (user_id, service_id)
values
  ('00000000-0000-0000-0000-000000000010', '10000000-0000-0000-0000-000000000001'),
  ('00000000-0000-0000-0000-000000000010', '10000000-0000-0000-0000-000000000003'),
  ('00000000-0000-0000-0000-000000000010', '10000000-0000-0000-0000-000000000005')
on conflict do nothing;

insert into public.platform_fee_rules (booking_mode, fee_bps, is_default)
values
  ('hybrid', 1200, true),
  ('instant', 1200, false),
  ('request', 1200, false)
on conflict do nothing;

insert into public.stripe_connected_accounts (provider_id, stripe_account_id, charges_enabled, payouts_enabled, onboarding_completed_at)
values
  ('00000000-0000-0000-0000-000000000001', 'acct_lea_demo', true, true, timezone('utc', now())),
  ('00000000-0000-0000-0000-000000000002', 'acct_marc_demo', true, true, timezone('utc', now())),
  ('00000000-0000-0000-0000-000000000003', 'acct_sofia_demo', true, true, timezone('utc', now())),
  ('00000000-0000-0000-0000-000000000004', 'acct_nico_demo', true, true, timezone('utc', now())),
  ('00000000-0000-0000-0000-000000000005', 'acct_amelie_demo', true, true, timezone('utc', now())),
  ('00000000-0000-0000-0000-000000000006', 'acct_luca_demo', true, true, timezone('utc', now()))
on conflict (provider_id) do nothing;

insert into public.provider_metrics_daily (provider_id, metric_date, profile_views, saves, bookings, revenue_chf)
values
  ('00000000-0000-0000-0000-000000000001', current_date - 2, 210, 32, 18, 4100),
  ('00000000-0000-0000-0000-000000000001', current_date - 1, 248, 36, 21, 4700),
  ('00000000-0000-0000-0000-000000000001', current_date, 286, 41, 26, 6240)
on conflict do nothing;

insert into public.consumer_metrics_daily (consumer_id, metric_date, searches, favorites, bookings, reviews)
values
  ('00000000-0000-0000-0000-000000000010', current_date - 2, 14, 3, 1, 0),
  ('00000000-0000-0000-0000-000000000010', current_date - 1, 9, 4, 2, 0),
  ('00000000-0000-0000-0000-000000000010', current_date, 11, 5, 3, 1)
on conflict do nothing;
