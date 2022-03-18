import React from 'react'
import img from '../asset/image.jpg'

//swiper
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Showcase = () => {
  return (
    <Swiper
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        style={{marginBottom:'2rem'}}
    >
        {Array.apply(null,Array(4)).map((_,i)=>(
            <SwiperSlide style={{height:'280px'}} key={i}>
                <img src={img} alt="detail" style={{height:'100%',width:'100%',objectFit:'cover'}} />
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default Showcase