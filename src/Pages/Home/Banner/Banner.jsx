import React from 'react';
import banner1 from "../../../assets/banner/Banner1_Mesa de trabajo 1.png"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='my-16'>
<div className='w-full flex flex-col lg:flex-row items-start justify-between gap-11 overflow-hidden'>

<div data-aos="fade-left"
     data-aos-duration="3000">
   <h1 className='brandFont font-extrabold text-3xl'>Turning Ideas into Digital Realities: Ena Ema Technologies - Your Innovation Partner</h1> 
   <p className='my-10 brandFont'>Are you ready to take your business to the next level? Look no further than Ena Ema Technologies, your trusted partner for premium web solutions. We specialize in crafting bespoke web experiences that are tailored to your unique needs.</p>
   
<Link to="/contact" className='myBtnSec'>
Hire Developers
</Link>


</div>

<div className="divider lg:divider-horizontal opacity-60"></div> 

<div data-aos="fade-right"
     data-aos-duration="3000">
    <img src={banner1} alt="Hero Image"/>
</div>

</div>            
        </section>
    );
};

export default Banner;