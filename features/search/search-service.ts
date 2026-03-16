import { searchServices, getCategories } from "@/features/services/service-service";
import { swissCities } from "@/lib/constants/site";
import type { SearchFilters } from "@/types/app";

export function getBrowseExperience(filters: SearchFilters = {}) {
  const services = searchServices(filters);

  return {
    filters,
    services,
    categories: getCategories(),
    cities: swissCities,
    total: services.length,
  };
}

export function getPopularSearches() {
  return [
    "Swiss German in Zurich",
    "Founder portraits in Geneva",
    "Matura prep in Basel",
    "Executive fitness in Bern",
  ];
}
