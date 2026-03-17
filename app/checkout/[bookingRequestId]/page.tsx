import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CurrencyText } from "@/components/ui/currency-text";
import { PageHero } from "@/components/ui/page-hero";
import { getBookingById } from "@/features/bookings/bookings-service";

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ bookingRequestId: string }>;
}) {
  const { bookingRequestId } = await params;
  const booking = getBookingById(bookingRequestId);

  if (!booking) {
    notFound();
  }

  const platformFee = Math.round(booking.totalChf * 0.12);

  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title={booking.serviceTitle}
        description="Consumer payment is collected on-platform, then mirrored into Stripe object tables and internal ledger rows."
      />
      <section className="page-frame pb-16">
        <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
          <Card className="p-6">
            <h2 className="font-display text-4xl">Booking summary</h2>
            <div className="mt-6 grid gap-4 text-sm text-ink-soft">
              <div className="rounded-[20px] bg-surface px-4 py-4">Provider: {booking.providerName}</div>
              <div className="rounded-[20px] bg-surface px-4 py-4">Date: {booking.startsAt}</div>
              <div className="rounded-[20px] bg-surface px-4 py-4">Location: {booking.locationLabel}</div>
              <div className="rounded-[20px] bg-surface px-4 py-4">Mode: {booking.mode}</div>
            </div>
          </Card>
          <Card className="p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-copper">Price breakdown</p>
            <div className="mt-4 grid gap-3 text-sm text-ink-soft">
              <div className="flex items-center justify-between rounded-[18px] bg-surface px-4 py-4">
                <span>Service total</span>
                <span><CurrencyText value={booking.totalChf} /></span>
              </div>
              <div className="flex items-center justify-between rounded-[18px] bg-surface px-4 py-4">
                <span>Platform fee</span>
                <span><CurrencyText value={platformFee} /></span>
              </div>
              <div className="flex items-center justify-between rounded-[18px] bg-surface px-4 py-4 font-semibold text-ink">
                <span>Charge amount</span>
                <span><CurrencyText value={booking.totalChf + platformFee} /></span>
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-full bg-alpine px-5 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Pay in CHF
            </button>
          </Card>
        </div>
      </section>
    </>
  );
}
