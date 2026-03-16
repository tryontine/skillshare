export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[--color-copper]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-[--color-ink] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-[--color-ink-soft] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
