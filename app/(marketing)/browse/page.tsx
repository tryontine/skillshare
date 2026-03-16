import { FilterDrawer } from "@/components/marketplace/filter-drawer";
import { MapResultsPane } from "@/components/marketplace/map-results-pane";
import { SearchBar } from "@/components/marketplace/search-bar";
import { ServiceCard } from "@/components/marketplace/service-card";
import { SortSelect } from "@/components/marketplace/sort-select";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";
import { getBrowseExperience, getPopularSearches } from "@/features/search/search-service";
import type { SearchFilters } from "@/types/app";

function getSingleParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getNumberParam(value: string | string[] | undefined) {
  const resolved = getSingleParam(value);
  if (!resolved) {
    return undefined;
  }

  const parsed = Number(resolved);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const filters: SearchFilters = {
    query: getSingleParam(params.q),
    category: (getSingleParam(params.category) as SearchFilters["category"]) ?? "all",
    city: getSingleParam(params.city),
    maxPrice: getNumberParam(params.maxPrice),
    minRating: getNumberParam(params.minRating),
    radiusKm: getNumberParam(params.radiusKm),
    mode: (getSingleParam(params.mode) as SearchFilters["mode"]) ?? "all",
    sort:
      (getSingleParam(params.sort) as SearchFilters["sort"]) ?? "recommended",
  };

  const browse = getBrowseExperience(filters);
  const popularSearches = getPopularSearches();

  return (
    <>
      <PageHero
        eyebrow="Browse services"
        title="Swiss local discovery that stays premium, calm, and conversion-ready."
        description="Search by city, category, booking mode, and trust signals. Every listing is designed for in-person service delivery across Switzerland only."
      />
      <section className="page-frame pb-8">
        <SearchBar />
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-[--color-ink-soft]">
          {popularSearches.map((term) => (
            <span
              key={term}
              className="rounded-full border border-[--color-line] bg-white/70 px-3 py-2"
            >
              {term}
            </span>
          ))}
        </div>
      </section>
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
          <div className="space-y-4">
            <FilterDrawer />
            <MapResultsPane services={browse.services} />
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-[28px] border border-[--color-line] bg-white/78 px-5 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">
                  Live search snapshot
                </p>
                <p className="mt-2 text-sm text-[--color-ink-soft]">
                  {browse.total} results across {browse.cities.length} launch cities and {browse.categories.length} core categories.
                </p>
              </div>
              <SortSelect />
            </div>
            {browse.services.length ? (
              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {browse.services.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No services match those filters yet"
                description="Try widening the city, price, or booking mode filters to surface more Swiss providers."
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
