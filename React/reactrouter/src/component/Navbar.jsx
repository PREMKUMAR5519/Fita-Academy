import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'


function Navbar() {
   const naviagte = useNavigate()

    function handleNavigation(data){
       naviagte(data)
    }
  return (
    <div className='nav-bar'>
        <span onClick={()=>handleNavigation('/')}>Home</span>
        <span onClick={()=>handleNavigation('/contactus')}>contact us</span>
        <span onClick={()=>handleNavigation('/gallery')}>gallery</span>
        <span onClick={()=>handleNavigation('/admin')}>Admin</span>
         {/* <Link to='/home'><span >Home</span></Link>
        <span >contact us</span>
        <span >gallery</span>
        <span >Admin</span> */}

    </div>
  )
}

export default Navbar