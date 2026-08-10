# 2027 東京・越後湯澤滑雪旅行 App 網站

本網站為 8 人滑雪團體打造之 PWA/SPA 靜態行程網站，專為智慧型手機最佳化設計。

## 🌟 專案亮點
- **無後端 & 零安裝**：使用 HTML/CSS/JS 純靜態實現，直接部署至 GitHub Pages。
- **App 視覺風格**：卡片式結構、底部 Sticky Nav、極致質感雪花動畫。
- **獨立 Checklist**：每日裝備清單與行前清單利用 `localStorage` 儲存，重設/關閉瀏覽器資料不遺失。
- **資料分離**：所有行程與資料均收錄於 `js/tripData.js`，便於未來隨時微調。

## 🚀 GitHub Pages 部署步驟

1. **建立 GitHub Repository**
   在 GitHub 上建立一個新的公開儲存庫（Repository），例如 `tokyo-ski-2027`。

2. **上傳程式碼**
   將專案根目錄下的所有檔案與資料夾 (`index.html`, `css/`, `js/`, `README.md`) commit 並 push 至 GitHub 主分支 (`main` 或 `master`)。

3. **開啟 GitHub Pages 服務**
   - 進入 GitHub 專案頁面 -> 點擊 **Settings** (設定)。
   - 左側選單找到 **Pages**。
   - 在 **Build and deployment** -> **Branch** 處，選擇 `main` (或 `master`) 分支，資料夾選擇 `/ (root)`。
   - 點擊 **Save**。

4. **取得公開網址**
   約等待 1~2 分鐘後，即可透過 `https://<your-username>.github.io/tokyo-ski-2027/` 開啟網站並分享給 8 位旅伴！