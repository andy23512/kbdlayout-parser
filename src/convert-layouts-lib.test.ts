import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { describe, it } from "node:test";
import {
  buildKeyboardLayoutsModule,
  convertDrivers,
  parseDriverXml,
  parseLayoutMetadata,
  type CompactLayoutMap,
  type KeyboardLayoutMeta,
} from "./convert-layouts-lib.ts";
import { generateLayoutId } from "./layout-id.ts";

// Mirrors the structure of kbdlayout.info driver pages.
function metadataTable(klid: string, name: string): string {
  return `<table>
    <tr><th>KLID</th><td>${klid}</td></tr>
    <tr><th>Layout Display Name</th><td>${name}</td></tr>
    <tr><th>Layout File</th><td>KBDXX.DLL</td></tr>
  </table>`;
}

function page(...tables: string[]): string {
  return `<html><body>
    <div class="metaGroup group"><h2>Layout metadata</h2>${tables.join("\n")}</div>
    <div class="metaGroup group"><h2>Driver metadata</h2>
      <table><tr><th>KLID</th><td>SHOULD-BE-IGNORED</td></tr></table>
    </div>
  </body></html>`;
}

// SC "1E" is KeyA and "30" is KeyB in SC_TO_KEYCODE.
function xml(body: string): string {
  return `<KeyboardLayout><PhysicalKeys>${body}</PhysicalKeys></KeyboardLayout>`;
}

describe("parseLayoutMetadata", () => {
  it("reads the KLID (without the locale suffix) and display name", () => {
    assert.deepEqual(
      parseLayoutMetadata(page(metadataTable("00000401 (ar-SA)", "Arabic (101)")), "/KBDA1/"),
      [{ klid: "00000401", layoutDisplayName: "Arabic (101)" }],
    );
  });

  it("reads every metadata table of the page, in order", () => {
    const layouts = parseLayoutMetadata(
      page(
        metadataTable("00000409 (en-US)", "US"),
        metadataTable("00010409 (en-US)", "United States-Dvorak"),
      ),
      "/KBDUS/",
    );
    assert.deepEqual(
      layouts.map((l) => l.klid),
      ["00000409", "00010409"],
    );
  });

  it("only looks at the 'Layout metadata' group", () => {
    const layouts = parseLayoutMetadata(page(metadataTable("1 (x)", "A")), "/X/");
    assert.equal(layouts.length, 1);
    assert.ok(!layouts.some((l) => l.klid === "SHOULD-BE-IGNORED"));
  });

  it("returns an empty list for a page without layout metadata", () => {
    assert.deepEqual(
      parseLayoutMetadata("<html><body><p>nothing</p></body></html>", "/X/"),
      [],
    );
  });

  it("throws, naming the link, when the KLID is missing", () => {
    const html = page(
      `<table><tr><th>Layout Display Name</th><td>Foo</td></tr></table>`,
    );
    assert.throws(
      () => parseLayoutMetadata(html, "/KBDFOO/"),
      /Failed to parse layout metadata for \/KBDFOO\/: klid=null, layoutDisplayName=Foo/,
    );
  });

  it("throws when the display name is missing", () => {
    const html = page(`<table><tr><th>KLID</th><td>0001 (x)</td></tr></table>`);
    assert.throws(
      () => parseLayoutMetadata(html, "/KBDFOO/"),
      /klid=0001, layoutDisplayName=null/,
    );
  });
});

describe("parseDriverXml: text results", () => {
  it("maps unmodified / shift / AltGr / Shift+AltGr results to u / s / a / A", () => {
    const map = parseDriverXml(
      xml(`<PK VK="VK_A" SC="1E">
        <Result Text="a" />
        <Result Text="A" With="VK_SHIFT" />
        <Result Text="å" With="VK_CONTROL VK_MENU" />
        <Result Text="Å" With="VK_SHIFT VK_CONTROL VK_MENU" />
      </PK>`),
    );
    assert.deepEqual(map, {
      KeyA: {
        u: { v: "a" },
        s: { v: "A" },
        a: { v: "å" },
        A: { v: "Å" },
      },
    });
  });

  it("only includes the states that are present", () => {
    const map = parseDriverXml(
      xml(`<PK SC="1E"><Result Text="a" /><Result Text="A" With="VK_SHIFT" /></PK>`),
    );
    assert.deepEqual(Object.keys(map["KeyA"] ?? {}), ["u", "s"]);
  });

  it("converts several keys", () => {
    const map = parseDriverXml(
      xml(`<PK SC="1E"><Result Text="a" /></PK><PK SC="30"><Result Text="b" /></PK>`),
    );
    assert.deepEqual(Object.keys(map), ["KeyA", "KeyB"]);
    assert.equal(map["KeyB"]?.u?.v, "b");
  });

  it("ignores keys whose scancode is unknown or missing", () => {
    const map = parseDriverXml(
      xml(`<PK SC="ZZ"><Result Text="x" /></PK><PK><Result Text="y" /></PK>`),
    );
    assert.deepEqual(map, {});
  });

  it("omits keys that produce no text in any supported state", () => {
    const map = parseDriverXml(
      xml(`<PK SC="1E"><Result TextCodepoints="001B" /></PK>`),
    );
    assert.deepEqual(map, {});
  });

  it("ignores other modifier combinations (e.g. Kana, Control)", () => {
    const map = parseDriverXml(
      xml(`<PK SC="1E">
        <Result Text="a" />
        <Result Text="ﾁ" With="VK_KANA" />
        <Result Text="x" With="VK_CONTROL" />
        <Result Text="y" With="VK_SHIFT VK_KANA" />
      </PK>`),
    );
    assert.deepEqual(map, { KeyA: { u: { v: "a" } } });
  });

  it("returns an empty map for an empty layout", () => {
    assert.deepEqual(parseDriverXml(xml("")), {});
  });
});

describe("parseDriverXml: dead keys", () => {
  const deadKeyXml = xml(`<PK SC="1E">
    <Result Text="a" />
    <Result With="VK_CONTROL VK_MENU">
      <DeadKeyTable Accent="ˇ" Name="HACEK">
        <Result Text="č" With="c" />
        <Result Text="Č" With="C" />
      </DeadKeyTable>
    </Result>
  </PK>`);

  it("records the accent as a dead-key entry with its composition table", () => {
    assert.deepEqual(parseDriverXml(deadKeyXml), {
      KeyA: {
        u: { v: "a" },
        a: { v: "ˇ", t: 1, d: { c: "č", C: "Č" } },
      },
    });
  });

  it("throws when the dead key table has no Accent", () => {
    const bad = xml(`<PK SC="1E"><Result With="VK_SHIFT"><DeadKeyTable Name="X"><Result Text="a" With="a" /></DeadKeyTable></Result></PK>`);
    assert.throws(
      () => parseDriverXml(bad),
      /DeadKeyTable for key KeyA with result Result\[With='VK_SHIFT'\] does not have an Accent attribute/,
    );
  });

  it("does not let nested dead key results leak into other states", () => {
    const map = parseDriverXml(deadKeyXml);
    assert.equal(map["KeyA"]?.s, undefined);
    assert.equal(map["KeyA"]?.A, undefined);
  });
});

describe("convertDrivers", () => {
  const pages: Record<string, string> = {
    kbdzz: page(metadataTable("00000002 (zz)", "Zeta Layout")),
    kbdaa: page(
      metadataTable("00000001 (aa)", "Alpha Layout"),
      metadataTable("00010001 (aa)", "Alpha (Extended)"),
    ),
    kbdnone: "<html><body>no metadata</body></html>",
  };
  const xmls: Record<string, string> = {
    kbdzz: xml(`<PK SC="1E"><Result Text="z" /></PK>`),
    kbdaa: xml(`<PK SC="1E"><Result Text="a" /></PK>`),
    kbdnone: xml(`<PK SC="1E"><Result Text="n" /></PK>`),
  };
  const run = (links: string[]) => {
    const pageReads: string[] = [];
    const xmlReads: string[] = [];
    const result = convertDrivers(
      links,
      (id) => (pageReads.push(id), pages[id] as string),
      (id) => (xmlReads.push(id), xmls[id] as string),
    );
    return { ...result, pageReads, xmlReads };
  };

  it("lower-cases the link (and drops slashes) for the file id, upper-cases the layout key", () => {
    const { pageReads, xmlReads, layoutsByDriver } = run(["/KBDZZ/"]);
    assert.deepEqual(pageReads, ["kbdzz"]);
    assert.deepEqual(xmlReads, ["kbdzz"]);
    assert.deepEqual(Object.keys(layoutsByDriver), ["KBDZZ"]);
  });

  it("builds metadata with id, name, reference and layout key", () => {
    const { keyboardLayouts } = run(["/KBDZZ/"]);
    assert.deepEqual(keyboardLayouts, [
      {
        id: generateLayoutId("Zeta Layout"),
        name: "Zeta Layout",
        reference: "https://kbdlayout.info/00000002/",
        layoutKey: "KBDZZ",
      },
    ]);
  });

  it("shares one layout between all layouts of a driver", () => {
    const { keyboardLayouts, layoutsByDriver } = run(["/KBDAA/"]);
    assert.equal(keyboardLayouts.length, 2);
    assert.ok(keyboardLayouts.every((l) => l.layoutKey === "KBDAA"));
    assert.deepEqual(Object.keys(layoutsByDriver), ["KBDAA"]);
  });

  it("sorts the layouts by name regardless of link order", () => {
    const { keyboardLayouts } = run(["/KBDZZ/", "/KBDAA/"]);
    assert.deepEqual(
      keyboardLayouts.map((l) => l.name),
      ["Alpha (Extended)", "Alpha Layout", "Zeta Layout"],
    );
  });

  it("skips drivers without layout metadata, but still reads their files", () => {
    const { keyboardLayouts, layoutsByDriver, pageReads, xmlReads } = run([
      "/KBDNONE/",
      "/KBDZZ/",
    ]);
    assert.deepEqual(Object.keys(layoutsByDriver), ["KBDZZ"]);
    assert.deepEqual(
      keyboardLayouts.map((l) => l.layoutKey),
      ["KBDZZ"],
    );
    assert.deepEqual(pageReads, ["kbdnone", "kbdzz"]);
    assert.deepEqual(xmlReads, ["kbdnone", "kbdzz"]);
  });

  it("returns empty results for no links", () => {
    assert.deepEqual(run([]).layoutsByDriver, {});
    assert.deepEqual(run([]).keyboardLayouts, []);
  });

  it("propagates read errors", () => {
    assert.throws(
      () =>
        convertDrivers(
          ["/KBDZZ/"],
          () => {
            throw new Error("ENOENT");
          },
          () => "",
        ),
      /ENOENT/,
    );
  });
});

describe("buildKeyboardLayoutsModule", () => {
  const layouts: Record<string, CompactLayoutMap> = {
    KBDAA: { KeyA: { u: { v: "a" }, s: { v: "A" } } },
  };
  const meta: KeyboardLayoutMeta[] = [
    { id: "alpha", name: "Alpha", reference: "https://kbdlayout.info/1/", layoutKey: "KBDAA" },
  ];
  const out = buildKeyboardLayoutsModule(layouts, meta);

  it("is a single line ending with exactly one newline", () => {
    assert.ok(out.endsWith("\n"));
    assert.ok(!out.slice(0, -1).includes("\n"));
  });

  it("embeds the layout data and the metadata as JSON", () => {
    const c = /const C = (.*?) as Record<string, L>;/.exec(out);
    const m = /const M = (.*?) as \[string, string, string, string\]\[\];/.exec(out);
    assert.ok(c && m);
    assert.deepEqual(JSON.parse(c[1] as string), layouts);
    assert.deepEqual(JSON.parse(m[1] as string), [
      ["alpha", "Alpha", "https://kbdlayout.info/1/", "KBDAA"],
    ]);
  });

  it("exports KEYBOARD_LAYOUTS_FROM_KBDLAYOUT", () => {
    assert.ok(out.includes("export const KEYBOARD_LAYOUTS_FROM_KBDLAYOUT: KeyboardLayout[]"));
    assert.ok(out.startsWith('import type { KeyboardLayout } from "../../model/keyboard-layout.models.js";'));
  });

  it("escapes U+2028 and U+2029 so the output stays on one line", () => {
    const tricky = buildKeyboardLayoutsModule(
      { KBDAA: { KeyA: { u: { v: "a\u2028b\u2029c" } } } },
      meta,
    );
    assert.ok(!tricky.includes("\u2028"));
    assert.ok(!tricky.includes("\u2029"));
    assert.ok(tricky.includes("a\\u2028b\\u2029c"));
  });

  it("is deterministic", () => {
    assert.equal(buildKeyboardLayoutsModule(layouts, meta), out);
  });

  it("works for empty input", () => {
    const empty = buildKeyboardLayoutsModule({}, []);
    assert.ok(empty.includes("const C = {} as Record<string, L>;"));
    assert.ok(empty.includes("const M = [] as [string, string, string, string][];"));
  });
});

// Regression test on the real, committed data: regenerating from res/ must
// reproduce res/keyboard-layouts-from-kbdlayout.ts exactly. If this fails
// after refreshing res/, re-run `yarn convert-layouts` and commit the result.
// `res/` is gitignored (scraped data, ~18 MB), so this only runs where it exists
// locally; on a fresh clone (CI) it is skipped.
const HAS_SCRAPED_DATA = existsSync("res/index.html");
describe("convert-layouts on the committed data", { skip: !HAS_SCRAPED_DATA && "res/ is not in the repository" }, () => {
  it("reproduces res/keyboard-layouts-from-kbdlayout.ts", async () => {
    const { readFileSync } = await import("node:fs");
    const { getDriverLinks } = await import("./utils.ts");
    const { layoutsByDriver, keyboardLayouts } = convertDrivers(
      getDriverLinks(),
      (id) => readFileSync(`res/drivers/${id}.html`, "utf-8"),
      (id) => readFileSync(`res/driver-xmls/${id}.xml`, "utf-8"),
    );
    assert.ok(keyboardLayouts.length > 100);
    assert.equal(
      buildKeyboardLayoutsModule(layoutsByDriver, keyboardLayouts),
      readFileSync("res/keyboard-layouts-from-kbdlayout.ts", "utf-8"),
    );
  });
});
