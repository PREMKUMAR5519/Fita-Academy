import React, { useContext, useEffect } from 'react'
import { DataContext } from '../DataContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import '../styles/SingleProduct.css'
function ProductDetailsPage() {
  const { productData, setCart, cart } = useContext(DataContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const singleProduct = productData?.filter((e) => e.id == id)
  console.log(id)
  console.log(singleProduct)


  function handleCart(product) {
    // const filter = cart?.filter((e) => e.id == product.id)
    // console.log(filter)
    // if (filter?.length > 0) {
    //   alert('product exist')
    // } else {
    //   setCart([...cart, product])
    //   navigate('/cart')
    // }
  sessionStorage.setItem('cart',product)


  }
  console.log("cart", cart)
  if (!singleProduct) {
    return (
      <>
        <h2>loading..</h2>
      </>
    )
  } else {
    return (

      <div className='sp-main'>
        <div className='left'>
          {/* //image */}
          <img src={singleProduct[0].images} alt="" />

        </div>
        <div className='right'>
          {/* //product details */}
          <h2>{singleProduct[0].title}</h2>
          <p>{singleProduct[0].category}</p>
          <p>Rs.{singleProduct[0].price}</p>
          <p>stock:{singleProduct[0].stock}</p>
          <p>Rating:{singleProduct[0].rating}</p>
          <button onClick={() => { handleCart(singleProduct[0]) }}> Add to cart</button>
        </div>
      </div>
    )
  }
}

export default ProductDetailsPage