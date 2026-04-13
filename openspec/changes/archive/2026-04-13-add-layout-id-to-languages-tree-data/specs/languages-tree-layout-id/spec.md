## ADDED Requirements

### Requirement: Languages Tree Layout Entries Include Stable Id

The system MUST include an `id` field on every layout entry in languages tree data artifacts.

#### Scenario: Generate languages tree artifacts with layout entries

- **WHEN** the languages tree generation process emits layout objects
- **THEN** each layout object MUST include a non-empty `id` field

### Requirement: Layout Id Generation Matches convert-layouts Logic

The system MUST generate each languages tree layout `id` using the same normalization and slug behavior used in `src/convert-layouts.ts`.

#### Scenario: Normalize layout name before slugging

- **WHEN** a layout display name contains `É`, `’`, or `_`
- **THEN** id generation MUST apply the same replacements as `convert-layouts.ts` before slug creation

#### Scenario: Apply same slug options

- **WHEN** id generation converts normalized layout names into slugs
- **THEN** it MUST use lowercase output and remove punctuation with the same `remove` pattern used in `convert-layouts.ts`

### Requirement: Verification Rejects Missing Or Divergent Layout Ids

Repository verification and tests MUST fail when a layout entry is missing `id` or when generated ids diverge from the required convert-layouts-compatible logic.

#### Scenario: Verify generated artifact consistency

- **WHEN** verification reads generated languages tree JSON and TS artifacts
- **THEN** it MUST assert that layout objects include `id` and that artifacts remain mutually consistent under the updated schema
