import React from 'react'
import Contactus from './pages/Contactus'
import Gallery from './pages/Gallery'
import Admin from './pages/Admin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'
import Error from './pages/Error'
function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </Router>
  )
}

export default App

