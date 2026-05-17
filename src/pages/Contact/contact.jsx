import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Contact Us | PDJ Trade Connect — Salt Manufacturer India</title>
        <meta name="description" content="Get in touch with PDJ Trade Connect for salt export inquiries, bulk orders, and business partnerships. We supply edible and industrial salt globally." />
        <meta name="keywords" content="contact PDJ trade connect, salt export inquiry, bulk salt order india, salt supplier contact" />
        <link rel="canonical" href="https://pdjtrade.com/contact" />
        <meta property="og:title" content="Contact Us | PDJ Trade Connect" />
        <meta property="og:description" content="Reach out for salt export inquiries, bulk orders and business partnerships." />
        <meta property="og:url" content="https://pdjtrade.com/contact" />
      </Helmet>
    <Navbar/>
    <ContactHero/>
    <ContactForm/>
    <ContactInfoBanner/>
    <Footer/>
    </>
  )
}

export default Contact