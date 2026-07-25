/**
 * 🌐 Lesson 1: 変数・定数とデータ型 - プレイグラウンド
 * 
 * [使い方]
 * このファイルの中身をすべてコピーして、ブラウザ（Chromeなど）のデベロッパーツール（Console）
 * または、JSFiddle (https://jsfiddle.net/) などのサイトに貼り付けて実行してみてください。
 */

console.log("--- プレイグラウンド開始 ---");

// ==========================================
// 1. const と let の違いを体験する
// ==========================================

const myName = "ひろし";
console.log("名前:", myName);

// 試しに、以下のコメント（//）を外して実行してみてください。エラーになることが分かります！
// myName = "たかし"; // ❌ constで宣言した定数は書き換えできません


let score = 50;
console.log("初期スコア:", score);

score = 80; // ⭕ letで宣言した変数は書き換え可能です
console.log("更新後のスコア:", score);

score = score + 10; // 現在のスコアに10を足す
console.log("さらに10点追加:", score);


// ==========================================
// 2. テンプレートリテラル (バッククォート `` を使う)
// ==========================================

const city = "東京";
const weather = "晴れ";

// 1. 昔ながらの「+」を使った文字列結合
const report1 = "今日の" + city + "の天気は" + weather + "です。";
console.log("report1:", report1);

// 2. テンプレートリテラルを使ったスマートな結合
// バッククォーテーション「`」で囲み、${変数名} を埋め込みます。
const report2 = `今日の${city}の天気は${weather}です。`;
console.log("report2:", report2);


// ==========================================
// 3. データ型を typeof で確認する
// ==========================================

const textType = "ハロー";
const numType = 2026;
const boolType = true;
const undefinedType = undefined;
const nullType = null; // ※歴史的経緯から、typeof null は "object" を返します

console.log("textType の型:", typeof textType);       // "string"
console.log("numType の型:", typeof numType);         // "number"
console.log("boolType の型:", typeof boolType);       // "boolean"
console.log("undefinedType の型:", typeof undefinedType); // "undefined"


console.log("--- プレイグラウンド終了 ---");
