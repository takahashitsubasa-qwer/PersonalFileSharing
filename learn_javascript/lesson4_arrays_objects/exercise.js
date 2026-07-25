/**
 * 🛠️ Lesson 4: 配列とオブジェクト - 練習問題
 * 
 * [実行方法]
 * ターミナルで以下のコマンドを実行します。
 * node lesson4_arrays_objects/exercise.js
 * 
 * 指示に従ってコードを修正し、すべてのテストをクリアしてください！
 */

// =========================================================================
// 【問題1】配列の基本操作
// 以下の配列 animals を使って、指示された操作を行ってください。
// =========================================================================

const animals = ["犬", "猫", "うさぎ"];

// 1. animals の末尾に "パンダ" を追加してください。
// 👈 ここにコードを書いてください


// 2. 配列 animals の中から "猫"（1番目、つまり2つ目の要素）を取り出して
//    定数 secondAnimal に代入してください。
const secondAnimal = ""; // 👈 ここを修正してください


// =========================================================================
// 【問題2】オブジェクトの操作（階層構造）
// 以下のオブジェクト student について、指示された操作を行ってください。
// =========================================================================

const student = {
  name: "タクミ",
  scores: {
    math: 80,
    english: 95
  }
};

// 1. オブジェクト student の中に `grade`（学年）というプロパティを追加し、数値の 3 を代入してください。
// 👈 ここにコードを書いてください


// 2. scores の中にある `english`（英語の点数）を、
//    定数 englishScore に代入してください（オブジェクトのドット記法を組み合わせてアクセスします）。
const englishScore = 0; // 👈 ここを修正してください


// =========================================================================
// 【問題3】配列メソッドの活用 (map, filter)
// 以下のメンバーデータの配列 members を使って、指示された配列を作成してください。
// =========================================================================

const members = [
  { name: "アリス", role: "admin" },
  { name: "ボブ", role: "member" },
  { name: "チャーリー", role: "member" },
  { name: "デイビッド", role: "admin" }
];

// 1. .filter() を使い、role が "admin" である管理者メンバーだけの配列を作成して
//    定数 admins に代入してください。
const admins = []; // 👈 ここを修正してください


// 2. .map() を使い、全メンバーの「名前（name）」だけを抽出した配列
//    （例: ["アリス", "ボブ", ...]）を作成して定数 memberNames に代入してください。
const memberNames = []; // 👈 ここを修正してください






// =========================================================================
// 🧪 ここから下はテストプログラムです。変更しないでください！
// =========================================================================
let passedTests = 0;
let totalTests = 6;

function test(title, assertFn) {
  try {
    assertFn();
    console.log(`\x1b[32m✅ テスト成功: ${title}\x1b[0m`);
    passedTests++;
  } catch (error) {
    console.log(`\x1b[31m❌ テスト失敗: ${title}\x1b[0m`);
    console.log(`   👉 ${error.message}`);
  }
}

console.log("\n==================================================");
console.log("📝 Lesson 4 判定テストを実行します...");
console.log("==================================================\n");

// Test 1: animals includes "パンダ"
test("問題1-1: 配列 animals の末尾に 'パンダ' が追加されていること", () => {
  if (!animals.includes("パンダ")) {
    throw new Error(`animals に 'パンダ' が含まれていません（現在の配列: [${animals.join(", ")}]）`);
  }
});

// Test 2: secondAnimal is "猫"
test("問題1-2: secondAnimal に正しい要素 ('猫') が入っていること", () => {
  if (secondAnimal !== "猫") {
    throw new Error(`期待値: "猫"、実際の値: "${secondAnimal}"（配列のインデックス番号は0から始まることに注意しましょう）`);
  }
});

// Test 3: student has grade 3
test("問題2-1: student オブジェクトに grade プロパティが追加され、3 であること", () => {
  if (student.grade !== 3) {
    throw new Error(`student.grade の値が 3 ではありません（実際の値: ${student.grade}）`);
  }
});

// Test 4: englishScore is 95
test("問題2-2: englishScore に英語の点数 (95) が正しく入っていること", () => {
  if (englishScore !== 95) {
    throw new Error(`期待値: 95、実際の値: ${englishScore}（階層になっているオブジェクトは student.scores.english のようにアクセスできます）`);
  }
});

// Test 5: admins is filtered properly
test("問題3-1: admins が role = 'admin' のメンバーだけで絞り込まれていること", () => {
  if (!Array.isArray(admins)) {
    throw new Error("admins が配列になっていません。");
  }
  if (admins.length !== 2) {
    throw new Error(`管理者は2名のはずですが、${admins.length}名になっています。`);
  }
  const names = admins.map(a => a.name);
  if (!names.includes("アリス") || !names.includes("デイビッド")) {
    throw new Error(`admins の中身が正しくありません（アリスとデイビッドが含まれている必要があります。現在の抽出結果: [${names.join(", ")}]）`);
  }
});

// Test 6: memberNames is mapped properly
test("問題3-2: memberNames に全メンバーの名前の配列が作成されていること", () => {
  if (!Array.isArray(memberNames)) {
    throw new Error("memberNames が配列になっていません。");
  }
  const expected = ["アリス", "ボブ", "チャーリー", "デイビッド"];
  if (JSON.stringify(memberNames) !== JSON.stringify(expected)) {
    throw new Error(`期待値: ${JSON.stringify(expected)}\n       実際の値: ${JSON.stringify(memberNames)}`);
  }
});

console.log("\n==================================================");
if (passedTests === totalTests) {
  console.log(`\x1b[32m🎉 素晴らしい！すべてのテスト（${passedTests}/${totalTests}）をクリアしました！\x1b[0m`);
  console.log("これで JavaScript 超入門レッスンはすべて修了です！");
  console.log("おめでとうございます！JSの確かな基礎体力が身につきました！🚀🌟");
} else {
  console.log(`\x1b[31m⚠️  まだクリアしていないテストがあります（${passedTests}/${totalTests} 成功）。\x1b[0m`);
  console.log("上のエラーメッセージを参考に、コードを修正してみましょう！");
}
console.log("==================================================\n");
