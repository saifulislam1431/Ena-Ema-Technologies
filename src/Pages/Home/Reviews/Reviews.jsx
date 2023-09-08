import React, { useEffect, useState } from 'react';
import SectionHead from '../../../components/SectionHead';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { HiMinus } from 'react-icons/hi2';

const Reviews = () => {

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
        const res = await axios.get("https://ena-ema-server.vercel.app/reviews")
        return res.data;
    }
})





    return (
        <section className='my-16 text-center'>

<SectionHead title="Words of Praise and Trust" description="Beyond the Ordinary: Explore Our Tailored Services and Innovative Solutions, and Elevate Your Business to New Heights."/>

<div className='my-32'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map(review=><SwiperSlide
            key={review._id}
            >
                <div className='flex flex-col lg:flex-row gap-12 h-full w-full items-center justify-between lg:px-14 space-y-4 px-8'>


<div className='w-full'>
  <img src={review.photoUrl} alt="Client" className='w-96 h-80 rounded-2xl shadow-2xl'/>
</div>

<div>

<div className='flex items-end justify-start mb-4'>
<FaQuoteLeft className='w-8 h-8 opacity-30 text-primary' /> 
</div>

<div className='text-left'>
<p className='font-semibold'>{review.reviews}</p>
</div>

<div className='flex items-end justify-end mb-4'>
<FaQuoteRight className='w-8 h-8 opacity-30 text-primary' /> 
</div>


<div className='my-6'>
<Rating
      style={{ maxWidth: 100 }}
      value={review.starRating}
      readOnly
    />  

<div className='text-left'>
<p className='font-bold brandFont'>{review.clientName}</p>
<p className='font-medium'>
   <span>{review.clientPosition} at {review.clientOrganization}</span>
</p>
</div>

</div>


</div>




                </div>
            </SwiperSlide>)
        }
      </Swiper>
</div>


        </section>
    );
};

export default Reviews;