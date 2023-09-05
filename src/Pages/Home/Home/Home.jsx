import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesIntro from '../ServicesIntro/ServicesIntro';
import Products from '../Products/Products';
import TechAndTool from '../TechAndTool/TechAndTool';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';
import Idea from '../Idea/Idea';

const Home = () => {
    return (
        <section>
            <Banner />
            <HowWorks />
            <ServicesIntro />
            <Products />
            <TechAndTool />
            <Reviews />
            <FAQ />
            <Idea />
        </section>
    );
};

export default Home;