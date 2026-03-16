import { AvailabilityCalendar } from "@/components/marketplace/availability-calendar";
import type { AvailabilityRule } from "@/types/app";

export function AvailabilityManager({
  availability,
}: {
  availability: AvailabilityRule[];
}) {
  return <AvailabilityCalendar availability={availability} />;
}
