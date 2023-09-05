import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesIntro from '../ServicesIntro/ServicesIntro';
import Products from '../Products/Products';
import TechAndTool from '../TechAndTool/TechAndTool';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <section>
            <Banner />
            <HowWorks />
            <ServicesIntro />
            <Products />
            <TechAndTool />
            <Reviews />
        </section>
    );
};

export default Home;