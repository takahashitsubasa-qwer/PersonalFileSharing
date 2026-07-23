# 2. TypeScript の基本

TypeScript は JavaScript に「型」の確認機能を加えた言語です。最終的には JavaScript に変換されてブラウザで動きます。

## 型がないと起きること

```js
function double(number) {
  return number * 2;
}

double("hello"); // 実行するまで間違いに気付きにくい
```

## 型を書く

```ts
function double(number: number): number {
  return number * 2;
}

double("hello"); // エディタがエラーとして教えてくれる
```

- `number: number`: 引数 `number` は数値
- 関数の後ろの `: number`: 戻り値も数値

## よく使う型

```ts
const title: string = "ようこそ";
const count: number = 3;
const isOpen: boolean = true;
const tags: string[] = ["React", "i18n"];
```

## オブジェクトの型

```ts
type User = {
  name: string;
  age: number;
};

const user: User = { name: "Aki", age: 20 };
```

`type` は、データの形に名前を付ける機能です。`name` を書き忘れた、`age` に文字を入れた、というミスを早く発見できます。

## Reactでの例

```tsx
type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <p>こんにちは、{name}さん</p>;
}
```

`.tsx` は、TypeScriptの中でReactのHTMLのような記法（JSX）を書くファイルです。

## 大事な考え方

型は「コードを難しくするための記号」ではなく、関数が受け取るもの・返すものの説明書です。最初は `string`、`number`、`boolean`、`string[]`、`type` だけで十分です。
