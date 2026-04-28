import { Search } from "lucide-react";
import { swissCities } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SearchBar({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <form
      className={cn(
        "grid gap-3 rounded-[28px] border border-line bg-white/82 p-4",
        compact
          ? "md:grid-cols-2"
          : "lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_auto] lg:items-center",
      )}
    >
      <label
        className={cn(
          "flex min-w-0 items-center gap-3 rounded-[18px] bg-surface px-4 py-3 focus-within:ring-2 focus-within:ring-alpine transition duration-300",
          compact && "md:col-span-2",
        )}
      >
        <Search className="size-4 shrink-0 text-ink-soft" />
        <input
          className="min-w-0 w-full border-none bg-transparent p-0 outline-none"
          placeholder="Find tutors, coaches, and creative pros"
          aria-label="Search for services"
          type="search"
        />
      </label>
      <select defaultValue="all" aria-label="Filter by category">
        <option value="all">All categories</option>
        <option value="language-coaching">Language coaching</option>
        <option value="tutoring">Tutoring</option>
        <option value="fitness">Fitness</option>
      </select>
      <select defaultValue="Zurich" aria-label="Filter by city">
        {swissCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
      <Button
        className={cn(compact ? "md:col-span-2" : "w-full lg:min-w-[9rem]")}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
