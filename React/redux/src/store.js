import {configureStore,createSlice} from '@reduxjs/toolkit'
import CounterReducer from './slice/countSlice'
export const store = configureStore({
    reducer:CounterReducer
})