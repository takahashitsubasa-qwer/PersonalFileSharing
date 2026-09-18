#!/bin/bash

# FullStack App セットアップスクリプト

echo "=========================================="
echo "FullStack App セットアップを開始します"
echo "=========================================="

# バックエンドのセットアップ
echo ""
echo "1. バックエンド (FastAPI) のセットアップ中..."
cd backend

if [ ! -d "venv" ]; then
    echo "   - Python仮想環境を作成中..."
    python3 -m venv venv
fi

echo "   - 仮想環境をアクティベート中..."
source venv/bin/activate

echo "   - 依存パッケージをインストール中..."
pip install --upgrade pip
pip install -r requirements.txt

cd ..

# フロントエンドのセットアップ
echo ""
echo "2. フロントエンド (React) のセットアップ中..."
cd frontend

echo "   - 依存パッケージをインストール中..."
npm install

cd ..

echo ""
echo "=========================================="
echo "セットアップが完了しました！"
echo "=========================================="
echo ""
echo "次のコマンドでそれぞれを起動してください："
echo ""
echo "【バックエンドの起動】"
echo "  cd backend"
echo "  source venv/bin/activate"
echo "  python -m uvicorn app.main:app --reload"
echo ""
echo "【フロントエンドの起動】"
echo "  cd frontend"
echo "  npm run dev"
echo ""
echo "ブラウザで http://localhost:3000 にアクセスしてください"
echo ""
