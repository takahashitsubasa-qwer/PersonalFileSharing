# 🚀 JavaScript 超入門レッスンへようこそ！

このコースは、JavaScript（JS）の基本をステップ・バイ・ステップで学ぶための初心者向けハンズオン教材です。
全4回のレッスンを通じて、JSを動かしながら楽しく基礎体力を身につけることができます。

---

## 📂 フォルダ構成

本教材は以下のような構成になっています。

```text
learn_javascript/
├── README.md                          # 本ドキュメント（全体ガイド）
├── lesson1_variables/                 # レッスン1: 変数・定数とデータ型
│   ├── README.md                      # 💡 解説ドキュメント
│   ├── playground.js                  # 🌐 Web上で動かせるコード集
│   └── exercise.js                    # 🛠️ 穴埋めテスト（練習問題）
├── lesson2_conditionals_loops/        # レッスン2: 条件分岐とループ
│   ├── README.md
│   ├── playground.js
│   └── exercise.js
├── lesson3_functions/                 # レッスン3: 関数
│   ├── README.md
│   ├── playground.js
│   └── exercise.js
└── lesson4_arrays_objects/            # レッスン4: 配列とオブジェクト
    ├── README.md
    ├── playground.js
    └── exercise.js
```

---

## 🛠️ 学習の流れ

各レッスンは、以下の3ステップで進めます。

### ステップ 1: `README.md` を読んで理解する
まずは各フォルダにある解説ドキュメントを読み、そのレッスンのテーマや重要な文法、概念を学びます。

### ステップ 2: `playground.js` のコードをWeb上で動かしてみる
ブラウザやWebサイトですぐに試せるコードが用意されています。
以下のいずれかの方法でコードを貼り付けて、動きを確認したり数値を書き換えたりして遊んでみましょう！

#### おすすめの動かし方
1. **ブラウザのデベロッパーツールを使う（一番簡単！）**
   * Google ChromeやFirefoxで `F12` キー（Macは `Cmd + Option + I`）を押し、「**コンソール (Console)**」タブを開きます。
   * `playground.js` の中身をコピー＆ペーストして `Enter` キーを押すだけで実行されます。
2. **オンラインエディタを使う**
   * [JSFiddle](https://jsfiddle.net/) や [CodePen](https://codepen.io/)、[Playcode](https://playcode.io/) などのWebサイトにコードを貼り付けて実行します。

### ステップ 3: `exercise.js` を修正してテストをクリアする
レッスンを理解できたか、練習問題に挑戦します。
`exercise.js` には一部、バグがあったり未完成だったりするコードがあります。
エディタでファイルを開き、指示に従って書き換えてください。

#### テストの実行方法
ターミナル（端末）で各レッスンのフォルダに移動し、`node` コマンドで実行します。

```bash
# 例: レッスン1のテストを実行する場合
node lesson1_variables/exercise.js
```

実行すると、あなたのコードが正しいかどうか判定するテストプログラムが走り、結果をコンソールに表示してくれます。
全てのテストを「**✅ クリア！**」にすることを目指しましょう！

---

## 🎓 カリキュラム一覧

1. **Lesson 1: 変数・定数とデータ型 (`lesson1_variables`)**
   * 値を保存する `const` と `let` の使い分け、文字列・数値・真偽値などのデータ型について学びます。
2. **Lesson 2: 条件分岐とループ (`lesson2_conditionals_loops`)**
   * `if` 文による条件分岐、`===` などの比較演算子、`for` や `while` を使った繰り返し処理を学びます。
3. **Lesson 3: 関数 (`lesson3_functions`)**
   * 処理をひとまとめにして再利用可能にする「関数」と、モダンな「アロー関数」の書き方を学びます。
4. **Lesson 4: 配列とオブジェクト (`lesson4_arrays_objects`)**
   * 複数のデータをまとめる「配列（Array）」と、キーと値でデータを整理する「オブジェクト（Object）」、そして便利な配列のメソッド（`map`, `filter` など）を学びます。

まずは **Lesson 1** の `README.md` からスタートしましょう！ 応援しています！🎉
