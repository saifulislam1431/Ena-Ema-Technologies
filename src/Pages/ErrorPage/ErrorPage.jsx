import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import ErrorImg from "../../assets/banner/ErrorBanner-01.webp"
const ErrorPage = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-100px)]'>

            <div>
<div>
   <img src={ErrorImg} alt="Error!" className='lg:w-[600px]'/>
</div>
<div className='text-center my-10'>
    <Link to="/">
    <button  className='myBtn inline-flex items-center gap-2'><FaArrowLeft className='h-5 w-5'/> Back Home</button>
    </Link>
</div>
            </div>

        </section>
    );
};

export default ErrorPage;