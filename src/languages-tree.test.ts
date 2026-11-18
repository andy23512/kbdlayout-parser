import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, it } from "node:test";
import {
  generateLanguagesTreeArtifacts,
  parseLanguagesHtml,
} from "./languages-tree.ts";
import { generateLayoutId } from "./layout-id.ts";

const SIMPLE_HTML = `
<ul class="tree">
  <li>
    <span title="en"><b>English</b></span>
    <ul>
      <li><a href="/00000409/">US</a> *</li>
      <li><a href="/00020409/">United States-International</a> **</li>
      <li><a href="/00010409/">United States-Dvorak</a></li>
    </ul>
  </li>
</ul>`;

const GROUP_HTML = `
<ul class="tree">
  <li>
    <span title="zh"><b>Chinese</b></span>
    <ul>
      <li><a href="/00000404/">Chinese Parent Layout</a></li>
      <li>
        <span title="zh-TW"><b>Taiwan</b></span>
        <ul>
          <li><a href="/00000405/">Chinese Traditional</a> *</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>`;

describe("parseLanguagesHtml: structure", () => {
  it("parses a leaf language with its layouts", () => {
    const data = parseLanguagesHtml(SIMPLE_HTML);
    assert.equal(data.length, 1);
    const [node] = data;
    assert.equal(node?.kind, "language");
    assert.equal(node?.code, "en");
    assert.equal(node?.name, "English");
    assert.deepEqual(
      node?.layouts.map((layout) => layout.name),
      ["US", "United States-International", "United States-Dvorak"],
    );
  });

  it("parses a group node with its own layouts and children", () => {
    const [node] = parseLanguagesHtml(GROUP_HTML);
    assert.equal(node?.kind, "group");
    if (node?.kind !== "group") return;
    assert.equal(node.layouts.length, 1);
    assert.equal(node.children.length, 1);
    const [child] = node.children;
    assert.equal(child?.kind, "language");
    assert.equal(child?.code, "zh-TW");
    assert.equal(child?.layouts[0]?.name, "Chinese Traditional");
  });

  it("collects nodes from multiple ul.tree sections", () => {
    const html = `
      <ul class="tree"><li><span title="en"><b>English</b></span><ul><li><a href="/1/">A</a></li></ul></li></ul>
      <ul class="tree"><li><span title="fr"><b>French</b></span><ul><li><a href="/2/">B</a></li></ul></li></ul>`;
    const data = parseLanguagesHtml(html);
    assert.deepEqual(
      data.map((node) => node.code),
      ["en", "fr"],
    );
  });

  it("falls back to the span text when there is no <b> name", () => {
    const html = `<ul class="tree"><li><span title="de">German</span><ul><li><a href="/1/">A</a></li></ul></li></ul>`;
    assert.equal(parseLanguagesHtml(html)[0]?.name, "German");
  });

  it("produces one node per span when a li has several language spans", () => {
    const html = `<ul class="tree"><li><span title="no"><b>Norwegian</b></span><span title="nb"><b>Bokmal</b></span><ul><li><a href="/1/">Norwegian</a></li></ul></li></ul>`;
    const data = parseLanguagesHtml(html);
    assert.deepEqual(
      data.map((node) => node.code),
      ["no", "nb"],
    );
    assert.deepEqual(data[0]?.layouts, data[1]?.layouts);
    assert.notEqual(data[0]?.layouts[0], data[1]?.layouts[0]);
  });
});

describe("parseLanguagesHtml: layout flags and ids", () => {
  it("detects default markers", () => {
    const [node] = parseLanguagesHtml(SIMPLE_HTML);
    const [us, intl, dvorak] = node?.layouts ?? [];
    assert.deepEqual(
      { d: us?.isDefault, o: us?.isDefaultFromOtherLanguage },
      { d: true, o: false },
    );
    assert.deepEqual(
      { d: intl?.isDefault, o: intl?.isDefaultFromOtherLanguage },
      { d: true, o: true },
    );
    assert.deepEqual(
      { d: dvorak?.isDefault, o: dvorak?.isDefaultFromOtherLanguage },
      { d: false, o: false },
    );
  });

  it("derives each layout id from generateLayoutId(name)", () => {
    const [node] = parseLanguagesHtml(SIMPLE_HTML);
    for (const layout of node?.layouts ?? []) {
      assert.equal(layout.id, generateLayoutId(layout.name));
    }
  });

  it("does not expose klid or href on layouts", () => {
    const [node] = parseLanguagesHtml(SIMPLE_HTML);
    assert.deepEqual(Object.keys(node?.layouts[0] ?? {}).sort(), [
      "id",
      "isDefault",
      "isDefaultFromOtherLanguage",
      "name",
    ]);
  });
});

describe("parseLanguagesHtml: determinism", () => {
  it("returns identical output for the same input", () => {
    assert.equal(
      JSON.stringify(parseLanguagesHtml(GROUP_HTML)),
      JSON.stringify(parseLanguagesHtml(GROUP_HTML)),
    );
  });
});

describe("parseLanguagesHtml: error handling", () => {
  it("throws when there is no ul.tree", () => {
    assert.throws(
      () => parseLanguagesHtml("<html><body><ul><li>x</li></ul></body></html>"),
      /No language trees found/,
    );
  });

  it("throws when ul.tree has no root li", () => {
    assert.throws(
      () => parseLanguagesHtml(`<ul class="tree"></ul>`),
      /expected at least one root language list item/,
    );
  });

  it("throws when a language li has no span[title]", () => {
    assert.throws(
      () => parseLanguagesHtml(`<ul class="tree"><li>No span</li></ul>`),
      /missing direct span\[title\] metadata/,
    );
  });

  it("throws when a layout li has no link", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li>no link</li></ul></li></ul>`;
    assert.throws(
      () => parseLanguagesHtml(html),
      /expected exactly one direct layout link, found 0/,
    );
  });

  it("throws when a layout li has more than one link", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li><a href="/1/">A</a><a href="/2/">B</a></li></ul></li></ul>`;
    assert.throws(
      () => parseLanguagesHtml(html),
      /expected exactly one direct layout link, found 2/,
    );
  });

  it("throws when a layout link has no href", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li><a>A</a></li></ul></li></ul>`;
    assert.throws(() => parseLanguagesHtml(html), /layout link is missing href/);
  });

  it("throws when the href yields an empty KLID", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li><a href="/">A</a></li></ul></li></ul>`;
    assert.throws(() => parseLanguagesHtml(html), /produced empty KLID/);
  });

  it("throws when the layout display name is empty", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li><a href="/1/">  </a></li></ul></li></ul>`;
    assert.throws(() => parseLanguagesHtml(html), /has empty display name/);
  });

  it("throws when a layout li contains a span without title", () => {
    const html = `<ul class="tree"><li><span title="en"><b>English</b></span><ul><li><span>x</span><a href="/1/">A</a></li></ul></li></ul>`;
    assert.throws(
      () => parseLanguagesHtml(html),
      /expected a layout list item, but found language span nodes/,
    );
  });
});

describe("generateLanguagesTreeArtifacts", () => {
  it("writes matching JSON and TS artifacts", () => {
    const dir = mkdtempSync(join(tmpdir(), "kbdlayout-parser-test-"));
    try {
      const sourcePath = join(dir, "languages.html");
      const jsonOutputPath = join(dir, "out", "tree.json");
      const tsOutputPath = join(dir, "out", "tree.ts");
      writeFileSync(sourcePath, SIMPLE_HTML, "utf-8");

      const data = generateLanguagesTreeArtifacts({
        sourcePath,
        jsonOutputPath,
        tsOutputPath,
      });

      const jsonText = readFileSync(jsonOutputPath, "utf-8");
      assert.ok(jsonText.endsWith("\n"));
      assert.deepEqual(JSON.parse(jsonText), data);

      const tsText = readFileSync(tsOutputPath, "utf-8");
      assert.ok(tsText.includes("export const LANGUAGES_TREE_DATA"));
      assert.ok(tsText.includes("export default LANGUAGES_TREE_DATA;"));
      assert.ok(tsText.includes(JSON.stringify(data, null, 2)));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
