import { test } from "node:test";
import assert from "node:assert";
import { formatChf } from "./currency";

test("formatChf", async (t) => {
  await t.test("formats positive numbers", () => {
    assert.strictEqual(formatChf(1000), "CHF\u00A01'000");
  });

  await t.test("formats zero", () => {
    assert.strictEqual(formatChf(0), "CHF\u00A00");
  });

  await t.test("formats negative numbers", () => {
    assert.strictEqual(formatChf(-50), "CHF-50");
  });

  await t.test("formats large numbers with separators", () => {
    assert.strictEqual(formatChf(1234567.89), "CHF\u00A01'234'568");
  });

  await t.test("rounds fraction digits correctly", () => {
    assert.strictEqual(formatChf(10.49), "CHF\u00A010");
    assert.strictEqual(formatChf(10.51), "CHF\u00A011");
  });
});
