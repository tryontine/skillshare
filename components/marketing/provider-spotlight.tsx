import { ProviderMiniCard } from "@/components/marketplace/provider-mini-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProviders } from "@/features/profiles/profile-service";

export function ProviderSpotlight() {
  const providers = getProviders().slice(0, 3);

  return (
    <section className="page-frame py-14">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading
          eyebrow="Provider spotlight"
          title="Profiles that feel considered, credible, and worth booking."
          description="Providers get editorial cards, verified trust markers, and dashboards that help them manage momentum."
        />
        <div className="grid gap-4">
          {providers.map((provider) => (
            <ProviderMiniCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </section>
  );
}
