import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-background/95 backdrop-blur-md border-b border-brand-dark/5 py-3' 
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[110rem] mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2 sm:gap-3 relative z-50 min-w-0">
            <img src={logo} alt="PDJ Trade Connect" className="h-[42px] sm:h-[50px] md:h-[70px] lg:h-[80px] w-auto object-contain transition-all duration-300 flex-shrink-0" />
          
            <div className="flex flex-col justify-center min-w-0">
              <span className={`font-bold text-[13px] sm:text-lg md:text-xl tracking-tight font-heading transition-colors duration-300 leading-tight truncate ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}>
                PDJ <span className="tracking-wider">TRADE</span> CONNECT
              </span>
              
              <h5 className={`block text-[8px] sm:text-xs md:text-sm mt-0.5 transition-colors duration-300 opacity-90 leading-tight truncate ${isScrolled || isMobileMenuOpen ? 'text-[#2D4F44]' : 'text-white'}`}>
                Connecting Global Market with Quality
              </h5>
            </div>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {['Home', 'Services', 'Trade', 'About', 'Contact'].map((item) => (
              item === 'About' ? (
                <Link
                  key={item}
                  to="/about"
                  className={`text-sm font-semibold transition-all duration-300 tracking-wide hover:text-brand-accent ${
                    isScrolled ? 'text-brand-dark/80' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              ) : (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`}
                  className={`text-sm font-semibold transition-all duration-300 tracking-wide hover:text-brand-accent ${
                    isScrolled ? 'text-brand-dark/80' : 'text-white/90'
                  }`}
                >
                  {item}
                </a>
              )
            ))}
          </div>

          {/* Right: Contact Button (Desktop) */}
          <div className="hidden lg:block flex-shrink-0">
            <button className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border ${
              isScrolled 
                ? 'bg-brand-dark text-white border-brand-dark hover:bg-brand-accent hover:border-brand-accent' 
                : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-dark'
            }`}>
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-brand-background transition-all duration-500 ease-in-out flex flex-col items-center justify-center space-y-8 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {['Home', 'Services', 'Trade', 'About', 'Contact'].map((item) => (
          item === 'About' ? (
            <Link
              key={item}
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-brand-dark hover:text-brand-accent transition-colors"
            >
              {item}
            </Link>
          ) : (
            <a
              key={item}
              href={item === 'Home' ? '/' : `/#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-brand-dark hover:text-brand-accent transition-colors"
            >
              {item}
            </a>
          )
        ))}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-4 px-8 py-3 rounded-full font-semibold text-lg bg-brand-dark text-white hover:bg-brand-accent transition-all duration-300"
        >
          Get in Touch
        </button>
      </div>
    </>
  );
};

export default Navbar;
