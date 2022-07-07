import assert from "assert/strict";
import { getDirectionsAbleForMove, directionName } from "./solution.js";

describe("Helpfull methods Tests", function () {
  it("3x3 array without left directions", function () {
    assert.deepEqual(
      getDirectionsAbleForMove({ width: 3, height: 3 }, { x: 0, y: 1 }),
      [
        directionName.top,
        directionName.topRight,
        directionName.right,
        directionName.bottomRight,
        directionName.bottom,
      ]
    );
  });
  it("3x3 array with all directions", function () {
    assert.deepEqual(
      getDirectionsAbleForMove({ width: 3, height: 3 }, { x: 1, y: 1 }),
      [
        directionName.top,
        directionName.topRight,
        directionName.right,
        directionName.bottomRight,
        directionName.bottom,
        directionName.bottomLeft,
        directionName.left,
        directionName.topLeft,
      ]
    );
  });
});
