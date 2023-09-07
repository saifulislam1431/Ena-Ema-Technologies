import React from 'react';
import Banner from '../Banner/Banner';
import HowWorks from '../HowWorks/HowWorks';
import ServicesIntro from '../ServicesIntro/ServicesIntro';
import Products from '../Products/Products';
import TechAndTool from '../TechAndTool/TechAndTool';
import Reviews from '../Reviews/Reviews';
import FAQ from '../FAQ/FAQ';
import Idea from '../Idea/Idea';
import { Helmet } from 'react-helmet-async';
import Loading from '../../Loading/Loading';

const Home = () => {
    return (
        <section>
            <Helmet>
              <title>Home | Ena Ema Technologies</title>
          </Helmet>
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