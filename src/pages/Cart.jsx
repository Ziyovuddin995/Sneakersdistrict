import React from 'react'
import Nav from '../components/Nav/Nav'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import { useCart } from 'react-use-cart'
import { CiTrash } from "react-icons/ci";
import SeoTitle from '../components/SeoTitle/SeoTitle'

const Cart = () => {
    const { items, isEmpty, updateItemQuantity, removeItem, emptyCart, cartTotal } = useCart()
    return (
        <div>
            <Nav />
            <Categories />
            <SeoTitle name={"Cart"} />
            <div className="container">
                {isEmpty ? (
                    <div className="empty">
                        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
                    </div>
                ) : (
                    <div className="cart">
                        <div className="clear">
                            <button onClick={() => emptyCart()}>Clear All</button>
                        </div>
                        <div className="cart_wrap">
                            {items?.map((el) => {
                                const itemPrice = el?.quantity * el?.price
                                return (
                                    <div className="cart_item">
                                        <span>
                                            <p className='cart_p'>{el?.name}</p>
                                            <img className='cart_img' src={el?.image} alt="" />
                                        </span>
                                        <h4>${itemPrice}</h4>
                                        <div className="btns">
                                            <button onClick={() => updateItemQuantity(el?.id, el?.quantity - 1)}>-</button>
                                            <p className='cart_p2'>{el?.quantity}</p>
                                            <button onClick={() => updateItemQuantity(el?.id, el?.quantity + 1)}>+</button>
                                        </div>
                                        <CiTrash onClick={() => removeItem(el?.id)} className='trash' />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="total">
                            <h1 className='cart_h1'>Total: {cartTotal} $</h1>
                            {localStorage.getItem("Phone") ? (
                                <button className='cart_btn'>Order</button>
                            ) : (
                                <button className='cart_btn' onClick={() => window.location.href = "/login"}>Login</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default Cart 