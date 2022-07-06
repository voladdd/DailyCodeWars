import { rotateAndRemove, rotateArray } from "./solution.js";
import assert from "assert/strict";

describe("Helpfull methods Tests", function () {
  it("rotateArray 3x3", function () {
    assert.deepEqual(
      rotateArray([
        [5, 5, 5],
        [3, 5, 4],
        [4, 6, 3],
      ]),
      [
        [5, 4, 3],
        [5, 5, 6],
        [5, 3, 4],
      ]
    );
  });
  it("rotateArray 1x1", function () {
    assert.deepEqual(rotateArray([[4, 5, 4]]), [[4], [5], [4]]);
  });
});
