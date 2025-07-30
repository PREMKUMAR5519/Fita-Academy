import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import './Index.css'
import { DataContext } from './DataContext';
function MainLayout({children}) {
    const {cart} = useContext(DataContext)
  return (
    <>
    <div className='header'>
       <div className='icon'>
        <IoCartOutline/>
        <div className='cart-count'>{cart?.length}</div>
       </div>
    </div>
    {children}
    <div>
        Footer
    </div>
    </>
  )
}

export default MainLayout