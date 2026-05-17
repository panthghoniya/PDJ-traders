import React, { useEffect, useRef } from 'react';
import { Sparkles, UserCheck, Zap, ShieldCheck } from 'lucide-react';
import { manWithSalt as saltImg } from '../../assets/images';

export default function Story() {
  const starRef = useRef(null);

  // Scroll-based rotation for the asterisk
  useEffect(() => {
    const handleScroll = () => {
      if (starRef.current) {
        const rotation = window.scrollY * 0.15;
        starRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full bg-[#FDFCF7] py-20 lg:py-32 overflow-hidden">

      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 w-full order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-10">
              <span className="inline-block py-1 px-3 rounded-full bg-[#2D4F44]/10 border border-[#2D4F44]/20 text-[#2D4F44] font-bold tracking-widest uppercase text-xs mb-4">
                Our Story
              </span>
              {/* Reduced heading font size to keep it on ~2 lines */}
              <h3 className="text-[#2D4F44] font-heading text-[clamp(2rem,3.5vw,3.25rem)] font-black leading-[1.15] tracking-tight max-w-[18ch]">
                Pure Salt, Perfected For Every Industry.
              </h3>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 flex-grow justify-between">
              {/* Feature 1 */}
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#2D4F44]/10 flex items-center justify-center shrink-0 border border-[#2D4F44]/20 group-hover:bg-[#2D4F44] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Sparkles className="w-6 h-6 text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <div className="pt-1">
                  <h3 className="text-[#2D4F44] text-xl font-bold mb-1 tracking-wide">Personalized Solutions</h3>
                  <p className="text-[#2D4F44]/70 font-medium leading-relaxed max-w-md">
                    We provide tailored salt processing for your specific industrial and culinary needs.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#2D4F44]/10 flex items-center justify-center shrink-0 border border-[#2D4F44]/20 group-hover:bg-[#2D4F44] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <UserCheck className="w-6 h-6 text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <div className="pt-1">
                  <h3 className="text-[#2D4F44] text-xl font-bold mb-1 tracking-wide">Global Export Experts</h3>
                  <p className="text-[#2D4F44]/70 font-medium leading-relaxed max-w-md">
                    Consult with our experienced team for reliable, world-class shipping and logistics.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#2D4F44]/10 flex items-center justify-center shrink-0 border border-[#2D4F44]/20 group-hover:bg-[#2D4F44] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <Zap className="w-6 h-6 text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <div className="pt-1">
                  <h3 className="text-[#2D4F44] text-xl font-bold mb-1 tracking-wide">Advanced Refining</h3>
                  <p className="text-[#2D4F44]/70 font-medium leading-relaxed max-w-md">
                    Utilizing the latest processing and refinement equipment for unmatched 99.9% purity.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-5 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-[#2D4F44]/10 flex items-center justify-center shrink-0 border border-[#2D4F44]/20 group-hover:bg-[#2D4F44] group-hover:scale-110 transition-all duration-300 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-[#2D4F44] group-hover:text-[#FDFCF7] transition-colors" />
                </div>
                <div className="pt-1">
                  <h3 className="text-[#2D4F44] text-xl font-bold mb-1 tracking-wide">Holistic Supply Chain</h3>
                  <p className="text-[#2D4F44]/70 font-medium leading-relaxed max-w-md">
                    We manage the complete end-to-end process ensuring continuous operations for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container - Stretched to match left content height */}
          <div className="flex-1 w-full order-1 lg:order-2 relative min-h-[350px] lg:min-h-0 lg:pr-16">
            <div className="relative w-full h-full group flex justify-center lg:justify-end">

              {/* Image Wrapper */}
              <div className="relative w-full lg:max-w-[500px] h-[350px] lg:h-full">

                {/* Asterisk decoration (Now scroll-based rotation) */}
                <div
                  ref={starRef}
                  className="absolute -top-16 -right-16 text-[#6B7B6E] hidden md:block -z-10 will-change-transform"
                >
                  <svg width="180" height="180" viewBox="0 0 160 160" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(80,80)">
                      <rect x="-12" y="-80" width="24" height="160" rx="12" />
                      <rect x="-12" y="-80" width="24" height="160" rx="12" transform="rotate(60)" />
                      <rect x="-12" y="-80" width="24" height="160" rx="12" transform="rotate(120)" />
                    </g>
                  </svg>
                </div>

                {/* The Image Card - Height 100% to match left column */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden border border-[#2D4F44]/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] z-10 bg-white">
                  <img
                    src={saltImg}
                    alt="Premium Salt Processing"
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.95] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FDFCF7]/95 backdrop-blur-md border border-[#2D4F44]/10 rounded-2xl p-4 flex items-center gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 shadow-xl">
                    <div className="w-12 h-12 rounded-full bg-[#2D4F44] flex items-center justify-center shrink-0">
                      <span className="text-[#FDFCF7] font-black text-xl">100%</span>
                    </div>
                    <div>
                      <h4 className="text-[#2D4F44] font-bold text-sm">Pure Quality</h4>
                      <p className="text-[#2D4F44]/70 text-xs">Certified Export Grade</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
