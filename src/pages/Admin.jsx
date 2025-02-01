import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  const [data, setData] = useState([])

  function createProduct(e) {
    e.preventDefault()
    axios.post("http://localhost:7777/products", {
      name: e.target[0].value,
      price: e.target[1].value,
      image: e.target[2].value,
      category: e.target[3].value
    }).then(() => {
      alert("Yangi yaratilindi!")
      window.location.reload()
    }).catch((err) => alert(err))
  }



  function deleteProduct(id) {
    axios.delete(`http://localhost:7777/products/${id}`)
      .then(() => {
        alert("Delete Bo'ldi!!!")
        window.location.reload()
      }).catch((err) => alert(err))
  }

  function logout() {
    localStorage.removeItem("Adminpassword")
    window.location.href = "/"
  }

  useEffect(() => {
    axios.get("http://localhost:7777/products")
      .then((res) => setData(res.data))
      .catch((err) => alert(err))
  }, [])

  useEffect(() => {
    if (!localStorage.getItem("AdminPassword")) {
      window.location.href = "/"
    }
  }, [])


  return (
    <div>
      <div className="container">
        <button onClick={logout} className='fixed_btn'>Logout</button>

        <div className="create">
          <form onSubmit={createProduct} className='create_form'>
            <input className='admin_name' type="text" placeholder='name' required />
            <br />
            <br />
            <input className='admin_name' type="number" placeholder='price' required />
            <br />
            <br />
            <input className='admin_name' type="text" placeholder='image' required />
            <br />
            <br />
            <input className='admin_name' type="text" placeholder='category' required />
            <br />
            <br />
            <button  className='admin_btn1'>Create!</button>
          </form>
        </div>

        <div className="c_wrapper">
          {data?.map((el) => {
            return (
              <Link to={`/admin/${el?.id}`} className="c_card">
                <img src={el?.image} alt="" />
                <p>{el?.name}</p>
                <button className='admin_btn' onClick={() => deleteProduct(el?.id)}>Delete!</button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Admin