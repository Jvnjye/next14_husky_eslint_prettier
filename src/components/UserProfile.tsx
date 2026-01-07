import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setUserName, setToken, setUser, clearUser } from '@/store/user'

const UserProfile: React.FC = () => {
  const dispatch = useAppDispatch()
  const { userName, token } = useAppSelector((state) => state.user)
  
  const [inputUserName, setInputUserName] = useState('')
  const [inputToken, setInputToken] = useState('')

  const handleSetUserName = () => {
    if (inputUserName.trim()) {
      dispatch(setUserName(inputUserName.trim()))
      setInputUserName('')
    }
  }

  const handleSetToken = () => {
    if (inputToken.trim()) {
      dispatch(setToken(inputToken.trim()))
      setInputToken('')
    }
  }

  const handleSetUser = () => {
    if (inputUserName.trim() && inputToken.trim()) {
      dispatch(setUser({
        userName: inputUserName.trim(),
        token: inputToken.trim()
      }))
      setInputUserName('')
      setInputToken('')
    }
  }

  const handleClearUser = () => {
    dispatch(clearUser())
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px' }}>
      <h2>用户状态管理示例</h2>
      
      {/* 显示当前状态 */}
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3>当前状态:</h3>
        <p><strong>用户名:</strong> {userName || '未设置'}</p>
        <p><strong>Token:</strong> {token || '未设置'}</p>
      </div>

      {/* 输入框 */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="输入用户名"
            value={inputUserName}
            onChange={(e) => setInputUserName(e.target.value)}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button onClick={handleSetUserName} style={{ padding: '5px 10px' }}>
            设置用户名
          </button>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="输入Token"
            value={inputToken}
            onChange={(e) => setInputToken(e.target.value)}
            style={{ marginRight: '10px', padding: '5px' }}
          />
          <button onClick={handleSetToken} style={{ padding: '5px 10px' }}>
            设置Token
          </button>
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <button 
            onClick={handleSetUser} 
            style={{ padding: '5px 10px', marginRight: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            同时设置用户名和Token
          </button>
          <button 
            onClick={handleClearUser} 
            style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}
          >
            清除用户信息
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
