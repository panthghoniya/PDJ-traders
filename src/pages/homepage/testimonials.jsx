import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const testimonialsData = [
  {
    id: 1,
    name: "General Manager",
    company: "Luxury Resort",
    image: "https://i.pinimg.com/1200x/2b/b6/3e/2bb63eb96b47d44977cf2ba77145f127.jpg",
    review: "PDJ Trade Connect completely transformed our supply chain. Their premium salt exports and highly reliable maritime logistics have made them an indispensable partner for our operations."
  },
  {
    id: 2,
    name: "Operations Director",
    company: "Oceanic Trade Co.",
    image: "https://i.pinimg.com/1200x/c5/40/3b/c5403bf27901acaecc599bb37d5099ff.jpg",
    review: "The industrial grade salt meets all our strict parameters. We've seen increased efficiency and a significant reduction in supply bottlenecks since partnering with their team."
  },
  {
    id: 3,
    name: "Head of Sourcing",
    company: "Pure Minerals Ltd",
    image: "https://i.pinimg.com/736x/fe/14/59/fe1459cd4e67b895d91173595be8d507.jpg",
    review: "Finding a dependable partner for long-term international trade is rare. From ordering to customs clearance, everything was handled perfectly and delivered exactly on schedule."
  },
  {
    id: 4,
    name: "Procurement Lead",
    company: "Global Logistics",
    image: "https://i.pinimg.com/1200x/e8/09/8a/e8098a3d487b4fd7b8d591d7d9db32bb.jpg",
    review: "Their transparency, competitive pricing, and unmatched product purity make them the absolute best in the industry. Highly recommended for any bulk export requirements."
  }
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const sectionRef = useScrollAnimation();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild.offsetWidth;
      const gap = 24;
      const scrollAmount = cardWidth + gap;
      scrollRef.current.scrollBy({ 
        left: direction === 'next' ? scrollAmount : -scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-brand-background overflow-hidden relative z-40">
      <div className="max-w-[110rem] mx-auto px-6 md:px-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p data-animate="fade-up" className="text-sm font-semibold text-brand-dark mb-2">Testimonials</p>
            <h2 data-animate="fade-up" data-delay="150" className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-medium text-brand-dark tracking-tight leading-none">
              What our Clients Say
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div data-animate="fade-left" data-delay="300" className="flex items-center gap-4">
            <button 
              onClick={() => scroll('prev')}
              className="px-6 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-dark flex items-center gap-2 text-white text-sm font-medium transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-white" /> Previous
            </button>
            <button 
              onClick={() => scroll('next')}
              className="px-6 py-2.5 rounded-xl bg-brand-dark hover:bg-brand-accent flex items-center gap-2 text-white text-sm font-medium transition-all shadow-sm"
            >
              Next <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>

      {/* Slider Track */}
      <div data-animate="fade-up" data-delay="300" className="pl-6 md:pl-10 max-w-[110rem] mx-auto pb-8">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 -mb-10 pr-6 md:pr-10"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex-shrink-0 w-[90vw] md:w-[75vw] lg:w-[60vw] xl:w-[900px] snap-center md:snap-start"
            >
              <div className="bg-white rounded-[2rem] p-3 flex flex-col md:flex-row h-full min-h-[400px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover-lift transition-all duration-500">
                
                {/* Left Content (Text) */}
                <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-10 lg:p-12">
                  <p className="text-brand-dark text-lg md:text-xl leading-relaxed font-light mb-10 tracking-wide">
                    {testimonial.review}
                  </p>
                  <div>
                    <h4 className="font-semibold text-brand-dark text-lg">{testimonial.name}</h4>
                    <p className="text-brand-dark/50 text-sm mt-1">{testimonial.company}</p>
                  </div>
                </div>
                
                {/* Right Content (Image) */}
                <div className="w-full md:w-1/2 h-[300px] md:h-auto rounded-[1.5rem] overflow-hidden relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
