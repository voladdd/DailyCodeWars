import assert from "assert/strict";
import { comp } from "./solution";

describe("Tests", () => {
  it("test", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    assert.strictEqual(comp(a1, a2), true);
  });
  it("random test", () => {
    const a1 = [1, 2, 5, 3, 3, 6, 10, 9, 2, 8, 0, 5, 7, 0, 2, 4, 9];
    const a2 = [0, 9, 9, 64, 1, 25, 4, 81, 4, 16, 49, 4, 1, 25, 100, 36, 81];
    assert.strictEqual(comp(a1, a2), false);
  });
});
