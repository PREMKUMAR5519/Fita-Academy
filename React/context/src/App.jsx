import React, { useContext, useEffect, useState } from 'react'
import { person } from './Data'
import { DataContext } from './DataContext'
import Temp from './Temp'
function App() {
const  { handleClick,state } = useContext(DataContext)
console.log(state)
  return (
    <div >
    <h2>  {state?.name},
      {state?.age}</h2>
     <div>
      <button className='btn btn-danger' onClick={handleClick}>add</button>
     </div>
     <Temp/>
    </div>


  )
}

export default App