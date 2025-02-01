import React from 'react'
import './marks.scss'

const Marks = () => {
  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
  return (
    <div>
      <div className="container2">
        <hr />
        <div className="d_main">
            <img onClick={() => getCategory("NB")} className='marks' src="https://cdn.etrias.nl/media/cache/brand/Logo_Slider_Blok_newbalance.jpg" alt="" />
            <img  onClick={() => getCategory("Adidas")}  className='marks' src="https://cdn.etrias.nl/media/cache/brand/logosliderblok-adidasoriginal.png" alt="" />
            <img className='marks' src="https://cdn.etrias.nl/media/cache/brand/asics-logo.png" alt="" />
            <img className='marks' src="https://cdn.etrias.nl/media/cache/brand/Logo_Slider_Blok_.karhu2jpg.jpg" alt="" />
            <img className='marks' src="https://cdn.etrias.nl/media/cache/brand/reebok-logo.png" alt="" />
            <img  onClick={() => getCategory("Puma")} className='marks' src="https://cdn.etrias.nl/media/cache/brand/logosliderblok-puma.jpg" alt="" />
        </div>
        <br />
        <br />
        <hr />
      </div>
    </div>
  )
}

export default Marks
