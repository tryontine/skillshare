import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";
import type { ProviderDTO } from "@/types/dto";

export function ProviderMiniCard({ provider }: { provider: ProviderDTO }) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-4">
        <div
          className={`size-14 rounded-full bg-gradient-to-br ${provider.avatarGradient}`}
        />
        <div className="space-y-2">
          <div>
            <Link href={`/providers/${provider.handle}`} className="font-semibold">
              {provider.fullName}
            </Link>
            <p className="text-sm text-[--color-ink-soft]">{provider.headline}</p>
          </div>
          <RatingStars rating={provider.rating} />
          <div className="flex flex-wrap gap-2">
            {provider.trustBadges.slice(0, 2).map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
