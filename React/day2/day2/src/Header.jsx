import React from 'react'
import Child from './Child'

function Header(prop) {
  return (
    <div>
        <h1>Heading</h1>
        <p>This is heading</p>
        <Child value={prop.values}/>


    </div>
  )
}

export default Header