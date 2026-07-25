# 💡 Lesson 4: 配列とオブジェクト

多くのデータをまとめて効率よく扱うための非常に重要なデータ構造**「配列（Array）」**と**「オブジェクト（Object）」**、そして実務で頻出する便利な**「配列のメソッド（mapやfilterなど）」**について学びます。

---

## 1. 配列 (Arrays) —— データを一列に並べたリスト

複数のデータを順序をつけて並べたリストです。角括弧 `[ ]` を使って定義し、各要素はカンマ `,` で区切ります。

### 特徴：
* **インデックス番号**: 要素を取り出すときは、**「0から始まる」番号**（インデックス）を指定します。
* **プロパティとメソッド**: 配列にはあらかじめ便利な機能（プロパティやメソッド）が用意されています。

```javascript
const colors = ["赤", "青", "緑"];

// 要素を取り出す（0番目からスタート！）
console.log(colors[0]); // "赤"
console.log(colors[1]); // "青"

// 配列の長さを調べる (.length プロパティ)
console.log(colors.length); // 3

// 配列の末尾に要素を追加する (.push メソッド)
colors.push("黄色");
console.log(colors); // ["赤", "青", "緑", "黄色"]
```

---

## 2. オブジェクト (Objects) —— 名前と値のセット（辞書）

「キー（名前）」と「値」をペアにして、複数の関連するデータをまとめる仕組みです。波括弧 `{ }` で定義します。

```javascript
const user = {
  name: "アリス",
  age: 20,
  isPremium: true
};

// プロパティを取り出す（ドット「.」を使う記法が一般的です）
console.log(user.name); // "アリス"
console.log(user.age);  // 20

// 値を更新する
user.age = 21;

// 新しいプロパティを追加する
user.country = "日本";
console.log(user); // { name: "アリス", age: 21, isPremium: true, country: "日本" }
```

---

## 3. 実務で必須！便利な配列メソッド（イテレータ）

実務のJavaScript開発（特にReactなど）では、配列の中身をループ処理して別の形に変換したり、特定の条件で絞り込んだりすることがよくあります。
アロー関数と組み合わせて非常に強力に働きます。

### ① `.forEach( )` —— すべての要素に繰り返し処理をする
`for` ループをよりスマートに書くことができます。

```javascript
const fruits = ["りんご", "みかん", "バナナ"];

fruits.forEach((fruit) => {
  console.log(`フルーツ：${fruit}`);
});
```

### ② `.map( )` —— 配列を加工して「新しい配列」を作る
元の配列の各要素に処理を行い、その結果からなる**新しい配列を生成して返します**（元の配列は壊しません）。

```javascript
const numbers = [1, 2, 3];

// すべての数値を2倍にした新しい配列を作成する
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(numbers); // [1, 2, 3] (元の配列はそのまま！)
```

### ③ `.filter( )` —— 条件に合う要素だけで絞り込んだ「新しい配列」を作る
条件式が `true` を返した要素だけで構成される**新しい配列を生成して返します**。

```javascript
const scores = [45, 80, 60, 95, 30];

// 70点以上の高得点だけを絞り込む
const highScores = scores.filter((score) => score >= 70);

console.log(highScores); // [80, 95]
```

---

## 🏃 次のステップ
1. このフォルダにある `playground.js` をコピーして、ブラウザのコンソールで動かしてみましょう！
2. 動作を確認したら、`exercise.js` を開いて練習問題を解き、`node lesson4_arrays_objects/exercise.js` を実行してテストをクリアしましょう！
