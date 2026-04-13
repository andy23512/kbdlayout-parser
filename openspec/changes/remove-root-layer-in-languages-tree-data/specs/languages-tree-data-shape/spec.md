## ADDED Requirements

### Requirement: Languages Tree Artifact Uses Root Array

The system MUST serialize `res/languages-tree-data.json` with the language node collection as the root JSON value, and the root JSON value MUST be an array.

#### Scenario: Generate languages tree artifact

- **WHEN** the languages tree artifact generation process writes `res/languages-tree-data.json`
- **THEN** the root JSON value MUST be an array of language tree nodes

### Requirement: Legacy Wrapper Keys Are Not Emitted

The system MUST NOT emit `version`, `source`, or `nodes` as root-level keys in `res/languages-tree-data.json`.

#### Scenario: Validate generated artifact root keys

- **WHEN** verification reads `res/languages-tree-data.json`
- **THEN** the root JSON value MUST NOT be an object containing `version`, `source`, or `nodes`

### Requirement: Repository Consumers Parse Array-Root Contract

Repository scripts that consume `res/languages-tree-data.json` MUST parse the file using the array-root contract and MUST fail validation when the legacy object-root wrapper is present.

#### Scenario: Consumer reads current artifact

- **WHEN** a repository parser or verifier loads `res/languages-tree-data.json`
- **THEN** it MUST treat the loaded value as an array-root language tree and reject legacy wrapper format
