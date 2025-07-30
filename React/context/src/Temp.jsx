import React, { useContext, useEffect, useState } from 'react'
import { person } from './Data'
import { DataContext } from './DataContext'
function Temp() {
    const {handleClick,state} = useContext(DataContext)

  return (
 
    <div>
    <h2>  {state?.name},
      {state?.age}</h2>
      {state?.state}
     <div>
      <button className='btn btn-primary' onClick={handleClick}>add</button>
     </div>
    </div>

  )
}

export default Temp