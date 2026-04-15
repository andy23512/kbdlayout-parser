## Why

Languages tree data currently includes layout display metadata but no stable layout `id`, which makes joining with other generated datasets harder and introduces duplicated normalization logic in downstream consumers. Adding a deterministic `id` generated with the same logic as `src/convert-layouts.ts` ensures consistent identifiers across artifacts.

## What Changes

- Add an `id` field to each layout entry in languages tree data artifacts.
- Generate the new `id` using the same normalization and slug rules used in `src/convert-layouts.ts`.
- Extract layout id generation into a shared utility so `convert-layouts.ts` and languages tree generation can use one source of truth.
- Update languages tree parser/generator output models to include the layout `id` field.
- Update verification/tests and generated artifacts to enforce and validate the new field.
- **BREAKING**: Layout object schema in languages tree data changes by adding a required `id` property.

## Capabilities

### New Capabilities

- `languages-tree-layout-id`: Define and enforce deterministic layout id generation in languages tree data with parity to `convert-layouts.ts` logic.

### Modified Capabilities

- None.

## Impact

- Affected code: `src/layout-id.ts`, `src/convert-layouts.ts`, `src/languages-tree.ts`, `src/model/languages-tree.models.ts`, parser tests, artifact verification logic, and generated constants.
- Affected artifacts: `res/languages-tree-data.json` and `res/languages-tree-data.ts`.
- API/data contract: layout entries now include required `id`.
- Dependencies: no new external dependency expected; reuse existing `slugify` behavior already present in repository.
