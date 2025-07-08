import React from 'react'

function ProductDetailsPage({singleProduct}) {


    console.log(singleProduct)
  return (
    <div>{singleProduct?.title}</div>
  )
}

export default ProductDetailsPage