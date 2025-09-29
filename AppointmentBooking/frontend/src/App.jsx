import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Patient from './pages/patient/Patient'
import Doctor from './pages/doctor/Doctor'
import ProtectedRoute from './ProtectedRoute'
import Home from './pages/home/Home'
import MainLayout from './MainLayout'
import Admin from './pages/admin/Admin'
function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>


            <Route path='/login' element={<Login />} />


            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route element={<ProtectedRoute allowaccess={'patient'} />}>
              <Route path='/patient' element={<Patient />} />
            </Route>
            <Route element={<ProtectedRoute allowaccess={'doctor'} />}>
              <Route path='/doctor' element={<Doctor />} />
            </Route>
             <Route element={<ProtectedRoute allowaccess={'admin'} />}>
              <Route path='/admin' element={<Admin />} />
            </Route>
       
          </Routes>
        </MainLayout>
      </Router>
    </>
  )
}

export default App