import { getCount } from "./solution.js";
import assert from "assert/strict";

describe("Vowels Count Tests", function () {
  it("should return 5 for 'abracadabra'", function () {
    assert.strictEqual(getCount("abracadabra"), 5);
  });

  it("should return 0 for 'my pyx'", function () {
    assert.strictEqual(getCount("my pyx"), 0);
  });
});
