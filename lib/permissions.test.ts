import { test, describe } from "node:test";
import assert from "node:assert";
import { canManageProviderArea } from "./permissions";
import type { AppRole } from "../types/app";

describe("canManageProviderArea", () => {
  test("should return true when user has 'provider' role", () => {
    const roles: AppRole[] = ["provider"];
    assert.strictEqual(canManageProviderArea(roles), true);
  });

  test("should return true when user has 'admin' role", () => {
    const roles: AppRole[] = ["admin"];
    assert.strictEqual(canManageProviderArea(roles), true);
  });

  test("should return true when user has both 'provider' and 'admin' roles", () => {
    const roles: AppRole[] = ["provider", "admin"];
    assert.strictEqual(canManageProviderArea(roles), true);
  });

  test("should return false when user only has 'consumer' role", () => {
    const roles: AppRole[] = ["consumer"];
    assert.strictEqual(canManageProviderArea(roles), false);
  });

  test("should return false when user has no roles", () => {
    const roles: AppRole[] = [];
    assert.strictEqual(canManageProviderArea(roles), false);
  });
});
