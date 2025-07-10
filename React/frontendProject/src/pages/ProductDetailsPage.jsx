import React, { useContext, useEffect } from 'react'
import { DataContext } from '../DataContext'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

function ProductDetailsPage() {
  const { productData } = useContext(DataContext)
  const { id } = useParams()
  const singleProduct = productData?.filter((e) => e.title == id)
 console.log(id)
  if (singleProduct) {
    return (
      <>
        <h2>{singleProduct[0].title}</h2>
      </>
    )
  } else {
    return (
      <h3>
        loading...
      </h3>
    )
  }
}

export default ProductDetailsPage