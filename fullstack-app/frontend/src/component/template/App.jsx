import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function App() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [text, setText] = useState("")
  const [server, setServer] = useState("JP")

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
    setLoading(true)
    setError('')
    try {
      const response = await fetch("/api/postText",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          { "server": server, "text": text }
        ), 
      })
      const data = await response.json()
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
          className="btn-primary w-full"
        >
          再度確認
        </button>
        <div className="mt-8 pt-6 border-t border-gray-200" />
        <select 
        value={server} onChange={(e) => setServer(e.target.value)} 
        className='bg-white border border-gray-300 rounded-lg px-1 py-2'
        >
          <option value="JP">JP</option>
          <option value="KR">KR</option>
        </select>
        <input 
          type="text" name="example" 
          value={text} onChange={(e) => setText(e.target.value)} 
          className='bg-white border border-gray-300 rounded-lg px-4 py-2' 
        />
        <button onClick={postText} className='btn-primary ml-2'>
          送信
        </button>
        <div className="mt-8 pt-6 border-t border-gray-200" />
        <button onClick={() => navigate('/list')} className="btn-primary w-full">
          一覧へ
        </button>
      </div>
    </div>
  )
}
