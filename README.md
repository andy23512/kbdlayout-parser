# kbdlayout-parser

## Language Tree Data

This project can parse `res/languages.html` into deterministic JavaScript-consumable tree data.

### Generated Artifacts

- `res/languages-tree-data.json`
- `src/const/languages-tree-data.ts`

### Commands

- `yarn parse-languages-tree`: Parse HTML and generate artifacts.
- `yarn test-languages-tree`: Run parser baseline tests and error-handling checks.
- `yarn verify-languages-tree`: Verify generated JSON and TS artifacts are consistent.

### Migration Note

- **BREAKING**: `res/languages-tree-data.json` now uses a root array of language nodes.
- Previous wrapper format `{ "version": 1, "source": "res/languages.html", "nodes": [...] }` is no longer emitted or accepted by repository verification scripts.
