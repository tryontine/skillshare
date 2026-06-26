import { Search } from "lucide-react";

export function CommandSearch() {
  return (
    <button
      type="button"
      className="hidden flex-1 items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-3 text-left text-sm text-ink-soft transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine lg:flex"
    >
      <Search className="size-4" />
      Search skills, cities, providers, or categories
      <span className="ml-auto rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.2em]">
        /
      </span>
    </button>
  );
}
