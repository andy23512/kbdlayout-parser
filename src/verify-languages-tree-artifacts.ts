import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LANGUAGES_TREE_DATA } from "./const/languages-tree-data.ts";
import { generateLayoutId } from "./layout-id.ts";
import type {
  LanguageTreeData,
  LanguageTreeNode,
} from "./model/languages-tree.models.ts";

const jsonContent = readFileSync("res/languages-tree-data.json", "utf-8");
const parsedJson = JSON.parse(jsonContent) as unknown;

assert.ok(
  Array.isArray(parsedJson),
  "Expected languages tree JSON artifact root to be an array.",
);

assert.ok(
  !(
    parsedJson &&
    typeof parsedJson === "object" &&
    !Array.isArray(parsedJson) &&
    "nodes" in parsedJson
  ),
  "Legacy wrapper format ({ version, source, nodes }) is not allowed.",
);

const jsonData = parsedJson as LanguageTreeData;
assert.ok(jsonData.length > 0, "Expected at least one node in JSON artifact.");

function verifyLayoutIds(nodes: LanguageTreeNode[]): void {
  for (const node of nodes) {
    for (const layout of node.layouts) {
      assert.ok(
        layout.id,
        "Expected each layout to include required id field.",
      );
      assert.equal(
        layout.id,
        generateLayoutId(layout.name),
        `Expected layout id for '${layout.name}' to match shared generator logic.`,
      );
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
      verifyLayoutIds(node.children);
    }
  }
}

verifyLayoutIds(jsonData);

assert.equal(
  JSON.stringify(jsonData),
  JSON.stringify(LANGUAGES_TREE_DATA),
  "Expected JSON artifact and TS module artifact to contain identical data.",
);

console.log("Language tree artifacts verification passed.");
