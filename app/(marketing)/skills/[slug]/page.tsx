import { notFound } from "next/navigation";
import { AvailabilityCalendar } from "@/components/marketplace/availability-calendar";
import { ProviderMiniCard } from "@/components/marketplace/provider-mini-card";
import { ReviewList } from "@/components/marketplace/review-list";
import { ServiceBookingPanel } from "@/components/marketplace/service-booking-panel";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import {
  getProviderByHandle,
  getRelatedReviews,
  getServiceBySlug,
} from "@/features/services/service-service";

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const provider = getProviderByHandle(service.provider.handle);
  const reviews = getRelatedReviews(service.title);

  return (
    <>
      <PageHero
        eyebrow={`${service.city}, ${service.location.canton}`}
        title={service.title}
        description={service.summary}
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_380px]">
          <div className="space-y-6">
            <Card className={`overflow-hidden bg-gradient-to-br ${service.heroGradient} p-8 text-white`}>
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                {service.mode} booking
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-white/82">
                {service.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-full border border-white/18 bg-white/10 px-3 py-2 text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </Card>
            <div className="grid gap-4 md:grid-cols-3">
              {service.gallery.map((item) => (
                <Card key={item} className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[--color-copper]">
                    Gallery note
                  </p>
                  <h3 className="mt-3 font-display text-3xl">{item}</h3>
                </Card>
              ))}
            </div>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">
                Deliverables
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {service.deliverables.map((item) => (
                  <div key={item} className="rounded-[20px] bg-[--color-surface] px-4 py-4 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">
                FAQs
              </p>
              <div className="mt-4 grid gap-4">
                {service.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-[20px] bg-[--color-surface] px-4 py-4">
                    <h3 className="font-semibold text-[--color-ink]">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-[--color-ink-soft]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
            <ReviewList reviews={reviews} />
          </div>
          <div className="space-y-6">
            <ServiceBookingPanel service={service} />
            {provider ? <ProviderMiniCard provider={provider} /> : null}
            <AvailabilityCalendar availability={service.availability} />
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[--color-copper]">
                Location
              </p>
              <h3 className="mt-3 font-display text-3xl">{service.location.venueLabel}</h3>
              <p className="mt-3 text-sm leading-7 text-[--color-ink-soft]">
                {service.location.district}, {service.location.city}, {service.location.canton}. Service radius {service.location.radiusKm} km.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
