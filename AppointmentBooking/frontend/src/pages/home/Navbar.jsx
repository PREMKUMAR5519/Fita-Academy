import React from 'react'
import logo from '/images/logo.png'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
  return (
    <div className='nav-main'>
      <div className='left'>
       <img onClick={()=>navigate('/')} src={logo} alt="" />
      </div>
      <div className='right'>
        <button onClick={()=>navigate('/register')}>Register</button>
       <button onClick={()=>navigate('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Navbar