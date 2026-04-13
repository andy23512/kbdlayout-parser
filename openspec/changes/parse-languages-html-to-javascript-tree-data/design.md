## Context

目前語言分類資料主要存在 `res/languages.html`，格式為階層式 HTML 清單，缺少可直接被程式消費的穩定資料契約。既有資料流程多以 JSON/XML 為主，若繼續直接依賴 HTML 進行人工或 ad-hoc 解析，會提高維護成本，且在結構微調時難以及早發現破壞性變更。

## Goals / Non-Goals

**Goals:**

- 建立可重複執行的解析流程，將 `res/languages.html` 轉為一致的樹狀資料。
- 定義節點模型與最小必要欄位，讓下游程式可穩定讀取。
- 對輸入 HTML 結構加入必要驗證，避免靜默失敗。
- 提供可版本化的輸出檔，納入既有資料產生流程。

**Non-Goals:**

- 不重新設計 `languages.html` 的呈現樣式或內容編輯流程。
- 不在本次變更中改寫所有既有消費端，只提供可被逐步導入的新資料來源。
- 不處理與語言資料無關的其他 `res/` 靜態頁面解析。

## Decisions

1. 以建置腳本（TypeScript）實作 parser，而非在執行期即時解析 HTML。

- Rationale: 降低 runtime 成本，讓輸出可檢查、可版本控制。
- Alternative considered: 在應用執行時動態解析 HTML。此作法會增加啟動/請求路徑複雜度，且除錯困難。

2. 輸出採用「樹狀 JSON + 可選 TS 型別」的模式。

- Rationale: JSON 易於跨工具使用，TS 型別可提升開發期正確性。
- Alternative considered: 只輸出 TS module。會限制非 TS 工具鏈使用情境。

3. 節點模型區分群組節點與語言葉節點。

- Rationale: 可精準反映 HTML 階層語意，並保持查詢與轉換彈性。
- Alternative considered: 單一節點模型含可選欄位。雖實作較快，但容易造成欄位語意混淆。

4. 對解析過程加入結構驗證與失敗時明確錯誤訊息。

- Rationale: 當 HTML 結構改動時，能快速在 CI 或本地建置階段發現問題。
- Alternative considered: 寬鬆容錯忽略不符合節點。會造成資料遺失而不易察覺。

## Risks / Trade-offs

- [HTML 結構隱性變更導致解析失敗] → 以 schema-like 驗證與清楚錯誤路徑回報，並補上基準測試樣本。
- [節點模型過度簡化造成未來擴充困難] → 保留可擴充 metadata 欄位與版本欄位，避免破壞性調整。
- [新增輸出檔造成 repo noise] → 明確定義產出路徑與更新時機，避免不必要的變更。

## Migration Plan

1. 新增 parser 與資料模型，先以現有 `res/languages.html` 產生初版輸出。
2. 將輸出檔納入既有資料更新流程（手動指令或 build script）。
3. 逐步將需要語言樹資料的程式改讀新輸出。
4. 若解析異常，可回退到上一版輸出檔並暫停導入，待修正 parser 後重跑。

## Open Questions

- 輸出檔最終應放在 `res/` 還是 `src/const/`（或兩者）較符合目前專案慣例？
- 語言葉節點是否需要保留來源 HTML 的額外屬性（例如資料來源標記）供除錯？
- 是否需要在 CI 中強制檢查「`languages.html` 與輸出檔」同步狀態？
