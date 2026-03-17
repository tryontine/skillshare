import { BookingsTable } from "@/components/dashboard/bookings-table";
import { DashboardShell } from "@/components/shell/dashboard-shell";
import { Card } from "@/components/ui/card";
import { getAllBookings } from "@/features/bookings/bookings-service";
import { providerNavigation } from "@/lib/constants/site";

export default function ProviderBookingsPage() {
  return (
    <DashboardShell
      title="Provider area"
      items={providerNavigation}
      activeHref="/provider/bookings"
    >
      <Card className="p-6">
        <h1 className="font-display text-5xl">Booking pipeline</h1>
        <p className="mt-4 text-sm leading-7 text-ink-soft">
          Request approvals, payment state, and completion events stay visible in one operational queue.
        </p>
      </Card>
      <BookingsTable bookings={getAllBookings()} />
    </DashboardShell>
  );
}
