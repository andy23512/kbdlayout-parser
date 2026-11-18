import { readFileSync, writeFileSync } from "node:fs";
import {
  buildKeyboardLayoutsModule,
  convertDrivers,
} from "./convert-layouts-lib.ts";
import { getDriverLinks } from "./utils.ts";

const { layoutsByDriver, keyboardLayouts } = convertDrivers(
  getDriverLinks(),
  (driverFileId) => readFileSync(`res/drivers/${driverFileId}.html`, "utf-8"),
  (driverFileId) => readFileSync(`res/driver-xmls/${driverFileId}.xml`, "utf-8"),
);

writeFileSync(
  "res/keyboard-layouts-from-kbdlayout.ts",
  buildKeyboardLayoutsModule(layoutsByDriver, keyboardLayouts),
  "utf-8",
);
