import React from 'react'
import FlashCard from './FlashCard';


const FlashDeals = ({ addToCart }) => {

  return (
    <section className="flash background">
        <div className="container">
            <div className="heading f-flex">
                <i className="fa fa-bolt">

                </i>
                <h1>Flash Deals</h1>

            </div>
            <FlashCard addToCart={addToCart}/>
        </div>
    </section>
  )
}

export default FlashDeals