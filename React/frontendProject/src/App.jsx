import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
function App() {

  const [data,setData] = useState()
  const [singleProduct,setSingleProdcut] = useState()

  useEffect(()=>{
  async function getData(){
   try {
     const response = await axios.get('https://dummyjson.com/products')
   setData(response.data.products)
   } catch (error) {
    console.log(error)
   }
  }
   getData()
  },[])



  console.log(data)
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Home  productData={data} setSingleProdcut={setSingleProdcut}/>} />
      <Route  path='/product-details' element={<ProductDetailsPage   singleProduct={singleProduct}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App