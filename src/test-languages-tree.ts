import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { parseLanguagesHtml } from "./languages-tree.ts";
import { generateLayoutId } from "./layout-id.ts";
import type { LanguageTreeNode } from "./model/languages-tree.models.ts";

function findByCode(
  nodes: LanguageTreeNode[],
  code: string,
): LanguageTreeNode | null {
  for (const node of nodes) {
    if (node.code === code) {
      return node;
    }
    if (node.kind === "group") {
      const match = findByCode(node.children, code);
      if (match) {
        return match;
      }
    }
  }
  return null;
}

const html = readFileSync("res/languages.html", "utf-8");
const firstPass = parseLanguagesHtml(html);
const secondPass = parseLanguagesHtml(html);

assert.equal(
  JSON.stringify(firstPass),
  JSON.stringify(secondPass),
  "Parsing result should be deterministic for identical HTML input.",
);

assert.ok(firstPass.length > 0, "Expected at least one root language node.");

function assertLayoutIds(nodes: LanguageTreeNode[]): void {
  for (const node of nodes) {
    for (const layout of node.layouts) {
      assert.equal(
        layout.id,
        generateLayoutId(layout.name),
        `Expected layout id for '${layout.name}' to match shared generator output.`,
      );
      assert.ok(layout.id.length > 0, "Expected non-empty layout id.");
      assert.ok(
        !("klid" in (layout as unknown as Record<string, unknown>)),
        "Expected layout object to omit deprecated field 'klid'.",
      );
      assert.ok(
        !("href" in (layout as unknown as Record<string, unknown>)),
        "Expected layout object to omit deprecated field 'href'.",
      );
    }
    if (node.kind === "group") {
      assertLayoutIds(node.children);
    }
  }
}

assertLayoutIds(firstPass);

const english = findByCode(firstPass, "en");
assert.ok(english, "Expected language code 'en' to exist in parsed tree.");
if (english?.kind === "group") {
  assert.ok(
    english.layouts.length > 0,
    "Expected English group to contain layout entries.",
  );
}

assert.throws(
  () =>
    parseLanguagesHtml("<html><body><ul><li>No trees</li></ul></body></html>"),
  /No language trees found/,
  "Expected parser to fail fast when required language tree structure is missing.",
);

console.log("Language tree parser tests passed.");
