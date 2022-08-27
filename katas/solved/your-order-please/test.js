import assert from "assert/strict";
import order from "./solution.js";

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
  });
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
  });
  it("should work corectly", () => {
    assert.strictEqual(order(""), "", "empty input should return empty string");
  });
});
