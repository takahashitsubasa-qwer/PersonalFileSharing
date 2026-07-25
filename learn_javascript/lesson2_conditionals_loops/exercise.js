/**
 * 🛠️ Lesson 2: 条件分岐とループ - 練習問題
 * 
 * [実行方法]
 * ターミナルで以下のコマンドを実行します。
 * node lesson2_conditionals_loops/exercise.js
 * 
 * 指示に従ってコードを修正し、すべてのテストをクリアしてください！
 */

// =========================================================================
// 【問題1】条件分岐 (if / else if / else)
// 年齢を表す変数 age の値によって、適切な区分文字列を ageCategory に代入してください。
//
// 条件：
// - age が 12 以下の場合、ageCategory に "子供" を代入
// - age が 13 以上 19 以下の場合、ageCategory に "ティーンエイジャー" を代入
// - age が 20 以上の場合、ageCategory に "大人" を代入
// =========================================================================

const age = 15; // このテスト値（15）に対して正しく動くようにしてください。
let ageCategory = ""; // 👈 ここに値が入るよう、下の if 文を完成させてください。

if (/* ここに条件を書く */ false) {
  // ここに代入処理を書く
} else if (/* ここに条件を書く */ false) {
  // ここに代入処理を書く
} else {
  // ここに代入処理を書く
}


// =========================================================================
// 【問題2】論理演算子 (&&, ||)
// 遊園地のアトラクションへの入場資格を判定します。
// 以下の変数を使って、入場できる場合は canRide に true を、
// 入場できない場合は false を代入する if 文を作成してください。
//
// 入場できる条件（どちらか片方を満たせばOK）：
// - 「身長 (height) が 120 以上」 かつ 「年齢 (riderAge) が 6 以上」
// - または、「保護者が同伴している (hasGuardian)」が true の場合
// =========================================================================

const height = 110;
const riderAge = 5;
const hasGuardian = true; // 今回は身長・年齢は足りないが、保護者同伴なので入場できるはずです

let canRide = false; // 👈 ここに結果が入るよう、下の条件分岐を書いてください

// 👈 ここに if 文を書いて、canRide の値を true または false に更新してください




// =========================================================================
// 【問題3】for ループによる繰り返し計算
// for ループを使って、1 から 10 までの整数をすべて足し合わせた合計値を
// 計算し、変数 totalSum に代入してください（1 + 2 + 3 + ... + 10 = 55 となります）。
// =========================================================================

let totalSum = 0;

// 👈 ここに for ループを書き、totalSum に値を足し込んでください（i が 1 から 10 まで変化するようにします）






// =========================================================================
// 🧪 ここから下はテストプログラムです。変更しないでください！
// =========================================================================
let passedTests = 0;
let totalTests = 4;

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

// 判定テスト用ヘルパー
function getCategory(testAge) {
  // 受講生が書いたロジックと同じになるよう、擬似的に判定するのではなく、
  // もし可能なら、受講生のコードを関数化してテストします。
  // ここでは条件判定のロジックが正しいかを、現在の ageCategory でテストします。
  return ageCategory;
}

console.log("\n==================================================");
console.log("📝 Lesson 2 判定テストを実行します...");
console.log("==================================================\n");

// Test 1: ageCategory
test("問題1: ageCategory が 'ティーンエイジャー' であること (ageが15の場合)", () => {
  if (ageCategory !== "ティーンエイジャー") {
    throw new Error(`age が ${age} のとき、期待値: "ティーンエイジャー"、実際: "${ageCategory}"`);
  }
});

// Test 2: ageCategory bounds check (additional test done dynamically)
test("問題1（追加確認）: ageCategory に適切な文字列がセットされていること", () => {
  if (ageCategory === "") {
    throw new Error("ageCategory が空文字列のままです。条件式が正しく実行されているか確認してください。");
  }
});

// Test 3: canRide
test("問題2: 入場資格判定 (canRide) が正しく true になっていること", () => {
  // height 110, riderAge 5, hasGuardian true なので、保護者同伴条件で true になるはず
  if (canRide !== true) {
    throw new Error(`保護者同伴 (hasGuardian = true) のため、入場できる (true) はずですが、結果は ${canRide} になっています。`);
  }
});

// Test 4: totalSum
test("問題3: 1から10までの合計値 (totalSum) が 55 になっていること", () => {
  if (totalSum !== 55) {
    throw new Error(`期待値: 55、実際の値: ${totalSum}。ループの範囲や足し算（totalSum += i）が正しいか確認してください。`);
  }
});

console.log("\n==================================================");
if (passedTests === totalTests) {
  console.log(`\x1b[32m🎉 素晴らしい！すべてのテスト（${passedTests}/${totalTests}）をクリアしました！\x1b[0m`);
  console.log("👉 次は Lesson 3（関数）に進みましょう！");
} else {
  console.log(`\x1b[31m⚠️  まだクリアしていないテストがあります（${passedTests}/${totalTests} 成功）。\x1b[0m`);
  console.log("上のエラーメッセージを参考に、コードを修正してみましょう！");
}
console.log("==================================================\n");
