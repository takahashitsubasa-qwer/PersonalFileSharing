/**
 * 🛠️ Lesson 1: 変数・定数とデータ型 - 練習問題
 * 
 * [実行方法]
 * ターミナルで以下のコマンドを実行します。
 * node lesson1_variables/exercise.js
 * 
 * 指示に従ってコードを修正し、すべてのテストをクリアしてください！
 */

// =========================================================================
// 【問題1】定数 (const) と 変数 (let)
// 下記のコードを実行するとエラーになります（定数に再代入しようとしているため）。
// エラーを解消し、最終的な score の値が 150 になるように宣言方法を変更してください。
// =========================================================================

const score = 100; // 👈 ここを修正してください
score = 150;       // （この行は変更しないでください）


// =========================================================================
// 【問題2】テンプレートリテラル
// 変数 item と price を使って、
// 「りんごの価格は120円です。」
// という文字列を、テンプレートリテラル（バッククォート ``）を用いて作成し、
// resultString に代入してください。
// =========================================================================

const item = "りんご";
const price = 120;

const resultString = ""; // 👈 ここを修正してください


// =========================================================================
// 【問題3】データ型
// 各変数に、指示された通りの型・値のデータを代入してください。
// =========================================================================

// 1. isHappy を Boolean型の true にしてください
const isHappy = "FIX_ME"; // 👈 ここを修正してください

// 2. greeting を String型（文字列）の "ハロー！JS" にしてください
const greeting = 999;     // 👈 ここを修正してください

// 3. year を Number型（数値）の 2026 にしてください
const year = "2026";      // 👈 ここを修正（"2026"は文字列なので、数値の2026にしてください）






// =========================================================================
// 🧪 ここから下はテストプログラムです。変更しないでください！
// =========================================================================
let passedTests = 0;
let totalTests = 5;

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
console.log("📝 Lesson 1 判定テストを実行します...");
console.log("==================================================\n");

// Test 1: score
test("問題1: score が 150 に書き換えられていること", () => {
  if (score !== 150) {
    throw new Error(`score の値が ${score} になっています。150 になるようにしてください。また、const ではなく let を使っているか確認してください。`);
  }
});

// Test 2: resultString
test("問題2: resultString がテンプレートリテラルで正しく作られていること", () => {
  const expected = "りんごの価格は120円です。";
  if (resultString !== expected) {
    throw new Error(`期待値: "${expected}"\n       実際の値: "${resultString}"\n       テンプレートリテラル「\`」と「\${変数名}」が正しく使われているか確認してください。`);
  }
});

// Test 3: isHappy
test("問題3-1: isHappy が Boolean型の true であること", () => {
  if (isHappy !== true) {
    throw new Error(`isHappy の値が true ではありません（値: ${isHappy}, 型: ${typeof isHappy}）`);
  }
});

// Test 4: greeting
test("問題3-2: greeting が文字列 'ハロー！JS' であること", () => {
  if (greeting !== "ハロー！JS") {
    throw new Error(`greeting の値が 'ハロー！JS' ではありません（値: ${greeting}, 型: ${typeof greeting}）`);
  }
});

// Test 5: year
test("問題3-3: year が数値型の 2026 であること", () => {
  if (year !== 2026) {
    throw new Error(`year の値が数値の 2026 ではありません（値: ${JSON.stringify(year)}, 型: ${typeof year}）`);
  }
});

console.log("\n==================================================");
if (passedTests === totalTests) {
  console.log(`\x1b[32m🎉 素晴らしい！すべてのテスト（${passedTests}/${totalTests}）をクリアしました！\x1b[0m`);
  console.log("👉 次は Lesson 2（条件分岐とループ）に進みましょう！");
} else {
  console.log(`\x1b[31m⚠️  まだクリアしていないテストがあります（${passedTests}/${totalTests} 成功）。\x1b[0m`);
  console.log("上のエラーメッセージを参考に、コードを修正してみましょう！");
}
console.log("==================================================\n");
