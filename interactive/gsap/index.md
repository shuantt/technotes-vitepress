# GSAP 

**GSAP** (GreenSock Animation Platform) 是一個功能強大且靈活的 JavaScript 動畫庫，適合用於建立高效能的動畫效果。GSAP 支援多種網頁動畫需求，例如元素位移、旋轉、縮放、顏色漸變、文字動畫等，廣泛應用於互動式網站、廣告、動畫引導等領域。

## GSAP 的優點
- **高效能**：使用 GPU 加速，確保流暢的動畫效果。
- **跨瀏覽器支援**：兼容主流瀏覽器，避免瀏覽器差異導致的動畫問題。
- **簡單易用**：API 設計直觀，適合快速上手。
- **靈活性**：支援時間軸、反向播放、緩動效果，滿足複雜動畫需求。

## 可實作內容
- **基本動畫**：位移、縮放、旋轉、透明度變化等。
- **文字動畫**：字母逐一出現、消失。
- **SVG 動畫**：路徑動畫、形狀變形。
- **滾動觸發動畫**：結合滾動效果觸發動畫。
- **時間軸控制**：多動畫組合及順序控制。

## 基本使用方式
詳細可參考 [GSAP 官網](https://gsap.com/docs/v3/Installation) 教學
### 下載套件
```shell
npm install gsap
```
#### 引入 gsap
``` javascript
import { gsap } from "gsap";
```
#### 引入 Plugins
gsap 將核心程式內與 plugins 拆開，可以於需要特定功能時再引入插件模組，如下：
``` javascript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger,Draggable);
```