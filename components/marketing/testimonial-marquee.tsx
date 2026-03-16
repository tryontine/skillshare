import { Card } from "@/components/ui/card";
import { testimonials } from "@/lib/mock-data";

export function TestimonialMarquee() {
  return (
    <section className="page-frame py-14">
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.author} className="p-6">
            <p className="font-display text-3xl leading-tight">“{item.quote}”</p>
            <p className="mt-4 text-sm text-[--color-ink-soft]">{item.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
