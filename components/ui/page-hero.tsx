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
      <div className="max-w-4xl">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.26em] text-copper">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 font-display text-4xl leading-[0.94] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
