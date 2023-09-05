import React, { useEffect, useState } from 'react';
import SectionHead from '../../../components/SectionHead';

const Reviews = () => {

    const [countDays , setCountDays] = useState(0);
    const [countHours  , setCountHours] = useState(0);
    const [countMinutes , setCountMinutes] = useState(0);
    const [countSeconds  , setCountSeconds] = useState(0);


    useEffect(()=>{
        const endDate = new Date("2023-09-21").getTime();

    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = endDate - now;
  
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Update the countdown state
        setCountSeconds(seconds);
        setCountMinutes(minutes);
        setCountHours(hours);
        setCountDays(days)
  
        if (distance < 0) {
          clearInterval(countdownTimer);
        }
      }, 1000);
  
      return () => clearInterval(countdownTimer);

    },[])

    return (
        <section className='my-16 text-center'>

<SectionHead title="Words of Praise and Trust" description="Beyond the Ordinary: Explore Our Tailored Services and Innovative Solutions, and Elevate Your Business to New Heights."/>


<div className='mt-6 font-extrabold text-3xl brandFont text-error'>
Coming Soon...!
</div>

    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mb-14 mt-6">
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[80px]">
    <span className="font-mono lg:text-5xl">
      <span>{countDays}</span>
    </span>
    days
  </div> 
  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[80px]">
    <span className="font-mono lg:text-5xl">
    <span>{countHours}</span>    </span>
    hours
  </div> 

  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[80px]">
    <span className="font-mono lg:text-5xl">
    <span>{countMinutes}</span></span>
    min
  </div> 

  <div className="flex flex-col bg-primary h-fit p-2 rounded-md text-center font-bold text-white lg:w-[80px]">
    <span className="font-mono lg:text-5xl">
    <span>{countSeconds}</span></span>
    sec
  </div> 
</div> 

        </section>
    );
};

export default Reviews;