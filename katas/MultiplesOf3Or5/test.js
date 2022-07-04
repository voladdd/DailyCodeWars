import { solution } from "./solution.js";
import assert from "assert/strict";

describe("MulitplesOf5Or3 Tests", function () {
  it("basic test", function () {
    assert.strictEqual(solution(10), 23);
  });
});
