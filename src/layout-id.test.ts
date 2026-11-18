import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { generateLayoutId } from "./layout-id.ts";

describe("generateLayoutId", () => {
  it("lowercases and joins words with hyphens", () => {
    assert.equal(generateLayoutId("US"), "us");
    assert.equal(
      generateLayoutId("United States-International"),
      "united-states-international",
    );
  });

  it("removes dots, commas and parentheses", () => {
    assert.equal(generateLayoutId("Foo (Bar), Baz."), "foo-bar-baz");
  });

  it("converts underscores to hyphens", () => {
    assert.equal(generateLayoutId("Foo_Bar"), "foo-bar");
  });

  it("removes the curly apostrophe", () => {
    assert.equal(generateLayoutId("Maori’s Layout"), "maoris-layout");
  });

  it("removes the capital É character", () => {
    assert.equal(generateLayoutId("ÉA"), "a");
  });

  it("transliterates accented characters", () => {
    assert.equal(generateLayoutId("Français (Canada)"), "francais-canada");
  });

  it("is deterministic", () => {
    const name = "Canadian Multilingual Standard";
    assert.equal(generateLayoutId(name), generateLayoutId(name));
  });
});
