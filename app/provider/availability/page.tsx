import { AvailabilityManager } from "@/components/dashboard/availability-manager";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getFeaturedServices } from "@/features/services/service-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderAvailabilityPage() {
  const service = getFeaturedServices()[0];

  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/availability"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Availability</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Weekly rules and exceptions protect against double booking while staying simple to manage.
        </p>
      </Card>
      <AvailabilityManager availability={service.availability} />
    </DashboardShell>
  );
}
