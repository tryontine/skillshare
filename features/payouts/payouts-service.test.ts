import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { getPayoutHealth } from "./payouts-service.ts";

describe("getPayoutHealth", () => {
  test("returns the expected snapshot structure", () => {
    const health = getPayoutHealth();

    assert.deepStrictEqual(health, {
      accountStatus: "Ready for payouts",
      nextEstimatedPayout: "Thu, 21 Mar",
      processingVolume: "CHF 6,240",
      platformFeeRate: "12%",
    });
  });
});
