import assert from "assert/strict";
import maxSequence from "./solution.js";

describe("maxSequence", () => {
  it("should work on an empty array", () => {
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example", () => {
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
  it("should work on the example", () => {
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
  it("should work on the example", () => {
    assert.strictEqual(
      maxSequence([
        7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
      ]),
      155
    );
  });
});
