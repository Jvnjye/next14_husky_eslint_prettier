import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 定义用户状态的类型
export interface UserState {
  userName: string | null
  token: string | null
}

// 初始状态
const initialState: UserState = {
  userName: null,
  token: null,
}

// 创建用户状态切片
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 设置用户名
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload
    },
    // 设置token
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    // 同时设置用户名和token（登录时使用）
    setUser: (state, action: PayloadAction<{ userName: string; token: string }>) => {
      state.userName = action.payload.userName
      state.token = action.payload.token
    },
    // 清除用户信息（登出时使用）
    clearUser: (state) => {
      state.userName = null
      state.token = null
    },
  },
})

// 导出actions
export const { setUserName, setToken, setUser, clearUser } = userSlice.actions

// 导出reducer
export default userSlice.reducer