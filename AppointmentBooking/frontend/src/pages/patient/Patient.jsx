import React, { useEffect, useState } from 'react'
import '../../styles/Patient.css'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

function Patient() {
  const [popup, setPopup] = useState(false)
  const [doctors, setDoctors] = useState()
  const [patient, setPatient] = useState(null)
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [selectedDoctor, setSelectedDoctor] = useState([])
  const [newAppointment, setNewAppointment] = useState({

  })
  const [previousAppointments,setPreviousAppointments]= useState()

  useEffect(() => {
    async function getPatientData() {
      try {
        const Token = localStorage.getItem('token')
        const DecodedToken = jwtDecode(Token)
        console.log(DecodedToken)
        if (DecodedToken) {
          const response = await axios.get(`http://localhost:3000/patient/${DecodedToken?.email}`)
          setPatient(response.data)
        }

      } catch (error) {
        console.log(error)
      }
    }
    getPatientData()
  }, [])

  console.log("patient", patient)
  useEffect(() => {
    async function getAllDoctordata() {
      try {
        const response = await axios.get('http://localhost:3000/doctor')
        setDoctors(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllDoctordata()
  }, [])



  //submit 
  async function handleSubmit() {

    try {
      const response = await axios.post('http://localhost:3000/appointment/create', {
        patient_id: patient?._id,
        patientName: patient?.name,
        doctor_id: selectedDoctor?._id,
        doctorName: selectedDoctor?.name,
        appointmentDate: date,
        appointmentTime: time
      })
      console.log("result", response.data)
      setPopup(false)

    } catch (error) {
      console.log(error)
    }
  }
  function handleDoctorinputchange(id) {
    const findDoctor = doctors.find((e) => e._id == id)
    if (findDoctor) {
      setSelectedDoctor(findDoctor)
    }
  }

   useEffect(()=>{
    async function getappointmentbypatientId(){
      if(!patient){
        return
      }
      try {
        const response = await axios.get(`http://localhost:3000/appointment/bypatient/${patient?._id}`)
        setPreviousAppointments(response.data)
      } catch (error) {
         console.log(error)
      }
    }
    getappointmentbypatientId()
   },[patient])
  return (
    <div className='patient-main'>
      <button onClick={() => setPopup(true)}>Book Appointment</button>
      {popup ? (
        <div className='form-container'>
          <div className='container'>
            <button className='close-popup' onClick={()=>{setPopup(false)}}>X</button>

            <h2>Book Appointment</h2>
            <input type="date" name="" value={date} onChange={(e) => { setDate(e.target.value) }} id="" />
            <label >Time:</label>
            <select name="" id="" onChange={(e) => { setTime(e.target.value) }}>
              <option value="morning" >Morning</option>
              <option value="afternoon" >Afternoon</option>
            </select>
            <label htmlFor="">Choose doctor</label>
            <select name="" id="" onChange={(e) => handleDoctorinputchange(e.target.value)}>
              {doctors?.map((doctor) => (
                <option key={doctor._id} value={doctor._id} >{doctor.name}</option>
              ))}
            </select>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : null}
    <div>
      {previousAppointments?.map((appointment)=>(
        <div style={{border:`1px solid ${appointment?.status =='pending'? 'yellow':"green"}`}}>
          <div >
            <span>Doctor name:</span>
            <span>{appointment?.doctorName}</span>
          </div>
          <div>
            <span>date:</span>
            <span>{appointment.appointmentDate}</span>
          </div>
           <div>
            <span>time:</span>
            <span>{appointment.appointmentTime}</span>
          </div>
          <div>
            <span>status:</span>
            <span>{appointment.status}</span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Patient