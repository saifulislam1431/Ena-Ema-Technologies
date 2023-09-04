import React from 'react';
import banner1 from "../../../assets/banner/Banner1_Mesa de trabajo 1.png"
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section className='my-16'>
<div className='w-full flex flex-col lg:flex-row items-start justify-between gap-11'>
<div>
   <h1 className='brandFont font-extrabold text-3xl'>Turning Ideas into Digital Realities: Ena Ema Technologies - Your Innovation Partner</h1> 
   <p className='my-10 brandFont'>Are you ready to take your business to the next level? Look no further than Ena Ema Technologies, your trusted partner for premium web solutions. We specialize in crafting bespoke web experiences that are tailored to your unique needs.</p>

{/* <p className='font-semibold text-base brandFont mb-2'>Why Choose Ena Ema Technologies? </p>
<p className='font-medium text-base brandFont'>🚀 Elevate Your Business: Our expert teams are dedicated to helping your business stand out in the digital landscape. </p>
<p className='font-medium text-base brandFont my-2'>🌐 Custom Solutions: We don't believe in one-size-fits-all. Our solutions are custom-crafted to match your vision and goals</p>
<p className='font-medium text-base brandFont'>🛠️ Design, Build, and Scale: From concept to execution, we handle every step of your project journey, ensuring efficiency and excellence.</p> */}

<Link to="/contact" className='myBtnSec'>
Hire Developers
</Link>


</div>
<div className="divider lg:divider-horizontal opacity-60"></div> 

<div>
    <img src={banner1} alt="Hero Image"/>
</div>
</div>            
        </section>
    );
};

export default Banner;