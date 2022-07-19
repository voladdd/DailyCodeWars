import assert from "assert/strict";
import { getCount } from "./solution.js";

describe("Vowels Count Tests", () => {
  it("should return 5 for 'abracadabra'", () => {
    assert.strictEqual(getCount("abracadabra"), 5);
  });

  it("should return 0 for 'my pyx'", () => {
    assert.strictEqual(getCount("my pyx"), 0);
  });
});
