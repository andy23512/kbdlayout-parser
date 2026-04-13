## Context

The current generated artifact `res/languages-tree-data.json` uses an object wrapper with `version`, `source`, and `nodes`. Internal scripts and potential downstream tooling currently parse this wrapper before accessing language nodes. The requested change is to simplify the artifact contract so the file root is directly the language-node array.

Constraints:

- Keep generation deterministic so existing verification checks remain stable.
- Update all in-repo readers/writers that assume object-root shape.
- Preserve node payload semantics; only the root envelope is removed.

## Goals / Non-Goals

**Goals:**

- Change the artifact contract to a root array of language nodes.
- Keep node-level schema unchanged (id/name/children structure remains intact).
- Update parser/generator/verification pipeline to consistently use the new shape.
- Ensure tests or verification scripts clearly fail when wrapper keys reappear.

**Non-Goals:**

- Redesigning language tree node fields.
- Changing data source crawling/fetching behavior.
- Introducing dual-format support in repository artifacts.

## Decisions

1. Adopt a single canonical output shape: JSON root array.

- Rationale: Removes unnecessary envelope metadata and aligns with primary consumer need.
- Alternative considered: Keep wrapper and add optional export mode. Rejected due to added complexity and ambiguous canonical source.

2. Remove root metadata fields from generated artifact (`version`, `source`).

- Rationale: These fields are part of the removed envelope; retaining them elsewhere would undermine simplification.
- Alternative considered: Move metadata to separate file. Rejected for now because no current requirement consumes this metadata operationally.

3. Update verification logic to validate array-root semantics.

- Rationale: Prevents regressions where object wrapper accidentally returns.
- Alternative considered: Lenient parser accepting both formats. Rejected because it can mask contract drift.

4. Keep migration scoped to repository code paths only.

- Rationale: The change set is focused and easy to reason about; external consumer migration is communicated as breaking.
- Alternative considered: Compatibility adapter in runtime code. Rejected since repository currently ships static data artifacts, not a runtime API layer.

## Risks / Trade-offs

- [Risk] External or undocumented consumers break on root shape change. -> Mitigation: Mark change as BREAKING in proposal/spec and provide migration note in tasks.
- [Risk] Internal scripts miss one deserialization path and fail later. -> Mitigation: Search all references to `version`, `source`, `nodes` in tree-data handling and update in one pass.
- [Risk] Loss of provenance metadata from artifact. -> Mitigation: Preserve provenance in generation logs or commit context if needed; defer separate metadata artifact until required.

## Migration Plan

1. Update generation path to serialize root array.
2. Update verification/tests to assert root array and absence of wrapper keys.
3. Regenerate `res/languages-tree-data.json` in new format.
4. Run repository checks and compare semantic node count/structure before and after.
5. Rollback strategy: revert change commit to restore wrapped artifact shape.

## Open Questions

- Do any external automation jobs parse `version` or `source` from this file directly?
- Should provenance metadata be reintroduced later in a dedicated sidecar artifact?
