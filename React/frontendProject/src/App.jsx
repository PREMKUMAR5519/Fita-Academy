import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import { DataProvider } from './DataContext'
function App() {

  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </DataProvider>
  )
}

export default App