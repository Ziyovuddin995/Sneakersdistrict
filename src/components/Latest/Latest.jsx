import React from 'react'
import './latest.scss'

const Latest = () => {
  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
  return (
    <div>
      <div className="container1">
        <h1 className='popular'>LATEST APPAREL</h1>
        <main1>
            <div className="card10">
                <button className='popular_2'>Shop headwear</button>
            </div>
            <div className="card11">
                <button className='popular_2'>Shop clothing</button>
            </div>
            <div className="card12">
                <button className='popular_2'>Shop bags</button>
            </div>
            <div className="card13">
                <button onClick={() => getCategory("T-shirt")} className='popular_2'>Shop mans T-shirt</button>
            </div>
           
        </main1>
      </div>
    </div>
  )
}

export default Latest
