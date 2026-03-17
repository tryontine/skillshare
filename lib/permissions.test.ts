import { test, describe } from 'node:test';
import assert from 'node:assert';
import {
  canPublishProviderProfile,
  canManageProviderArea,
  hasRole,
} from "./permissions.ts";

describe("permissions", () => {
  describe("hasRole", () => {
    test("should return true if user has the role", () => {
      assert.strictEqual(hasRole(["provider", "consumer"], "provider"), true);
    });

    test("should return false if user does not have the role", () => {
      assert.strictEqual(hasRole(["consumer"], "provider"), false);
    });

    test("should return false if user has no roles", () => {
      assert.strictEqual(hasRole([], "provider"), false);
    });
  });

  describe("canManageProviderArea", () => {
    test("should return true for provider", () => {
      assert.strictEqual(canManageProviderArea(["provider"]), true);
    });

    test("should return true for admin", () => {
      assert.strictEqual(canManageProviderArea(["admin"]), true);
    });

    test("should return false for consumer only", () => {
      assert.strictEqual(canManageProviderArea(["consumer"]), false);
    });
  });

  describe("canPublishProviderProfile", () => {
    test("should return true for provider with approved state", () => {
      assert.strictEqual(canPublishProviderProfile(["provider"], "approved"), true);
    });

    test("should return true for admin with approved state", () => {
      assert.strictEqual(canPublishProviderProfile(["admin"], "approved"), true);
    });

    test("should return false for provider with draft state", () => {
      assert.strictEqual(canPublishProviderProfile(["provider"], "draft"), false);
    });

    test("should return false for admin with pending state", () => {
      assert.strictEqual(canPublishProviderProfile(["admin"], "pending"), false);
    });

    test("should return false for consumer even if approved", () => {
      assert.strictEqual(canPublishProviderProfile(["consumer"], "approved"), false);
    });

    test("should return false for empty roles even if approved", () => {
      assert.strictEqual(canPublishProviderProfile([], "approved"), false);
    });

    test("should return false for provider with no state (defaults to draft)", () => {
      assert.strictEqual(canPublishProviderProfile(["provider"]), false);
    });
  });
});
