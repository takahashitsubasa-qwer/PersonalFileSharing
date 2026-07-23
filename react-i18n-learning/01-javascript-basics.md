# 1. JavaScript の基本

JavaScript は、Webページに「動き」や「判断」を追加する言語です。React も JavaScript の上で動くため、まず最低限の部品を覚えます。

## 変数: 値に名前を付ける

```js
const name = "Aki";
let count = 0;

count = count + 1;
console.log(name, count); // Aki 1
```

- `const`: あとから別の値を代入しない名前に使う
- `let`: 値が変わる名前に使う
- `console.log`: 開発者ツールの Console に値を表示する

基本的には `const` を使い、変化させる必要があるときだけ `let` を選びます。

## 文字列を組み立てる

```js
const userName = "Aki";
const message = `こんにちは、${userName}さん`;
```

バッククォート（`）で囲むと、`${...}` の中に変数を埋め込めます。

## 関数: 処理に名前を付ける

```js
function greet(name) {
  return `こんにちは、${name}さん`;
}

const message = greet("Aki");
```

`name` は関数に渡す値、`return` は関数が返す値です。Reactでは関数そのものを画面部品として使います。

## 配列: 値を順番に並べる

```js
const fruits = ["りんご", "バナナ", "みかん"];

fruits.map((fruit) => {
  return `${fruit}ジュース`;
});
// ["りんごジュース", "バナナジュース", "みかんジュース"]
```

`map` は、配列の各要素を変換して新しい配列を作ります。Reactでリストを表示するときに頻出します。

## オブジェクト: 関連する値をまとめる

```js
const user = {
  name: "Aki",
  age: 20,
};

console.log(user.name); // Aki
```

`user.name` のように、`.` のあとに項目名を書いて値を取り出します。

## 分割代入

```js
const user = { name: "Aki", age: 20 };
const { name, age } = user;
```

オブジェクトから必要な項目を取り出す書き方です。Reactの `props` でよく使います。

## 覚えておくこと

Reactを読むためには、まず `const`、関数、配列の `map`、オブジェクトの `.` を押さえれば十分です。分からない構文が出ても、値を「名前」「順番の集まり」「項目の集まり」のどれとして扱っているかを考えてみましょう。
