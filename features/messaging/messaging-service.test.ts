import { describe, it } from "node:test";
import assert from "node:assert";
import { getMessagesByThreadId } from "./messaging-service";

describe("getMessagesByThreadId", () => {
  it("returns an empty array when thread ID is not found", () => {
    const result = getMessagesByThreadId("invalid-id");
    assert.deepStrictEqual(result, []);
  });

  it("returns messages when thread ID is found", () => {
    // thread-1 exists in the mock data
    const result = getMessagesByThreadId("thread-1");
    assert.ok(result.length > 0);
    assert.strictEqual(result[0]?.id, "msg-1");
  });

  it("returns empty array for empty string id", () => {
    const result = getMessagesByThreadId("");
    assert.deepStrictEqual(result, []);
  });
});
