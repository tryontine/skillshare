import { notFound } from "next/navigation";
import { ServiceCard } from "@/components/marketplace/service-card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHero } from "@/components/ui/page-hero";
import { getCategoryBySlug, getServicesByCategory } from "@/features/services/service-service";

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const services = getServicesByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow={category.name}
        title={`Swiss ${category.name.toLowerCase()} services with premium positioning and clear booking flow.`}
        description={category.description}
      />
      <section className="page-frame pb-16">
        {services.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="This category is seeded and ready for more providers"
            description="The taxonomy is live, but this category does not have public launch inventory yet."
          />
        )}
      </section>
    </>
  );
}
