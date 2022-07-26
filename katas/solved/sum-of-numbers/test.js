import assert from "assert/strict";
import getSum from "./solution.js";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
    assert.strictEqual(getSum(-1, 2), 2);
  });
});
