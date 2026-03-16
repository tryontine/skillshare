import { Search } from "lucide-react";
import { swissCities } from "@/lib/constants/site";

export function SearchBar() {
  return (
    <form className="grid gap-3 rounded-[28px] border border-[--color-line] bg-white/82 p-4 lg:grid-cols-[2fr_1fr_1fr_auto]">
      <label className="flex items-center gap-3 rounded-[18px] bg-[--color-surface] px-4 py-3">
        <Search className="size-4 text-[--color-ink-soft]" />
        <input
          className="w-full border-none bg-transparent p-0 outline-none"
          placeholder="Find tutors, coaches, and creative pros"
        />
      </label>
      <select defaultValue="all">
        <option value="all">All categories</option>
        <option value="language-coaching">Language coaching</option>
        <option value="tutoring">Tutoring</option>
        <option value="fitness">Fitness</option>
      </select>
      <select defaultValue="Zurich">
        {swissCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>
      <button
        className="rounded-full bg-[--color-alpine] px-6 py-3 text-sm font-semibold text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
