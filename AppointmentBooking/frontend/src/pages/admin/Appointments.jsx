import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CiTimer,CiCalendarDate } from "react-icons/ci";

function Appointments() {
    const [appointments, setappointments] = useState()

         async function getAllAppointments() {
            try {
                const res = await axios.get('http://localhost:3000/appointment')
                setappointments(res.data)
            } catch (error) {

            }
        }
    useEffect(() => {
   
        getAllAppointments()
    }, [])
  async function handleDeleteAppointment(id) {
    try {
        await axios.delete(`http://localhost:3000/appointment/delete/${id}`);
       getAllAppointments()
    } catch (error) {
        console.log(error)
        
    }
    
  }
    return (
        <div className='admin-appointments'>
            {appointments?.map((e, index) => (
                <div className='admin-appointment-card'>
                    <h2>Patient:{e.patientName}</h2>
                    <h2>Doctor:{e.doctorName}</h2>
                    <p><CiCalendarDate/>{e.appointmentDate}</p>
                    <p><CiTimer/>{e.appointmentTime}</p>
                    <p>{e.status}</p>
                    <button onClick={()=>handleDeleteAppointment(e._id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Appointments