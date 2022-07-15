import assert from "assert/strict";
import { numbersOfLetters } from "./solution.js";

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(numbersOfLetters(1), ["one", "three", "five", "four"]);
    assert.deepEqual(numbersOfLetters(12), [
      "onetwo",
      "six",
      "three",
      "five",
      "four",
    ]);
    assert.deepEqual(numbersOfLetters(37), [
      "threeseven",
      "onezero",
      "seven",
      "five",
      "four",
    ]);
    assert.deepEqual(numbersOfLetters(311), [
      "threeoneone",
      "oneone",
      "six",
      "three",
      "five",
      "four",
    ]);
    assert.deepEqual(numbersOfLetters(999), [
      "nineninenine",
      "onetwo",
      "six",
      "three",
      "five",
      "four",
    ]);
  });
});
