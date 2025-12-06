import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import Icon from '../../Icons/Quote.jsx'
import { sectiondata } from '../../Data/Section Data/Sectiondata'
import Image from '../../Images/portfolio_image1.png'
import "./Testimonials.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
function Testimonials() {
  return (
    <>
      <section className='testimonial-wrapper section-container'>
        <div className='container'>
            <SectionHeading
             sectionName={sectiondata.testmonials.sectionName}
             sectionDescription={sectiondata.testmonials.sectionDescription}
             />
            
            
             <div className='testimonial-data-wrapper'>
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                spaceBetween={"20px"}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                autoplay={{
                    delay: 3000, // Delay between slides in milliseconds
                    disableOnInteraction: false, // Continue autoplay after user interaction
                    pauseOnMouseEnter: true
                }}
                className="mySwiper"
                breakpoints={{
                    320:{
                        slidesPerView:1,
                    },
                    767:{
                        slidesPerView:2,
                    },
                    1024:{
                        slidesPerView:3,
                    },
                }}
                >
                    {[...Array(6)].map((_, i) => (
                    <SwiperSlide key={i}> 
                        <div className='slide-content-wapper'>
                            <div className='slide-text-wrapper'>
                                    <p>
                                    <span className='quate-icon-start svg-wrapper'><Icon /></span>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                    <span className='quate-icon-end svg-wrapper'><Icon /></span>
                                    </p>
                                    <img src={Image}  alt=" Harry" />
                                    <h3 className='author_name'>Harry</h3>                                
                                </div>
                        </div>
                    </SwiperSlide>
                    ))};
                </Swiper>
            </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
