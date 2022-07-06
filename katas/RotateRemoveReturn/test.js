import {
  rotateAndRemove,
  rotateArray,
  removeMaxAndMin,
  removeItemFromArray,
} from "./solution.js";
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
  it("removeMaxAndMin", function () {
    assert.deepEqual(removeMaxAndMin([9, 5, 4]), [5]);
  });
  it("removeMaxAndMin", function () {
    assert.deepEqual(removeMaxAndMin([5, 9, 6, 5, 5]), [6, 5, 5]);
  });
  it("removeItemFromArray", function () {
    assert.deepEqual(removeItemFromArray([9, 5, 4], 5), [9, 4]);
  });
});

describe("RotateRemoveReturn", () => {
  it("Test", () => {
    let someArray = [
      [3, 5, 8, 4, 2],
      [1, 9, 2, 3, 8],
      [4, 6, 7, 2, 2],
      [7, 5, 5, 5, 5],
      [6, 5, 3, 8, 1],
    ];
    assert.strictEqual(rotateAndRemove(someArray), 4);
  });
  it("Test 2", () => {
    let someArray = [
      [13, 25, 38, 44, 52],
      [61, 79, 82, 93, 18],
      [24, 36, 47, 52, 62],
      [77, 85, 95, 15, 25],
      [36, 45, 53, 68, 71],
    ];
    assert.strictEqual(rotateAndRemove(someArray), 47);
  });
});
