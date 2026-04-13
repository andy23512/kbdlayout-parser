## 1. Align Layout Schema

- [x] 1.1 Add required `id` field to the languages tree layout model type
- [x] 1.2 Identify all languages tree generation paths that create layout objects and ensure they populate `id`
- [x] 1.3 Confirm no in-repo reader assumes layout objects exclude `id`

## 2. Implement Id Generation Parity

- [x] 2.1 Extract or implement languages tree layout id generation logic matching `src/convert-layouts.ts` normalization (`É`, `’`, `_`) and slug options
- [x] 2.2 Apply the parity id-generation logic when parsing/building each layout entry in `src/languages-tree.ts`
- [x] 2.3 Add focused tests for representative names to verify generated ids match convert-layouts behavior

## 3. Update Artifacts And Verification

- [x] 3.1 Update artifact verification to require layout `id` presence and consistency between JSON and TS outputs
- [x] 3.2 Regenerate `res/languages-tree-data.json` and `src/const/languages-tree-data.ts` with new layout `id` fields
- [x] 3.3 Run parser/tests/verification scripts and fix any regressions

## 4. Document Breaking Contract Change

- [x] 4.1 Add migration note describing the new required layout `id` field in languages tree data
- [x] 4.2 Document that layout ids in languages tree data follow the same generation rules as `convert-layouts.ts`
