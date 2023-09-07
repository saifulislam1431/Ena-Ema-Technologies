import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

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
        <section>
            {
                loading ? <Loading /> : <>
                            <Navbar />
            <Outlet />
            <Footer />
                </>
            }

        </section>
    );
};

export default Main;