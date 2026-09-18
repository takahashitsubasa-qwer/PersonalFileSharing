@echo off
REM FullStack App セットアップスクリプト (Windows用)

echo.
echo ==========================================
echo FullStack App セットアップを開始します
echo ==========================================

REM バックエンドのセットアップ
echo.
echo 1. バックエンド (FastAPI) のセットアップ中...
cd backend

if not exist venv (
    echo    - Python仮想環境を作成中...
    python -m venv venv
)

echo    - 仮想環境をアクティベート中...
call venv\Scripts\activate.bat

echo    - 依存パッケージをインストール中...
pip install --upgrade pip
pip install -r requirements.txt

cd ..

REM フロントエンドのセットアップ
echo.
echo 2. フロントエンド (React) のセットアップ中...
cd frontend

echo    - 依存パッケージをインストール中...
npm install

cd ..

echo.
echo ==========================================
echo セットアップが完了しました！
echo ==========================================
echo.
echo 次のコマンドでそれぞれを起動してください：
echo.
echo 【バックエンドの起動】
echo   cd backend
echo   venv\Scripts\activate.bat
echo   python -m uvicorn app.main:app --reload
echo.
echo 【フロントエンドの起動】
echo   cd frontend
echo   npm run dev
echo.
echo ブラウザで http://localhost:3000 にアクセスしてください
echo.
pause
