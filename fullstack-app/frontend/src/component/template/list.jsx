import { useState, useEffect } from 'react'

export function List() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

    useEffect(() => {
    fetchMessage()
  }, [])


    const fetchMessage = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/list')
      const data = await response.json()
      setMessage(data)
    } catch (err) {
      setError('バックエンドサーバーに接続できません')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-base">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          FullStack App
        </h1>
        <h2>{message.text}</h2>
        <h2>{message.server}</h2>
      </div>
    </div>
)
}
