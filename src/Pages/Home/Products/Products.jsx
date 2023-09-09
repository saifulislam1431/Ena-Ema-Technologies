import React, { useEffect, useState } from 'react';
import SectionHead from '../../../components/SectionHead';




const Products = () => {

    const [countDays , setCountDays] = useState(0);
    const [countHours  , setCountHours] = useState(0);
    const [countMinutes , setCountMinutes] = useState(0);
    const [countSeconds  , setCountSeconds] = useState(0);


    useEffect(()=>{
        const endDate = new Date("2023-09-31").getTime();

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
       <section className='my-28'>
<div className="hero">
  <div className="hero-overlay bg-primary bg-opacity-10"></div>
  <div className="hero-content text-center">
    <div className="my-6">
    <SectionHead title="Tailored Web Development Solutions: Your Partner in Custom Products" description="t our company, we excel in software outsourcing, delivering robust, scalable, and efficient solutions worldwide. Our unwavering commitment to quality and competitive pricing sets us apart. With a clear focus on helping clients attain their business objectives, we provide top-tier software solutions."/>

<div className='mt-6 font-extrabold text-3xl brandFont text-error'>
Coming Soon...!
</div>

    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center my-14">
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

    </div>  
     
  </div>
  
</div>
       </section>
    );
};

export default Products;