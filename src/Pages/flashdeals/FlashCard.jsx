import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../../services/productService';
import Slider from "react-slick";


const FlashCard = ({ addToCart }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getAllProduct();
      if (response) {
        // console.log(response);

        setData(response);
      }
    };
    fetchApi();
  }, []);
  const NextArrow = (props) => {
    const {onClick} = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className='fa fa-long-arrow-alt-right'></i>
        </button>
      </div>
    )
  }
  const PrevArrow = (props) => {
    const {onClick} = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className='fa fa-long-arrow-alt-left'></i>
        </button>
      </div>
    )
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>

  };
  return (

    <>
      <Slider {...settings}>

        {data.map((item, index) => (
          <div className="box" key={index}>
            <div className="product mtop">
              <div className="img">
                <span className='discount'>{item.discount}% Off</span>
                <img src={item.cover} alt="" />
                <div className="product-like">
                  <label>0</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{item.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{item.price}.00</h4>
                  <button onClick={() => addToCart(item)}>
                    <i className="fa fa-plus">

                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}

export default FlashCard