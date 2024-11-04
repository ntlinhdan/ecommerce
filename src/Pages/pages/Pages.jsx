import React from 'react'
import Home from "../mainpage/Home";
import FlashDeals from '../flashdeals/FlashDeals';


const Pages = ({cartItem, addToCart}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals addToCart={addToCart}/>
    </>
  )
}

export default Pages