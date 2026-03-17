import { Card } from "@/components/ui/card";
import type { ServiceCardDTO } from "@/types/dto";

export function MapResultsPane({ services }: { services: ServiceCardDTO[] }) {
  const byCity = services.reduce<Record<string, number>>((accumulator, service) => {
    accumulator[service.city] = (accumulator[service.city] ?? 0) + 1;
    return accumulator;
  }, {});

  return (
    <Card className="overflow-hidden">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-copper">
            Swiss geo search
          </p>
          <h3 className="mt-3 font-display text-4xl leading-none">
            Results stay grounded in real travel radius and city context.
          </h3>
          <p className="mt-4 text-sm leading-7 text-ink-soft">
            Supabase search is designed to enrich each card with provider trust,
            rating, and distance so the browse experience feels local instead of generic.
          </p>
        </div>
        <div className="grid gap-3 bg-surface p-6 sm:grid-cols-2 sm:p-8">
          {Object.entries(byCity).map(([city, count], index) => (
            <div
              key={city}
              className="rounded-[24px] border border-white/70 bg-white/75 p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-copper">
                0{index + 1}
              </p>
              <p className="mt-6 font-display text-4xl">{city}</p>
              <p className="mt-2 text-sm text-ink-soft">{count} active services</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
