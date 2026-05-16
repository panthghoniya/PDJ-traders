import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import mentor1 from '../../assets/mentor1.png';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Mentor = () => {
  const ref = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative z-40 bg-[#FDFCF7] py-20 md:py-32 border-t border-[#2D4F44]/5 overflow-hidden"
    >
      <div className="max-w-[85rem] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <div
            data-animate="fade-up"
            className="inline-flex items-center justify-center px-5 py-1.5 rounded-full  text-[#2D4F44] text-xs font-bold tracking-[0.2em] uppercase mb-5"
          >
            Meet the Founder
          </div>
          <h2
            data-animate="fade-up"
            data-delay="100"
            className="text-4xl md:text-5xl font-heading font-black text-[#2D4F44] leading-tight tracking-tight"
          >
            The Vision Behind <span className="text-[#5BA298]">PDJ Traders</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Image */}
          <div data-animate="fade-right" className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square bg-[#E5EFEF] rounded-lg overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 left-6 bg-white px-5 py-2.5 rounded shadow-sm z-10">
              <span className="text-xs font-bold text-[#2D4F44] tracking-wide">CEO & Founder</span>
            </div>
            
            <img
              src={mentor1}
              alt="Rajesh D. Joshi — CEO & Founder, PDJ Traders"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          {/* RIGHT — Content */}
          <div data-animate="fade-left" data-delay="150" className="flex flex-col">
            
            {/* Name & Intro */}
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#2D4F44] mb-6">
              Aayush Jain
            </h3>
            
            <p className="text-[#2D4F44]/65 text-base md:text-lg leading-relaxed font-jakarta mb-8">
              Aayush Jain is a young and dynamic entrepreneur who has brought a fresh perspective to the salt export industry. With a focus on innovation and sustainability, he has expanded PDJ Traders' reach to new markets while maintaining our commitment to quality and excellence.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-10">
              <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-white transition-colors">
                <TwitterIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-[#2D4F44]/20 rounded flex items-center justify-center text-[#2D4F44]/70 hover:bg-[#2D4F44] hover:text-white transition-colors">
                <LinkedinIcon />
              </a>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-[#2D4F44]/10 mb-10"></div>
            
            {/* Experience Section */}
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-[#2D4F44] mb-6">
              Aayush Jain's Experience
            </h4>
            
            <p className="text-[#2D4F44]/65 text-base md:text-lg leading-relaxed font-jakarta mb-8">
              Aayush has been instrumental in modernizing PDJ Traders' operations, introducing advanced technologies and sustainable practices that have set new industry benchmarks. His forward-thinking approach ensures that the company remains at the forefront of the global salt export market.
            </p>
            
            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#2D4F44] flex items-center justify-center">
                  <span className="text-white"><CheckIcon /></span>
                </div>
                <p className="text-[#2D4F44]/70 font-jakarta text-base">
                  Over 20 years of experience in the global salt export industry
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#2D4F44] flex items-center justify-center">
                  <span className="text-white"><CheckIcon /></span>
                </div>
                <p className="text-[#2D4F44]/70 font-jakarta text-base">
                 Has successfully expanded PDJ traders reach to new international markets 
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#2D4F44] flex items-center justify-center">
                  <span className="text-white"><CheckIcon /></span>
                </div>
                <p className="text-[#2D4F44]/70 font-jakarta text-base">
                  Holds multiple strategic partnerships with international refineries
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Mentor;
