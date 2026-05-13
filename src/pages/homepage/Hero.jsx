import React, { useState, useEffect } from 'react';
import Navbar from '../../common components/layout/Navbar';
import logo from '../../assets/logo.png';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    video: "https://i.pinimg.com/1200x/17/fa/dd/17faddf5f0139e31c328c41586415085.jpg",
    title: "Global",
    subtitle: "Trade Solutions",
    description: "PDJ Trade Connect bridges the gap between international markets, providing seamless logistics and trade facilitation for businesses worldwide.",
    buttonText: "Our Services"
  },
  {
    id: 2,
    video: "https://i.pinimg.com/1200x/ef/d3/7a/efd37af10e9bd343818f657b8c607d76.jpg",
    title: "Secure",
    subtitle: "Supply Chain",
    description: "Experience reliability with our end-to-end supply chain management. We ensure your goods reach their destination safely and on time.",
    buttonText: "Learn More"
  },
  {
    id: 3,
    video: "https://i.pinimg.com/1200x/08/d6/4c/08d64c48247eb3b10fbe25a4a969fa58.jpg",
    title: "Connect",
    subtitle: "Global Markets",
    description: "Unlock new opportunities with our extensive network of global partners and trade experts committed to your business growth.",
    buttonText: "Partner with Us"
  }
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

      {/* Background Images with smooth fade transition */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-60' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${s.video})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Brand-themed gradient overlay - Lightened for a cleaner look */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent z-0 pointer-events-none"></div>

      <Navbar />

      {/* Main Content Area - Absolute Left Alignment */}
      <div className="relative z-10 w-full px-6 md:px-20 lg:px-32 flex flex-col items-start justify-center text-left flex-grow py-32">
        
        {/* Subtitle */}
        <div className="flex items-center gap-4 mb-6 md:mb-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
          <span className="text-brand-accent font-bold tracking-[0.3em] uppercase text-sm md:text-lg">
            WELCOME TO
          </span>
          <div className="h-[2px] w-8 md:w-12 bg-brand-accent"></div>
        </div>

        {/* Main Title */}
        <h1 
          className="tracking-[2px] md:tracking-[5px] text-white font-black mb-6 md:mb-8 animate-in fade-in slide-in-from-left-12 duration-1000"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)', lineHeight: 1.05 }}
        >
          PDJ TRADE <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal">CONNECT</span>
        </h1>

        {/* Description */}
        <p className="text-brand-light/90 text-base sm:text-lg md:text-2xl lg:text-3xl max-w-2xl font-light mb-8 md:mb-12 leading-tight animate-in fade-in slide-in-from-left-12 duration-1000 delay-300">
          Manufacturer and Exporter of Edible and Industrial Salts
        </p>

        {/* CTA Button and Association Badge */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 mt-2 md:mt-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both w-full">
          
          <button
            className="group flex items-center gap-4 md:gap-6 bg-brand-accent hover:bg-brand-teal text-white pl-8 md:pl-10 pr-2 md:pr-3 py-2.5 md:py-3.5 rounded-full transition-all duration-700 shadow-2xl hover:shadow-[0_0_30px_rgba(91,162,152,0.4)] hover:scale-105 flex-shrink-0"
          >
            <span className="font-semibold text-base md:text-xl tracking-wide">Know More</span>
            <div className="bg-white text-brand-dark p-2 md:p-3 rounded-full transition-transform duration-500 group-hover:translate-x-2">
              <ArrowRight size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
            </div>
          </button>

          {/* Vertical Separator Line (Hidden on mobile) */}
          <div className="hidden lg:block h-12 w-[2px] bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>

          {/* Premium Association Badge */}
          <div className="flex items-center gap-3 md:gap-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xl rounded-full pr-5 md:pr-8 p-1.5 md:p-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/30 group cursor-pointer w-fit max-w-full">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white flex items-center justify-center shadow-inner overflow-hidden flex-shrink-0">
              <img 
                src="https://media.licdn.com/dms/image/v2/D560BAQFPpeqkQ1lftA/company-logo_200_200/B56ZcWtGuxHwAM-/0/1748432612992/western_india_sea_brines_pvt_ltd_logo?e=2147483647&v=beta&t=8pLpR_-aOhvryP_gPDY_jempHdTYiQ2eHMX2aCVp1-8" 
                alt="Western India Sea Brines" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-0.5" 
              />
            </div>
            <div className="flex flex-col justify-center py-1">
              <span className="text-brand-light/70 text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.25em] uppercase leading-tight mb-0.5">
                In Association With
              </span>
              <span className="text-white font-heading font-semibold text-xs md:text-sm tracking-wide leading-snug group-hover:text-brand-light transition-colors duration-300 max-w-[130px] md:max-w-[160px] whitespace-normal">
                Western India Sea Brines Pvt. Ltd.
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Slider Manual Controls */}
      <div className="absolute bottom-6 md:bottom-10 right-4 md:right-12 z-20 flex gap-3 md:gap-4 animate-in fade-in duration-1000 delay-1000">
        <button 
          onClick={prevSlide}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-accent hover:border-brand-accent transition-all duration-300 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>

    </div>
  );
};

export default Hero;
