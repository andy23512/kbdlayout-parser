## Why

The languages tree data currently includes `klid` and `href` inside each layout object, but downstream usage increasingly relies on normalized layout `id` and display metadata instead of transport-specific link fields. Removing these fields simplifies the schema and reduces redundant coupling to source URL formats.

## What Changes

- Remove `klid` and `href` from layout objects in languages tree data artifacts.
- Keep `id`, `name`, and default flags in layout objects as the canonical layout metadata for languages tree consumers.
- Update parser/model generation paths so removed fields are no longer emitted.
- Update verification/tests and generated artifacts to enforce the new reduced layout schema.
- **BREAKING**: layout object schema in languages tree data no longer includes `klid` and `href`.

## Capabilities

### New Capabilities

- `languages-tree-layout-schema-reduction`: Define and enforce a reduced layout object schema for languages tree data without `klid` and `href`.

### Modified Capabilities

- None.

## Impact

- Affected code: languages tree parser/generator models, verification scripts, parser tests, and generated constants.
- Affected artifacts: `res/languages-tree-data.json` and `res/languages-tree-data.ts`.
- API/data contract: layout objects remove `klid` and `href`.
- Dependencies: no new dependency expected.
