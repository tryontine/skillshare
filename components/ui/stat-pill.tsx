export function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/20 bg-white/10 px-4 py-4 text-white backdrop-blur">
      <p className="font-display text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/70">{label}</p>
    </div>
  );
}
