import {createSlice} from '@reduxjs/toolkit'

const initialState = {value:10}
const CounterSlice =createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:{

        },
        decrement:{

        },
        addition:{

        }
    }
})


export const {increment,decrement,addition} = CounterSlice.actions

export default CounterSlice.reducer