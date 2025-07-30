import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import { DataProvider } from './DataContext'
import Cart from './pages/Cart'
import MainLayout from './MainLayout'
import Wheather from './Wheather'
function App() {
  

  return (
    <DataProvider>
    <MainLayout>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details/:id' element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wheather" element={<Wheather/>}/>

      </Routes>
    </BrowserRouter>
    </MainLayout>
    </DataProvider>
  )
}

export default App