import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const UpComingEvents = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <SectionTitle title="Upcoming Events
" subtitle="Help today because tomorrow you may be the one who
needs more helping!"></SectionTitle>
            <>
      
      <br />
      <Swiper 
      watchSlidesProgress={true} 
      slidesPerView={1} 
      breakpoints={{
                    768: { slidesPerView: 2 }
                }} 
        className="mySwiper">

        <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 bg-white border border-dashed'>
            <img src="https://html.dynamiclayers.net/dl/charitify/img/events-1.jpg" alt="" />
            <div className='p-4'>
            <h4 className='text-2xl '>Let's Talk about the poor children</h4>
            <div className='my-3'>
                <p>Started On: 12:00 PM</p>
            <p className=''>Grand Mahal, Bangladesh 2025.</p>
            <p>Help today because tomorrow you may be the one who needs more helping!</p>
            </div>
            <button className='btn btn-primary text-white'>Read More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 bg-white border border-dashed'>
            <img src="https://html.dynamiclayers.net/dl/charitify/img/events-2.jpg" alt="" />
            <div className='p-4'>
            <h4 className='text-2xl '>Give them support by donating money!</h4>
            <div className='my-3'>
                <p>Started On: 12:00 PM</p>
            <p className=''>Grand Mahal, India 2020.</p>
            <p>Help today because tomorrow you may be the one who needs more helping!</p>
            </div>
            <button className='btn btn-primary text-white'>Read More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 bg-white border border-dashed'>
            <img src="https://html.dynamiclayers.net/dl/charitify/img/events-3.jpg" alt="" />
            <div className='p-4'>
            <h4 className='text-2xl '>Let's Talk about the poor children</h4>
            <div className='my-3'>
                <p>Started On: 12:00 PM</p>
            <p className=''>Grand Mahal, Dubai 2100.</p>
            <p>Help today because tomorrow you may be the one who needs more helping!</p>
            </div>
            <button className='btn btn-primary text-white'>Read More</button>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 bg-white border border-dashed'>
            <img src="https://html.dynamiclayers.net/dl/charitify/img/events-1.jpg" alt="" />
            <div className='p-4'>
            <h4 className='text-2xl '>Give them support by donating money!</h4>
            <div className='my-3'>
                <p>Started On: 12:00 PM</p>
            <p className=''>Grand Mahal, Dubai 2100.</p>
            <p>Help today because tomorrow you may be the one who needs more helping!</p>
            </div>
            <button className='btn btn-primary text-white'>Read More</button>
            </div>
            </div>
        </SwiperSlide>
         
      </Swiper>
    </>
        </div>
    );
};

export default UpComingEvents;