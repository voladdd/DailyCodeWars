import assert from "assert/strict";
import { IsBouncy, bouncyRatio } from "./solution.js";

describe.skip("Helpful methods", () => {
  it("Is bouncy 1 false", () => {
    assert.strictEqual(IsBouncy(1), false);
  });
  it("Is bouncy 155349 true", () => {
    assert.strictEqual(IsBouncy(155349), true);
  });
  it("Is bouncy 490 true", () => {
    assert.strictEqual(IsBouncy(490), true);
  });
  it("Is bouncy 123 false", () => {
    assert.strictEqual(IsBouncy(123), false);
  });
  it("Is bouncy 432 false", () => {
    assert.strictEqual(IsBouncy(432), false);
  });
  it("Is bouncy 44432 false", () => {
    assert.strictEqual(IsBouncy(432), false);
  });
  it("Is bouncy 00350 true", () => {
    assert.strictEqual(IsBouncy(11350), true);
  });
});

describe("Example Test Cases", function () {
  it("A 0% bouncy ratio should be reached by 1", () => {
    assert.strictEqual(bouncyRatio(0.0), 1);
  });
  it("A 10% bouncy ratio should be reached by 132", () => {
    assert.strictEqual(bouncyRatio(0.1), 132);
  });
  it("A 50% bouncy ratio should be reached by 538", () => {
    assert.strictEqual(bouncyRatio(0.5), 538);
  });
  it("A 99% bouncy ratio should be reached by 1587000", () => {
    assert.strictEqual(bouncyRatio(0.99), 1587000);
  });
  it("A 90% bouncy ratio should be reached by 21780", () => {
    assert.strictEqual(bouncyRatio(0.9), 21780);
  });
  it.skip("A 72.84% bouncy ratio should be reached by 2825", () => {
    assert.strictEqual(bouncyRatio(0.7284), 2825);
  });
});
