import React from 'react'
import "./SeoTitle.scss"
import { Link } from 'react-router-dom'

const SeoTitle = ({name}) => {
  return (
    <div className='container'>
        <div className="seo_title">
            <h1>
                <Link to={'/'}>Home</Link>
                {" > "}
                <p>{name}</p>
            </h1>
        </div>
    </div>
  )
}

export default SeoTitle