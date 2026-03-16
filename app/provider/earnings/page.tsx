import { RevenueChart } from "@/components/charts/revenue-chart";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getRevenueSeries } from "@/features/analytics/analytics-service";
import { getPayoutHealth } from "@/features/payouts/payouts-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderEarningsPage() {
  const payoutHealth = getPayoutHealth();

  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/earnings"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Earnings</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Ledger mirrors Stripe charges, refunds, fees, and payout readiness for each booking.
        </p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(payoutHealth).map(([label, value]) => (
          <Card key={label} className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">{label}</p>
            <p className="mt-4 font-display text-3xl">{value}</p>
          </Card>
        ))}
      </div>
      <RevenueChart data={getRevenueSeries()} />
    </DashboardShell>
  );
}
