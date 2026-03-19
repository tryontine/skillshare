import { notFound } from "next/navigation";
import { ServiceBookingPanel } from "@/components/marketplace/service-booking-panel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form-field";
import { PageHero } from "@/components/ui/page-hero";
import { getServiceById } from "@/features/services/service-service";

export default async function BookServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Booking request"
        title={`Book ${service.title}`}
        description="Hybrid booking supports both direct checkout and provider-reviewed requests depending on the service rules."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
          <Card className="p-6">
            <form className="grid gap-4">
              <FormField label="Preferred date">
                <input type="date" />
              </FormField>
              <FormField label="Preferred time">
                <input type="time" />
              </FormField>
              <FormField label="Notes" hint="Give the provider context before the thread opens.">
                <textarea rows={6} placeholder="Goals, location preference, language, or access notes." />
              </FormField>
              <Button type="submit">
                Continue to checkout
              </Button>
            </form>
          </Card>
          <ServiceBookingPanel service={service} />
        </div>
      </section>
    </>
  );
}
