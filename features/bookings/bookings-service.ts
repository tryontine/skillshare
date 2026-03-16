import { bookings } from "@/lib/mock-data";

export function getAllBookings() {
  return bookings;
}

export function getBookingById(id: string) {
  return bookings.find((booking) => booking.id === id);
}

export function getUpcomingBookings() {
  return bookings.filter((booking) => booking.status !== "completed");
}
