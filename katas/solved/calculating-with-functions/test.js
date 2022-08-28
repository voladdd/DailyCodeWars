import assert from "assert/strict";
import {
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  times,
  plus,
  minus,
  dividedBy,
} from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(seven(times(five())), 35);
  });
  it("test", () => {
    assert.strictEqual(four(plus(nine())), 13);
  });
  it("test", () => {
    assert.strictEqual(eight(minus(three())), 5);
  });
  it("test", () => {
    assert.strictEqual(six(dividedBy(two())), 3);
  });
});
