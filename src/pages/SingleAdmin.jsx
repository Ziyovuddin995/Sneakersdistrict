import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleAdmin = () => {
        const [singleObj, setSingleObj] = useState({})
        const {id} = useParams()

        function updateProduct(e) {
            e.preventDefault()
            axios.patch(`http://localhost:7777/products/${id}`,{
                name: e.target[0].value,
                price: e.target[1].value,
                image: e.target[2].value,
                category: e.target[3].value
            }).then(() => {
                alert(`${id}: product update qilindi`)
                window.location.reload()
            }).catch(() => alert(err))
        }

        useEffect(() => {
            axios.get (`http://localhost:7777/products/${id}`)
            .then((res => setSingleObj(res.data)))
        }, [])
    
  return (
    <div>
      <div className="container">

        <form onSubmit={updateProduct} className='single_form'>
            <input defaultValue={singleObj?.name} className='single_input' type="text" required />
            <input defaultValue={singleObj?.price} className='single_input' type="namuber" required />
            <input defaultValue={singleObj?.image} className='single_input' type="text" required />
            <input defaultValue={singleObj?.category} className='single_input' type="text" required />
            <button className='single_btn'>Update!</button>
        </form>
        <div className="Single_admin">
          <div className="Single_admin1">
        <img className='Single_img' style={{margin: "0 auto", display:"block", marginTop:"20px"}} width={300} src={singleObj?.image} alt="" />
        </div>
        <div className="Single_admin2">
        <h1 className='Single_h1'>{singleObj?.name}</h1>
        <h1 className='Single_h1'>${singleObj?.price}</h1>
        <h1 className='Single_h1'>{singleObj?.category}</h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SingleAdmin
