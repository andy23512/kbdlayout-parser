import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
  mkdirSync,
} from "node:fs";
import { join, resolve } from "node:path";
import { afterEach, describe, it } from "node:test";

const ROOT = resolve(import.meta.dirname, "..");
const SUCCESS_MESSAGE = "Language tree artifacts verification passed.";

type Json = Record<string, unknown>;

const sandboxes: string[] = [];

afterEach(() => {
  for (const dir of sandboxes.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

/**
 * Copies the verify script (inside the repo, so Yarn PnP can resolve deps) and its imports into a temp dir, together with the
 * given artifacts, so the script can be run against tampered data.
 */
function runVerify(jsonText: string, tsText: string) {
  const dir = mkdtempSync(join(ROOT, ".tmp-verify-"));
  sandboxes.push(dir);
  mkdirSync(join(dir, "src"));
  mkdirSync(join(dir, "res"));
  for (const file of ["verify-languages-tree-artifacts.ts", "layout-id.ts"]) {
    cpSync(join(ROOT, "src", file), join(dir, "src", file));
  }
  cpSync(join(ROOT, "src/model"), join(dir, "src/model"), { recursive: true });
  writeFileSync(join(dir, "res/languages-tree-data.json"), jsonText);
  writeFileSync(join(dir, "res/languages-tree-data.ts"), tsText);
  const result = spawnSync(
    process.execPath,
    ["src/verify-languages-tree-artifacts.ts"],
    { cwd: dir, encoding: "utf-8" },
  );
  return {
    status: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
  };
}

/** Builds a TS module artifact whose data is the given value. */
function tsModuleOf(data: unknown): string {
  return `export const LANGUAGES_TREE_DATA = ${JSON.stringify(data)};\n`;
}

function validData(): Json[] {
  return [
    {
      kind: "language",
      code: "en",
      name: "English",
      layouts: [{ id: "us", name: "US", isDefault: true }],
    },
    {
      kind: "group",
      code: "de",
      name: "German",
      layouts: [{ id: "german", name: "German", isDefault: true }],
      children: [
        {
          kind: "language",
          code: "de-ch",
          name: "Swiss German",
          layouts: [
            {
              id: "swiss-german",
              name: "Swiss German",
              isDefault: true,
            },
          ],
        },
      ],
    },
  ];
}

function verifyData(data: unknown, tsData: unknown = data) {
  return runVerify(JSON.stringify(data), tsModuleOf(tsData));
}

function assertFails(
  result: ReturnType<typeof runVerify>,
  messagePart: string,
): void {
  assert.notEqual(result.status, 0);
  assert.ok(
    result.stderr.includes(messagePart),
    `Expected stderr to include '${messagePart}', got: ${result.stderr}`,
  );
  assert.ok(!result.stdout.includes(SUCCESS_MESSAGE));
}

describe("verify-languages-tree-artifacts", () => {
  // `res/` is gitignored, so on a fresh clone (CI) there are no artifacts to check.
  const hasArtifacts = existsSync(join(ROOT, "res/languages-tree-data.json"));
  it("passes on the committed artifacts", { skip: !hasArtifacts && "res/ is not in the repository" }, () => {
    const result = spawnSync(
      process.execPath,
      ["src/verify-languages-tree-artifacts.ts"],
      { cwd: ROOT, encoding: "utf-8" },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.ok(result.stdout.includes(SUCCESS_MESSAGE));
  });

  it("passes when JSON and TS artifacts are identical and ids are correct", () => {
    const result = verifyData(validData());
    assert.equal(result.status, 0, result.stderr);
    assert.ok(result.stdout.includes(SUCCESS_MESSAGE));
  });

  it("rejects a JSON root that is not an array", () => {
    const result = verifyData({ version: 1, nodes: validData() }, validData());
    assertFails(result, "Expected languages tree JSON artifact root");
  });

  it("rejects an empty JSON array", () => {
    const result = verifyData([], []);
    assertFails(result, "Expected at least one node");
  });

  it("rejects a layout without an id", () => {
    const data = validData();
    delete ((data[0].layouts as Json[])[0] as Json).id;
    assertFails(verifyData(data), "required id field");
  });

  it("rejects a layout whose id does not match the generator", () => {
    const data = validData();
    ((data[0].layouts as Json[])[0] as Json).id = "wrong";
    assertFails(verifyData(data), "match shared generator logic");
  });

  it("checks layouts nested inside group children", () => {
    const data = validData();
    const child = (data[1].children as Json[])[0];
    ((child.layouts as Json[])[0] as Json).id = "wrong";
    assertFails(verifyData(data), "'Swiss German'");
  });

  it("rejects the deprecated 'klid' field", () => {
    const data = validData();
    ((data[0].layouts as Json[])[0] as Json).klid = "00000409";
    assertFails(verifyData(data), "deprecated field 'klid'");
  });

  it("rejects the deprecated 'href' field", () => {
    const data = validData();
    ((data[0].layouts as Json[])[0] as Json).href = "/us";
    assertFails(verifyData(data), "deprecated field 'href'");
  });

  it("rejects JSON and TS artifacts that differ", () => {
    const tsData = validData();
    tsData[0].name = "Changed";
    assertFails(
      verifyData(validData(), tsData),
      "JSON artifact and TS module artifact to contain identical data",
    );
  });

  it("rejects artifacts that differ only in key order", () => {
    const reordered = validData().map((node) => {
      const { code, ...rest } = node;
      return { ...rest, code };
    });
    assertFails(
      verifyData(validData(), reordered),
      "identical data",
    );
  });
});
