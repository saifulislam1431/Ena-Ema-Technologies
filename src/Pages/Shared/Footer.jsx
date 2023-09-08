import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/EnaEma.png"
import icon1 from "../../assets/icons/gmail.png";
import icon3 from "../../assets/icons/facebook.png";
import icon4 from "../../assets/icons/linkedin.png";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className='mt-14'>
<footer className="footer p-10 bg-primary bg-opacity-10 text-base-content">
  <aside>
  <Link to="/" className='inline-flex items-center gap-2'>
  <img src={logo} alt="Ena Ema Technologies" className='w-10'/>
  <p className='brandFont font-extrabold text-lg text-secondary'>Ena Ema Technologies</p>
    </Link>
  <p className='py-4 font-bold text-lg'>Get Updated with us Regularly</p> 
<div className='inline-flex items-center gap-3'>
<a target='_blank' href="https://www.facebook.com/profile.php?id=100063832562207">
<FaFacebook className='h-8 w-8 hover:text-secondary transition-colors duration-300'/>
</a>
<a href='https://www.linkedin.com/company/ena-ema-technologies/about/' target='_blank'>
<FaLinkedin className='h-8 w-8 hover:text-secondary transition-colors duration-300'/>
</a>

</div>
  </aside> 
  <nav className='font-bold'>
    <header className="footer-title">Services</header> 

    <Link to="development">
Full Stack Development
</Link>

<Link to="/seo">
Search Engine Optimization
</Link>

<Link to="/design">
Web Design
</Link>

<Link to="/editing">
Photo Editing
</Link>

  </nav> 
  <nav className='font-bold'>
    <header className="footer-title">Company</header> 
    <Link to="/about">About us</Link> 
    <Link to="/blog">Blog</Link> 
    <Link to="/career">Career</Link> 
    <Link to="/product">Product</Link> 
  </nav> 
  <nav className='font-bold'>
    <header className="footer-title">Contact Us</header> 
    <a href="mailto:support@enaema.com">support@enaema.com</a>
    <a href="tel:+880 1926 080 600">+880 1926 080 600</a>
    <p className='underline'>Dhaka Office</p>
    <a href="https://goo.gl/maps/XyPpcDWnUDgwBxtD9" target='_blank'>
    Amin Model Town <br />
    East Dendabor, <br /> Savar Cantonment
    </a>
  </nav>
</footer>
<footer className="footer footer-center p-4 bg-primary bg-opacity-10 text-base-content border-t border-primary">
  <aside>
    <p className='font-bold'>Copyright © 2023 - All right reserved by Ena Ema Technologies</p>
  </aside>
</footer>
</footer>
    );
};

export default Footer;