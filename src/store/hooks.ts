import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

// 类型化的useDispatch hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

// 类型化的useSelector hook
export const useAppSelector = useSelector.withTypes<RootState>()
