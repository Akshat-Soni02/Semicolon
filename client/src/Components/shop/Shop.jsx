import React from 'react'
import img from "../../assets/cart.png"
import "./style.css"


const Shop = () => {
  return (
    <div className='cart'>
        <img src={img} alt="Shop"/>
        <p className="shopNav">
          Go to Shop
        </p>
    </div>
  )
}

export default Shop