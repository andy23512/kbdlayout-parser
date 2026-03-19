import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("res", { recursive: true });

const response = await fetch("https://kbdlayout.info/");
const pageContent = await response.text();

writeFileSync("res/index.html", pageContent);
