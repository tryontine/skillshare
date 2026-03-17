import { FavoritesPanel } from "@/components/dashboard/favorites-panel";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getFavorites } from "@/features/favorites/favorites-service";
import { consumerNavigation } from "@/lib/constants/site";

export default function ConsumerFavoritesPage() {
  return (
    <DashboardShell
      title="Consumer area"
      items={consumerNavigation}
      activeHref="/consumer/favorites"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Favorites</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          Save high-intent providers and revisit them later from a calm shortlist.
        </p>
      </Card>
      <FavoritesPanel services={getFavorites()} />
    </DashboardShell>
  );
}
