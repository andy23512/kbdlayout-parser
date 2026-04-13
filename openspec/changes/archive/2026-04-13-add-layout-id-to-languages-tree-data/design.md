## Context

Languages tree data currently exposes layout entries without a stable `id`, while `src/convert-layouts.ts` already defines deterministic id generation from layout display names. This mismatch forces consumers to either duplicate conversion logic or rely on fragile display-name matching when correlating languages tree layouts with keyboard layout catalogs.

Constraints:

- Preserve existing languages tree hierarchy and layout metadata fields.
- Keep id generation behavior byte-for-byte compatible with `convert-layouts.ts` logic.
- Avoid introducing a second divergent slug pipeline.

## Goals / Non-Goals

**Goals:**

- Add a required `id` field to each layout entry produced by languages tree generation.
- Reuse the same normalization and slug behavior used by `convert-layouts.ts`.
- Ensure generated JSON and TS artifacts remain deterministic after this schema update.
- Add verification/tests that fail when layout ids are missing or generated with incompatible logic.

**Non-Goals:**

- Rewriting `convert-layouts.ts` id generation strategy.
- Backfilling alternative id aliases for historical compatibility.
- Changing tree parsing semantics unrelated to layout id assignment.

## Decisions

1. Use one shared id-generation rule-set aligned with `convert-layouts.ts`.

- Rationale: cross-artifact joinability depends on exact parity.
- Alternative considered: independent slug strategy in languages tree parser. Rejected due to long-term drift risk.

Implementation note:

- Extracted into shared utility `src/layout-id.ts` and used by `src/convert-layouts.ts`; languages tree generation will consume the same utility in this change.

2. Keep id generation input as layout display name and apply the same preprocessing.

- Rationale: existing keyboard layout IDs are name-derived.
- Alternative considered: derive from KLID/href only. Rejected because current canonical IDs are not KLID-first.

3. Treat `id` as required in the languages tree layout schema.

- Rationale: optional ids would preserve ambiguity and weaken downstream contracts.
- Alternative considered: optional `id` during migration window. Rejected to avoid dual-mode handling.

4. Validate parity using test/verification checks against generated artifacts.

- Rationale: prevents accidental divergence if either side changes in the future.
- Alternative considered: document-only guarantee. Rejected because it does not detect regressions automatically.

## Risks / Trade-offs

- [Risk] Hidden differences in string normalization between files can cause mismatched IDs. -> Mitigation: explicitly codify and test the same normalization steps (`É`, `’`, `_`, slug options).
- [Risk] Existing consumers may assume layout objects have only legacy fields. -> Mitigation: document schema extension and mark as BREAKING in proposal/spec.
- [Risk] Future changes to `convert-layouts.ts` may drift if not mirrored. -> Mitigation: include parity-focused checks and implementation task to keep a single source-of-truth behavior.

## Migration Plan

1. Update languages tree layout model with required `id` field.
2. Add/align slug generation utility in languages tree generation to match `convert-layouts.ts` exactly.
3. Regenerate languages tree JSON/TS artifacts.
4. Update parser tests and artifact verification for required id and deterministic parity.
5. Rollback strategy: revert the change commit to restore previous layout schema.

## Open Questions

- Do downstream consumers need a temporary compatibility note for display-name keyed joins?
