import { ReviewList } from "@/components/marketplace/review-list";
import type { ReviewDTO } from "@/types/dto";

export function ReviewHistoryList({ reviews }: { reviews: ReviewDTO[] }) {
  return <ReviewList reviews={reviews} />;
}
