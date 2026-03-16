import { Search } from "lucide-react";

export function CommandSearch() {
  return (
    <div className="hidden flex-1 items-center gap-3 rounded-full border border-[--color-line] bg-white/70 px-4 py-3 text-sm text-[--color-ink-soft] lg:flex">
      <Search className="size-4" />
      Search skills, cities, providers, or categories
      <span className="ml-auto rounded-full border border-[--color-line] px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
        /
      </span>
    </div>
  );
}
