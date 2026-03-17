import { test, describe } from "node:test";
import assert from "node:assert";
import { canAcceptBookings } from "./permissions.ts";
import type { AppRole } from "../types/app.ts";

describe("canAcceptBookings", () => {
  test("returns true for provider with approved state and stripe payouts", () => {
    assert.strictEqual(canAcceptBookings(["provider"], "approved", true), true);
  });

  test("returns true for admin with approved state and stripe payouts", () => {
    assert.strictEqual(canAcceptBookings(["admin"], "approved", true), true);
  });

  test("returns false if user is only a consumer", () => {
    assert.strictEqual(canAcceptBookings(["consumer"], "approved", true), false);
  });

  test("returns false if user has no roles", () => {
    assert.strictEqual(canAcceptBookings([], "approved", true), false);
  });

  test("returns false if profile state is not approved", () => {
    assert.strictEqual(canAcceptBookings(["provider"], "draft", true), false);
    assert.strictEqual(canAcceptBookings(["provider"], "pending", true), false);
    assert.strictEqual(canAcceptBookings(["provider"], "restricted", true), false);
  });

  test("returns false if hasStripePayouts is false", () => {
    assert.strictEqual(canAcceptBookings(["provider"], "approved", false), false);
  });

  test("returns false if hasStripePayouts is undefined (default value is false)", () => {
    assert.strictEqual(canAcceptBookings(["provider"], "approved"), false);
  });

  test("uses correct default values (draft state, false stripe payouts) and returns false", () => {
    assert.strictEqual(canAcceptBookings(["provider"]), false);
  });
});
