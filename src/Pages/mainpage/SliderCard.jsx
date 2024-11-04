import React, { useEffect, useState } from 'react'
import { getSlider } from '../../services/sliderService';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCard = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await getSlider();
      if (response) {
        // console.log(response);

        setData(response);
      }
    };
    fetchApi();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{margin: "0px"}}>{dots}</ul>
    },
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="box d-flex top" key={index}>
            <div className="left">
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <button className='btn-primary'>Visit Collections</button>
            </div>
            <div className="right">
              <img src={item.cover} alt={item.title} />
            </div>
          </div>
        ))}
      </Slider>
    </>

  )
}

export default SliderCard