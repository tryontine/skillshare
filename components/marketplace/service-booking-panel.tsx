import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CurrencyText } from "@/components/ui/currency-text";
import type { ServiceDetailDTO } from "@/types/dto";

export function ServiceBookingPanel({ service }: { service: ServiceDetailDTO }) {
  return (
    <Card className="sticky top-24 p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-copper">
        Book this service
      </p>
      <div className="mt-3 flex items-end justify-between">
        <div>
          <p className="font-display text-4xl">
            <CurrencyText value={service.priceChf} />
          </p>
          <p className="text-sm text-ink-soft">per {service.durationLabel}</p>
        </div>
        <p className="rounded-full bg-surface px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-soft">
          {service.mode}
        </p>
      </div>
      <div className="mt-6 grid gap-3 text-sm text-ink-soft">
        {service.deliverables.map((item) => (
          <div key={item} className="rounded-[18px] bg-surface px-4 py-3">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-3">
        <Link
          href={`/book/${service.id}`}
          className="rounded-full bg-alpine px-5 py-3 text-center text-sm font-semibold text-white"
        >
          Request booking
        </Link>
        <Link
          href={`/messages/thread-1`}
          className="rounded-full border border-line px-5 py-3 text-center text-sm font-semibold text-ink"
        >
          Message provider
        </Link>
      </div>
    </Card>
  );
}
