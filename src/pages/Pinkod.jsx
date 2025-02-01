import React from 'react'

const Pinkod = () => {

  function enter(e) {
    e.preventDefault()
    if (e.target[0].value === "koko") {
      localStorage.setItem("AdminPassword", "****")
      window.location.href = "/admin"
    } else {
      window.location.reload()
    }
  }

  return (
    <div>
      <div className="pinkod">
        <form onSubmit={enter}>
          <input type="password" required />
          <button>Enter</button>
        </form>
      </div>
    </div>
  )
}

export default Pinkod