import React from 'react'  
import Navbar from '../../common components/layout/Navbar';
import AboutHero from './abouthero';
import Story from './story';
import WhyChooseUs from './whychooseus';
import VisionOfCompany from './visionofcompany';
import Mentor from './mentor';
import Footer from '../../common components/layout/footer';

const aboutus = () => {
  return (
    <>
    <Navbar />
    <AboutHero />
    <Story />
    <VisionOfCompany />
    <WhyChooseUs />
    <Mentor />
    <Footer />
    </>
  )
}

export default aboutus