import React from 'react';
import { ArrowDown } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-brand-dark text-brand-light">
      
      {/* Background image with overlay - Restored */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/17/fa/dd/17faddf5f0139e31c328c41586415085.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Subtle Grid Background - Restored */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>
      
      {/* Gradient overlay - Clean transition to bottom (no dark shadow line) */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-[#2D4F44] z-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[110rem] mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        
        {/* Badge - Restored with blur */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">Welcome to our world</span>
        </div>

        {/* Huge Title - Restored with gradient */}
        <h1 className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-heading font-black leading-[0.9] tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          BEYOND <br className="hidden sm:block" />
          <span className="text-brand-dark bg-clip-text bg-gradient-to-r from-brand-accent to-brand-teal drop-shadow-sm">
            BORDERS.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl text-lg sm:text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          A relentless pursuit of quality. We are redefining the global standard for premium salt extraction, refining, and export.
        </p>
      </div>

      {/* Scroll indicator - Restored with blur and bounce */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 animate-in fade-in duration-1000 delay-700">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Scroll to explore</span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-bounce">
          <ArrowDown className="w-4 h-4 text-brand-accent" />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
