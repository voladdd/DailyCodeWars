import assert from "assert/strict";
import { solution } from "./solution.js";

describe("MulitplesOf5Or3 Tests", () => {
  it("basic test", () => {
    assert.strictEqual(solution(10), 23);
  });
});
