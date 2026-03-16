import { Card } from "@/components/ui/card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { getPayoutHealth } from "@/features/payouts/payouts-service";
import { settingsNavigation } from "@/lib/constants/site";

export default function SettingsPayoutsPage() {
  const payoutHealth = getPayoutHealth();

  return (
    <DashboardShell title="Settings" items={settingsNavigation} activeHref="/settings/payouts">
      <Card className="p-6">
        <h1 className="font-display text-5xl">Payouts</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(payoutHealth).map(([label, value]) => (
            <div key={label} className="rounded-[20px] bg-[--color-surface] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">{label}</p>
              <p className="mt-3 font-display text-3xl">{value}</p>
            </div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  );
}
