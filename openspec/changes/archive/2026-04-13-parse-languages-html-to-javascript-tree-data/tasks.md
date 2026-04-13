## 1. Parser Foundation

- [x] 1.1 建立 `languages.html` 解析模組與入口函式，能讀取來源檔並回傳原始 DOM/中介結構
- [x] 1.2 定義樹節點型別（群組節點、語言葉節點）與必要欄位契約
- [x] 1.3 實作由巢狀清單到樹狀節點的映射邏輯，確保父子關係與順序可重現

## 2. Validation And Error Handling

- [x] 2.1 實作必要結構驗證（缺少清單層級、無法判斷節點型別等）
- [x] 2.2 建立 fail-fast 錯誤處理與訊息格式，包含可定位的節點/區段資訊
- [x] 2.3 為異常情境加入測試案例，確認解析失敗時回傳非零結果與可操作錯誤訊息

## 3. Artifact Generation

- [x] 3.1 實作穩定輸出（JSON 和/或 TS module），確保相同輸入產生 deterministic 結果
- [x] 3.2 以原子方式更新輸出檔，避免部分寫入造成下游讀取不一致
- [x] 3.3 記錄輸出路徑與資料欄位說明，供下游腳本導入使用

## 4. Integration And Verification

- [x] 4.1 將生成流程接入現有資料更新腳本或 npm script
- [x] 4.2 新增基準測試（固定 `languages.html` 樣本）驗證輸出穩定性與節點契約
- [x] 4.3 執行端到端驗證：從 `res/languages.html` 產生 artifact，並由既有腳本成功載入
