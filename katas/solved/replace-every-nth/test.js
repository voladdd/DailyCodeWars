import assert from "assert/strict";
import { replaceNth } from "./solution.js";

describe("KataTest", () => {
  it("BasicTests1", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", 2, "a", "o"),
      "Vader soid: No, I am your fother!"
    );
  });
  it("BasicTests2", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", 4, "a", "o"),
      "Vader said: No, I am your fother!"
    );
  });
  it("BasicTests3", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", 6, "a", "o"),
      "Vader said: No, I am your father!"
    );
  });
  it("BasicTests4", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", 0, "a", "o"),
      "Vader said: No, I am your father!"
    );
  });
  it("BasicTests5", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", -2, "a", "o"),
      "Vader said: No, I am your father!"
    );
  });
  it("BasicTests6", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", -2, "a", "o"),
      "Vader said: No, I am your father!"
    );
  });
  it("BasicTests7", () => {
    assert.strictEqual(
      replaceNth("Vader said: No, I am your father!", 1, "i", "y"),
      "Vader sayd: No, I am your father!"
    );
  });
  it("BasicTests8", () => {
    assert.strictEqual(
      replaceNth("Luke cries: Noooooooooooooooo!", 6, "o", "i"),
      "Luke cries: Noooooioooooioooo!"
    );
  });
});
