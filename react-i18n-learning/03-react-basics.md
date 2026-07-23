# 3. React の基本

React は、画面を小さな部品（コンポーネント）に分けて作るライブラリです。

## コンポーネント

```tsx
function Welcome() {
  return <h1>こんにちは</h1>;
}
```

関数が JSX を `return` するとコンポーネントになります。コンポーネント名は大文字で始めます。

## JSX

JSX は JavaScript 内に HTML のような見た目で画面を書く記法です。

```tsx
const name = "Aki";
const element = <p>こんにちは、{name}さん</p>;
```

`{ }` の中には JavaScript の値を書けます。HTMLとの違いとして、属性は `class` ではなく `className` と書きます。

## props: 親から子へ値を渡す

```tsx
type GreetingProps = { name: string };

function Greeting({ name }: GreetingProps) {
  return <p>こんにちは、{name}さん</p>;
}

function App() {
  return <Greeting name="Aki" />;
}
```

`App` が親、`Greeting` が子です。子は `props` を自分で変更しません。

## state: 画面内で変わる値

```tsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>回数: {count}</button>;
}
```

- `count`: 現在の値
- `setCount`: 値を更新する関数
- `useState(0)`: 初期値を 0 にする

ボタンを押すと `setCount` が呼ばれ、React が画面を新しい値で表示し直します。変数を直接 `count = count + 1` と変更してはいけません。

## リスト表示

```tsx
const languages = ["日本語", "English"];

<ul>
  {languages.map((language) => (
    <li key={language}>{language}</li>
  ))}
</ul>;
```

`map` で配列を JSX に変換します。`key` は各項目を見分けるための一意な印です。

次の章では、Reactの画面テキストを直接書かず、翻訳用ファイルから取り出す方法を学びます。
