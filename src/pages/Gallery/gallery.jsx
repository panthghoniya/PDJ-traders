import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import GalleryHero from './galleryhero';
import GalleryPhotos from './galleryphotos';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery | PDJ Trade Connect — Salt Manufacturing Facility India</title>
        <meta name="description" content="Explore PDJ Trade Connect's salt manufacturing facility and product gallery. See our state-of-the-art production process, packaging and storage infrastructure." />
        <meta name="keywords" content="salt manufacturing plant photos, salt factory india, PDJ trade gallery, salt production facility gujarat" />
        <link rel="canonical" href="https://pdjtrade.com/gallery" />
        <meta property="og:title" content="Gallery | PDJ Trade Connect" />
        <meta property="og:description" content="Explore our salt manufacturing facility and product gallery." />
        <meta property="og:url" content="https://pdjtrade.com/gallery" />
      </Helmet>
      <Navbar />
      
      <main className="bg-brand-background min-h-screen">
        <GalleryHero />
        <GalleryPhotos />
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
