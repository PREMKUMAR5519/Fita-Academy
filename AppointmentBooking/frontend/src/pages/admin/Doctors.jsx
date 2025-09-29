import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Doctors() {
    const [doctors,setDoctors] = useState()
    useEffect(()=>{
     async function getAllDoctors(){
        try {
            const res = await axios.get('http://localhost:3000/doctor')
            setDoctors(res.data)

        } catch (error) {
            console.log(error)
            
        }
     }
     getAllDoctors()
    },[])
    console.log(doctors)
  return (
    <div className='admin-doc-main'>
         {doctors?.map((e,index)=>(
            <div className='admin-doc-card'>
                <h1>{e.name}</h1>
                <p>{e.department}</p>
                <p>{e.availability}</p>
                <p>{e.email}</p>

            </div>
         ))}
    </div>
  )
}

export default Doctors