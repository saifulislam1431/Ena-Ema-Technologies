import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo/EnaEma.png"
import contactImg from "../../assets/banner/contact-01-01.png"

const Contact = () => {
    const [error , setError] = useState("");

    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {
        if(data.service === "Select Your Service"){
            return setError("Service is required")
        }

       console.log(data);
    }


    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>
            <Helmet>
              <title>Contact | Ena Ema Technologies</title>
          </Helmet>
            <div>
                <div className='text-center my-10'>
                <Link to="/" className='inline-flex items-center gap-2'>
  <img src={logo} alt="Ena Ema Technologies" className='w-10'/>
  <p className='brandFont font-extrabold text-lg text-secondary'>Ena Ema Technologies</p>
    </Link>

                </div>
                <div className='flex gap-14 flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:w-2/4'>
                        <img src={contactImg} alt="contactImg" />
                    </div>
                    <div>
                    <h1 className="mb-5 text-3xl font-bold brandFont">Contact Us</h1>
                    <p className="mb-5 font-medium">Fill in the below form to receive a detailed estimation. One of our friendly team member will be in touch soon</p>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4'>

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
                            <select {...register("service")} className='inputField font-semibold'>
                                <option defaultValue="Service">Select Your Service</option>
                                <option value="Full Stack Web Development">Full Stack Web Development</option>
                                <option value="Search Engine Optimization">Search Engine Optimization</option>
                                <option value="Photo Editing">Photo Editing</option>
                                <option value="Web Design">Web Design</option>
                            </select>

                            <label className='font-bold brandFont'>Message<sup className='text-error'>*</sup></label>
                            <textarea rows="5" cols="10" placeholder='Your Message'
                                {...register("message", { required: true })}
                                aria-invalid={errors.message ? "true" : "false"}
                                className='inputField' />
                            {errors.message?.type === 'required' && <p role="alert" className='text-error font-medium'>Message is required</p>}

                            <p className='my-3 font-semibold text-red-600'>{error}</p>

                            <input type="submit" value="Send Message" className='myBtn' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;