import { Search } from "lucide-react";

export function CommandSearch() {
  return (
    <button
      type="button"
      className="hidden flex-1 cursor-pointer items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-3 text-sm text-ink-soft transition hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine lg:flex"
    >
      <Search className="size-4" aria-hidden="true" />
      <span>Search skills, cities, providers, or categories</span>
      <span
        className="ml-auto rounded-full border border-line px-2 py-1 text-[10px] uppercase tracking-[0.2em]"
        aria-hidden="true"
      >
        /
      </span>
    </button>
  );
}
