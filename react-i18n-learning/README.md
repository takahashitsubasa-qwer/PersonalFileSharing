# はじめての React i18n

JavaScript がまったく初めての人向けに、React で画面を日本語・英語に切り替えるところまでを学ぶ教材です。

## この教材でできるようになること

- JavaScript の変数、関数、配列、オブジェクトを読める
- TypeScript が「型」で間違いを減らす仕組みを説明できる
- React のコンポーネントと `useState` を使える
- `react-i18next` で表示言語を切り替えられる

## 学ぶ順番

1. [JavaScript の基本](01-javascript-basics.md)
2. [TypeScript の基本](02-typescript-basics.md)
3. [React の基本](03-react-basics.md)
4. [i18n（多言語化）の実装](04-react-i18n.md)

## 動かしてみる

Node.js（LTS版）を入れた後、PowerShell でこのフォルダを開いて実行します。

```powershell
npm install
npm run dev
```

表示された URL をブラウザで開き、「日本語」「English」ボタンを押してください。

## フォルダ構成

```text
src/
  App.tsx                 # 画面
  i18n.ts                 # i18n の初期設定
  locales/
    ja.json               # 日本語の文章
    en.json               # 英語の文章
```

最初は教材を上から読み、次に `src` の各ファイルを開くのがおすすめです。
