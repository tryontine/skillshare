import { describe, it } from 'node:test';
import assert from 'node:assert';
import { getRelatedReviews } from './service-service';
import { reviews } from '@/lib/mock-data';

describe('service-service', () => {
  describe('getRelatedReviews', () => {
    it('returns reviews matching the serviceTitle', () => {
      // Find a service title that actually has reviews in mock data
      const serviceWithReviews = reviews[0]?.serviceTitle;
      assert.ok(serviceWithReviews, 'Test prerequisite: At least one review must exist in mock data');

      const result = getRelatedReviews(serviceWithReviews);

      assert.strictEqual(Array.isArray(result), true);
      assert.ok(result.length > 0);
      for (const review of result) {
        assert.strictEqual(review.serviceTitle, serviceWithReviews);
      }
    });

    it('returns an empty array when no reviews match the serviceTitle', () => {
      const result = getRelatedReviews('Non-existent Service Title That Definitively Does Not Exist');

      assert.strictEqual(Array.isArray(result), true);
      assert.strictEqual(result.length, 0);
    });

    it('handles empty string properly', () => {
      const result = getRelatedReviews('');

      assert.strictEqual(Array.isArray(result), true);
      assert.strictEqual(result.length, 0);
    });
  });
});
