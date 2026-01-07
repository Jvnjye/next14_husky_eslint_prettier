# 用户全局状态管理

这个项目使用 Redux Toolkit 来管理用户的全局状态，包含 `userName` 和 `token` 属性以及对应的修改方法。

## 文件结构

```
src/store/
├── index.ts      # Store 配置
├── user.ts       # 用户状态切片
├── hooks.ts      # 类型化的 hooks
└── README.md     # 使用文档
```

## 状态结构

```typescript
interface UserState {
  userName: string | null
  token: string | null
}
```

## 可用的 Actions

### 1. `setUserName(userName: string)`
设置用户名

### 2. `setToken(token: string)`
设置token

### 3. `setUser({ userName: string, token: string })`
同时设置用户名和token（通常在登录时使用）

### 4. `clearUser()`
清除所有用户信息（通常在登出时使用）

## 使用方法

### 在组件中使用

```typescript
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setUserName, setToken, setUser, clearUser } from '@/store/user'

const MyComponent: React.FC = () => {
  const dispatch = useAppDispatch()
  const { userName, token } = useAppSelector((state) => state.user)

  // 设置用户名
  const handleSetUserName = (name: string) => {
    dispatch(setUserName(name))
  }

  // 设置token
  const handleSetToken = (token: string) => {
    dispatch(setToken(token))
  }

  // 登录（同时设置用户名和token）
  const handleLogin = (name: string, token: string) => {
    dispatch(setUser({ userName: name, token }))
  }

  // 登出
  const handleLogout = () => {
    dispatch(clearUser())
  }

  return (
    <div>
      <p>用户名: {userName || '未登录'}</p>
      <p>Token: {token ? '已设置' : '未设置'}</p>
      {/* 其他UI组件 */}
    </div>
  )
}
```

### 类型安全

项目使用了类型化的 hooks，确保类型安全：

- `useAppDispatch`: 类型化的 dispatch hook
- `useAppSelector`: 类型化的 selector hook

### 示例组件

查看 `src/components/UserProfile.tsx` 获取完整的使用示例。

## 扩展

如果需要添加更多用户相关的状态（如用户角色、个人信息等），可以在 `UserState` 接口中添加新字段，并在 `userSlice` 中添加对应的 reducer。
