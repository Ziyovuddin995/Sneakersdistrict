import React from 'react'
import './categories.scss'

const Categories = () => {
  function getCategory(name) {
    localStorage.setItem("CategoryName", name)
    window.location.href = "/category"
  }
  return (
    <div>
      <div className="categories">
        <div className="container">
          <div className="c_main">
            <h3 onClick={() => window.location.href = "/sale"} className='sale_h3'>Sale</h3>
            <h3 onClick={() => getCategory("Men")}>Men</h3>
            <h3 onClick={() => getCategory("Women")}>Women</h3>
            <h3 onClick={() => getCategory("Kids")}>Kids</h3>
            <h3 onClick={() => getCategory("NB")}>NB</h3>
            <h3 onClick={() => getCategory("Puma")}>Puma</h3>
            <h3 onClick={() => getCategory("Adidas")}>Adidas</h3>
            <h3 onClick={() => getCategory("Nike")}>Nike</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
