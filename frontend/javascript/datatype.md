# JavaScript 型別

JavaScript 是一種**弱型別**（weakly typed）和**動態型別**（dynamically typed）的語言。這意味著變數的型別是靈活的，可能在執行期間改變。雖然這提供了便利，但也可能導致一些難以察覺的 bug。

## 基本型別（Primitive Types）

JavaScript 中有以下基本型別：

1. **String**：表示文字，例如 `"Hello"` 或 `'World'`
2. **Number**：表示數值，包括整數和浮點數，例如 `42` 或 `3.14`
3. **BigInt**：表示大數字，超過 Number 安全範圍（`2^53 - 1`），例如 `123n`
4. **Boolean**：表示邏輯值，`true` 或 `false`
5. **Undefined**：表示未定義的值，例如變數未初始化時
6. **Null**：表示空值，需手動賦值為 `null`
7. **Symbol**：表示唯一且不可改變的值，通常用作物件的鍵 ()
8. **Object**（非基本型別）：用來存儲鍵值對或更複雜的結構

## 容易忽略的型別相關問題

### 1. **`typeof null` 的結果 卻卻是 `object`**
```javascript
console.log(typeof null); // "object"
```
這是一個歷史遺留的 bug，null 是基本型別，但 typeof null 卻回傳 "object"。請使用嚴格比較來檢查：
```javascript
if (value === null) {
  // Handle null case
}
```

### 2. **`NaN` 是數字型別**
NaN（Not-a-Number）實際上屬於 Number 型別：
```javascript
console.log(typeof NaN); // "number"
```

**避免方法：**使用 Number.isNaN() 來正確判斷：
```javascript
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("abc"));     // true (全域 isNaN) 
console.log(Number.isNaN("abc")); // false
```

### 3. **自動類型轉換（Type Coercion）**
JavaScript 在比較時會嘗試轉換型別，可能導致意外行為：
```javascript
console.log(1 == "1");  // true
console.log(1 === "1"); // false
```
**避免方法：**使用嚴格相等運算符 === 和 !==。

### 4. **數字精度問題**
JavaScript 使用 IEEE 754 標準進行浮點運算，可能導致精度誤差：
```javascript
console.log(0.1 + 0.2); // 0.30000000000000004
```
**避免方法：**使用 toFixed 或將小數轉換為整數：
```javascript
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3
```

## 非基本型別：Object
### 特殊情況
#### 1. Array
- 屬於 Object 的子型別。
- `typeof [] === "object"`
- 使用 `Array.isArray([])` 確認是否為陣列。
#### 2. Function
- 也是 Object 的子型別。
- `typeof function() {}` 返回 `"function"`。

## 型別轉換陷阱
### 1. 加法運算符（`+`）
當一個運算數是字串時，會觸發字串連接：
```javascript
console.log(1 + "2"); // "12"
console.log(1 + 2 + "3"); // "33"
```

### 2. 布林值轉換
```javascript
console.log(Boolean(""));    // false
console.log(Boolean(0));     // false
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true
```
空陣列和空物件會被視為 true，這點容易出錯。

### 3. `==` 的奇特行為
```javascript
console.log(null == undefined); // true
console.log(false == "0");      // true
console.log([] == ![]);         // true
```
避免使用寬鬆相等運算符（`==`），改用 `===`。

---

## 總結與建議
 **1. 盡量用嚴格比較：** 避免使用 == 和 !=。  
 **2. 檢查型別前多用工具函數：**
    - 使用 Number.isNaN()。
    - 使用 Array.isArray()。  
 **3. 小心浮點數運算：** 處理精度問題時，考慮用整數替代。  
 **4. TypeScript：** 專案規模較大，考慮使用 TypeScript 增加型別安全性。  