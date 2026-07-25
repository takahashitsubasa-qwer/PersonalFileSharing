/**
 * 🌐 Lesson 3: 関数 - プレイグラウンド
 * 
 * [使い方]
 * このファイルの中身をすべてコピーして、ブラウザ（Chromeなど）のデベロッパーツール（Console）
 * または、JSFiddle (https://jsfiddle.net/) などのサイトに貼り付けて実行してみてください。
 */

console.log("--- プレイグラウンド開始 ---");

// ==========================================
// 1. 関数の基本 (引数を取って、戻り値を返す)
// ==========================================

// 定義 (a と b を受け取って掛け合わせる)
function multiply(a, b) {
  return a * b;
}

// 呼び出し
const result1 = multiply(5, 4);
console.log("5 × 4 の結果:", result1); // 20


// ==========================================
// 2. アロー関数 (Arrow Functions)
// ==========================================

// 標準的なアロー関数
const subtract = (a, b) => {
  return a - b;
};
console.log("10 - 3 の結果:", subtract(10, 3)); // 7


// ==========================================
// 3. アロー関数の強力な「省略記法」
// アロー関数は、中身が「return 1行」だけのとき、波括弧 { } と return を省略できます！
// ==========================================

// 通常の書き方
const squareNormal = (x) => {
  return x * x;
};

// 省略した書き方（これだけで全く同じ意味になります！）
const squareShort = (x) => x * x;

console.log("4の2乗 (通常版):", squareNormal(4)); // 16
console.log("4の2乗 (省略版):", squareShort(4));  // 16


// ==========================================
// 4. デフォルト引数（引数がないときの初期値）
// ==========================================

const sayHello = (name = "ゲスト") => {
  return `こんにちは、${name}さん！`;
};

console.log(sayHello("マイケル")); // 引数あり: "こんにちは、マイケルさん！"
console.log(sayHello());           // 引数なし: "こんにちは、ゲストさん！" (デフォルト値が使われる)


// ==========================================
// 5. 関数を使って複雑な計算をする（応用）
// ==========================================

// 税込み価格を計算する関数
const calculateTaxIncluded = (price, taxRate = 0.1) => {
  return price * (1 + taxRate);
};

// 請求書を出力する関数（内部で税込み価格関数を呼び出す）
const printReceipt = (itemName, price) => {
  const finalPrice = calculateTaxIncluded(price);
  console.log(`【領収書】${itemName}: ¥${finalPrice} (税込)`);
};

printReceipt("スマートスピーカー", 8000); // 領収書を表示する


console.log("--- プレイグラウンド終了 ---");
