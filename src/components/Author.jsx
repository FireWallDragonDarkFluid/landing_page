import React from 'react'
import img from '../asset/image.jpg'

const Author = () => {
  return (
    <div className="author">
        <img className='author__img' src={img} alt="author" /> 
        <p>by Samuel</p>
        <p>Jan 22, 2022</p>
    </div>
  )
}

export default Author