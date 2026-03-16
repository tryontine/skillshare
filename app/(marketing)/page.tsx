import { CTASection } from "@/components/marketing/cta-section";
import { CityDiscoveryMap } from "@/components/marketing/city-discovery-map";
import { FeaturedServiceRail } from "@/components/marketing/featured-service-rail";
import { HeroBentoGrid } from "@/components/marketing/hero-bento-grid";
import { ProviderSpotlight } from "@/components/marketing/provider-spotlight";
import { TestimonialMarquee } from "@/components/marketing/testimonial-marquee";
import { TrustStrip } from "@/components/marketing/trust-strip";

export default function HomePage() {
  return (
    <>
      <HeroBentoGrid />
      <TrustStrip />
      <FeaturedServiceRail />
      <ProviderSpotlight />
      <TestimonialMarquee />
      <CityDiscoveryMap />
      <CTASection />
    </>
  );
}
