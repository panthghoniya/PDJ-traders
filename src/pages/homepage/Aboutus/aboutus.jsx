import React from 'react'  
import Navbar from '../../../common components/layout/Navbar';
import AboutHero from './abouthero';
import Story from './story';
import Footer from '../../../common components/layout/footer';

const aboutus = () => {
  return (
    <>
    <Navbar />
    <AboutHero />
    <Story />
    <Footer />
    </>
  )
}

export default aboutus