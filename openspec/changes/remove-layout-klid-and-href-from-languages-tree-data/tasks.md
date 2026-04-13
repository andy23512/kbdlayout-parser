## 1. Reduce Layout Model Surface

- [x] 1.1 Remove `klid` and `href` from the `LanguageLayoutRef` model
- [x] 1.2 Update all parser mapping paths to stop emitting `klid` and `href`
- [x] 1.3 Confirm no in-repo reader relies on `layout.klid` or `layout.href`

## 2. Preserve Canonical Layout Metadata

- [x] 2.1 Ensure layout objects continue to include canonical fields (`id`, `name`, `isDefault`, `isDefaultFromOtherLanguage`)
- [x] 2.2 Keep existing shared layout id generation behavior unchanged while removing `klid` and `href`
- [x] 2.3 Add/adjust tests to assert removed fields are absent and canonical fields remain present

## 3. Strengthen Verification And Regenerate Artifacts

- [x] 3.1 Update artifact verification to fail if any layout object includes `klid` or `href`
- [x] 3.2 Regenerate `res/languages-tree-data.json` and `src/const/languages-tree-data.ts` with reduced layout objects
- [x] 3.3 Run parser/tests/verification scripts and fix regressions

## 4. Document Breaking Contract Change

- [x] 4.1 Add migration note stating layout objects no longer include `klid` and `href`
- [x] 4.2 Document expected replacement usage (`id` and `name`) for downstream consumers
