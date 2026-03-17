import { describe, it } from "node:test";
import assert from "node:assert";
import { canLeaveReview } from "./permissions.ts";
import type { AppRole } from "@/types/app";

describe("Permissions: canLeaveReview", () => {
  it("should return true for admin with completed booking", () => {
    assert.strictEqual(canLeaveReview(["admin"], "completed"), true);
  });

  it("should return true for consumer with completed booking", () => {
    assert.strictEqual(canLeaveReview(["consumer"], "completed"), true);
  });

  it("should return false for provider with completed booking", () => {
    assert.strictEqual(canLeaveReview(["provider"], "completed"), false);
  });

  it("should return false for admin with other booking", () => {
    assert.strictEqual(canLeaveReview(["admin"], "other"), false);
  });

  it("should return false for consumer with other booking", () => {
    assert.strictEqual(canLeaveReview(["consumer"], "other"), false);
  });

  it("should return false for empty roles with completed booking", () => {
    assert.strictEqual(canLeaveReview([], "completed"), false);
  });
});
