import { ReviewHistoryList } from "@/components/dashboard/review-history-list";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getReviews } from "@/features/reviews/reviews-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderReviewsPage() {
  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/reviews"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Reviews</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Verified post-booking reviews give providers a clean signal for reputation and conversion.
        </p>
      </Card>
      <ReviewHistoryList reviews={getReviews()} />
    </DashboardShell>
  );
}
