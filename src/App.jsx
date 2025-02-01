import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Error from './pages/Error'
import Category from './pages/Category'
import Sale from './pages/Sale'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Pinkod from './pages/Pinkod'
import Admin from './pages/Admin'
import SingleAdmin from './pages/SingleAdmin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<Error />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/pinkod' element={<Pinkod/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/:id' element={<SingleAdmin/>} />
      </Routes>
    </div>
  )
}

export default App
