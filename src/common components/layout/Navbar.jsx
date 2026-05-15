import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const forceSolid = location.pathname.includes('/product/');
  const isSolid = isScrolled || forceSolid;

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
          isSolid || isMobileMenuOpen
            ? 'bg-brand-background/95 backdrop-blur-md border-b border-brand-dark/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] py-3' 
            : 'bg-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-[110rem] mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2 sm:gap-3 relative z-50 min-w-0">
            <img src={logo} alt="PDJ Trade Connect" className="h-[42px] sm:h-[50px] md:h-[70px] lg:h-[80px] w-auto object-contain transition-all duration-300 flex-shrink-0" />
          
            <div className="flex flex-col justify-center min-w-0">
              <span className={`font-bold text-[13px] sm:text-lg md:text-xl tracking-tight font-heading transition-colors duration-300 leading-tight truncate ${isSolid || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}>
                PDJ <span className="tracking-wider"> TRADE</span> CONNECT
              </span>
              
              <h5 className={`block text-[8px] sm:text-xs md:text-sm mt-0.5 transition-colors duration-300 opacity-90 leading-tight truncate font-literata font-medium italic ${isSolid || isMobileMenuOpen ? 'text-[#2D4F44]' : 'text-white'}`}>
                Connecting Global Market with Quality
              </h5>
            </div>
          </div>

          {/* Center: Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {['Home', 'About', 'Product', 'Gallery', 'Contact'].map((item) => {
              const routeMap = {
                'Home': '/',
                'About': '/about',
                'Contact': '/contact',
                'Gallery': '/gallery',
                'Product': '/product'
              };
              
              return (
                <Link
                  key={item}
                  to={routeMap[item] || '#'}
                  className={`text-sm font-semibold transition-all duration-300 tracking-wide hover:text-brand-dark ${
                    isSolid ? 'text-brand-dark/80' : 'text-white/90'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact#contact-form" className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 border inline-block ${
              isSolid 
                ? 'bg-brand-dark text-white border-brand-dark hover:bg-brand-accent hover:border-brand-accent' 
                : 'bg-white/10 text-white border-white/30 hover:bg-white hover:text-brand-dark'
            }`}>
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors duration-300 ${isSolid || isMobileMenuOpen ? 'text-brand-dark' : 'text-white'}`}
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
        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-6 pt-4">
          {['Home', 'About', 'Product', 'Gallery', 'Contact'].map((item, idx) => {
            const routeMap = {
              'Home': '/',
              'About': '/about',
              'Contact': '/contact',
              'Gallery': '/gallery',
              'Product': '/product'
            };
            return (
              <div 
                key={item}
                className="animate-in fade-in slide-in-from-right-8 duration-500"
                style={{ animationDelay: `${200 + (idx * 100)}ms` }}
              >
                <Link
                  to={routeMap[item] || '#'}
                  className="text-3xl font-heading font-bold text-brand-dark hover:text-brand-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
        <Link 
          to="/contact#contact-form"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mx-6 mt-auto mb-10 text-center py-4 rounded-xl font-bold bg-brand-accent text-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-700"
        >
          Get in Touch
        </Link>
      </div>
    </>
  );
};

export default Navbar;
