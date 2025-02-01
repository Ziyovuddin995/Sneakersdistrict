import React from 'react'

const Login = () => {

  function auth(e) {
    e.preventDefault()
    localStorage.setItem("Image", e.target[0].value)
    localStorage.setItem("Name", e.target[1].value)
    localStorage.setItem("Phone", e.target[2].value)
    window.location.href = "/"
  }

  return (
    <div>
      <div className="login">
        <div className="login_form">
          <form onSubmit={auth}>
            <input className='login_inp' type="text" placeholder='Image...' required />
            <input className='login_inp' type="text" placeholder='Name...' required />
            <input className='login_inp' type="tel" placeholder='Phone...' required />
            <button  className='login_btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login