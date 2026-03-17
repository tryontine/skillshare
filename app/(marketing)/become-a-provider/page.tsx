import { ListingEditor } from "@/components/dashboard/listing-editor";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/ui/page-hero";

const launchBenefits = [
  "Stripe Connect Express onboarding for Swiss payouts",
  "Hybrid booking flows with instant and request support",
  "Provider analytics, reviews, favorites, and inbox in one workspace",
  "Swiss editorial landing surfaces with category and city discovery",
];

export default function BecomeProviderPage() {
  return (
    <>
      <PageHero
        eyebrow="Provider acquisition"
        title="Launch a Swiss provider business with premium presentation and built-in operations."
        description="Providers can publish before verification completes, but real bookings unlock only after approved profile state and payout readiness."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-copper">
                Why providers convert
              </p>
              <div className="mt-4 grid gap-3">
                {launchBenefits.map((benefit) => (
                  <div key={benefit} className="rounded-[20px] bg-surface px-4 py-4 text-sm">
                    {benefit}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-copper">
                Launch checklist
              </p>
              <ol className="mt-4 grid gap-3 text-sm text-ink-soft">
                <li>1. Create an English-first profile with city, canton, and travel radius.</li>
                <li>2. Connect Stripe Express and complete compliance checks.</li>
                <li>3. Publish one premium listing with pricing, FAQ, and availability.</li>
                <li>4. Start managing leads from the internal inbox and analytics dashboard.</li>
              </ol>
            </Card>
          </div>
          <ListingEditor />
        </div>
      </section>
    </>
  );
}
