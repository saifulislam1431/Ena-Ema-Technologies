import React, { useState } from 'react';
import ideaSetup from "../assets/banner/idea_setup-01.png"
import brushPaintBg from "../assets/banner/brush_paint-01.png"
import planning from "../assets/banner/planning-01.png"
import prototype from "../assets/banner/prototying-01.png"
import implement from "../assets/banner/implementation-01.png"
import testing from "../assets/banner/planning-01.png"
import delivery from "../assets/banner/delivery-01.png"
import { Link } from 'react-router-dom';
import SectionHead from './SectionHead';
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { useForm } from 'react-hook-form';


const ServicesDetails = ({mainTitle , mainIntro, heroImg, aboutTile, aboutIntro, aboutListTitle, aboutHead1, aboutHead2,aboutHead3,aboutHead4,aboutHead5,aboutHead6, aboutDes1,aboutDes2,aboutDes3,aboutDes4,aboutDes5,aboutDes6 , processTitle, processDes, process1, process2,process3,process4,value}) => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {

       console.log(data);
    }

    return (
        <section className='my-16'>
            <div className='w-full flex flex-col lg:flex-row items-start justify-between gap-11'>
                <div>
                    <h1 className='brandFont font-extrabold text-3xl'>{mainTitle}</h1>
                    <p className='my-10 brandFont'>{mainIntro}</p>

                    <Link to="/contact" className='myBtnSec'>
                        Hire Developers
                    </Link>


                </div>
                <div className="divider lg:divider-horizontal opacity-60"></div>

                <div className='w-full'>
                    <img src={heroImg} alt="Hero Image" />
                </div>
            </div>

            <div className='my-28'>
                <div className='text-center mb-16'>
                    <h1 className='font-bold brandFont text-2xl mb-3'>{aboutTile}</h1>
                    <p className='text-lg brandFont'>{aboutIntro}</p>
                </div>

                <div className='w-full flex flex-col lg:flex-row items-start justify-between gap-11'>
                    <div>
                        <h1 className='brandFont font-semibold text-lg text-primary'>{aboutListTitle}</h1>
                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead1}</span> {aboutDes1}</p>

                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead2}</span> {aboutDes2}</p>

                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead3}</span> {aboutDes3}</p>

                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead4}</span> {aboutDes4}</p>

                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead5}</span> {aboutDes5}</p>

                        <p className='my-5 brandFont'><span className='font-semibold'>{aboutHead6}</span> {aboutDes6}</p>

                    </div>
                    <div className="divider lg:divider-horizontal opacity-60"></div>

                    <div className='w-full'>
                        <img src={ideaSetup} alt="Hero Image" />
                    </div>
                </div>

<div className='text-center my-16'>

<h1 className='font-bold brandFont text-2xl mb-3'>{processTitle}</h1>
<p className='text-lg brandFont'>{processDes}</p>


<div className='my-20  items-center justify-center flex flex-col lg:flex-row gap-10'>

<div>
<div className="hero h-52 w-52 rounded-full relative" style={{backgroundImage: `url(${brushPaintBg})`}}>
{/* <div className="hero-overlay bg-opacity-40 rounded-full"></div> */}

<img src={planning} alt="planning" className='rounded-full'/>

<p className='absolute top-0 right-10 bg-primary px-3 py-2 rounded-full brandFont text-xl font-extrabold text-white'>01</p>

</div>
<p className='font-semibold brandFont my-2 text-lg'>{process1}</p>
</div>


<div>
<div className="hero h-52 w-52 rounded-full relative" style={{backgroundImage: `url(${brushPaintBg})`}}>
{/* <div className="hero-overlay bg-opacity-40 rounded-full"></div> */}

<img src={prototype} alt="Prototyping" className='rounded-full'/>

<p className='absolute top-0 right-10 bg-primary px-3 py-2 rounded-full brandFont text-xl font-extrabold text-white'>02</p>

</div>
<p className='font-semibold brandFont my-2 text-lg'>{process2}</p>
</div>

<div>
<div className="hero h-52 w-52 rounded-full relative" style={{backgroundImage: `url(${brushPaintBg})`}}>
{/* <div className="hero-overlay bg-opacity-40 rounded-full"></div> */}

<img src={implement} alt="implement" className='rounded-full'/>

<p className='absolute top-0 right-10 bg-primary px-3 py-2 rounded-full brandFont text-xl font-extrabold text-white'>03</p>

</div>
<p className='font-semibold brandFont my-2 text-lg'>{process3}</p>
</div>


<div>
<div className="hero h-52 w-52 rounded-full relative" style={{backgroundImage: `url(${brushPaintBg})`}}>
{/* <div className="hero-overlay bg-opacity-40 rounded-full"></div> */}

<img src={testing} alt="testing" className='rounded-full'/>

<p className='absolute top-0 right-10 bg-primary px-3 py-2 rounded-full brandFont text-xl font-extrabold text-white'>04</p>

</div>
<p className='font-semibold brandFont my-2 text-lg'>{process4}</p>
</div>

<div>
<div className="hero h-52 w-52 rounded-full relative" style={{backgroundImage: `url(${brushPaintBg})`}}>
{/* <div className="hero-overlay bg-opacity-40 rounded-full"></div> */}

<img src={delivery} alt="delivery" className='rounded-full'/>

<p className='absolute top-0 right-10 bg-primary px-3 py-2 rounded-full brandFont text-xl font-extrabold text-white'>05</p>

</div>
<p className='font-semibold brandFont my-2 text-lg'>Delivery On Time</p>
</div>

</div>

</div> 
            </div>

<div className='my-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center'>

<div className='text-left'>
<SectionHead title="How can we help you" description="Flexible Staff Augmentation: Customized Solutions Tailored to Your Business Needs."/>

<div className='my-10'>
<p className='text-lg brandFont mb-3 inline-flex items-center gap-2'><HiOutlineCheckCircle className='w-7 h-7 text-primary' />Unlock Talented On-Demand Teams for Your Every Need.</p>

<p className='text-lg brandFont mb-3 inline-flex items-center gap-2'><HiOutlineCheckCircle className='w-7 h-7 text-primary' />Ensuring Data Security and Transparency.</p>

<p className='text-lg brandFont mb-3 inline-flex items-center gap-2'><HiOutlineCheckCircle className='w-7 h-7 text-primary' />Scalable Teams, Agile Solutions: Achieve Cost-Efficiency with Flexibility.</p>

<p className='text-lg brandFont mb-3 inline-flex items-center gap-2'><HiOutlineCheckCircle className='w-7 h-7 text-primary' />Expert Teams, Trusted Technology, and Tangible Business Impact.</p>
</div>

</div>



<div className='w-full bg-secondary bg-opacity-10 px-10 py-10 rounded-xl'>

<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full'>

                             <label className='font-bold brandFont'>Name<sup className='text-error'>*</sup></label>
                            <input type='text' placeholder='Enter Your Name'
                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                                className='inputField' />
                            {errors.name?.type === 'required' && <p role="alert" className='text-error font-medium'>Name is required</p>}


                            <label className='font-bold brandFont'>Email<sup className='text-error'>*</sup></label>
                            <input type='email' placeholder='Enter Your Email'
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                className='inputField' />
                            {errors.email?.type === 'required' && <p role="alert" className='text-error font-medium'>Email is required</p>}
                            <label className='font-bold brandFont'>Phone<sup className='text-error'>*</sup></label>
                            <input type='number' placeholder='Enter Your Number'
                                {...register("number", { required: true })}
                                aria-invalid={errors.number ? "true" : "false"}
                                className='inputField' />
                            {errors.number?.type === 'required' && <p role="alert" className='text-error font-medium'>Number is required</p>}


                            {/* <div>
                                <input type="number" placeholder='Your Number' {...register("phone", { min: 5, max: 99 })} className='inputField' />
                            </div> */}
<label className='font-bold brandFont'>Services<sup className='text-error'>*</sup></label>
<input type='text' defaultValue={value}
                                {...register("service", { required: true })}
                                aria-invalid={errors.service ? "true" : "false"}
                                className='inputField' />
                            {errors.service?.type === 'required' && <p role="alert" className='text-error font-medium'>Service is required</p>}

                            <label className='font-bold brandFont'>Project Details<sup className='text-error'>*</sup></label>
                            <textarea rows="5" cols="10" placeholder='Project Details'
                                {...register("message", { required: true })}
                                aria-invalid={errors.message ? "true" : "false"}
                                className='inputField' />
                            {errors.message?.type === 'required' && <p role="alert" className='text-error font-medium'>Project Details is required</p>}


                            <input type="submit" value="Send Message" className='myBtnSec' />
                        </form>

</div>



</div>            
        </section>
    );
};

export default ServicesDetails;
