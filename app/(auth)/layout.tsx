export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_540px] lg:px-8">
        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-[0.28em] text-copper">
            SkillShare Switzerland
          </p>
          <h1 className="mt-5 max-w-xl font-display text-7xl leading-none text-ink">
            Premium in-person services for Switzerland, built to scale with trust.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-ink-soft">
            English-first UX, Stripe Connect Express payouts, and role-aware dashboards
            for both consumers and providers.
          </p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
