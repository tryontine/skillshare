import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CurrencyText } from "@/components/ui/currency-text";
import { RatingStars } from "@/components/ui/rating-stars";
import { Button } from "@/components/ui/button";
import type { ServiceCardDTO } from "@/types/dto";

export function ServiceCard({ service }: { service: ServiceCardDTO }) {
  return (
    <Card className="overflow-hidden">
      <div
        className={`h-40 bg-gradient-to-br ${service.heroGradient} p-5 text-white`}
      >
        <div className="flex items-start justify-between">
          <Badge className="border-white/20 bg-white/10 text-white">
            {service.city}
          </Badge>
          <Button
            aria-label={`Save ${service.title}`}
            variant="ghost"
            className="h-auto w-auto rounded-full border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20 hover:text-white focus-visible:ring-white"
            type="button"
          >
            <Heart className="size-4" />
          </Button>
        </div>
        <div className="mt-10 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/70">
              {service.provider.fullName}
            </p>
            <h3 className="mt-2 font-display text-3xl leading-none">
              {service.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <p className="text-sm leading-6 text-ink-soft">{service.summary}</p>
        <div className="flex flex-wrap gap-2">
          {service.highlights.map((highlight) => (
            <Badge key={highlight}>{highlight}</Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-copper">
              from
            </p>
            <p className="text-lg font-semibold text-ink">
              <CurrencyText value={service.priceChf} />
              <span className="text-sm font-normal text-ink-soft">
                {" "}
                / {service.durationLabel}
              </span>
            </p>
          </div>
          <RatingStars rating={service.rating} />
        </div>
        <Link
          href={`/skills/${service.slug}`}
          className="flex items-center justify-between rounded-[20px] border border-line bg-surface px-4 py-3 text-sm font-medium text-ink"
        >
          View service
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </Card>
  );
}
