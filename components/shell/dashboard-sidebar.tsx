import Link from "next/link";
import { cn } from "@/lib/utils";

export function DashboardSidebar({
  title,
  items,
  activeHref,
}: {
  title: string;
  items: Array<{ href: string; label: string }>;
  activeHref: string;
}) {
  return (
    <aside className="rounded-[28px] border border-[--color-line] bg-white/78 p-4 shadow-[0_18px_50px_rgba(36,31,28,0.08)]">
      <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[--color-copper]">
        {title}
      </p>
      <nav className="grid gap-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-2xl px-3 py-3 text-sm transition",
              activeHref === item.href
                ? "bg-[--color-alpine] text-white"
                : "text-[--color-ink-soft] hover:bg-[--color-surface] hover:text-[--color-ink]",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
