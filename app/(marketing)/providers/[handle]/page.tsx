import { notFound } from "next/navigation";
import { ReviewList } from "@/components/marketplace/review-list";
import { ServiceCard } from "@/components/marketplace/service-card";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";
import { getReviews } from "@/features/reviews/reviews-service";
import {
  getProviderByHandle,
  getServicesByProvider,
} from "@/features/services/service-service";

export default async function ProviderDetailPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const provider = getProviderByHandle(handle);

  if (!provider) {
    notFound();
  }

  const services = getServicesByProvider(provider.handle);
  const reviews = getReviews().slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${provider.city}, ${provider.canton}`}
        title={provider.fullName}
        description={provider.headline}
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
          <Card className="p-6">
            <div className={`size-18 rounded-full bg-gradient-to-br ${provider.avatarGradient}`} />
            <p className="mt-5 text-sm leading-7 text-[--color-ink-soft]">{provider.bio}</p>
            <div className="mt-6 grid gap-3">
              <div className="rounded-[20px] bg-[--color-surface] px-4 py-4 text-sm">
                Languages: {provider.languages.join(", ")}
              </div>
              <div className="rounded-[20px] bg-[--color-surface] px-4 py-4 text-sm">
                Repeat client rate: {provider.repeatClientRate}%
              </div>
              <div className="rounded-[20px] bg-[--color-surface] px-4 py-4 text-sm">
                Response time: {provider.responseTime}
              </div>
            </div>
          </Card>
          <div className="space-y-6">
            <div className="grid gap-5 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <ReviewList reviews={reviews} />
          </div>
        </div>
      </section>
    </>
  );
}
