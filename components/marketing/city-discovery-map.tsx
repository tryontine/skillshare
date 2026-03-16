import { Card } from "@/components/ui/card";
import { swissCities } from "@/lib/constants/site";

export function CityDiscoveryMap() {
  return (
    <section className="page-frame py-14">
      <Card className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-[--color-copper]">
              Discovery map
            </p>
            <h2 className="mt-3 font-display text-5xl">
              Built for dense urban discovery across Switzerland.
            </h2>
            <p className="mt-4 max-w-xl text-[--color-ink-soft]">
              Radius search, city-first browsing, and in-person logistics give the marketplace a clear local feel.
            </p>
          </div>
          <div className="grid gap-3 bg-[--color-surface] p-8 sm:grid-cols-2">
            {swissCities.map((city, index) => (
              <div
                key={city}
                className="rounded-[26px] border border-white/50 bg-white/60 p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-[--color-copper]">
                  0{index + 1}
                </p>
                <p className="mt-8 font-display text-4xl">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
