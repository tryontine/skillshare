import { Card } from "@/components/ui/card";
import type { DashboardMetricCard } from "@/types/app";

export function MetricCard({ metric }: { metric: DashboardMetricCard }) {
  return (
    <Card className="p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-copper">
        {metric.label}
      </p>
      <p className="mt-4 font-display text-4xl text-ink">{metric.value}</p>
      <p className="mt-2 text-sm text-alpine">{metric.change}</p>
      <p className="mt-1 text-sm text-ink-soft">{metric.helper}</p>
    </Card>
  );
}
