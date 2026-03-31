import { test, describe } from "node:test";
import * as assert from "node:assert";
import { getCategoryBySlug } from "./service-service";

describe("getCategoryBySlug", () => {
  test("returns undefined when category is not found", () => {
    const result = getCategoryBySlug("missing-item");
    assert.strictEqual(result, undefined);
  });

  test("returns the category when found", () => {
    const result = getCategoryBySlug("language-coaching");
    assert.ok(result);
    assert.strictEqual(result.slug, "language-coaching");
  });
});
