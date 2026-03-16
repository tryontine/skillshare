import { Card } from "@/components/ui/card";
import { CurrencyText } from "@/components/ui/currency-text";
import type { BookingDetailDTO } from "@/types/dto";

export function BookingsTable({ bookings }: { bookings: BookingDetailDTO[] }) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-left text-sm">
        <thead className="bg-[--color-surface] text-[--color-ink-soft]">
          <tr>
            <th className="px-5 py-4 font-medium">Service</th>
            <th className="px-5 py-4 font-medium">Date</th>
            <th className="px-5 py-4 font-medium">Location</th>
            <th className="px-5 py-4 font-medium">Status</th>
            <th className="px-5 py-4 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="border-t border-[--color-line]">
              <td className="px-5 py-4">{booking.serviceTitle}</td>
              <td className="px-5 py-4">{booking.startsAt}</td>
              <td className="px-5 py-4 text-[--color-ink-soft]">{booking.locationLabel}</td>
              <td className="px-5 py-4">{booking.status}</td>
              <td className="px-5 py-4">
                <CurrencyText value={booking.totalChf} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
