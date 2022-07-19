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
  let exampleArr = [
    [1, 0, 2, 0, 2, 1],
    [1, 0, 2, 1, 5, 7],
    [4, 1, 1, 0, 1, 9],
  ];
  it("Test", () => {
    assert.deepStrictEqual(connectedValues(exampleArr, 1, [0, 0]), [
      [0, 0],
      [1, 0],
      [1, 3],
      [2, 1],
      [2, 2],
      [2, 4],
    ]);
  });
  it("Test", () => {
    assert.deepStrictEqual(connectedValues(exampleArr, 2, [0, 2]), [
      [0, 2],
      [1, 2],
    ]);
  });
  let arr1 = [
    [0, 0, 0, 1, 3, 4, 0, 3],
    [0, 2, 0, 0, 2, 0, 0, 5],
    [0, 0, 0, 2, 0, 1, 1, 1],
    [2, 3, 4, 1, 3, 1, 0, 0],
    [0, 1, 5, 1, 6, 0, 2, 0],
    [2, 0, 2, 3, 1, 1, 1, 1],
    [2, 0, 2, 3, 1, 1, 1, 1],
  ];
  it("Should return [] when arr at coord != val", function () {
    assert.deepStrictEqual(connectedValues(arr1, 0, [4, 2]), []);
  });
  it("Should return the correct array of coordinates with length == 1", function () {
    assert.deepStrictEqual(connectedValues(arr1, 2, [1, 1]), [[1, 1]]);
  });
  it("Should return the correct array of coordinates with length > 1", function () {
    var ans1 = [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 6],
      [1, 0],
      [1, 2],
      [1, 3],
      [1, 5],
      [1, 6],
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 4],
    ];
    assert.deepStrictEqual(connectedValues(arr1, 0, [0, 0]).sort(), ans1);
  });
});
