import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[--color-line] bg-white/70 px-3 py-1 text-xs font-medium text-[--color-ink-soft]",
        className,
      )}
    >
      {children}
    </span>
  );
}
