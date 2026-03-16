import { ServiceCard } from "@/components/marketplace/service-card";
import type { ServiceCardDTO } from "@/types/dto";

export function FavoritesPanel({ services }: { services: ServiceCardDTO[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
