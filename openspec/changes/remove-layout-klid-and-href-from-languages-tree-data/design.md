## Context

Languages tree layout objects currently include `klid` and `href`, which are source-link details rather than stable consumer-facing metadata. With layout `id` already established as the canonical join key, continuing to expose `klid` and `href` increases schema surface area and downstream coupling to source URL conventions.

Constraints:

- Keep languages tree hierarchy and remaining layout semantics unchanged.
- Preserve deterministic generation across JSON and TS artifacts.
- Ensure verification catches regressions where removed fields are reintroduced.

## Goals / Non-Goals

**Goals:**

- Remove `klid` and `href` from the languages tree layout schema.
- Keep `id`, `name`, and default indicator fields as canonical layout metadata.
- Update parser/model/tests/verification to enforce the reduced layout object shape.
- Regenerate artifacts and keep JSON/TS consistency guarantees.

**Non-Goals:**

- Changing layout `id` generation logic.
- Changing language tree node hierarchy semantics.
- Changing `keyboard-layouts.json` schema or `convert-layouts.ts` output contracts.

## Decisions

1. Treat `klid` and `href` as non-contract fields for languages tree artifacts and remove them.

- Rationale: They are derivation/source details, not required by primary consumers of tree data.
- Alternative considered: Keep fields as optional/deprecated. Rejected due to prolonged dual-schema ambiguity.

2. Keep parser extraction of source link data internal only if needed for intermediate parsing, but do not emit in final schema.

- Rationale: Avoid leaking transport-specific fields while preserving robust parsing.
- Alternative considered: stop parsing source link values entirely. Rejected because parser still needs source anchors for identifying layout entries.

3. Enforce removal via tests and artifact verification.

- Rationale: Prevent accidental reintroduction from future refactors.
- Alternative considered: rely on model typing only. Rejected because generated artifacts may still drift if runtime mapping regresses.

## Risks / Trade-offs

- [Risk] Existing consumers depending on `klid`/`href` break. -> Mitigation: mark change as BREAKING and provide migration guidance to use `id`/`name` instead.
- [Risk] Hidden code path still expects removed fields. -> Mitigation: search and update in-repo consumers, plus run verification scripts.
- [Risk] Parser logic accidentally drops required fields while removing old ones. -> Mitigation: add schema-focused assertions in tests and regenerate artifacts to validate output.

## Migration Plan

1. Update `LanguageLayoutRef` model to remove `klid` and `href`.
2. Update parser layout mapping to emit only supported layout fields.
3. Update tests/verification to assert removed fields are absent.
4. Regenerate `res/languages-tree-data.json` and `src/const/languages-tree-data.ts`.
5. Rollback strategy: revert commit if downstream breakage requires temporary compatibility period.

## Open Questions

- Do any external scripts consume `klid`/`href` directly and require a short transition notice beyond README migration notes?
