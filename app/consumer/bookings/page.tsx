import { BookingsTable } from "@/components/dashboard/bookings-table";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getAllBookings } from "@/features/bookings/bookings-service";
import { consumerNavigation } from "@/lib/constants/site";

export default function ConsumerBookingsPage() {
  const bookings = getAllBookings();

  return (
    <DashboardShell
      title="Consumer area"
      items={consumerNavigation}
      activeHref="/consumer/bookings"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Bookings</h1>
        <p className="mt-4 text-sm leading-7 text-[--color-ink-soft]">
          Track request, payment, and completion states without leaving the marketplace.
        </p>
      </Card>
      <BookingsTable bookings={bookings} />
    </DashboardShell>
  );
}
