import { FavoritesPanel } from "@/components/dashboard/favorites-panel";
import { PageHero } from "@/components/ui/page-hero";
import { getFavorites } from "@/features/favorites/favorites-service";

export default function FavoritesPage() {
  return (
    <>
      <PageHero
        eyebrow="Favorites"
        title="A single shortlist for the providers and services you want to revisit."
        description="Saved cards help consumers keep momentum without losing high-intent options between discovery and booking."
      />
      <section className="page-frame pb-16">
        <FavoritesPanel services={getFavorites()} />
      </section>
    </>
  );
}
