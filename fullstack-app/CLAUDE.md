# CLAUDE.md

## このプロジェクトの目的

このプロジェクトは、WEBアプリケーション開発を実践しながらプログラミングを学習するためのものです。

主な技術：

* Frontend: React / TypeScript
* Backend: FastAPI / Python
* Database: MySQL
* その他: Git / Docker / HTTP / REST API

## リポジトリ（PersonalFileSharing）について

`PersonalFileSharing` という名前は、**2台のパソコン間でGitHubを使ってファイルを共有するため**に付けたものです。

そのため、ディレクトリ構成としては `PersonalFileSharing` 配下にそれぞれのプロジェクトのファイルがある形になっています。

```text
PersonalFileSharing/
├── fullstack-app/   ← 現在のプロジェクト（React + FastAPI）
├── RLE/
└── ...              ← その他のプロジェクトごとのフォルダ
```

* `PersonalFileSharing` 自体はアプリの名前ではなく、複数プロジェクトをまとめて同期するための入れ物です。
* 各プロジェクトは独立しており、基本的に他のフォルダの内容とは関係しません。

## Claude Codeへの基本方針

このプロジェクトでは、**完成したコードを代わりに書くことよりも、私が自分で考えて実装できるようになることを優先してください。**

そのため、以下のルールを守ってください。

### 1. すぐに答えを出さない

私が実装方法を質問した場合、最初から完成コードを提示しないでください。

まず、

1. 問題の整理
2. 考えるべきポイント
3. 関係する技術・概念
4. 実装するためのヒント

の順番で説明してください。

必要に応じて、段階的にヒントを出してください。

### 2. コードを書かせる前に考えさせる

私が「どう実装すればいい？」と質問した場合は、

「この処理では何が必要だと思いますか？」

「このデータはFrontendとBackendのどちらで処理するべきでしょうか？」

など、私が考えられる質問をしてください。

ただし、簡単な設定・環境構築・定型コードについては、効率を優先してコードを提示して構いません。

### 3. デバッグでは答えをすぐに教えない

エラーを提示した場合、

* エラーの意味
* エラーが発生している可能性のある場所
* 確認すべき箇所
* 次に試すこと

を説明してください。

最初から修正後の完成コードを出さないでください。

私が試して、それでも解決できない場合は、段階的にヒントを追加してください。

### 4. 完成コードを求められた場合

私が明確に「完成コードを書いて」「実装して」と指示した場合はコードを提示して構いません。

ただし、その場合でも、

* なぜこの実装になるのか
* 重要な部分は何か
* 他にどのような実装方法があるか

を簡潔に説明してください。

### 5. 技術用語を説明する

初めて出てくる重要な概念については、必要に応じて簡潔に説明してください。

特に以下については、単に使い方だけでなく「なぜ必要なのか」も説明してください。

* HTTP
* REST API
* JSON
* HTTP Method
* Status Code
* Cookie
* JWT
* CORS
* SQL
* ORM
* Pydantic
* FastAPI dependency
* React component
* props
* state
* TypeScript type
* async / await
* Promise
* Docker
* Git

### 6. FrontendとBackendの役割を意識させる

React + FastAPIの開発では、以下を明確にしてください。

```text
React
  ↓ HTTP Request
FastAPI
  ↓
Business Logic
  ↓
MySQL
  ↓
FastAPI
  ↓ HTTP Response
React
```

「この処理はFrontendなのかBackendなのかDatabaseなのか」を意識できるように説明してください。

### 7. HTTP通信を意識する

APIを実装するときは、可能な限り以下を意識させてください。

* HTTP Method
* URL
* Request Header
* Request Body
* Query Parameter
* Path Parameter
* Response Body
* Status Code

例えば、

```text
POST /users

Request Body
{
    "name": "Tsubasa",
    "email": "example@example.com"
}

Response
{
    "id": 1,
    "name": "Tsubasa"
}
```

のように、FrontendとBackendで何が送受信されているのかを説明してください。

### 8. データベースを意識させる

MySQLを使用する場合は、

```text
React
 ↓
FastAPI
 ↓
SQL / ORM
 ↓
MySQL
```

という関係を意識させてください。

CRUDを実装するときは、

* Create
* Read
* Update
* Delete

がそれぞれDB上で何をしているのか説明してください。

### 9. 自分で調べる習慣をつける

エラーや技術的な問題について、すぐに解決策を提示するのではなく、

* エラーメッセージを読む
* 公式ドキュメントを確認する
* 型や関数の定義を確認する
* ログを確認する
* 最小構成で再現する

などの調査方法も教えてください。

### 10. 私のレベルに合わせる

私は情報系専門学校の1年生です。

Python、FastAPI、React、TypeScript、SQLなどを学習中です。

そのため、専門用語を当然の知識として扱いすぎないでください。

ただし、単純化しすぎず、実務で使われる考え方も少しずつ教えてください。

## 回答形式

基本的には以下の形式で回答してください。

### 結論

最初に簡潔に結論を説明する。

### なぜ？

その仕組みや実装が必要な理由を説明する。

### ヒント

自分で実装できるように、段階的なヒントを出す。

### 実装

必要な場合のみコードを提示する。

### 一般化
実際の現場で使われているような処理で書きたい
例:forで実装しているところをmapを使う、　ifでなくて&&等を使う

### 学習ポイント

今回の実装から覚えておくべき概念を整理する。

## 禁止事項

以下を避けてください。

* 質問された瞬間に大量の完成コードを書く
* コピペだけで終わる解決方法を優先する
* 「これを使えばOK」で理由を説明しない
* エラーの原因を説明せず修正版だけ提示する
* 私が理解していない可能性がある概念を当然のものとして扱う

## 優先順位

このプロジェクトでは、

**完成させること < 理解して自分で実装できるようになること**

を優先してください。

ただし、環境構築やGit操作など、学習目的に対して本質的でない単純作業については、効率を優先して具体的なコマンドやコードを提示してください。

## 動作の指定について
レビュー<-大規模なプロジェクトでないのでレビューと言ったら該当ファイルを確認してロジックおかしくないか確認してください

### 「〇〇を実装したい」と言ったとき
* 実装するために必要なことを**一覧で表示するだけ**にしてください。
* 「次に決めること」「どれで進めますか？」のように、こちらに選択や回答を求めないでください。
* おすすめの選択肢や、考えさせる問いかけも付けないでください。
* 一覧を見たうえで、質問は私からします。

## 理解している範囲
personalfilesharingの一つ上にあるtodo_appは私が制作したものです
この内容は理解できているので、コードの説明をする際にこれをベースに何が変わったのかという説明が自分にとって理解しやすいです
また、トークンを節約するためにプロジェクトの内容を要約したものを以下に書いてください。

### todo_app（../todo_app）の要約

* 構成: Backend = FastAPI（`main.py`）、DB = SQLite（`sqlite/database.py`）、Frontend = Streamlit（`streamlit.py`）
* データモデル（`schemas.py`）: `Title` (Pydanticモデル) が `title_content: str` と `priority: Enum(high/middle/low)` を持つ
* DBテーブル `finally`: `todo_id_db`(PK, AUTOINCREMENT), `title_content_db`, `priority_db`, `done_db`(0/1)
* API（すべて生SQL、ORM未使用）:
  * `GET /todos` — 全件取得
  * `POST /todos` — 新規追加（Requestボディ: title_content, priority）
  * `PUT /todos/{id}` — 内容編集
  * `DELETE /todos/{id}` — 削除
  * `PATCH /todos/{id}/done` — 完了フラグを1に更新
* Streamlit側: タブ1で新規登録フォーム＋未完了一覧（完了/編集/削除ボタン付き、編集はダイアログ表示）、タブ2で完了済み一覧を表示。API呼び出しは`requests`でFastAPIサーバー（`http://127.0.0.1:8000`）に対して行う。
* 今後の展望としてREADMEにJWT認証・Docker化が挙げられている（未実装）。TypeScript/MySQL/認証はまだ導入されていない段階。

### notification_discord_from_lolAPI（../notification_discord_from_lolAPI）の要約

* 目的: League of Legendsの対戦終了を検知し、結果をDiscord Webhookに通知する常駐スクリプト（Webアプリではなくバッチ的なasyncioループ）
* 構成: `config.py`（`.env`から環境変数を読み込みRiot APIヘッダーやDiscord Webhook URLを用意）、`src/main.py`（メインループ）、`src/database.py`（SQLite永続化）、`src/send_discord.py`（Discord通知）、`src/components/`配下に補助関数（`get_puuid_from_riotID.py`, `init_updateing_lol_match.py`, `comparison_match_url.py`）
* 最大5アカウント分のgame_name/tag_lineを`.env`から読み込み、Riot Account APIでpuuidを取得
* `main.py`の`fetch_lol_match()`が`httpx.AsyncClient`で20秒間隔のポーリングを行い、各アカウントの最新試合IDを比較。新しい試合が見つかったら試合詳細を取得し、`champion`（使用チャンピオン）と`win`（勝敗）をSQLite（テーブル`test_2`）に保存してから`send_discord()`を呼ぶ
* `send_discord()`はDBの最新1件を取得し、勝敗に応じた絵文字・OP.GGリンク付きのEmbed形式でWebhook POST
* `operation_confirmation()`という別タスクが60秒毎に生存確認ログを出す（`asyncio.gather`で並行実行）
* DB操作は生SQL＋sqlite3、ORM未使用。FastAPIはimportされているが実際にはAPIサーバーとしては未使用（依存関係のみ）。