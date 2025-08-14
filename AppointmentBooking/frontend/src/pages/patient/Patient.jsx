import React, { useEffect, useState } from 'react'
import '../../styles/Patient.css'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

function Patient() {
  const [popup, setPopup] = useState(false)
  const [doctors, setDoctors] = useState()
  const [patient, setPatient] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [selectedDoctor, setSelectedDoctor] = useState([])
  const [newAppointment, setNewAppointment] = useState({

  })

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


  console.log(doctors)

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

    } catch (error) {
      console.log(error)
    }
  }
  console.log(selectedDoctor)

  return (
    <div className='patient-main'>
      <button onClick={() => setPopup(true)}>Book Appointment</button>
      <div className='form-container'>
        <div className='container'>
          <h2>Book Appointment</h2>
          <input type="date" name="" value={date} onChange={(e) => { setDate(e.target.value) }} id="" />
          <label >Time:</label>
          <select name="" id="" onChange={(e) => { setTime(e.target.value) }}>
            <option value="morning" >Morning</option>
            <option value="afternoon" >Afternoon</option>
          </select>
          <label htmlFor="">Choose doctor</label>
          <select name="" id="" onChange={(e) => setSelectedDoctor(e.target.value)}>
            {doctors?.map((doctor) => (

              <option key={doctor._id}  >{doctor?.name}</option>

            ))}
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>

    </div>
  )
}

export default Patient