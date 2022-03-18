import React from 'react'
import img from '../asset/image.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__gallery'>
        {Array.apply(null,Array(8)).map((_,i)=>(
          <div className="img__container" key={i}>
            <img src={img} alt="footer" />
          </div>
        ))}
      </div>
      <div className="footer__black">
        
      </div>
    </div>
  )
}

export default Footer