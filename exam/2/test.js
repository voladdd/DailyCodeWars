import assert from "assert/strict";
import solution from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(solution("2x3x4"), 58);
  });
  it("test", () => {
    assert.strictEqual(solution("1x1x10"), 43);
  });
});
