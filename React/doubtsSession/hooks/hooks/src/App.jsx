import React, { useEffect, useState } from 'react'

function App() {
  const [count,setCount] = useState(1)
 
    // console.log(name)



   useEffect(() => {
     //mount -- > rendering
      console.log('running.....')

      setName('kumar')
     return () => {
       /// unmount cycle --- > rerender
       console.log('un mount')
       setName('')
     }
   }, [count])
  //  <---- update
   
  return (
    <div>
       <p>count:{count}</p>
       <button onClick={()=>{setCount(count + 1)}}>increment</button>
    </div>
  )
}

export default App