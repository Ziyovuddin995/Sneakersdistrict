import React from 'react'
import './slicker.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slicker = () => {

  const NextArrow = ({onclick}) => {
    return(
      <div className="arrow next" onClick={onclick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,       
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
      };
  return (
    <div className='slick'>
       <Slider {...settings}>
      <div>
        <img src="https://cdn.etrias.nl/media/cache/slide_wide_xxlg/images/slider/251888/new-balance-unisex-u740fr2-sea-salt-hb.jpg" alt="" />
        <button onClick={() => getCategory("NB")} className="slide-button">New Balance</button>
      </div>
      <div>
       <img src="https://cdn.etrias.nl/media/cache/slide_wide_xxlg/images/slider/251888/puma-unisex-speedcat-og-whisp-of-pink-puma-white-hb.jpg" alt="" />
       <button onClick={() => getCategory("Puma")} className="slide-button">Puma</button>
      </div>
      <div>
       <img src="https://cdn.etrias.nl/media/cache/slide_wide_xxlg/images/slider/251888/asics-banner-1.jpg" alt="" />
       <button onClick={() => getCategory("Nike")} className="slide-button">Nike</button>
      </div>
      <div>
        <img src="https://cdn.etrias.nl/media/cache/slide_wide_xxlg/images/slider/251888/adidas-banner-fw241.jpg" alt="" />
        <button onClick={() => getCategory("Adidas")} className="slide-button">Adidas</button>
      </div>
      
    </Slider>
    </div>
  )
}

export default Slicker
