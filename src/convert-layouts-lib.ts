import * as cheerio from "cheerio";
import { SC_TO_KEYCODE } from "./const/sc-to-keycode.ts";
import { generateLayoutId } from "./layout-id.ts";

export type CompactStateKey = "u" | "s" | "a" | "A";

export type CompactEntry = {
  v: string;
  t?: 1;
  d?: Record<string, string>;
};

export type CompactLayoutMap = Record<
  string,
  Partial<Record<CompactStateKey, CompactEntry>>
>;

export type LayoutMetadata = { klid: string; layoutDisplayName: string };

export type KeyboardLayoutMeta = {
  id: string;
  name: string;
  reference: string;
  layoutKey: string;
};

const RESULT_SELECTORS: { key: CompactStateKey; selector: string }[] = [
  {
    key: "u",
    selector: "Result:not([With])",
  },
  {
    key: "s",
    selector: "Result[With='VK_SHIFT']",
  },
  {
    key: "a",
    selector: "Result[With='VK_CONTROL VK_MENU']",
  },
  {
    key: "A",
    selector: "Result[With='VK_SHIFT VK_CONTROL VK_MENU']",
  },
];

/**
 * Reads the "Layout metadata" tables of a driver page. `link` is only used in
 * the error message.
 */
export function parseLayoutMetadata(
  pageContent: string,
  link: string,
): LayoutMetadata[] {
  const $html = cheerio.load(pageContent);
  const layouts: LayoutMetadata[] = [];
  $html(".metaGroup").each((_, element) => {
    if ($html(element).find("h2").text() !== "Layout metadata") {
      return;
    }
    $html(element)
      .find("table")
      .each((_, element) => {
        let klid = null;
        let layoutDisplayName = null;
        $html(element)
          .find("tr")
          .each((_, element) => {
            const thText = $html(element).find("th").text();
            const tdText = $html(element).find("td").text();
            if (thText === "KLID") {
              klid = tdText.split(" ")[0];
            } else if (thText === "Layout Display Name") {
              layoutDisplayName = tdText;
            }
          });
        if (klid && layoutDisplayName) {
          layouts.push({ klid, layoutDisplayName });
        } else {
          throw new Error(
            `Failed to parse layout metadata for ${link}: klid=${klid}, layoutDisplayName=${layoutDisplayName}`,
          );
        }
      });
  });
  return layouts;
}

/** Converts a driver XML into the compact per-key layout map. */
export function parseDriverXml(xmlContent: string): CompactLayoutMap {
  const $ = cheerio.load(xmlContent, { xml: true });
  const layout: CompactLayoutMap = {};
  $("PK[SC]").each((_, element) => {
    const sc = $(element).attr("SC");
    if (!sc) {
      return;
    }
    const keyCode = SC_TO_KEYCODE[sc];
    if (!keyCode) {
      return;
    }
    const obj: Partial<Record<CompactStateKey, CompactEntry>> = {};
    for (const { key, selector } of RESULT_SELECTORS) {
      const resultElement = $(element).find(selector);
      const text = $(resultElement).attr("Text");
      if (text) {
        obj[key] = { v: text };
      }
      const deadKeyTable = $(resultElement).find("DeadKeyTable");
      if (deadKeyTable.length > 0) {
        const accent = $(deadKeyTable).attr("Accent");
        if (!accent) {
          throw new Error(
            `DeadKeyTable for key ${keyCode} with result ${selector} does not have an Accent attribute.`,
          );
        }
        const results = $(deadKeyTable).find("Result");
        const deadKeyResults = Object.fromEntries(
          results
            .map((_, element) => {
              const deadKeyResultText = $(element).attr("Text") as string;
              const deadKeyResultWith = $(element).attr("With") as string;
              return { with: deadKeyResultWith, text: deadKeyResultText };
            })
            .get()
            .map(({ with: withAttr, text }) => [withAttr, text]),
        );
        obj[key] = { v: accent, t: 1, d: deadKeyResults };
      }
    }
    if (Object.keys(obj).length === 0) {
      return;
    }
    layout[keyCode] = obj;
  });
  return layout;
}

/**
 * Converts every driver listed in `links` into the compact layout data and the
 * layout metadata list (sorted by name).
 *
 * `readPage` / `readXml` receive the lower-cased driver file id (the link
 * without slashes) and return the file content.
 */
export function convertDrivers(
  links: string[],
  readPage: (driverFileId: string) => string,
  readXml: (driverFileId: string) => string,
): {
  layoutsByDriver: Record<string, CompactLayoutMap>;
  keyboardLayouts: KeyboardLayoutMeta[];
} {
  const layoutsByDriver: Record<string, CompactLayoutMap> = {};
  const keyboardLayouts: KeyboardLayoutMeta[] = [];
  for (const link of links) {
    const driverFileId = link.replaceAll("/", "").toLowerCase();
    const layoutKey = driverFileId.toUpperCase();
    const pageContent = readPage(driverFileId);
    const xmlContent = readXml(driverFileId);
    const layouts = parseLayoutMetadata(pageContent, link);
    if (layouts.length === 0) {
      continue;
    }
    layoutsByDriver[layoutKey] = parseDriverXml(xmlContent);
    for (const { klid, layoutDisplayName } of layouts) {
      keyboardLayouts.push({
        id: generateLayoutId(layoutDisplayName),
        name: layoutDisplayName,
        reference: `https://kbdlayout.info/${klid}/`,
        layoutKey,
      });
    }
  }
  keyboardLayouts.sort((a, b) => a.name.localeCompare(b.name));
  return { layoutsByDriver, keyboardLayouts };
}

/** Renders the generated TypeScript module (a single minified-ish line block). */
export function buildKeyboardLayoutsModule(
  layoutsByDriver: Record<string, CompactLayoutMap>,
  keyboardLayouts: KeyboardLayoutMeta[],
): string {
  const compactLayouts = JSON.stringify(layoutsByDriver);
  const compactMeta = JSON.stringify(
    keyboardLayouts.map(({ id, name, reference, layoutKey }) => [
      id,
      name,
      reference,
      layoutKey,
    ]),
  );
  const safeCompactLayouts = compactLayouts
    .replaceAll("\u2028", String.raw`\u2028`)
    .replaceAll("\u2029", String.raw`\u2029`);
  const safeCompactMeta = compactMeta
    .replaceAll("\u2028", String.raw`\u2028`)
    .replaceAll("\u2029", String.raw`\u2029`);

  const outputContent = `
import type { KeyboardLayout } from "../../model/keyboard-layout.models.js";
type K = "u" | "s" | "a" | "A";
type V = { v: string; t?: 1; d?: Record<string, string>; };
type L = Record<string, Partial<Record<K, V>>>;

const C = ${safeCompactLayouts} as Record<string, L>;
const M = ${safeCompactMeta} as [string, string, string, string][];

const E = (l: L): KeyboardLayout["layout"] => {
  const o: Record<string, Record<string, { type: "text" | "dead-key"; value: string }>> = {};
  for (const c in l) {
    const r = l[c]!;
    const n: Record<string, { type: "text" | "dead-key"; value: string }> = {};
    for (const k in r) {
      const v = r[k as K]!;
      n[
        k === "u" ? "unmodified"
        : k === "s" ? "withShift"
        : k === "a" ? "withAltGraph"
        : "withShiftAltGraph"
      ] = { type: v.t === 1 ? "dead-key" : "text", value: v.v, deadKeyResults: v.d};
    }
    o[c] = n;
  }
  return o as KeyboardLayout["layout"];
};

export const KEYBOARD_LAYOUTS_FROM_KBDLAYOUT: KeyboardLayout[] = M.map(
  ([id, name, reference, layoutKey]) => ({
    id,
    name,
    reference,
    layout: E(C[layoutKey]!),
  })
);
`;

  return outputContent
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .join("")
    .concat("\n");
}
