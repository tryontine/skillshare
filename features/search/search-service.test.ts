import { describe, it } from 'node:test';
import * as assert from 'node:assert';
import { getPopularSearches } from './search-service.ts';

describe('search-service', () => {
  describe('getPopularSearches', () => {
    it('returns a fixed list of popular searches', () => {
      const result = getPopularSearches();

      assert.ok(Array.isArray(result), 'Result should be an array');
      assert.strictEqual(result.length, 4, 'Should return exactly 4 popular searches');

      assert.deepStrictEqual(result, [
        "Swiss German in Zurich",
        "Founder portraits in Geneva",
        "Matura prep in Basel",
        "Executive fitness in Bern",
      ]);
    });
  });
});
