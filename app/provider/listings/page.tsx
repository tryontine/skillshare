import Link from "next/link";
import { ServiceCard } from "@/components/marketplace/service-card";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getFeaturedServices } from "@/features/services/service-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderListingsPage() {
  const services = getFeaturedServices();

  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/listings"
    >
      <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div>
          <h1 className="font-display text-5xl">Listings</h1>
          <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
            Edit premium cards, pricing, highlights, and booking modes from one surface.
          </p>
        </div>
        <Link
          href="/provider/listings/new"
          className="rounded-full bg-[--color-alpine] px-5 py-3 text-sm font-semibold text-white"
        >
          New listing
        </Link>
      </Card>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </DashboardShell>
  );
}
