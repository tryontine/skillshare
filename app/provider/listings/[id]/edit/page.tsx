import { notFound } from "next/navigation";
import { ListingEditor } from "@/components/dashboard/listing-editor";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getServiceById } from "@/features/services/service-service";
import { providerNavigation } from "@/lib/constants/site";

export default async function ProviderListingEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/listings"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Edit listing</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Updating {service.title} keeps marketing, booking, and pricing details aligned.
        </p>
      </Card>
      <ListingEditor />
    </DashboardShell>
  );
}
