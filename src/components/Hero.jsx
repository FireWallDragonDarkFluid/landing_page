import React from 'react'
import image from '../asset/image.jpg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__grid'>
            <div className='hero__article'>
                <img className='article__img' src={image} alt="article" />
                <div className='hero__content'>
                    <div className='badge'>
                        <div></div> <p>Lifestyle</p>
                    </div>
                    <h1>Ten tell-tale signs you need to get a new startup.</h1>
                    <p>No visited raising gravity outward subject my cottage Mr be. Hold do at tore in park feet near my case. </p>
                    <div className='author'>
                        <img src={image} alt='author' /> <p>by Louis</p> <p>Nov 15, 2022</p>
                    </div>
                </div>
            </div>
            <div className='hero__article'>
                <img className='article__img' src={image} alt="article" />
            </div>
            <div className='hero__article'>
                <img className='article__img' src={image} alt="article" />
            </div>
            <div className='hero__article'>
                <img className='article__img' src={image} alt="article" />
            </div>
        </div>
    </section>
  )
}

export default Hero