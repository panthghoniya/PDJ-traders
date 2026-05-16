import React, { useState, useEffect } from 'react';
import Navbar from '../../common components/layout/Navbar';
import logo from '../../assets/logo.png';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
// import factory from "../../assets/factory.png"
// import dayfactory from "../../assets/dayfactory.png"
// import salttotruck from "../../assets/salt to truck.png"
import factoryvideo from "../../assets/factory video.mp4"

const slides = [
  {
    id: 1,
    video: factoryvideo,
    title: "Global",
    subtitle: "Trade Solutions",
    description: "PDJ Trade Connect bridges the gap between international markets, providing seamless logistics and trade facilitation for businesses worldwide.",
    buttonText: "Our Services"
  },
  // {
  //   id: 2,
  //   video: dayfactory,
  //   title: "Secure",
  //   subtitle: "Supply Chain",
  //   description: "Experience reliability with our end-to-end supply chain management. We ensure your goods reach their destination safely and on time.",
  //   buttonText: "Learn More"
  // },
  // {
  //   id: 3,
  //   video: salttotruck,
  //   title: "Connect",
  //   subtitle: "Global Markets",
  //   description: "Unlock new opportunities with our extensive network of global partners and trade experts committed to your business growth.",
  //   buttonText: "Partner with Us"
  // }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden bg-brand-black">

      {/* Background Video with smooth fade transition */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
        >
          <video
            src={s.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Brand-themed gradient overlay - Lightened for a cleaner look */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent z-0 pointer-events-none"></div>

      <Navbar />

      {/* Main Content Area - Absolute Left Alignment */}
      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-6 md:px-10 flex flex-col items-start justify-center text-left flex-grow py-32 mt-16 md:mt-0 overflow-x-hidden">

        {/* Subtitle */}
        <div className="flex items-center justify-start gap-4 mb-6 md:mb-8 animate-in fade-in slide-in-from-left-8 duration-700 w-full">
          <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
          <span className="text-brand-accent font-jakarta font-semibold tracking-[0.2em] uppercase text-sm md:text-lg">
            WELCOME TO
          </span>
          <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
        </div>

        {/* Main Title */}
        <h1
          className="w-full text-left tracking-[0.02em] md:tracking-[0.02em] text-white font-clash font-bold mb-6 md:mb-8 animate-in fade-in slide-in-from-left-12 duration-1000"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)', lineHeight: 0.9 }}
        >
          PDJ TRADE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal">CONNECT</span>
        </h1>

        {/* Description */}
        <p className="w-full text-left text-brand-light/90 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl font-manrope font-light mb-8 md:mb-12 leading-tight animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
          Manufacturer and Exporter of Edible and Industrial Salts
        </p>

        {/* CTA Button */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mt-2 md:mt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both w-full">

          <button
            className="group flex items-center gap-4 md:gap-6 bg-brand-accent hover:bg-brand-teal text-white pl-8 md:pl-10 pr-2 md:pr-3 py-2.5 md:py-3.5 rounded-full transition-all duration-700 shadow-2xl hover:shadow-[0_0_30px_rgba(91,162,152,0.4)] hover:scale-105 flex-shrink-0"
          >
            <span className="font-jakarta font-bold text-base md:text-xl tracking-wide">Know More</span>
            <div className="bg-white text-brand-dark p-2 md:p-3 rounded-full transition-transform duration-500 group-hover:translate-x-2">
              <ArrowRight size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;
