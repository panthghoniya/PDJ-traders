import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Footer = () => {
  const ref = useScrollAnimation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer ref={ref} className="relative bg-brand-black text-brand-light overflow-hidden z-50 pt-24 md:pt-32 flex flex-col justify-between min-h-screen">

        {/* Low Opacity Background Image */}
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/39/86/1d/39861de219c6529fe752746a2d019fb6.jpg')] bg-cover bg-center bg-no-repeat opacity-25 mix-blend-overlay pointer-events-none"></div>

        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

        {/* Main Content Area */}
        <div className="max-w-[110rem] mx-auto px-6 md:px-10 relative z-20 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

            {/* Newsletter Column */}
            <div data-animate="fade-up" data-delay="100" className="lg:col-span-4 pr-0 lg:pr-12">
              <h3 className="text-sm font-bold mb-6 text-brand-accent tracking-[0.2em] uppercase">Stay Updated</h3>
              <p className="text-white/60 text-lg md:text-xl font-light mb-8 leading-relaxed">
                Subscribe to our newsletter for the latest insights in global trade and logistics.
              </p>
              <form className="flex bg-white/5 p-1.5 rounded-full border border-white/10 focus-within:border-brand-accent/50 transition-colors shadow-lg" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full pl-6 text-sm outline-none text-white placeholder:text-white/30 font-light"
                />
                <button className="bg-brand-accent hover:bg-brand-teal text-brand-black px-6 md:px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                  Join <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Quick Links 1 */}
            <div data-animate="fade-up" data-delay="200" className="lg:col-span-2">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Services', 'Pricing', 'Our Fleet', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div data-animate="fade-up" data-delay="300" className="lg:col-span-2">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Resources</h3>
              <ul className="space-y-4">
                {['Blog', 'F.A.Q', 'Privacy Policy', 'Terms of Service', 'Support'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 font-light text-lg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div data-animate="fade-left" data-delay="300" className="lg:col-span-3 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0">
              <h3 className="text-sm font-bold mb-8 text-brand-accent tracking-[0.2em] uppercase">Connect With Us</h3>
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-2 tracking-tight">+(084) 456-0789</p>
              <a href="mailto:support@pdjtrade.com" className="text-brand-accent hover:text-white transition-colors mb-8 inline-block text-lg font-medium">
                support@pdjtrade.com
              </a>
              <p className="text-white/50 text-sm font-light leading-relaxed max-w-[250px]">
                5609 E Sprague Ave, Spokane Valley, WA 99212, USA
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Area */}
        <div className="relative w-full flex flex-col items-center justify-end mt-auto">

          <div className="w-full max-w-[110rem] mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 mb-8 relative z-30">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 mb-4 md:mb-0 text-center md:text-left">
              <p className="text-white/30 text-xs tracking-widest uppercase font-semibold">
                © 2024 PDJ Trade Connect. All Rights Reserved.
              </p>
              <p className="text-xs tracking-widest uppercase font-bold cursor-pointer codeclovers-blink">
                Made by Codeclovers
              </p>
            </div>
          </div>

          {/* The HUGE Text */}
          <div className="w-full relative overflow-hidden flex justify-center pt-10 pb-6">
            <h1 
              className="hidden md:block sm:text-[9vw] sm:text-[9.5vw] md:text-[10vw] font-sans font-black leading-none tracking-[-0.04em] whitespace-nowrap select-none uppercase text-white/[0.08] transform scale-y-[1.4] origin-bottom transition-all duration-300"
              style={{ letterSpacing: '-0.50rem' }}
            >
              PDJ TRADE CONNECT
            </h1>
          </div>
        </div>

      </footer>

      {/* Fixed Floating Back to Top Button — outside footer, fixed on screen */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 z-[999] w-14 h-14 rounded-full bg-brand-accent hover:bg-brand-dark text-white flex items-center justify-center shadow-2xl shadow-brand-accent/30 transition-all duration-500 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
          }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Footer;
