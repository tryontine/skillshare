import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { getCategories, getServicesByCategory } from "@/features/services/service-service";

export default function CategoriesPage() {
  const categories = getCategories();

  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="Editorial category pages that make Swiss discovery feel curated, not crowded."
        description="The v1 taxonomy is intentionally tight: tutoring, languages, music, fitness, photography, creative arts, and career mentoring."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const count = getServicesByCategory(category.slug).length;

            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="rounded-[30px] border border-line bg-white/85 p-6 shadow-[0_20px_60px_rgba(36,31,28,0.08)] transition hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-copper">
                  {count} live services
                </p>
                <h2 className="mt-3 font-display text-4xl">{category.name}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  {category.description}
                </p>
                <div className="mt-8 flex items-center justify-between text-sm font-medium text-ink">
                  Explore category
                  <ArrowUpRight className="size-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
