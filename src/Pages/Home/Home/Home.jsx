import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesIntro from '../ServicesIntro/ServicesIntro';
import Products from '../Products/Products';

const Home = () => {
    return (
        <section>
            <Banner />
            <HowWorks />
            <ServicesIntro />
            <Products />
        </section>
    );
};

export default Home;