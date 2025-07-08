import React from 'react'
import '../styles/Home.css'
import {useNavigate} from 'react-router-dom'
function Home({ productData,setSingleProdcut }) {


    const navigate = useNavigate()
  function handleclick(product){
  setSingleProdcut(product)
    navigate('/product-details')
  }

    return (
        <div className='home-main'>
            {productData?.map((element, index) => (
                <div className='product'>
                    <img src={element.images} alt="" />
                    <h2>{element.title}</h2>
                    <p>{element.category}</p>
                    <button onClick={()=>handleclick(element)}>View</button>
                </div>
            ))}
        </div>
    )
}

export default Home