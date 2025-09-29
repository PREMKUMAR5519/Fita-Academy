import React from 'react'

function Navbar({setshow}) {
  return (
    <div className='admin-nav-main'>
      <span onClick={()=>{setshow('doctors')}}>Doctors</span>
      <span onClick={()=>{setshow('patients')}}>Patients</span>
      <span onClick={()=>{setshow('appointments')}}>Appointments</span>
      <span onClick={()=>{setshow('users')}}>Users</span>
    </div>
  )
}

export default Navbar