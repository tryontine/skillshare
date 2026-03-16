import { categories, providers, reviews, services } from "@/lib/mock-data";
import type { ServiceCategorySlug, SearchFilters } from "@/types/app";

export function getCategories() {
  return categories;
}

export function getFeaturedServices() {
  return services.slice(0, 4);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}

export function getServicesByCategory(category: ServiceCategorySlug) {
  return services.filter((service) => service.category === category);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProviderByHandle(handle: string) {
  return providers.find((provider) => provider.handle === handle);
}

export function getServicesByProvider(handle: string) {
  return services.filter((service) => service.provider.handle === handle);
}

export function getRelatedReviews(serviceTitle: string) {
  return reviews.filter((review) => review.serviceTitle === serviceTitle);
}

export function searchServices(filters: SearchFilters = {}) {
  return services
    .filter((service) => {
      const matchesQuery = filters.query
        ? `${service.title} ${service.summary} ${service.provider.fullName}`
            .toLowerCase()
            .includes(filters.query.toLowerCase())
        : true;
      const matchesCategory =
        !filters.category || filters.category === "all"
          ? true
          : service.category === filters.category;
      const matchesCity = filters.city
        ? service.city.toLowerCase() === filters.city.toLowerCase()
        : true;
      const matchesRating = filters.minRating
        ? service.rating >= filters.minRating
        : true;
      const matchesPrice = filters.maxPrice
        ? service.priceChf <= filters.maxPrice
        : true;
      const matchesMode =
        !filters.mode || filters.mode === "all"
          ? true
          : service.mode === filters.mode || service.mode === "hybrid";

      return (
        matchesQuery &&
        matchesCategory &&
        matchesCity &&
        matchesRating &&
        matchesPrice &&
        matchesMode
      );
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case "price_low":
          return a.priceChf - b.priceChf;
        case "price_high":
          return b.priceChf - a.priceChf;
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.reviewCount - a.reviewCount;
        default:
          return b.rating * b.reviewCount - a.rating * a.reviewCount;
      }
    });
}
