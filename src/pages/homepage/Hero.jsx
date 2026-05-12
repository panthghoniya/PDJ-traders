import React, { useState, useEffect } from 'react';
import Navbar from '../../common components/layout/Navbar';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/17/fa/dd/17faddf5f0139e31c328c41586415085.jpg",
    title: "Global",
    subtitle: "Trade Solutions",
    description: "PDJ Trade Connect bridges the gap between international markets, providing seamless logistics and trade facilitation for businesses worldwide.",
    buttonText: "Our Services"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/ef/d3/7a/efd37af10e9bd343818f657b8c607d76.jpg",
    title: "Secure",
    subtitle: "Supply Chain",
    description: "Experience reliability with our end-to-end supply chain management. We ensure your goods reach their destination safely and on time.",
    buttonText: "Learn More"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/08/d6/4c/08d64c48247eb3b10fbe25a4a969fa58.jpg",
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
            backgroundImage: `url(${s.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Brand-themed gradient overlay - Lightened for a cleaner look */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/40 to-transparent z-0 pointer-events-none"></div>

      <Navbar />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[110rem] mx-auto pb-16 pt-32 px-6 md:px-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">

        {/* Left Side: Huge Typography */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="h-[2px] w-12 bg-brand-accent "></div>
            <span className="text-brand-light font-semibold tracking-widest uppercase text-sm md:text-base ">
              {slide.subtitle}
            </span>
          </div>
          <div className="flex items-start">
            <h1
              key={`title-${slide.id}`}
              className="text-white font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-12 duration-1000"
              style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', lineHeight: 0.9 }}
            >
              {slide.title}
            </h1>
          </div>
        </div>

        {/* Right Side: Description and CTA */}
        <div className="max-w-xl flex flex-col items-start gap-8 mb-4">
          <p
            key={`desc-${slide.id}`}
            className="text-brand-light/80 text-lg md:text-xl leading-relaxed font-light animate-in fade-in slide-in-from-right-12 duration-1000"
          >
            {slide.description}
          </p>

          <button
            key={`btn-${slide.id}`}
            className="group flex items-center gap-6 bg-brand-accent hover:bg-brand-teal text-white pl-8 pr-3 py-3 rounded-full transition-all duration-700 shadow-md hover:shadow-lg shadow-brand-accent/10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both"
          >
            <span className="font-semibold text-lg tracking-wide">{slide.buttonText}</span>
            <div className="bg-white text-brand-dark p-3 rounded-full transition-transform duration-500 group-hover:rotate-45">
              <ArrowRight size={24} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>

      {/* Slider Progress Indicators */}
      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-6 md:px-10 pb-8 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 rounded-full ${index === currentSlide ? 'w-12 bg-brand-accent' : 'w-6 bg-white/20'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
