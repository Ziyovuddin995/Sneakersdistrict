import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import Categories from '../components/Categories/Categories'
import SeoTitle from '../components/SeoTitle/SeoTitle'
import { Link } from 'react-router-dom'

const Category = () => {
    const [data, setData] = useState([])

    const categoryFilter = data.filter((el) => {
        return el.category == localStorage.getItem("CategoryName")
    })


    useEffect(() => {
        axios.get("http://localhost:7777/products")
            .then((res) => setData(res.data))
            .catch((err) => alert(err))
    }, [])

    return (
        <>
            <Nav />
            <Categories />
            <SeoTitle name={localStorage.getItem("CategoryName")} />


            <div className="container">
                {categoryFilter.length ? (
                    <div className="c_wrapper">
                        {categoryFilter.map((el) => {
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
                        <h1>{localStorage.getItem("CategoryName")} is not defined!</h1>
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Category