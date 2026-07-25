/**
 * 🌐 Lesson 4: 配列とオブジェクト - プレイグラウンド
 * 
 * [使い方]
 * このファイルの中身をすべてコピーして、ブラウザ（Chromeなど）のデベロッパーツール（Console）
 * または、JSFiddle (https://jsfiddle.net/) などのサイトに貼り付けて実行してみてください。
 */

console.log("--- プレイグラウンド開始 ---");

// ==========================================
// 1. 配列 (Arrays)
// ==========================================

const books = ["ハリーポッター", "指輪物語", "だれも知らない星"];
console.log("最初の本:", books[0]);
console.log("本の数:", books.length);

books.push("三國志");
console.log("追加後の本リスト:", books);


// ==========================================
// 2. オブジェクト (Objects)
// ==========================================

const product = {
  id: "P1001",
  name: "ワイヤレスイヤホン",
  price: 5800,
  inStock: true
};

console.log(`商品名: ${product.name}`);
console.log(`現在の価格: ¥${product.price}`);

product.price = 5200; // 値下げ！
product.color = "ブラック"; // 新しいプロパティの追加

console.log("更新後の商品オブジェクト:", product);


// ==========================================
// 3. 応用：オブジェクトが詰まった配列の操作
// 実際のWeb開発（API通信など）では、このようなデータ構造が極めて頻繁に使われます。
// ==========================================

const users = [
  { id: 1, name: "ケン", age: 15, isActive: true },
  { id: 2, name: "サクラ", age: 24, isActive: false },
  { id: 3, name: "タクヤ", age: 31, isActive: true },
  { id: 4, name: "ミサ", age: 19, isActive: true }
];

console.log("元のユーザー一覧:", users);

// 1. .map() を使って「名前だけの配列」を作る
const userNames = users.map((u) => u.name);
console.log("ユーザー名リスト (map):", userNames); // ["ケン", "サクラ", "タクヤ", "ミサ"]

// 2. .filter() を使って「20才以上のユーザー」だけを絞り込む
const adults = users.filter((u) => u.age >= 20);
console.log("20才以上の大人 (filter):", adults);

// 3. 組み合わせ：isActiveがtrueの「アクティブなユーザー」だけの「名前リスト」を作る
const activeUserNames = users
  .filter((u) => u.isActive === true) // まずアクティブで絞り込み
  .map((u) => u.name);               // 名前だけを抽出

console.log("現在活動中のユーザー名 (filter + map):", activeUserNames); // ["ケン", "タクヤ", "ミサ"]


console.log("--- プレイグラウンド終了 ---");
