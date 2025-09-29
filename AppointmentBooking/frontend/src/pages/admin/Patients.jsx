import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Patients() {
    const [patients,setPatients] = useState()
    useEffect(()=>{
     async function getAllPatients(){
        try {
            const res = await axios.get('http://localhost:3000/patient')
            setPatients(res.data)

        } catch (error) {
            console.log(error)
            
        }
     }
     getAllPatients()
    },[])
    console.log(patients)
  return (
    <div className='admin-doc-main'>
         {patients?.map((e,index)=>(
            <div className='admin-doc-card'>
                <h1>{e.name}</h1>
                <p>{e.email}</p>

            </div>
         ))}
    </div>
  )
}

export default Patients