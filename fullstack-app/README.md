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

#### Windows（PowerShell）

**バックエンド:**
```powershell
cd backend
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload --port 8000
```

> `Activate.ps1` が「スクリプトの実行が無効」エラーになる場合は、一度だけ以下を実行する。
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
> ```
> 仮想環境を有効化せずに `.\venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000` で起動してもよい。

**フロントエンド:**
```powershell
cd frontend
npm run dev
```

**サーバーの停止:** 各ターミナルで `Ctrl + C`

#### Mac / Linux

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

## 内容

サモナーネームを入力したら，マスタリートップ3人が表示される