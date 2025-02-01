import React from 'react'
import './shop.scss'

const Shop = () => {
  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
  return (
    <div>
      <div className="container1">
        <h1 className='popular'>MOST POPULAR</h1>
        <main1>
            <div className="card6">
                <button onClick={() => getCategory("NB")} className='popular_2'>Shop New Balance</button>
            </div>
            <div className="card7">
                <button onClick={() => getCategory("Puma")} className='popular_2'>Shop PUMA</button>
            </div>
            <div className="card8">
                <button  className='popular_2'>Shop Saucony</button>
            </div>
            <div className="card9">
                <button onClick={() => getCategory("Adidas")} className='popular_2'>Shop adidas</button>
            </div>
           
        </main1>
      </div>
    </div>
  )
}

export default Shop
