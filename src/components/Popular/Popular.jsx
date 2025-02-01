import React from 'react'
import './popular.scss'

const Popular = () => {
  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
  return (
    <div>
      <div className="container1">
        <h1 className='popular'>MOST POPULAR</h1>
        <main>
            <div className="card">
                <button className='popular_1'>All sneakers</button>
            </div>
            <div className="card1">
                <button onClick={() => getCategory("Men")} className='popular_1'>Men</button>
            </div>
            <div className="card2">
                <button onClick={() => getCategory("Women")} className='popular_1'>Women</button>
            </div>
            <div className="card3">
                <button  className='popular_1'>Clothing</button>
            </div>
            <div className="card4">
                <button className='popular_1'>Accessories</button>
            </div>
            <div className="card5">
                <button onClick={() => getCategory("Kids")} className='popular_1'>Kids</button>
            </div>
        </main>
      </div>
    </div>
  )
}

export default Popular
