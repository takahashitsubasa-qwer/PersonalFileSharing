# 4. React i18n の実装

## i18n とは

**i18n** は internationalization（国際化）の略です。`i` と `n` の間に18文字あるため i18n と書かれます。

Reactでは、表示する文章をコンポーネントから分離し、言語ごとの翻訳ファイルに保存します。これにより、文章の翻訳・追加・修正を一か所で扱えます。

この教材では `i18next` と React用の `react-i18next` を使用します。

## 全体の流れ

```text
App.tsx ── t("welcome.title") ──> i18n.ts ──> ja.json / en.json
    ↑                                 │
    └── languageを変更 <──────────────┘
```

1. `ja.json` と `en.json` に同じキーで文章を書く
2. `i18n.ts` に翻訳ファイルを登録する
3. Reactで `useTranslation()` を呼ぶ
4. `t("キー")` で現在の言語の文章を取得する
5. `i18n.changeLanguage("en")` で言語を切り替える

## 1. 翻訳ファイルを作る

`src/locales/ja.json`:

```json
{
  "welcome": {
    "title": "React i18nへようこそ",
    "description": "ボタンで表示言語を切り替えてみましょう。"
  }
}
```

`src/locales/en.json`:

```json
{
  "welcome": {
    "title": "Welcome to React i18n",
    "description": "Try switching the display language with the buttons."
  }
}
```

`welcome.title` のようなキーは、言語が違っても必ず同じにします。画面に文章を直接書く代わりに、このキーを使います。

## 2. i18nを設定する

`src/i18n.ts` で翻訳ファイルと初期言語を登録します。

```ts
i18n.init({
  resources: { ja: { translation: ja }, en: { translation: en } },
  lng: "ja",
  fallbackLng: "ja",
});
```

- `resources`: 言語コードと翻訳データの対応表
- `lng`: 最初に表示する言語
- `fallbackLng`: 翻訳がないときに代わりに使う言語

`main.tsx` から `import "./i18n"` として、Reactを表示する前に設定を読み込みます。

## 3. コンポーネントで翻訳を使う

```tsx
const { t, i18n } = useTranslation();

<h1>{t("welcome.title")}</h1>
<button onClick={() => i18n.changeLanguage("en")}>English</button>
```

- `t`: 翻訳キーを文章に変換する関数
- `i18n.changeLanguage`: 使用言語を変更する関数

言語を切り替えると、`t` を使う箇所はReactによって自動的に再表示されます。

## 4. 変数を文章に入れる

翻訳ファイル:

```json
{ "greeting": "こんにちは、{{name}}さん" }
```

コンポーネント:

```tsx
<p>{t("greeting", { name: "Aki" })}</p>
```

英語側は `{ "greeting": "Hello, {{name}}!" }` のように、言語ごとに自然な文順にできます。

## よくある注意点

- 翻訳キーに日本語の文章そのものではなく、意味のある名前（`welcome.title`）を付ける
- 言語間でキーが欠けないようにする
- 翻訳文にHTMLやJSXを混ぜ込まず、必要になったら `Trans` コンポーネントを調べる
- 実際のサービスでは、ブラウザ設定や保存済みの選択を初期言語に使うことが多い

教材のサンプルは [src/App.tsx](src/App.tsx) を見てください。
