import React, { useReducer, useState } from 'react'

function App() {
  // const [count,setCount] = useState(10)
  // console.log(count)
  let initialValue = {value:"10"}
  function reducerFunction(count,condition){
     switch (condition.condition) {
      case 'increment':
        return {value : count.value +1}
        break;
     case 'decrement':
        return {value : count.value -1}
        break;
      default:
        return {value :5}
        break;
     }
  }
  const [count,dispatch] =useReducer(reducerFunction,initialValue)
  console.log(count)
  return (
    <div> 

      <span>count:</span>
      <span>{count.value}</span>
      <button onClick={()=>dispatch({condition:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({condition:'decrement'})}>decrement</button>
    
    </div>
  )
}

export default App