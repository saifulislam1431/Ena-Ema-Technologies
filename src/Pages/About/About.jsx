import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='my-container mt-20'>
        <Helmet>
              <title>About Us | Ena Ema Technologies</title>
          </Helmet>
    <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
      <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='70326c9b-4a0f-429b-9c76-792941e326d5'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Welcome</span>
          </span>{' '}
          to Ena Ema Technologies: Elevating Your Digital Journey
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
        Welcome to Ena Ema Technologies, your trusted partner in the ever-evolving digital landscape. We are a dynamic startup company committed to delivering innovative solutions in Full Stack Web Development, Search Engine Optimization (SEO), Photo Editing, and Web Design. Our mission is to empower businesses and individuals to thrive online by harnessing the power of cutting-edge technology and creative design.
        </p>
      </div>
    </div>
    <div className='max-w-screen-xl sm:mx-auto'>
      <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
        <div className='space-y-8'>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            Why Choose Ena Ema Technologies?
            </p>
            <div className='text-gray-700 font-medium text-base brandFont'>
            <p>🚀 Elevate Your Business: Our expert teams are dedicated to helping your business stand out in the digital landscape. </p>
<p>🌐 Custom Solutions: We don't believe in one-size-fits-all. Our solutions are custom-crafted to match your vision and goals</p>
<p>🛠️ Design, Build, and Scale: From concept to execution, we handle every step of your project journey, ensuring efficiency and excellence.</p>
            </div>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            What Sets Us Apart:
            </p>
            <p className='text-gray-700 font-medium'>
            <span className='font-semibold'>Full Stack Web Development:</span> Our team of skilled developers is well-versed in both frontend and backend technologies. Whether you need a responsive website, a complex web application, or an e-commerce platform, we've got you covered.
              <br />
              <span className='font-semibold'>Search Engine Optimization (SEO):</span> We understand the importance of visibility in the digital realm. Our SEO experts employ proven strategies to enhance your online presence, boost organic traffic, and drive conversions.
              <br />
              <span className='font-semibold'>Photo Editing:</span> A picture is worth a thousand words, and our talented graphic designers can help you create captivating visuals that leave a lasting impression. From retouching and color correction to image manipulation, we breathe life into your images.
              <br />
              <span className='font-semibold'>Web Design:</span> Your website is often the first point of contact with your audience. Our creative designers craft visually stunning and user-friendly websites that reflect your brand's identity and captivate your visitors.
            </p>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            Our Vision:
            </p>
            <p className='text-gray-700'>
            At Ena Ema Technologies, we envision a digital world where every idea can flourish, every brand can shine, and every user experience can be exceptional. We strive to make this vision a reality by providing top-notch services that blend technical expertise with artistic flair.
            </p>
          </div>
        </div>
        <div className='space-y-8'>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            Why Trust Ena Ema Technologies?
            </p>
            <p className='text-gray-700 font-medium'>
            <span className='font-semibold'>Expertise: </span> Our team of skilled developers is well-versed in both frontend and backend technologies. We stay up-to-date with the latest industry trends and technologies to provide you with the best solutions.
              <br />
              <span className='font-semibold'>Client-Centric Approach:</span> Your success is our priority. We listen to your needs, understand your goals, and tailor our services to meet your specific requirements.
              <br />
              <span className='font-semibold'>Creativity:</span> We believe that creativity is at the heart of every great digital solution. Our creative minds infuse artistry into every project, ensuring that your online presence stands out.
              <br />
              <span className='font-semibold'>Reliability:</span> We take deadlines seriously and pride ourselves on delivering high-quality work on time and within budget.
            </p>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            Let's Transform Your Digital Presence
            </p>
            <p className='text-gray-700'>
            Whether you're a startup looking to establish your online identity, an established business aiming to refresh your digital presence, or an individual seeking to make your mark on the web, Ena Ema Technologies is here to help. Contact us today, and let's embark on a journey to unlock the full potential of your online presence.
              <br />
              <br />
              <span className='font-bold brandFont text-primary'>Ena Ema Technologies - Where Innovation Meets Imagination in the Digital World.</span>
            </p>
          </div>
          <div>
            <p className='mb-4 text-xl font-semibold brandFont'>
            Join Ena Ema Technologies
            </p>
            <p className='text-gray-700'>
            Join Ena Ema Technologies and be a part of a team that is passionate about technology, creativity, and delivering exceptional digital solutions. Together, we can shape the future of the digital world. Come and make your mark with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default About;