import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>About Us | PDJ Trade Connect — Salt Manufacturer India</title>
        <meta name="description" content="Learn about PDJ Trade Connect — a trusted salt manufacturer and exporter from India since 1996, committed to quality, purity and global trade standards." />
        <meta name="keywords" content="about PDJ trade connect, salt company india, salt manufacturer history, indian salt exporter" />
        <link rel="canonical" href="https://pdjtrade.com/about" />
        <meta property="og:title" content="About Us | PDJ Trade Connect" />
        <meta property="og:description" content="Learn about PDJ Trade Connect — India's trusted salt manufacturer and global exporter since 1996." />
        <meta property="og:url" content="https://pdjtrade.com/about" />
      </Helmet>
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