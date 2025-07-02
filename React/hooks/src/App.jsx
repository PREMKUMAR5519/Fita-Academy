import React, { useEffect, useRef, useState } from 'react'

function App() {
   const [name,setName]= useState('santhosh')
   const [count,setCount] = useState(0)
   const [inputValue,setInputValue]=useState()
   const inputRef = useRef()
   const secondInputref = useRef()
  // let name ='Santhosh'

  function handleChange(){
    setName('suresh')
  }
   useEffect(()=>{
    console.log("page is rendered")
    

    return ()=>{
      console.log('unmount is calling')
      setCount()
    }
   },[count])
    // console.log(name)
    function handelIncrease (){
        setCount(1)
    }


    function handleChange(e){
       setInputValue(e.target.value)
       console.log(e.target.value)
    }
    function handleSubmit(){
      setInputValue(inputRef.current.value)
    }


    useEffect(() => {
      inputRef.current.focus()
    }, [])
     function handleNext(){
      secondInputref.current.focus()
      
     }
  return (
    <div>
      <h1>Welcome</h1>
      <p>{name}</p>
      <p>Number:{count}</p>
      <button onClick={handleChange}>Change</button>
      <button onClick={handelIncrease}>Increase</button>
      <input ref={inputRef} type="text" name="" id=""  />
      <textarea ref={secondInputref} name="" id="" ></textarea>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleNext}>next</button>
    </div>
  )
}

export default App