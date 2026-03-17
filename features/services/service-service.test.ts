import { test, describe } from "node:test";
import assert from "node:assert";
import { getFeaturedServices } from "./service-service.ts";

describe("getFeaturedServices", () => {
  test("returns at most 4 services", () => {
    const featured = getFeaturedServices();

    // There are 5 mock services in the dataset, but the featured array should be capped at 4.
    assert.ok(featured.length <= 4, "Should return at most 4 featured services");
    assert.strictEqual(featured.length, 4, "Should return exactly 4 featured services");

    if (featured.length > 0) {
        assert.ok(featured[0].id, "Service should have an id");
        assert.ok(featured[0].slug, "Service should have a slug");
    }
  });
});
