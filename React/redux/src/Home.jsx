import React from 'react'
import {useSelector} from 'react-redux'


function Home() {

    const data = useSelector((all)=>all)
    console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home