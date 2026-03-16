import { ProviderMiniCard } from "@/components/marketplace/provider-mini-card";
import { PageHero } from "@/components/ui/page-hero";
import { getProviders } from "@/features/profiles/profile-service";

export default function ProvidersPage() {
  const providers = getProviders();

  return (
    <>
      <PageHero
        eyebrow="Providers"
        title="Credible Swiss experts with editorial profiles and real booking readiness."
        description="Each provider profile is designed to balance conversion, local trust, and operational clarity before the first booking request lands."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {providers.map((provider) => (
            <ProviderMiniCard key={provider.id} provider={provider} />
          ))}
        </div>
      </section>
    </>
  );
}
