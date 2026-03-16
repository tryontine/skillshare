export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-frame py-10 sm:py-14">
      <div className="max-w-3xl">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.26em] text-[--color-copper]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-5xl leading-none sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-[--color-ink-soft]">
          {description}
        </p>
      </div>
    </section>
  );
}
