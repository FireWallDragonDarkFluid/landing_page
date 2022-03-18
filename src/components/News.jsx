import React from 'react'

//Swiper
import { Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const News = () => {
  return (
    <div className='news'>
        <div className='news__message'>
            Message :
        </div>
        <Swiper
            // install Swiper modules
            modules={[ Autoplay, A11y]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quo incidunt sunt! Aut omnis est provident, corrupti dolore alias tenetur?</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quo incidunt sunt! Aut omnis est provident, corrupti dolore alias tenetur?</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quo incidunt sunt! Aut omnis est provident, corrupti dolore alias tenetur?</p>
            </SwiperSlide>
            <SwiperSlide>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quo incidunt sunt! Aut omnis est provident, corrupti dolore alias tenetur?</p>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default News