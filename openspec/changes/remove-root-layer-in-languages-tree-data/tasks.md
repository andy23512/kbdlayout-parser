## 1. Update Artifact Contract

- [x] 1.1 Locate all in-repo readers/writers of `res/languages-tree-data.json` that assume `{ version, source, nodes }`
- [x] 1.2 Update generation code to serialize language nodes as the root JSON array
- [x] 1.3 Remove legacy wrapper-key handling (`version`, `source`, `nodes`) from the canonical generation path

## 2. Align Verification And Tests

- [x] 2.1 Update verification logic to require array-root shape and reject legacy object-root wrapper
- [x] 2.2 Update or add tests/fixtures to assert root-array output and absence of wrapper keys
- [x] 2.3 Regenerate `res/languages-tree-data.json` and verify semantic node structure is preserved

## 3. Validate And Document Breaking Change

- [x] 3.1 Run project checks for languages tree generation/verification paths and fix any regressions
- [x] 3.2 Confirm no remaining internal parser expects `nodes` at root level
- [x] 3.3 Add migration note for downstream consumers about the breaking schema change
