import { BookingsTable } from "@/components/dashboard/bookings-table";
import { FavoritesPanel } from "@/components/dashboard/favorites-panel";
import { InboxPreview } from "@/components/dashboard/inbox-preview";
import { MetricCard } from "@/components/dashboard/metric-card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getConsumerSnapshot } from "@/features/analytics/analytics-service";
import { getUpcomingBookings } from "@/features/bookings/bookings-service";
import { getFavorites } from "@/features/favorites/favorites-service";
import { getThreads } from "@/features/messaging/messaging-service";
import { consumerNavigation } from "@/lib/constants/site";

export default function ConsumerDashboardPage() {
  const snapshot = getConsumerSnapshot();

  return (
    <DashboardShell title="Consumer area" items={consumerNavigation} activeHref="/consumer">
      <Card className="p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">
          {snapshot.heading}
        </p>
        <h1 className="mt-3 font-display text-5xl">Your Swiss service hub</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">{snapshot.subheading}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {snapshot.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <BookingsTable bookings={getUpcomingBookings()} />
        <InboxPreview threads={getThreads().slice(0, 2)} />
      </div>
      <FavoritesPanel services={getFavorites()} />
    </DashboardShell>
  );
}
