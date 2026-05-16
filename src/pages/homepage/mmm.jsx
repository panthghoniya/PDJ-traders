import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Mmm = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative z-20 bg-brand-background py-24 md:py-32 overflow-x-hidden" ref={ref}>
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="flex flex-col items-start max-w-2xl">
            {/* Badge */}
            <div data-animate="fade-up" data-delay="100" className="bg-brand-accent text-white px-5 py-1.5 rounded-full text-sm font-bold font-jakarta tracking-wide mb-8 shadow-sm">
              Service Overview
            </div>

            {/* Heading */}
            <h2 data-animate="fade-up" data-delay="200" className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-dark leading-[1.3] mb-8 tracking-tight font-clash">
              Navigate global
              {/* <span className="inline-block align-middle w-20 h-10 md:w-28 md:h-12 mx-3 rounded-full overflow-hidden shadow-md border-2 border-white">
                <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=300&auto=format&fit=crop" alt="ocean logistics" className="w-full h-full object-cover" />
              </span>  */}
              trade with trusted
              {/* <span className="inline-flex align-middle mx-3 -space-x-3">
                <span className="inline-block w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative z-10">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" alt="trusted partner" className="w-full h-full object-cover" />
                </span>
                <span className="inline-block w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-white shadow-md relative z-0">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" alt="trusted partner" className="w-full h-full object-cover" />
                </span>
              </span>  */}
              ocean logistics
            </h2>

            {/* Paragraphs */}
            <div data-animate="fade-up" data-delay="350" className="space-y-6 text-brand-dark/70 text-lg md:text-xl leading-relaxed mb-10 font-manrope font-light">
              <p>
                Need to optimize production or deliver time-critical goods? PDJ Trade Connect ensures a smoother supply chain with flexible setup, clear insights, and reliable global delivery for your premium salt products.
              </p>
              <p>
                Our network provides you with access to real-time data on all your ocean lanes with our dedicated Allocation Portal.
              </p>
            </div>

            {/* Button */}
            <div data-animate="fade-up" data-delay="500">
              <button className="flex items-center gap-6 bg-brand-dark hover:bg-brand-black text-white px-8 py-4 rounded-2xl font-bold font-jakarta transition-all duration-300 group shadow-lg hover:shadow-xl hover:-translate-y-1">
                Ship now
                <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Images Bento Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 h-[400px] sm:h-[500px] lg:h-[700px] w-full">
            <div data-animate="fade-right" data-delay="200" className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-[2rem] shadow-xl group hover-lift">
              <img
                src="https://i.pinimg.com/736x/dd/01/db/dd01db78fcce2971550061292bcdf9a5.jpg"
                alt="Premium Salt"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div data-animate="fade-right" data-delay="350" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-[2rem] shadow-lg group hover-lift">
              <img
                src="https://i.pinimg.com/736x/77/e7/78/77e778f887020a47b72aad1a9c424850.jpg"
                alt="Salt Details"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div data-animate="fade-right" data-delay="500" className="col-span-1 row-span-1 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-[2rem] shadow-lg group hover-lift">
              <img
                src="https://i.pinimg.com/736x/f7/74/33/f77433b84d4273a3cbe393f57117edc1.jpg"
                alt="Salt Harvesting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mmm;
