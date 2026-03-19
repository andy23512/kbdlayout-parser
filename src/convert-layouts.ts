import * as cheerio from "cheerio";
import { readFileSync, writeFileSync } from "node:fs";
import slugify from "slugify";
import { SC_TO_KEYCODE } from "./const/sc-to-keycode.ts";
import type {
  KeyBoardLayout,
  KeyboardLayoutKey,
} from "./model/keyboard-layout.models.ts";
import { getDriverLinks } from "./utils.ts";

const RESULT_SELECTORS: { key: keyof KeyboardLayoutKey; selector: string }[] = [
  {
    key: "unmodified",
    selector: "Result:not([With])",
  },
  {
    key: "withShift",
    selector: "Result[With='VK_SHIFT']",
  },
  {
    key: "withAltGraph",
    selector: "Result[With='VK_CONTROL VK_MENU']",
  },
  {
    key: "withShiftAltGraph",
    selector: "Result[With='VK_SHIFT VK_CONTROL VK_MENU']",
  },
];

const links = getDriverLinks();
const keyboardLayouts: KeyBoardLayout[] = [];
for (const link of links) {
  const pageContent = readFileSync(
    `res/drivers/${link.replaceAll("/", "").toLowerCase()}.html`,
    "utf-8",
  );
  const xmlContent = readFileSync(
    `res/driver-xmls/${link.replaceAll("/", "").toLowerCase()}.xml`,
    "utf-8",
  );
  const $html = cheerio.load(pageContent);
  const layouts: { klid: string; layoutDisplayName: string }[] = [];
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

  const $ = cheerio.load(xmlContent, { xml: true });
  const layout: Record<string, Partial<KeyboardLayoutKey>> = {};
  $("PK[SC]").each((_, element) => {
    const sc = $(element).attr("SC");
    if (!sc) {
      return;
    }
    const keyCode = SC_TO_KEYCODE[sc];
    if (!keyCode) {
      return;
    }
    const obj: Partial<KeyboardLayoutKey> = {};
    for (const { key, selector } of RESULT_SELECTORS) {
      const resultElement = $(element).find(selector);
      const text = $(resultElement).attr("Text");
      if (text) {
        obj[key] = { type: "text", value: text };
      }
      const deadKeyTable = $(resultElement).find("DeadKeyTable");
      if (deadKeyTable.length > 0) {
        const accent = $(deadKeyTable).attr("Accent");
        if (!accent) {
          throw new Error(
            `DeadKeyTable for key ${keyCode} with result ${selector} does not have an Accent attribute.`,
          );
        }
        obj[key] = { type: "dead-key", value: accent };
      }
    }
    if (Object.keys(obj).length === 0) {
      return;
    }
    layout[keyCode] = obj;
  });
  for (const { klid, layoutDisplayName } of layouts) {
    keyboardLayouts.push({
      id: slugify.default(
        layoutDisplayName
          .replaceAll("É", "")
          .replaceAll("’", "")
          .replaceAll("_", "-"),
        {
          lower: true,
          remove: /[.,()]/g,
        },
      ),
      name: layoutDisplayName,
      reference: `https://kbdlayout.info/${klid}/`,
      layout,
    });
  }
}

keyboardLayouts.sort((a, b) => a.name.localeCompare(b.name));

writeFileSync(
  "res/keyboard-layouts.json",
  JSON.stringify(keyboardLayouts, null, 2),
);
