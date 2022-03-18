import React from 'react'
import img from '../asset/image.jpg'

const Topic = () => {
  return (
    <div className="front__topics">
        <h1>Topics</h1>
        <div className='front__topic'>
            <img src={img} alt='topic' />
            <p>Travel</p>
        </div>
        <div className='front__topic'>
            <img src={img} alt='topic' />
            <p>Travel</p>
        </div>
        <div className='front__topic'>
            <img src={img} alt='topic' />
            <p>Travel</p>
        </div>
        <div className='front__topic'>
            <img src={img} alt='topic' />
            <p>Travel</p>
        </div>
    </div>
  )
}

export default Topic