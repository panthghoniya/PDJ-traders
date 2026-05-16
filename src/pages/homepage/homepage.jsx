import React from 'react';
import Hero from './Hero';
import Mmm from './mmm';
import Fourth from './4th';
import Customization from './Customization';
import Fifth from './5th';
import LogoSection from './country';
import Testimonials from './certificate';
import FAQ from './FAQ';
import Footer from '../../common components/layout/footer';

const homepage = () => {
    return (
        <>
            <Hero />
            <Mmm />
            <Customization />
            <Fourth />
            <Fifth />
            <LogoSection />
            <Testimonials />
            <FAQ />
            <Footer />
        </>
    );
};

export default homepage;