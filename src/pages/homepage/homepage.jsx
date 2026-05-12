import React from 'react';
import Hero from './Hero';
import Mmm from './mmm';
import Fourth from './4th';
import Fifth from './5th';
import LogoSection from './logosection';
import Testimonials from './testimonials';
import Footer from './footer';

const homepage = () => {
    return (
        <>
            <Hero />
            <Mmm />
            <Fourth />
            <Fifth />
            <LogoSection />
            <Testimonials />
            <Footer />
        </>
    );
};

export default homepage;