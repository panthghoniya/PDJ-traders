import React, { useEffect } from 'react';
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
