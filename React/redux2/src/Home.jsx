import React, { useState } from 'react'
import { addData } from './counterSlice'
import { useDispatch,useSelector } from 'react-redux'
function Home() {
    const dispatch = useDispatch()
    const [inputValues,setInputValues] = useState({
        name:"",
        email:""
    })
    const state = useSelector((state)=>state)
    console.log(state)
    function handleSubmit(){
        dispatch(addData(inputValues))
        setInputValues({name:"",email:""})
    }
  return (
    <div>
        <input type="text" value={inputValues.name} onChange={(e)=>{setInputValues({...inputValues,name:e.target.value})}}/>
        <input type="text" value={inputValues.email}  onChange={(e)=>{setInputValues({...inputValues,email:e.target.value})}}/>
        <button onClick={handleSubmit}>add</button>
    </div>
  )
}

export default Home