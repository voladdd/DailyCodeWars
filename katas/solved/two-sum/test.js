import assert from "assert/strict";
import twoSum from "./solution.js";

describe("Sample Tests", () => {
  it("Tests", () => {
    assert.deepEqual(twoSum([1, 2, 3], 4), [0, 2]);
  });
  it("Tests", () => {
    assert.deepEqual(twoSum([1234, 5678, 9012], 14690), [1, 2]);
  });
  it("Tests", () => {
    assert.deepEqual(twoSum([2, 2, 3], 4), [0, 1]);
  });
  it("Tests", () => {
    assert.deepEqual(twoSum([2, 3, 1], 4), [1, 2]);
  });
});
