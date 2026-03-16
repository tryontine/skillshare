import { SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";

export function FilterDrawer() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="size-4" />
        <h3 className="font-semibold">Filters</h3>
      </div>
      <div className="mt-4 grid gap-3 text-sm">
        <label className="grid gap-2">
          Rating
          <select defaultValue="4.5+">
            <option>4.5+</option>
            <option>4.0+</option>
            <option>Any</option>
          </select>
        </label>
        <label className="grid gap-2">
          Price cap
          <select defaultValue="CHF 200">
            <option>CHF 120</option>
            <option>CHF 200</option>
            <option>CHF 500</option>
          </select>
        </label>
        <label className="grid gap-2">
          Booking mode
          <select defaultValue="All">
            <option>All</option>
            <option>Instant</option>
            <option>Request</option>
          </select>
        </label>
      </div>
    </Card>
  );
}
