import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { LANGUAGES_TREE_DATA } from "./const/languages-tree-data.ts";
import type { LanguageTreeData } from "./model/languages-tree.models.ts";

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
assert.equal(
  JSON.stringify(jsonData),
  JSON.stringify(LANGUAGES_TREE_DATA),
  "Expected JSON artifact and TS module artifact to contain identical data.",
);

console.log("Language tree artifacts verification passed.");
