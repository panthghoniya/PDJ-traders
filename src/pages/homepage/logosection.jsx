import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const LogoSection = () => {
  const ref = useScrollAnimation();

  const clients = [
    { id: 1, name: 'VL', bg: 'bg-white', text: 'text-brand-dark' },
    { id: 2, name: 'RSL', bg: 'bg-white', text: 'text-brand-accent' },
    { id: 3, name: 'ASR', bg: 'bg-white', text: 'text-brand-dark' },
    { id: 4, name: 'Menosteel', bg: 'bg-white', text: 'text-brand-accent' },
    { id: 5, name: 'BANDHAN', bg: 'bg-brand-dark', text: 'text-brand-light' },
    { id: 6, name: 'STEELCAST', bg: 'bg-white', text: 'text-brand-dark' },
    { id: 7, name: 'Shreeyam', bg: 'bg-white', text: 'text-brand-accent' },
    { id: 8, name: 'Electrotherm', bg: 'bg-white', text: 'text-brand-dark' },
    { id: 9, name: 'JINDAL', bg: 'bg-white', text: 'text-brand-dark' },
  ];

  const marqueeItems = [...clients, ...clients, ...clients];

  return (
    <section ref={ref} className="relative z-50 py-16 md:py-24 bg-brand-background overflow-hidden border-y border-brand-dark/5">
      
      {/* Title Area */}
      <div className="text-center mb-12 md:mb-16">
        <h2 data-animate="fade-up" className="text-3xl md:text-[2.5rem] font-heading text-brand-dark tracking-tight font-bold">
          Our Trusted <span className="text-brand-accent">Clients</span>
        </h2>
        <div data-animate="scale-up" data-delay="200" className="w-16 h-[3px] bg-brand-accent mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Marquee Track */}
      <div data-animate="fade-up" data-delay="300" className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((client, idx) => (
            <div 
              key={`${client.id}-${idx}`}
              className={`mx-3 md:mx-4 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] flex items-center justify-center ${client.bg} transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-brand-dark/5`}
            >
              <span className={`font-bold text-lg md:text-xl tracking-wider uppercase text-center px-2 whitespace-normal leading-tight ${client.text}`}>
                {client.name}
              </span>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-background to-transparent z-10 pointer-events-none"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); } 
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default LogoSection;
