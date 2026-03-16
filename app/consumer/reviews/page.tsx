import { ReviewHistoryList } from "@/components/dashboard/review-history-list";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getReviews } from "@/features/reviews/reviews-service";
import { consumerNavigation } from "@/lib/constants/site";

export default function ConsumerReviewsPage() {
  return (
    <DashboardShell
      title="Consumer area"
      items={consumerNavigation}
      activeHref="/consumer/reviews"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Reviews</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Review creation is gated to completed bookings so trust stays clean and defensible.
        </p>
      </Card>
      <ReviewHistoryList reviews={getReviews()} />
    </DashboardShell>
  );
}
