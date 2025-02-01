import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SeoTitle from '../components/SeoTitle/SeoTitle'
import { Image } from 'antd';
import { useCart } from 'react-use-cart'

const Product = () => {
  const { addItem, getItem, removeItem } = useCart()
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:7777/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => alert(err))
  }, [])


  return (
    <div>
      <Nav />
      <div className="container">
        <SeoTitle name={product?.name} />
        <div className="product">
          <div className="p_left">
            <Image className='p_img' src={product?.image} />
          </div>
          <div className="p_right">
            <h2>{product?.name}</h2>
            <h3>€{product?.price?.toLocaleString()}</h3>
            <button className='sale_btn'>{product?.sale ? 'Sale' : 'No Sale'}</button>
            <p>In stock: {product?.count}</p>
            {!getItem(product?.id) ? (
              <button className='hover_btn' onClick={() => addItem(product)}>Add to Cart</button>
            ) : (
              <button className='hover_btn' onClick={() => removeItem(product?.id)}>Remove from Cart</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Product