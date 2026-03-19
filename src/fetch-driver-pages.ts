import { mkdirSync, writeFileSync } from "node:fs";
import { getDriverLinks } from "./utils.js";

mkdirSync("res/drivers/", { recursive: true });
const links = getDriverLinks();

for (const link of links) {
  const response = await fetch("https://kbdlayout.info" + link);
  const pageContent = await response.text();
  const filename = link.replaceAll("/", "").toLowerCase() + ".html";
  writeFileSync(`res/drivers/${filename}`, pageContent);
  await new Promise((resolve) => setTimeout(resolve, 500));
}
