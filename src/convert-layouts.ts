import * as cheerio from "cheerio";
import { readFileSync, writeFileSync } from "node:fs";
import * as prettier from "prettier";
import * as ts from "typescript";
import { SC_TO_KEYCODE } from "./const/sc-to-keycode.ts";
import { generateLayoutId } from "./layout-id.ts";
import type { KeyboardLayoutKey } from "./model/keyboard-layout.models.ts";
import { getDriverLinks } from "./utils.ts";

const factory = ts.factory;

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

const importNode = factory.createImportDeclaration(
  undefined,
  factory.createImportClause(
    false,
    undefined,
    factory.createNamedImports([
      factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier("KeyBoardLayout"),
      ),
      factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier("KeyboardLayoutMap"),
      ),
    ]),
  ),
  factory.createStringLiteral("../model/keyboard-layout.models.ts"),
);

const lineBreakNode = factory.createIdentifier("\n");

const tsNodes: ts.Node[] = [importNode, lineBreakNode];

const links = getDriverLinks();
const keyboardLayouts: {
  id: string;
  name: string;
  reference: string;
  driverFileId: string;
}[] = [];
for (const link of links) {
  const driverFileId = link.replaceAll("/", "").toLowerCase();
  const pageContent = readFileSync(`res/drivers/${driverFileId}.html`, "utf-8");
  const xmlContent = readFileSync(
    `res/driver-xmls/${driverFileId}.xml`,
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
  if (layouts.length === 0) {
    continue;
  }

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
  const layoutMapNode = layoutMapToTsNode(
    `${driverFileId.toUpperCase()}`,
    JSON.stringify(layout),
  );
  tsNodes.push(layoutMapNode);
  for (const { klid, layoutDisplayName } of layouts) {
    keyboardLayouts.push({
      id: generateLayoutId(layoutDisplayName),
      name: layoutDisplayName,
      reference: `https://kbdlayout.info/${klid}/`,
      driverFileId,
    });
  }
}

keyboardLayouts.sort((a, b) => a.name.localeCompare(b.name));

const keyboardLayoutNodes: ts.Expression[] = keyboardLayouts.map(
  ({ id, name, reference, driverFileId }) =>
    factory.createObjectLiteralExpression([
      factory.createPropertyAssignment(
        factory.createIdentifier("id"),
        factory.createStringLiteral(id),
      ),
      factory.createPropertyAssignment(
        factory.createIdentifier("name"),
        factory.createStringLiteral(name),
      ),
      factory.createPropertyAssignment(
        factory.createIdentifier("reference"),
        factory.createStringLiteral(reference),
      ),
      factory.createPropertyAssignment(
        factory.createIdentifier("layout"),
        factory.createIdentifier(driverFileId.toUpperCase()),
      ),
    ]),
);
const arrayLiteralNode = factory.createArrayLiteralExpression(
  keyboardLayoutNodes,
  true,
);
const keyboardLayoutsStatement = factory.createVariableStatement(
  undefined,
  factory.createVariableDeclarationList(
    [
      factory.createVariableDeclaration(
        factory.createIdentifier("KEYBOARD_LAYOUTS"),
        undefined,
        factory.createTypeReferenceNode("KeyBoardLayout[]", undefined),
        arrayLiteralNode,
      ),
    ],
    ts.NodeFlags.Const,
  ),
);
tsNodes.push(keyboardLayoutsStatement);

let output = "";
for (const node of tsNodes) {
  const printer = ts.createPrinter();
  const result = printer.printNode(
    ts.EmitHint.Unspecified,
    node,
    ts.createSourceFile(
      "temp.ts",
      "",
      ts.ScriptTarget.ESNext,
      false,
      ts.ScriptKind.TS,
    ),
  );
  output += result + "\n";
}

writeFileSync("res/keyboard-layouts.ts", await formatCode(output), "utf-8");

function layoutMapToTsNode(
  layoutMapName: string,
  json: string,
): ts.VariableStatement {
  return factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [
        factory.createVariableDeclaration(
          factory.createIdentifier(layoutMapName.toUpperCase()),
          undefined,
          factory.createTypeReferenceNode("KeyboardLayoutMap", undefined),
          jsonToTsNode(json),
        ),
      ],
      ts.NodeFlags.Const,
    ),
  );
}

function jsonToTsNode(json: string): ts.Expression {
  const sourceFile = ts.createSourceFile(
    "temp.ts",
    `(${json})`,
    ts.ScriptTarget.ESNext,
    false,
    ts.ScriptKind.TS,
  );

  // Access the AST nodes
  const statement = sourceFile.statements[0] as ts.ExpressionStatement;
  const expression = statement.expression; // This is the root of your JSON AST (ObjectLiteralExpression)
  return expression;
}

async function formatCode(code: string): Promise<string> {
  const prettierConfig = await prettier.resolveConfig(process.cwd());
  return prettier.format(code, {
    ...prettierConfig,
    parser: "typescript",
  });
}
