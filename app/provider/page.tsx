import { ActivityChart } from "@/components/charts/activity-chart";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { InboxPreview } from "@/components/dashboard/inbox-preview";
import { MetricCard } from "@/components/dashboard/metric-card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import {
  getActivitySeries,
  getProviderSnapshot,
  getRevenueSeries,
} from "@/features/analytics/analytics-service";
import { getThreads } from "@/features/messaging/messaging-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderDashboardPage() {
  const snapshot = getProviderSnapshot();

  return (
    <DashboardShell title="Provider area" items={providerNavigation} activeHref="/provider">
      <Card className="p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-copper">
          {snapshot.heading}
        </p>
        <h1 className="mt-3 font-display text-5xl">Business control panel</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">{snapshot.subheading}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {snapshot.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueChart data={getRevenueSeries()} />
        <ActivityChart data={getActivitySeries()} />
      </div>
      <InboxPreview threads={getThreads()} />
    </DashboardShell>
  );
}
