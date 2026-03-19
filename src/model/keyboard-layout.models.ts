import type { WSKCode } from "./key-code.models.ts";

/**
 * Output character information of a key on a keyboard layout.
 */
export interface KeyboardLayoutKey {
  unmodified: string;
  withShift: string;
  withAltGraph: string;
  withShiftAltGraph: string;
}

/**
 * Data of a keyboard layout (OS layout), which map key codes to keyboard layout keys
 */
export interface KeyBoardLayout {
  id: string;
  name: string;
  reference: string;
  layout: Partial<Record<WSKCode, Partial<KeyboardLayoutKey>>>;
}
