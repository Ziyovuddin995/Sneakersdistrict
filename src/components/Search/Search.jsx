import React, { useEffect, useState } from 'react'
import "./search.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'

const Search = () => {

    const [data, setData] = useState([])
    const [search,setSearch] = useState("")

    const filtered = data?.filter((el) => {
        return el?.name?.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        axios.get("http://localhost:7777/products")
          .then((res) => setData(res.data))
          .catch((err) => alert(err))
      }, [])

  return (
    <>
    <div className='search_wrap'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='What are you looking for?' />
      
    </div>
    {search.length >= 2 ? (
        <div className="search_items">
            {filtered?. map((el) => (
                <Link to={`/product/${el?.id}`} className="item">
                    <img src={el?.image} alt="" />
                    <b>{el?.name}</b>
                </Link>
            ))}
        </div>
    ):null}
    </>
  )
}

export default Search
