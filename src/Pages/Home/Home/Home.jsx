import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesIntro from '../ServicesIntro/ServicesIntro';

const Home = () => {
    return (
        <section>
            <Banner />
            <HowWorks />
            <ServicesIntro />
        </section>
    );
};

export default Home;