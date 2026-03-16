import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getPayoutHealth } from "@/features/payouts/payouts-service";
import { providerNavigation } from "@/lib/constants/site";

const onboardingSteps = [
  "Create your provider profile and choose your launch cities.",
  "Connect Stripe Express and finish payout verification.",
  "Publish at least one in-person listing with availability and FAQs.",
  "Reply to inbox messages within a few hours to preserve trust signals.",
];

export default function ProviderOnboardingPage() {
  const payoutHealth = getPayoutHealth();

  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/onboarding"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Onboarding</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Providers can publish early, but accepting bookings requires approved profile state and ready payouts.
        </p>
      </Card>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">Checklist</p>
          <ol className="mt-4 grid gap-3 text-sm text-[--color-ink-soft]">
            {onboardingSteps.map((step, index) => (
              <li key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(payoutHealth).map(([label, value]) => (
            <Card key={label} className="p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">{label}</p>
              <p className="mt-4 font-display text-3xl">{value}</p>
            </Card>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
