import * as cheerio from "cheerio";
import { readFileSync } from "node:fs";

export function getDriverLinks(): string[] {
  const indexPageContent = readFileSync("res/index.html", "utf-8");
  const $ = cheerio.load(indexPageContent);

  const tables = $("table");
  const links: string[] = [];
  tables.each((i, table) => {
    const rows = $(table).find("tr");
    rows.each((j, row) => {
      const cells = $(row).find("td");
      if ($(cells[0])?.text().toLowerCase().endsWith(".dll")) {
        const anchor = $(cells[1]).find("a");
        if (anchor.length > 0) {
          const href = anchor.attr("href");
          if (href) {
            links.push(href);
          } else {
            throw new Error(
              `Table ${i}, Row ${j} contains a link in the second cell, but it does not have an href attribute.`,
            );
          }
        } else {
          throw new Error(
            `Table ${i}, Row ${j} does not contain a link in the second cell.`,
          );
        }
      }
    });
  });
  return links;
}
