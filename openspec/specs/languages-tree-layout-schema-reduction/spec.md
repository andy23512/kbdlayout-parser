# languages-tree-layout-schema-reduction Specification

## Purpose
TBD - created by archiving change remove-layout-klid-and-href-from-languages-tree-data. Update Purpose after archive.
## Requirements
### Requirement: Languages Tree Layout Objects Exclude Source Link Fields

The system MUST NOT emit `klid` or `href` in layout objects within languages tree data artifacts.

#### Scenario: Generate languages tree artifacts

- **WHEN** languages tree artifacts are generated
- **THEN** each layout object MUST omit `klid` and `href`

### Requirement: Reduced Layout Schema Remains Canonical

The system MUST emit layout objects with canonical fields required by current consumers (`id`, `name`, `isDefault`, `isDefaultFromOtherLanguage`) after removing `klid` and `href`.

#### Scenario: Build layout entries for a language node

- **WHEN** parser maps layout list items into layout objects
- **THEN** each emitted layout object MUST include canonical fields and MUST NOT include removed fields

### Requirement: Verification Rejects Removed Field Reintroduction

Repository verification and tests MUST fail if generated languages tree artifacts contain `klid` or `href` in any layout object.

#### Scenario: Validate generated artifacts

- **WHEN** verification parses generated JSON and TS languages tree artifacts
- **THEN** it MUST assert no layout object contains `klid` or `href`

