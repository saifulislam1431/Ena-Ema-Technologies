import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import whatsapp from "../assets/icons/whatsapp.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Loading from '../Pages/Loading/Loading';
AOS.init();

const Main = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <section className='relative'>
            {
                loading ? <Loading /> : <>
                            <Navbar />

                            <div className="fixed bottom-0 right-0 m-8 z-50">
            <a href="https://api.whatsapp.com/send?phone=8801926080600" target='_blank'>
                <img src={whatsapp} alt="whatsapp" className='shadow-2xl shadow-secondary rounded-xl w-12 lg:w-[54px]'/>

            </a>
            </div>

            <Outlet />
            <Footer />
                </>
            }

        </section>
    );
};

export default Main;