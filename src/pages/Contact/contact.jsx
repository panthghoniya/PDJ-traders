import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ContactHero from './contacthero'
import Footer from '../../common components/layout/footer'
import Navbar from '../../common components/layout/Navbar'
import ContactForm from './ContactForm'
import ContactInfoBanner from './ContactInfoBanner'

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact-form') {
      const element = document.getElementById('contact-form');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
    <Navbar/>
    <ContactHero/>
    <ContactForm/>
    <ContactInfoBanner/>
    <Footer/>
    </>
  )
}

export default Contact