import assert from "assert/strict";
import {
  getDirectionsAbleForMove,
  directionInfo,
  connectedValues,
} from "./solution.js";

describe("Helpfull methods Tests", function () {
  it("3x3 array without left directions", function () {
    assert.deepEqual(
      getDirectionsAbleForMove({ width: 3, height: 3 }, { x: 0, y: 1 }).map(
        (value) => value.name
      ),
      [
        directionInfo.top.name,
        directionInfo.topRight.name,
        directionInfo.right.name,
        directionInfo.bottomRight.name,
        directionInfo.bottom.name,
      ]
    );
  });
  it("3x3 array with all directions", function () {
    assert.deepEqual(
      getDirectionsAbleForMove({ width: 3, height: 3 }, { x: 1, y: 1 }).map(
        (value) => value.name
      ),
      [
        directionInfo.top.name,
        directionInfo.topRight.name,
        directionInfo.right.name,
        directionInfo.bottomRight.name,
        directionInfo.bottom.name,
        directionInfo.bottomLeft.name,
        directionInfo.left.name,
        directionInfo.topLeft.name,
      ]
    );
  });
});

describe("ConnectingValues", () => {
  it("Test", () => {
    let exampleArr = [
      [1, 0, 2, 0, 2, 1],
      [1, 0, 2, 1, 5, 7],
      [4, 1, 1, 0, 1, 9],
    ];
    assert.strictEqual(connectedValues(exampleArr, 1, [0, 0]), 0);
  });
});
