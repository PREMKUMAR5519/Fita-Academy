import React from 'react'
import './SideBar.css'
function Card({data}) {
  return (
    <div className='card-item'>
        <img className='thumbnail' src={data.image} alt="" />
        <h2>{data.title}</h2>
        <p>{data.description}</p>
    </div>
  )
}

export default Card