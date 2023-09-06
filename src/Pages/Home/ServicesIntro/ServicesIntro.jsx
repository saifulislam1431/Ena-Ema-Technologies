import React from 'react';
import SectionHead from '../../../components/SectionHead';
import service1 from "../../../assets/icons/integrated-system.png";
import service2 from "../../../assets/icons/service.png";
import service3 from "../../../assets/icons/Scalable System Design.png";
import service4 from "../../../assets/icons/programming.png";
import service5 from "../../../assets/icons/database.png";

import service6 from "../../../assets/icons/image-editing.png";


const ServicesIntro = () => {
    return (
        <section className='text-center my-28'>
<SectionHead title="Elevate Your Digital Presence with the Pinnacle of Web Development Outsourcing Services" description="Cultivating Strong Business Ties through Tailored Software Services.
At Ena Ema Technologies, we're more than just a software development partner – we're your key to lasting business relationships. Our flexible outsourcing services are customized to fit your precise needs. With our team of experts, you gain access to extensive experience across the software development landscape, from enterprise solutions to mobile apps and beyond."/>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-9 my-14 overflow-hidden'>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-left"
     data-aos-duration="3000">
<img src={service2} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>Scalable System Design And Development</h1>
<p className='py-4'>High-performing product giving you a tailored solution for your business.</p>
</div>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-left"
     data-aos-duration="3000">
<img src={service1} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>Search Engine Optimization (SEO)</h1>
<p className='py-4'>Boost your online presence with expert SEO. Drive traffic, enhance visibility, and achieve higher rankings.</p>
</div>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-up"
     data-aos-duration="3000">
<img src={service6} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>Professional Photo Editing Services</h1>
<p className='py-4'>From color correction to retouching, we elevate your visuals with professional editing. Elevate your content today!</p>
</div>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-up"
     data-aos-duration="3000">
<img src={service3} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>Embedded System Design</h1>
<p className='py-4'>Provide high-quality embedded system design and embedded architecture design services.</p>
</div>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-right"
     data-aos-duration="3000">
<img src={service4} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>UX Design</h1>
<p className='py-4'>UX design ensures the quality of user journey of your digital products and services.</p>
</div>

<div className='bg-primary bg-opacity-20 rounded-lg px-5 py-4 flex flex-col justify-center items-center h-80' data-aos="fade-right"
     data-aos-duration="3000">
<img src={service5} alt="Embedded System Design" className='w-24 py-7
'/>
<h1 className='text-lg brandFont text-slate-700 font-semibold'>Database Management</h1>
<p className='py-4'>No-SQL DBMS establish the relationship between datasets, and how users interact with them.</p>
</div>

</div>
        </section>
    );
};

export default ServicesIntro;