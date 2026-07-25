/**
 * 🌐 Lesson 2: 条件分岐とループ - プレイグラウンド
 * 
 * [使い方]
 * このファイルの中身をすべてコピーして、ブラウザ（Chromeなど）のデベロッパーツール（Console）
 * または、JSFiddle (https://jsfiddle.net/) などのサイトに貼り付けて実行してみてください。
 */

console.log("--- プレイグラウンド開始 ---");

// ==========================================
// 1. 厳密等価 (===) と 緩い等価 (==) の違い
// ==========================================

const numberFive = 5;
const stringFive = "5";

console.log("緩い比較 (==):", numberFive == stringFive);   // true （型が違っても同じと判定されてしまう！）
console.log("厳密な比較 (===):", numberFive === stringFive); // false （型が違うので正しく異なるものと判定される！）


// ==========================================
// 2. 複数の条件を組み合わせる (&& と ||)
// ==========================================

const temperature = 32; // 気温
const humidity = 85;    // 湿度

// 「気温が30度以上」かつ「湿度が80以上」なら熱中症警戒
if (temperature >= 30 && humidity >= 80) {
  console.log("🥵 熱中症に厳重警戒が必要です！");
} else if (temperature >= 30 || humidity >= 80) {
  console.log("⚠️ 少し蒸し暑い、または気温が高いです。水分補給を！");
} else {
  console.log("🍃 比較的過ごしやすい天気です。");
}


// ==========================================
// 3. Truthy と Falsy の体験
// ==========================================

let userNickname = ""; // 空文字列（Falsyな値）

if (userNickname) {
  console.log(`ようこそ、${userNickname}さん！`);
} else {
  console.log("ようこそ、ゲストユーザーさん！"); // userNicknameが空なので、こちらが動きます！
}

userNickname = "タロウ"; // 中身のある文字列（Truthyな値）を代入
if (userNickname) {
  console.log(`ようこそ、${userNickname}さん！`); // こちらが動きます！
}


// ==========================================
// 4. ループ (for と while)
// ==========================================

console.log("--- for ループ開始 ---");
for (let i = 1; i <= 3; i++) {
  console.log(`i の値は: ${i}`);
}

console.log("--- while ループ開始 ---");
let hp = 100;
let turns = 0;

while (hp > 0) {
  turns++;
  hp = hp - 40; // 40ダメージ受ける
  console.log(`ターン${turns}: 40ダメージ受けた！残HP: ${hp < 0 ? 0 : hp}`);
}
console.log(`戦闘終了！ ${turns}ターン持ちこたえました。`);


console.log("--- プレイグラウンド終了 ---");
