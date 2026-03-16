import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[--color-line] bg-white/88 shadow-[0_20px_60px_rgba(36,31,28,0.08)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
