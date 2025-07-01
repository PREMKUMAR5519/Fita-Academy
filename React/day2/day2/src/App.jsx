import React from 'react'
import Navbar from './Navbar'
import Left from './Left'

function App() {
  return (
  <div>
     <div style={{position:"fixed",top:"0",width:"100%",background:"blue"}}>
       <Navbar/>
     </div>
     <div style={{display:"flex",flexDirection:"row"}}>
      <div style={{backgroundColor:"red",width:"10vw",height:"100vh"}}>
       <Left/>
      </div>
      <div  style={{backgroundColor:"gray",width:"90vw",height:"100vh"}}>

      </div>
     </div>
  </div>
  )
}

export default App