import { test, describe } from 'node:test';
import assert from 'node:assert';
import { getUpcomingBookings } from './bookings-service';

describe('bookings-service', () => {
  describe('getUpcomingBookings', () => {
    test('filters out completed bookings from the default data', () => {
      const result = getUpcomingBookings();

      const hasCompleted = result.some((booking: any) => booking.status === 'completed');
      assert.strictEqual(hasCompleted, false, 'Should not contain completed bookings');
    });
  });
});
