# FullStack App

React + Tailwind CSS (フロントエンド) と FastAPI (バックエンド) のフルスタック開発テンプレート。

## 構成

| 役割 | 技術 | ポート |
|------|------|--------|
| フロントエンド | React 18 + Vite + Tailwind CSS | 3000 |
| バックエンド | Python FastAPI + Uvicorn | 8000 |

フロントエンドの `/api/*` リクエストは Vite の proxy 経由でバックエンド (8000) に転送される。

## 起動方法

### ローカル（推奨）

ターミナルを2つ開いて、それぞれ実行する。

**バックエンド:**
```bash
cd backend
source venv/bin/activate
python -m uvicorn app.main:app --reload
```

**フロントエンド:**
```bash
cd frontend
npm run dev
```

### Docker Compose

```bash
docker-compose up
```

## ファイル構成

### よく編集するファイル

**バックエンド**

| ファイル | 役割 |
|----------|------|
| `backend/app/main.py` | APIの本体。エンドポイントをここに書く |
| `backend/.env` | 環境変数（DBのURLやシークレットキーなど）|
| `backend/requirements.txt` | Python パッケージ一覧。追加したら `pip install -r requirements.txt` |

**フロントエンド**

| ファイル | 役割 |
|----------|------|
| `frontend/src/App.jsx` | UIの本体。画面の見た目とロジックをここに書く |
| `frontend/src/index.css` | グローバルな CSS（Tailwind の読み込みも含む）|
| `frontend/src/App.css` | App コンポーネント専用の CSS |

### 設定ファイル（基本触らない）

| ファイル | 役割 |
|----------|------|
| `frontend/vite.config.js` | Vite の設定。`/api` のプロキシ先など |
| `frontend/tailwind.config.cjs` | Tailwind の適用範囲など |
| `frontend/postcss.config.cjs` | CSS のビルド設定 |
| `frontend/index.html` | HTML のエントリーポイント |
| `frontend/src/main.jsx` | React のマウント処理（`App.jsx` を読み込む）|
| `frontend/package.json` | npm パッケージ一覧 |
| `docker-compose.yml` | Docker でまとめて起動するときの設定 |

実際の開発で触るのはほぼ `main.py` と `App.jsx` の2ファイル。機能を増やすにつれて `backend/app/` 配下にファイルを追加していく形になる。

## APIエンドポイント

- `GET /` — ウェルカムメッセージ
- `GET /api/health` — ヘルスチェック

## 
