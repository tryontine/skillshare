import { trustStats } from "@/lib/mock-data";

export function TrustStrip() {
  return (
    <section className="page-frame py-8">
      <div className="grid gap-4 rounded-[32px] border border-line bg-white/76 p-6 sm:grid-cols-2 xl:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
