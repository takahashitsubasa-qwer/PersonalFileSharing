import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [text, setText] = useState("")

  useEffect(() => {
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/health')
      const data = await response.json()
      setMessage(data.status)
    } catch (err) {
      setError('バックエンドサーバーに接続できません')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  const postText = async () => {
    setloading(true)
    setError('')
    try {
      const response = await fetch("/api/postText",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }), 
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      setError('テキストの送信に失敗しました')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          FullStack App
        </h1>
        
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            React + Tailwind CSS + FastAPI
          </h2>
          <p className="text-gray-600">
            モダンなフルスタック開発環境です
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          {loading && (
            <p className="text-blue-500 text-center">読み込み中...</p>
          )}
          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
          {!loading && !error && (
            <p className="text-green-500 text-center font-semibold">
              ✓ バックエンド接続: {message}
            </p>
          )}
        </div>

        <button
          onClick={fetchMessage}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105"
        >
          再度確認
        </button>
        <div className="mt-8 pt-6 border-t border-gray-200" />
        <input 
          type="text" name="example" 
          value={text} onChange={(e) => setText(e.target.value)} 
          className='bg-white border border-gray-300 rounded-lg px-4 py-2' />
        <button onClick={postText} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 transform hover:scale-105 ml-2'>
          送信
        </button>
        <h2>{text}</h2>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            環境:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✓ Python FastAPI</li>
            <li>✓ React 18</li>
            <li>✓ Tailwind CSS</li>
            <li>✓ Vite</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
