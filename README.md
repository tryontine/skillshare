# SkillShare Switzerland

SkillShare Switzerland is a Switzerland-only, English-first marketplace for premium in-person services. The stack is built around Next.js App Router, TypeScript, Tailwind CSS, Supabase, and Stripe Connect Express.

## Product scope

- Switzerland only at launch, CHF pricing, and in-person services only.
- Two primary user roles with shared profiles: consumers and providers.
- Hybrid booking with instant and request flows.
- Internal inbox, favorites, reviews, analytics dashboards, and provider payouts.
- Supabase-backed relational schema with RLS and Stripe event mirroring.

## Repo structure

```text
app/
  (marketing)/ (auth)/ consumer/ provider/ settings/ api/stripe/webhooks
components/
  ui/ marketing/ marketplace/ dashboard/ charts/ shell/
features/
  auth/ profiles/ services/ search/ bookings/ messaging/ reviews/ favorites/ payouts/ analytics/
lib/
  supabase/ stripe/ validations/ permissions/ formatting/ constants/
types/
  app.ts database.ts dto.ts
supabase/
  migrations/ seed.sql functions/stripe-webhook/ functions/stripe-connect/
```

## Local setup

1. Install dependencies with `npm install`.
2. Copy values from `.env.example` into your local environment.
3. Run the app with `npm run dev`.
4. Apply the SQL in `supabase/migrations` and seed data in `supabase/seed.sql` to your Supabase project.

## Marketplace implementation notes

- The App Router sitemap now mirrors the locked v1 plan across marketing, auth, consumer, provider, messaging, favorites, booking, checkout, and settings flows.
- The current UI uses local mock data via feature modules so the product shell is navigable before Supabase wiring is complete.
- `supabase/migrations` is the source of truth for relational schema, RLS policies, views, and the `search_services` RPC contract.
- Edge-function scaffolding for Stripe webhook processing and Connect onboarding lives in `supabase/functions`.

## Verification

Run:

```bash
npm run lint
npm run typecheck
```
