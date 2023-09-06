import React from 'react';
import ideaImg from "../../../assets/banner/idea-01.png";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
const Idea = () => {
    return (
<section className='my-28 lg:w-2/3 mx-auto overflow-hidden'>
<div className="hero rounded-2xl" style={{backgroundImage: `url(${ideaImg})`}} data-aos="flip-up"
     data-aos-duration="3000">
  <div className="hero-overlay bg-neutral bg-opacity-70 rounded-2xl"></div>
  <div className="hero-content text-left text-neutral-content py-10 px-10">
    <div>
      <h1 className="mb-3 text-2xl md:text-4xl font-bold text-white brandFont">Have Any Project Idea?</h1>
      <p className="mb-6 font-semibold text-white">Unlock the Potential of Your Offshore Project with Our Skilled Global Team. Schedule a Free Consultation Today.</p>
      <Link to="/contact" className='myBtn inline-flex items-center gap-2'>
      Get Stated <FaArrowRightLong className='w-6 h-6' />
      </Link>
    </div>
  </div>
</div>
</section>
    );
};

export default Idea;