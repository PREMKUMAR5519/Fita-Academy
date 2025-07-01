import React from 'react'
import './SideBar.css'
import { GoHome } from "react-icons/go";

function Sidebar() {
  return (
    <div className='sidebar-main'>
      <div className='items'>
       <span><GoHome/></span>
       <span>Home</span>
      </div>
       <div className='items'>
       <span><GoHome/></span>
       <span>News</span>
      </div>
       <div className='items'>
       <span><GoHome/></span>
       <span>Sports</span>
      </div>
       <div className='items'>
       <span><GoHome/></span>
       <span>Music</span>
      </div>
       <div className='items'>
       <span><GoHome/></span>
       <span>cinema</span>
      </div>
    </div>
  )
}

export default Sidebar