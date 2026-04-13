import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("res", { recursive: true });

const response = await fetch("https://kbdlayout.info/features/languages");
const pageContent = await response.text();

writeFileSync("res/languages.html", pageContent);
