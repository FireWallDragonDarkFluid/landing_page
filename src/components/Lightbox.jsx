import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import img from '../asset/image.jpg'

//Swiper
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Lightbox = ({setOpen}) => {
  return (
    <div className='lightbox' onClick={()=>setOpen(false)}>
        <div className="lightbox__container" onClick={e=>e.stopPropagation()}>
            <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            >
                <AiOutlineCloseCircle 
                    style={{height:'40px',width:'40px',color:'#333',position:'absolute',
                    top:'10px',right:'10px',cursor:'pointer',zIndex:'10'}}
                    onClick={()=>setOpen(false)}
                />
                <SwiperSlide style={{height:'100%'}}>
                    <div className="slide__container" style={{height:'100%',width:'100%',textAlign:'center', paddingTop:'2rem',
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div style={{height:'80%', paddingBottom:'2rem'}}>
                            <img src={img} alt="detail" style={{display:'block',height:'100%',width:'620px',objectFit:'cover'}} />
                        </div>
                        <p style={{display:'block',width:'620px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic praesentium eius pariatur saepe odit nemo unde maiores non quis, tenetur explicabo, officia quo accusantium, voluptates distinctio reiciendis blanditiis ipsa.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'100%'}}>
                    <div className="slide__container" style={{height:'100%',width:'100%',textAlign:'center', paddingTop:'2rem',
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div style={{height:'80%', paddingBottom:'2rem'}}>
                            <img src={img} alt="detail" style={{display:'block',height:'100%',width:'620px',objectFit:'cover'}} />
                        </div>
                        <p style={{display:'block',width:'620px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic praesentium eius pariatur saepe odit nemo unde maiores non quis, tenetur explicabo, officia quo accusantium, voluptates distinctio reiciendis blanditiis ipsa.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'100%'}}>
                    <div className="slide__container" style={{height:'100%',width:'100%',textAlign:'center', paddingTop:'2rem',
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div style={{height:'80%', paddingBottom:'2rem'}}>
                            <img src={img} alt="detail" style={{display:'block',height:'100%',width:'620px',objectFit:'cover'}} />
                        </div>
                        <p style={{display:'block',width:'620px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic praesentium eius pariatur saepe odit nemo unde maiores non quis, tenetur explicabo, officia quo accusantium, voluptates distinctio reiciendis blanditiis ipsa.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{height:'100%'}}>
                    <div className="slide__container" style={{height:'100%',width:'100%',textAlign:'center', paddingTop:'2rem',
                    display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                        <div style={{height:'80%', paddingBottom:'2rem'}}>
                            <img src={img} alt="detail" style={{display:'block',height:'100%',width:'620px',objectFit:'cover'}} />
                        </div>
                        <p style={{display:'block',width:'620px'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti hic praesentium eius pariatur saepe odit nemo unde maiores non quis, tenetur explicabo, officia quo accusantium, voluptates distinctio reiciendis blanditiis ipsa.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    </div>
  )
}

export default Lightbox