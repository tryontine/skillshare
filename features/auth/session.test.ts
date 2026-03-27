import { describe, it } from "node:test";
import assert from "node:assert";
import { getDemoSession } from "./session.ts";

describe("getDemoSession", () => {
  it("should return the demo session object", () => {
    const session = getDemoSession();
    assert.deepStrictEqual(session, {
      user: {
        id: "demo-user",
        name: "Olivia Meyer",
        email: "olivia@skillshare.ch",
        roles: ["consumer", "provider"],
      },
    });
  });
});
