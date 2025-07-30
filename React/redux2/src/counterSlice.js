import {createSlice} from '@reduxjs/toolkit'


const CounterSlice = createSlice({
    name:"counter",
    initialState:[],
    reducers:{
        addData:(state,actions)=>{
            state.push(actions.payload)
        },
        deleteData:(state,actions)=>{
            let index = 0;
             for(let i = 0 ; i < state.length;i++){
                
                if(state[i].name == actions.payload.name ){
                     index = i;
                     console.log(i)
                }
            }
          
            state.splice(index,1)
       
        }

    }
})


export const {addData,deleteData} = CounterSlice.actions;
export default CounterSlice.reducer


