# React Query 

用於處理伺服器端數據的抓取、緩存、同步和更新。它可以簡化數據相關的邏輯，提升應用性能和用戶體驗。

## 使用時機

React Query 適用於以下場景：
- 須頻繁與伺服器交互以抓取數據。
- 須實現數據緩存以提高性能。
- 須自動重新同步數據（如：重新獲取過期數據或處理前台到後台的切換）。
- 須處理複雜的數據依賴關係和狀態管理。

---

## 核心機制

1. **Query**: 用於抓取和緩存數據。
2. **Mutation**: 用於創建、更新或刪除伺服器端的數據。
3. **Cache**: 通過內建的智能緩存機制來提高效能。
4. **Auto Refetch**: 自動重新抓取過期數據或在網絡狀態恢復時重新請求。

---

## 注意事項

1. **初次使用**  
   React Query 本身不包含請求的邏輯，需要搭配 `fetch` 或其他 HTTP 客戶端（如 `axios`）使用。

2. **緩存策略**  
   確保正確配置 `staleTime` 和 `cacheTime`，以控制數據的過期時間與緩存時間。

3. **錯誤處理**  
   React Query 支援全局和局部錯誤處理，根據應用需求選擇合適的方式。

4. **依賴管理**  
   在有多個查詢之間存在依賴關係時，需明確設置依賴的 `enabled` 屬性，避免不必要的請求。

---

## 簡單範例

以下是一個基本的使用範例，展示如何透過 React Query 抓取數據：

### 安裝

```bash
npm install @tanstack/react-query
```

### 使用範例
``` tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```