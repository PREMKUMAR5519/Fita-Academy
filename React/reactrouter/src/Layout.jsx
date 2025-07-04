import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <>
     <Navbar/>
     <div>
      <Outlet/>
     </div>
     <div>
        Footer
     </div>
    </>
  )
}

export default Layout