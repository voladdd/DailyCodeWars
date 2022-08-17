import assert from "assert/strict";
import toCamelCase from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
  });
  it("test", () => {
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
  });
  it("test", () => {
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
  });
  it("test", () => {
    assert.strictEqual(toCamelCase("A-B-C"), "ABC");
  });
});
