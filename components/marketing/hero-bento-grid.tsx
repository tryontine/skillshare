import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedServices } from "@/features/services/service-service";
import { getTrustStats } from "@/features/analytics/analytics-service";
import { StatPill } from "@/components/ui/stat-pill";
import { SearchBar } from "@/components/marketplace/search-bar";

export function HeroBentoGrid() {
  const featured = getFeaturedServices();
  const stats = getTrustStats();

  return (
    <section className="page-frame py-10 sm:py-16">
      <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-[1.2fr_0.8fr]">
        <div className="mesh-panel relative overflow-hidden rounded-[36px] p-6 text-white sm:p-8 lg:col-span-7 lg:row-span-2 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            Switzerland-only marketplace
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-5xl leading-[0.92] sm:mt-6 sm:text-6xl lg:text-7xl">
            Book local skill experts with the polish of a premium studio.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
            Discover verified in-person coaching, tutoring, photography, and
            creative services across Zurich, Geneva, Basel, Bern, and Lausanne.
          </p>
          <div className="mt-8 max-w-3xl">
            <SearchBar compact />
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <StatPill key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
        <div className="rounded-[36px] border border-line bg-white/84 p-6 lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            Featured this week
          </p>
          <div className="mt-4 space-y-4">
            {featured.slice(0, 2).map((service) => (
              <div key={service.id} className="rounded-[24px] bg-surface p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                  {service.city}
                </p>
                <h3 className="mt-2 font-display text-3xl">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{service.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/become-a-provider"
          className="group rounded-[36px] border border-line bg-surface p-6 lg:col-span-3"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-copper">
            Provider growth
          </p>
          <h3 className="mt-3 font-display text-4xl">Turn local expertise into recurring clients.</h3>
          <ArrowUpRight className="mt-8 size-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <div className="rounded-[36px] border border-line bg-white/84 p-6 lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-copper">
            Cities live
          </p>
          <div className="mt-4 space-y-2 text-sm text-ink-soft">
            <p>Zurich</p>
            <p>Geneva</p>
            <p>Basel</p>
            <p>Bern</p>
            <p>Lausanne</p>
          </div>
        </div>
      </div>
    </section>
  );
}
