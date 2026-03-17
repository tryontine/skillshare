import { ListingEditor } from "@/components/dashboard/listing-editor";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderListingNewPage() {
  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/listings"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Create listing</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          New services launch with in-person scope, Swiss location metadata, and hybrid booking options.
        </p>
      </Card>
      <ListingEditor />
    </DashboardShell>
  );
}
