import React from 'react';
import abstractBg from "../../../assets/banner/abstract-01.png";
import workIcon1 from "../../../assets/icons/metadata.png";
import workIcon2 from "../../../assets/icons/teamwork.png";
import workIcon3 from "../../../assets/icons/technical-support.png";
import { Link } from 'react-router-dom';
import { IoArrowForwardOutline } from 'react-icons/io5';
import SectionHead from '../../../components/SectionHead';
const HowWorks = () => {
    return (
<div className="hero my-16" style={{backgroundImage: `url(${abstractBg}) `}}>
  <div className="hero-overlay bg-primary bg-opacity-20"></div>
  <div className="hero-content text-center">
    <div className="my-6">
<SectionHead title="How Ena Ema Technologies Works" description="Cultivating Quality Through Agile Excellence: Choose Your web Outsourcing Model, and We'll Elevate Your Core Competencies to Propel Your Success in the Digital Landscape. Partner with Ena Ema Technologies for Unmatched Expertise and Innovation."/>

      <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center overflow-hidden'>
<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-left"
     data-aos-duration="3000">
<img src={workIcon2} alt="Team Augmentation" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>Team Augmentation</p>
<p className='font-medium'>Our team of seasoned software engineers is here to enhance your in-house capabilities, fostering seamless collaboration and turbocharging your workflow. With our support, you'll confidently tackle the most intricate projects, reaching new heights of success.</p>

<div className='mt-6 mb-4 flex justify-end'>
<Link to="/contact" className=' text-primary font-bold inline-flex gap-1 items-center'>Hire Us <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>

<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-up"
     data-aos-duration="3000">
<img src={workIcon1} alt="Project Development" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>Project Development</p>
<p className='font-medium'>Our team of experts is dedicated to turning your ideas into top-notch products, all through an efficient and cost-effective process. Our goal is to deliver products that are not only ready for user testing but also primed for a smooth and successful launch. Your success is our mission.</p>

<div className='mt-6 mb-4 flex justify-end'>
<Link to="/contact" className=' text-primary font-bold inline-flex gap-1 items-center'>Hire Us <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>



<div className='bg-white px-3 py-4 rounded-xl hover:shadow-md hover:shadow-primary h-fit text-left' data-aos="fade-right"
     data-aos-duration="3000">
<img src={workIcon3} alt="workIcon3" className='w-12'/>
<p className='brandFont my-4 font-semibold text-secondary opacity-70 text-lg'>MVP Services</p>
<p className='font-medium'>As a seasoned MVP development company, we're here to breathe life into your product vision. Our comprehensive end-to-end services encompass the entire journey, from ideation and cutting-edge design to seamless delivery and unwavering ongoing support. Let's turn your ideas into reality, together.</p>

<div className='mt-6 mb-4 flex justify-end'>
<Link to="/contact" className=' text-primary font-bold inline-flex gap-1 items-center'>Hire Us <IoArrowForwardOutline className='w-6 h-6'/></Link> 
</div>
</div>
</div> 

    </div>  
    
     
  </div>
  
</div>
    );
};

export default HowWorks;