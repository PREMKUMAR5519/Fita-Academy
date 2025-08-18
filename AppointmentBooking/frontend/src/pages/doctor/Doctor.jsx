import React, { useEffect, useState } from 'react'
import '../../styles/Doctor.css'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Doctor() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const DecodedToken = jwtDecode(token)
  const [doctorDetails, setDoctorDetails] = useState(null)
  const [appointments, setAppointments] = useState(null)

  useEffect(() => {
    async function getDoctorDetails() {
      if (DecodedToken?.email) {
        console.log(DecodedToken.email)
        const response = await axios.post('http://localhost:3000/doctor/doctor', { email: DecodedToken?.email })
        setDoctorDetails(response.data)
      }

    }
    getDoctorDetails()
  }, [])

   async function getAppointments() {
      if (doctorDetails) {
        try {
          const res = await axios.get(`http://localhost:3000/appointment/bydoctor/${doctorDetails?._id}`)
          setAppointments(res.data)
        } catch (error) {
          console.log(error)
        }

      }

    }
  useEffect(() => {
   
    getAppointments()
  }, [doctorDetails])
  console.log("doctorDetails", doctorDetails)
  console.log("appointm",appointments)
  async function handleComplete(id) {
    if(!id){
      return
    }
    try {
     await axios.put(`http://localhost:3000/appointment/update/${id}`)
       getAppointments()
    } catch (error) {
      
    }
  }
  return (
    <div className='doctor-main'>
     <h1>Appointments</h1>
     {appointments?(
      <>
       {appointments?.map((appointment)=>(
        <div className='doctor-app-card'>
          <h2>{appointment?.patientName}</h2>
          <h4>date:{appointment?.appointmentDate}</h4>
          <h4>time:{appointment?.appointmentTime}</h4>
          <p>{appointment.status}</p>
          {appointment.status != 'completed' &&(
            <button onClick={()=>{handleComplete(appointment._id)}}>Make Completed</button>
          )}
        </div>
       ))}
      </>
     ):<>
     <div>No Appointments Found</div>
     </>}
    </div>
  )
}

export default Doctor