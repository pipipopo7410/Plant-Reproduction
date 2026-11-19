# 植物③｜生殖與遺傳 v1.1.4 — 已驗收正式版

此版以教師確認「完美」的 v1.1.4 為基礎打包，**網站程式、圖片及互動功能原樣保留**。四個子模式：

1. 生殖器官：花（水蜜桃）— `index.html`
2. 生殖器官：花（豌豆）— `stage4_pea.html`
3. 生殖挑戰題 — `stage4_quiz.html`
4. 遺傳實驗 — `stage4_gene.html`

## 直接上傳 GitHub Pages

1. 將這份 ZIP **解壓縮**，打開解壓後的資料夾。
2. **全選資料夾裡的所有檔案**，拖曳到 GitHub 儲存庫頁面 → Add file → Upload files。
3. 確認 `index.html`、三個 `stage4_*.html`、`site_shell.css`、`site_shell.js`、`tailwind-local.css`、`sw.js`、`manifest.webmanifest` 及各圖片位於儲存庫**根目錄**；不要上傳只有 ZIP 本身，也不要多包一層資料夾。
4. 點選 Commit changes；進入 Settings → Pages，選 Deploy from a branch，Branch=`main`、Folder=`/(root)`。
5. 更新後重新開啟網站；若曾安裝舊版 PWA，瀏覽器快取更新可能需要重新載入或重新安裝才會顯示最新版。

## 內容與注意事項

- 四模式共用森林綠淺色主題及單列分頁導覽。
- 本地 CSS、49 張優化後的 WebP 教學圖片、應用程式圖示及 Service Worker 均已包含。
- 首次使用需要連線以完成 PWA 快取；部署後離線使用仍應在 iPad Safari 實機確認。
- 修改 HTML/JS/CSS 後請更新 `sw.js` 的版本快取名稱，以免安裝過的舊版顯示舊內容。

版本：v1.1.4｜驗收封存包
