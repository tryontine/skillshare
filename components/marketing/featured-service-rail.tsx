import { ServiceCard } from "@/components/marketplace/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedServices } from "@/features/services/service-service";

export function FeaturedServiceRail() {
  const services = getFeaturedServices();

  return (
    <section className="page-frame py-14">
      <SectionHeading
        eyebrow="Curated discovery"
        title="High-trust local services with strong repeat booking signals."
        description="Every featured listing pairs premium presentation with measurable provider performance."
      />
      <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
