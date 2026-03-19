import { mkdirSync, writeFileSync } from "node:fs";
import { getDriverLinks } from "./utils.ts";

mkdirSync("res/driver-xmls/", { recursive: true });
const links = getDriverLinks();

for (const link of links) {
  const response = await fetch(
    "https://kbdlayout.info" + link + "download/xml",
  );
  const pageContent = await response.text();
  const filename = link.replaceAll("/", "").toLowerCase() + ".xml";
  writeFileSync(`res/driver-xmls/${filename}`, pageContent);
  await new Promise((resolve) => setTimeout(resolve, 500));
}
