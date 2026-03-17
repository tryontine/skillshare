export function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-copper">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < Math.round(rating) ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-2 text-sm text-ink-soft">{rating.toFixed(1)}</span>
    </div>
  );
}
