import { Card } from "@/components/ui/card";
import type { AvailabilityRule } from "@/types/app";

export function AvailabilityCalendar({
  availability,
}: {
  availability: AvailabilityRule[];
}) {
  return (
    <Card className="p-5">
      <h3 className="font-display text-3xl">Availability</h3>
      <div className="mt-4 grid gap-3">
        {availability.map((rule) => (
          <div
            key={`${rule.day}-${rule.start}`}
            className="flex items-center justify-between rounded-[18px] bg-surface px-4 py-3 text-sm"
          >
            <span>{rule.day}</span>
            <span className="text-ink-soft">
              {rule.start} - {rule.end}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}
