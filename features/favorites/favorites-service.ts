import { services } from "@/lib/mock-data";

export function getFavorites() {
  return services.slice(0, 3);
}
