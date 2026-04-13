import * as cheerio from "cheerio";
import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { generateLayoutId } from "./layout-id.ts";
import type {
  LanguageLayoutRef,
  LanguageTreeData,
  LanguageTreeNode,
} from "./model/languages-tree.models.ts";

const DEFAULT_SOURCE_PATH = "res/languages.html";
const DEFAULT_JSON_OUTPUT_PATH = "res/languages-tree-data.json";
const DEFAULT_TS_OUTPUT_PATH = "src/const/languages-tree-data.ts";
type CheerioAcceptedElement = Parameters<cheerio.CheerioAPI>[0];

function isElementWithTagName(element: unknown, tagName: string): boolean {
  if (!element || typeof element !== "object") {
    return false;
  }
  const maybeTagName = (element as { tagName?: unknown }).tagName;
  return typeof maybeTagName === "string" && maybeTagName === tagName;
}

function cloneNode(node: LanguageTreeNode): LanguageTreeNode {
  if (node.kind === "group") {
    return {
      kind: "group",
      code: node.code,
      name: node.name,
      layouts: node.layouts.map((layout) => ({ ...layout })),
      children: node.children.map(cloneNode),
    };
  }
  return {
    kind: "language",
    code: node.code,
    name: node.name,
    layouts: node.layouts.map((layout) => ({ ...layout })),
  };
}

function parseLayoutLi(
  $: cheerio.CheerioAPI,
  li: CheerioAcceptedElement,
  contextPath: string,
): LanguageLayoutRef {
  const directChildren = $(li)
    .contents()
    .toArray()
    .filter((content) => content.type === "tag");

  const directAnchors = directChildren.filter((content) =>
    isElementWithTagName(content, "a"),
  );
  const directSpans = directChildren.filter((content) =>
    isElementWithTagName(content, "span"),
  );

  if (directSpans.length > 0) {
    throw new Error(
      `${contextPath}: expected a layout list item, but found language span nodes.`,
    );
  }
  if (directAnchors.length !== 1) {
    throw new Error(
      `${contextPath}: expected exactly one direct layout link, found ${directAnchors.length}.`,
    );
  }

  const anchor = directAnchors[0];
  const anchorNode = $(anchor);
  const href = anchorNode.attr("href");
  if (!href) {
    throw new Error(`${contextPath}: layout link is missing href.`);
  }

  const klid = href.replaceAll("/", "").trim();
  if (!klid) {
    throw new Error(
      `${contextPath}: layout link href '${href}' produced empty KLID.`,
    );
  }

  const name = anchorNode.text().trim();
  if (!name) {
    throw new Error(
      `${contextPath}: layout link '${href}' has empty display name.`,
    );
  }

  const itemText = $(li).text();
  const isDefaultFromOtherLanguage = itemText.includes("**");
  const isDefault =
    isDefaultFromOtherLanguage || /(^|\s)\*(?!\*)/.test(itemText);

  return {
    id: generateLayoutId(name),
    name,
    isDefault,
    isDefaultFromOtherLanguage,
  };
}

function parseLanguageLi(
  $: cheerio.CheerioAPI,
  li: CheerioAcceptedElement,
  contextPath: string,
): LanguageTreeNode[] {
  const directSpanElements = $(li)
    .contents()
    .toArray()
    .filter((content) => {
      return (
        content.type === "tag" &&
        isElementWithTagName(content, "span") &&
        Boolean($(content).attr("title"))
      );
    }) as CheerioAcceptedElement[];

  if (directSpanElements.length === 0) {
    throw new Error(
      `${contextPath}: language node is missing direct span[title] metadata.`,
    );
  }

  const directUlElements = $(li)
    .contents()
    .toArray()
    .filter(
      (content) =>
        content.type === "tag" && isElementWithTagName(content, "ul"),
    ) as CheerioAcceptedElement[];

  const layouts: LanguageLayoutRef[] = [];
  const childNodes: LanguageTreeNode[] = [];

  directUlElements.forEach((directUl, ulIndex) => {
    const childLis = $(directUl)
      .children()
      .toArray()
      .filter(
        (content) =>
          content.type === "tag" && isElementWithTagName(content, "li"),
      ) as CheerioAcceptedElement[];

    childLis.forEach((childLi, childIndex) => {
      const childPath = `${contextPath} > ul[${ulIndex}] > li[${childIndex}]`;
      const hasDirectLanguageSpan = $(childLi)
        .contents()
        .toArray()
        .some((content) => {
          return (
            content.type === "tag" &&
            isElementWithTagName(content, "span") &&
            Boolean($(content).attr("title"))
          );
        });

      if (hasDirectLanguageSpan) {
        childNodes.push(...parseLanguageLi($, childLi, childPath));
        return;
      }
      layouts.push(parseLayoutLi($, childLi, childPath));
    });
  });

  return directSpanElements.map((spanElement, spanIndex) => {
    const code = $(spanElement).attr("title")?.trim();
    const name =
      $(spanElement).find("b").first().text().trim() ||
      $(spanElement).text().trim();
    if (!code) {
      throw new Error(
        `${contextPath} > span[${spanIndex}]: missing language code.`,
      );
    }
    if (!name) {
      throw new Error(
        `${contextPath} > span[${spanIndex}]: missing language display name.`,
      );
    }

    if (childNodes.length > 0) {
      return {
        kind: "group",
        code,
        name,
        layouts: layouts.map((layout) => ({ ...layout })),
        children: childNodes.map(cloneNode),
      };
    }
    return {
      kind: "language",
      code,
      name,
      layouts: layouts.map((layout) => ({ ...layout })),
    };
  });
}

export function parseLanguagesHtml(html: string): LanguageTreeData {
  const $ = cheerio.load(html);
  const treeColumns = $("ul.tree");

  if (treeColumns.length === 0) {
    throw new Error(
      "No language trees found: expected at least one 'ul.tree' section.",
    );
  }

  const nodes: LanguageTreeNode[] = [];
  treeColumns.each((treeIndex, treeUl) => {
    const rootLis = $(treeUl)
      .children()
      .toArray()
      .filter(
        (content) =>
          content.type === "tag" && isElementWithTagName(content, "li"),
      ) as CheerioAcceptedElement[];

    if (rootLis.length === 0) {
      throw new Error(
        `Tree ${treeIndex}: expected at least one root language list item inside ul.tree.`,
      );
    }

    rootLis.forEach((rootLi, rootLiIndex) => {
      const contextPath = `tree[${treeIndex}] > li[${rootLiIndex}]`;
      nodes.push(...parseLanguageLi($, rootLi, contextPath));
    });
  });

  if (nodes.length === 0) {
    throw new Error("No language nodes parsed from language trees.");
  }

  return nodes;
}

function writeFileAtomic(filePath: string, content: string): void {
  mkdirSync(dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.tmp-${process.pid}`;
  writeFileSync(tempPath, content, "utf-8");
  renameSync(tempPath, filePath);
}

function formatAsTsModule(data: LanguageTreeData): string {
  const json = JSON.stringify(data, null, 2);
  return [
    'import type { LanguageTreeData } from "../model/languages-tree.models.ts";',
    "",
    `export const LANGUAGES_TREE_DATA: LanguageTreeData = ${json};`,
    "",
    "export default LANGUAGES_TREE_DATA;",
    "",
  ].join("\n");
}

export function generateLanguagesTreeArtifacts(options?: {
  sourcePath?: string;
  jsonOutputPath?: string;
  tsOutputPath?: string;
}): LanguageTreeData {
  const sourcePath = options?.sourcePath ?? DEFAULT_SOURCE_PATH;
  const jsonOutputPath = options?.jsonOutputPath ?? DEFAULT_JSON_OUTPUT_PATH;
  const tsOutputPath = options?.tsOutputPath ?? DEFAULT_TS_OUTPUT_PATH;

  const html = readFileSync(sourcePath, "utf-8");
  const data = parseLanguagesHtml(html);
  const json = `${JSON.stringify(data, null, 2)}\n`;

  writeFileAtomic(jsonOutputPath, json);
  writeFileAtomic(tsOutputPath, formatAsTsModule(data));

  return data;
}
