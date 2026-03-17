import { Card } from "@/components/ui/card";
import { RatingStars } from "@/components/ui/rating-stars";
import type { ReviewDTO } from "@/types/dto";

export function ReviewList({ reviews }: { reviews: ReviewDTO[] }) {
  return (
    <div className="grid gap-4">
      {reviews.map((review) => (
        <Card key={review.id} className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-ink">{review.author}</p>
              <p className="text-sm text-ink-soft">{review.createdAt}</p>
            </div>
            <RatingStars rating={review.rating} />
          </div>
          <h3 className="mt-4 font-display text-2xl">{review.title}</h3>
          <p className="mt-2 text-sm leading-6 text-ink-soft">
            {review.body}
          </p>
        </Card>
      ))}
    </div>
  );
}
