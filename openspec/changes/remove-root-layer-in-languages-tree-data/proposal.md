## Why

`res/languages-tree-data.json` currently wraps the actual language nodes in a root object with `version`, `source`, and `nodes`. This extra wrapper complicates downstream consumers that only need the language tree and now creates friction for simpler parsing and direct data embedding.

## What Changes

- Remove the root wrapper object from `res/languages-tree-data.json`.
- Emit the language tree data as the root JSON value (an array of language nodes).
- Update generation and verification logic to read/write the new root-array format.
- Update any internal consumers that still expect `{ version, source, nodes }`.
- **BREAKING**: The JSON contract changes from object-wrapped payload to root array.

## Capabilities

### New Capabilities

- `languages-tree-data-shape`: Define and enforce a root-array JSON format for languages tree artifacts.

### Modified Capabilities

- None.

## Impact

- Affected code: language tree parser/generator and artifact verification scripts under `src/`.
- Affected artifacts: `res/languages-tree-data.json` and related test/validation expectations.
- API/data contract: breaking schema change for consumers reading this JSON file.
- Dependencies: no new external dependencies expected.
