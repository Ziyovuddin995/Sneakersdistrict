import React from 'react'
import './nav.scss'
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { FaUser } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Search from '../Search/Search';

const Nav = () => {
  const { totalItems } = useCart()

  function logout() {
    localStorage.removeItem("Image")
    localStorage.removeItem("Name")
    localStorage.removeItem("Phone")
    window.location.href = "/login"
  }



  return (
    <div>

      <nav>
        <div className="container">
          <div className="l_main">
            <Link to={'/'}>
              <img src="https://cdn.etrias.nl/shop/fonts/logo_sneakerdistrict.7686319d461f14cce2d2fe2506ccd875.svg" alt="" />
            </Link>
            <Search/>
            <div className="n_icons">
              <Link to={'/fav'}>
                <FaRegHeart className='icon' />
                <sub>0</sub>
              </Link>
              <Link to={'/cart'}>
                <HiOutlineShoppingBag className='icon' />
                <sub>{totalItems}</sub>
              </Link>
              {localStorage.getItem("Phone") ? (
                <div className="user">
                  <img onClick={logout} src={localStorage.getItem("Image")} alt="" />
                </div>
              ) : (
                <Link to={'/login'}>
                  <FaUser className='icon' />
                </Link>
              )}
              <span>
                <SignedOut>
                  <SignInButton className="sign-in-btn"/>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
