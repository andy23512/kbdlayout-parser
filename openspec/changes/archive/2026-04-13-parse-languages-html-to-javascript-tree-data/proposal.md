## Why

目前專案的語言資料來源在 `res/languages.html`，內容是巢狀清單結構，不利於程式化查詢、驗證與後續轉換流程。將其解析為 JavaScript 樹狀資料可讓資料處理流程一致化，並降低手動維護 HTML 結構時的錯誤風險。

## What Changes

- 新增一個可重複執行的解析流程，將 `res/languages.html` 轉為 JavaScript 可使用的樹狀資料結構。
- 定義節點資料模型（例如群組與語言節點）與最小必要欄位，確保輸出結構穩定。
- 新增輸出產物（例如 JSON/TS module）供現有轉換或查詢程式直接引用。
- 為解析流程補上驗證與錯誤處理，避免 HTML 結構變更時默默產生錯誤資料。

## Capabilities

### New Capabilities

- `languages-tree-data-generation`: 由 `res/languages.html` 產生可被程式消費的語言樹狀資料，並提供一致的節點結構與輸出格式。

### Modified Capabilities

- None.

## Impact

- Affected code:
  - `src/` 下與資料抓取/轉換相關腳本（新增或擴充解析器與輸出流程）。
  - `res/languages.html` 作為解析輸入來源。
  - 可能新增 `res/` 或 `src/` 下的輸出資料檔。
- APIs/Interfaces:
  - 新增內部資料介面（樹節點型別與欄位契約）。
- Dependencies:
  - 可能使用既有 HTML 解析能力；若不足，評估新增輕量解析依賴。
- Systems:
  - 影響資料建置流程與後續使用語言資料的腳本。
