import React from 'react'
import Nav from '../components/Nav/Nav'
import Categories from '../components/Categories/Categories'
import Slicker from '../components/Slicker/Slicker'
import Popular from '../components/Popular/Popular'
import Marks from '../components/Marks/Marks'
import Shop from '../components/Shop_brands/Shop'
import Latest from '../components/Latest/Latest'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div >
      <Nav/>
      <Categories/>
      <Slicker/>
      <Popular/>
      <Marks/>
      <Shop/>
      <Latest/>
      <Footer/>
    </div>
  )
}

export default Home
