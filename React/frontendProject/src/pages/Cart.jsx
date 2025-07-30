import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import '../styles/Cart.css'
import { useNavigate } from 'react-router-dom'
function Cart() {
    const {cart,setCart} = useContext(DataContext)
    console.log(cart)
    const navigate = useNavigate()

    function handleNavigation(id){
        navigate(`/product-details/${id}`)
    }
    function handleDelete(id){
        console.log('incomming id' ,id)
        const filter = cart.filter((e)=> e.id != id)
        console.log('filtered product',filter)
       setCart(filter)
        
    }
    const newCart = sessionStorage.getItem('cart')
     console.log('newcart',newCart)
  return (
    <div className='cart-main'>
        {newCart?.map((e,index)=>(
            <div className='cart-container'>
                <div className='cart-left'>
                   <img src={e.images} alt="" />
                </div>
                <div className='cart-right'>
                   <h2>{e.title}</h2>
                   <p>{e.category}</p>
                   <button onClick={()=>{handleNavigation(e.id)}}>Details</button>
                   <button onClick={()=>{handleDelete(e.id)}}>Delete</button>
                </div>
            </div>
        ))}
        {cart?.length<=0 &&(
            <h1>your card is empty</h1>
        )}
    </div>
  )
}

export default Cart