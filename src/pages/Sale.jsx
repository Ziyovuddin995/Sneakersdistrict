import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav/Nav'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import SeoTitle from '../components/SeoTitle/SeoTitle'
import { Link } from 'react-router-dom'

const Sale = () => {
    const [sales, setSales] = useState([])

    const filterSale = sales?.filter((el) => el.sale)


    useEffect(() => {
        axios.get("http://localhost:7777/products")
            .then((res) => setSales(res.data))
            .catch((err) => alert(err))
    }, [])
    return (
        <div>
            <Nav />
            <Categories />

            <SeoTitle name={"Sale sneakers"} />
            <div className="container">
                {filterSale.length ? (
                    <div className="c_wrapper">
                        {filterSale?.map((el) => {
                            return (
                                <Link to={`/product/${el?.id}`} key={el?.id} className="c_card">
                                    <img src={el?.image} alt="" />
                                    <p>{el?.name}</p>
                                    <b>€ {el?.price}</b>
                                </Link>
                            )
                        })}
                    </div>
                ) : (
                    <div className="nothing">
                        <h1>Sale sneakers are not defined!</h1>
                    </div>
                )}
            </div>



            <Footer />
        </div>
    )
}

export default Sale