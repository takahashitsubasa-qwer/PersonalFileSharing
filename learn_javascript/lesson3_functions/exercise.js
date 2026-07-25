/**
 * 🛠️ Lesson 3: 関数 - 練習問題
 * 
 * [実行方法]
 * ターミナルで以下のコマンドを実行します。
 * node lesson3_functions/exercise.js
 * 
 * 指示に従ってコードを修正し、すべてのテストをクリアしてください！
 */

// =========================================================================
// 【問題1】関数の定義（偶数判定）
// 引数 num を受け取り、その値が偶数の場合は true、奇数の場合は false を返す
// 関数 `isEven` を「関数宣言（function キーワードを使用）」で作成してください。
// 
// ヒント：
// - 偶数かどうかは「2で割った余りが0と等しいか (num % 2 === 0)」で判定できます。
// =========================================================================

// 👈 ここに関数 isEven を定義してください。






// =========================================================================
// 【問題2】アロー関数への書き換え
// 以下の伝統的な関数 `celsiusToFahrenheit`（摂氏から華氏への変換）を、
// 同じ動きをする「アロー関数」に書き換えてください。
// (元のコードはコメントアウトするか削除し、アロー関数として再定義してください)
// =========================================================================

function celsiusToFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// 👈 ここにアロー関数 celsiusToFahrenheit を定義してください。




// =========================================================================
// 【問題3】デフォルト引数を持つ関数
// ユーザー名 (name) と挨拶の言葉 (greetingWord) を受け取り、
// 「[挨拶の言葉]、[ユーザー名]さん！」という文字列を返す関数 `greetWithWord` を作成してください。
//
// 条件：
// - アロー関数で作成すること。
// - `greetingWord` が省略された場合（引数が渡されなかった場合）は、
//   デフォルトで `"こんにちは"` が使われるようにデフォルト引数を設定してください。
//
// 例：
// greetWithWord("ケン", "ハロー") ──> "ハロー、ケンさん！"
// greetWithWord("ケン")           ──> "こんにちは、ケンさん！"
// =========================================================================

// 👈 ここに関数 greetWithWord を定義してください。






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
console.log("📝 Lesson 3 判定テストを実行します...");
console.log("==================================================\n");

// Test 1: isEven exists and works
test("問題1: isEven が関数として定義されており、偶数を正しく判定できること", () => {
  if (typeof isEven !== "function") {
    throw new Error("isEven が関数として定義されていません。");
  }
  if (isEven(4) !== true) {
    throw new Error("isEven(4) の実行結果が true になっていません。");
  }
  if (isEven(7) !== false) {
    throw new Error("isEven(7) の実行結果が false になっていません。");
  }
});

// Test 2: celsiusToFahrenheit works as arrow function
test("問題2: celsiusToFahrenheit が正しく温度を変換できること", () => {
  if (typeof celsiusToFahrenheit !== "function") {
    throw new Error("celsiusToFahrenheit が関数として定義されていません。");
  }
  const result = celsiusToFahrenheit(20);
  if (result !== 68) {
    throw new Error(`celsiusToFahrenheit(20) の期待値: 68、実際の値: ${result}`);
  }
});

test("問題2（追加確認）: celsiusToFahrenheit がアロー関数として書かれていること", () => {
  // アロー関数は prototype を持たないというJSの性質を利用して、アロー関数か判定します
  if (celsiusToFahrenheit.prototype !== undefined) {
    throw new Error("celsiusToFahrenheit が従来の function キーワードで定義されている可能性があります。アロー関数「const celsiusToFahrenheit = (celsius) => ...」として書き直してください。");
  }
});

// Test 4: greetWithWord with both arguments
test("問題3: greetWithWord が 2つの引数を正しく組み合わせて挨拶を返すこと", () => {
  if (typeof greetWithWord !== "function") {
    throw new Error("greetWithWord が関数として定義されていません。");
  }
  const result = greetWithWord("ユキ", "おはよう");
  if (result !== "おはよう、ユキさん！") {
    throw new Error(`期待値: "おはよう、ユキさん！"、実際の値: "${result}"`);
  }
});

// Test 5: greetWithWord with default argument
test("問題3-2: greetWithWord が省略された場合にデフォルトの挨拶を返すこと", () => {
  const result = greetWithWord("ユキ");
  if (result !== "こんにちは、ユキさん！") {
    throw new Error(`期待値: "こんにちは、ユキさん！"、実際の値: "${result}"（デフォルト値が 'こんにちは' になっているか確認してください）`);
  }
});

console.log("\n==================================================");
if (passedTests === totalTests) {
  console.log(`\x1b[32m🎉 素晴らしい！すべてのテスト（${passedTests}/${totalTests}）をクリアしました！\x1b[0m`);
  console.log("👉 次は 最後の Lesson 4（配列とオブジェクト）に進みましょう！");
} else {
  console.log(`\x1b[31m⚠️  まだクリアしていないテストがあります（${passedTests}/${totalTests} 成功）。\x1b[0m`);
  console.log("上のエラーメッセージを参考に、コードを修正してみましょう！");
}
console.log("==================================================\n");
