import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactInfoBanner = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="bg-brand-background px-6 md:px-10 pt-12 md:pt-16 pb-24 md:pb-32 relative z-10">
      <div className="max-w-[110rem] mx-auto">
        <div data-animate="fade-up" className="bg-brand-black rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-brand-dark/20 relative overflow-hidden group">
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
        
        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 py-8 md:py-0 px-4 sm:px-8 text-center sm:text-left">
          <div className="p-3 bg-white/5 rounded-full flex-shrink-0">
            <Mail className="w-6 h-6 text-brand-accent" />
          </div>
          <div className="flex flex-col mt-1">
            <a href="mailto:support@pdjtrade.com" className="text-white hover:text-brand-accent transition-colors font-medium">support@pdjtrade.com</a>
            <a href="mailto:info@pdjtrade.com" className="text-white/60 hover:text-brand-accent transition-colors font-light text-sm mt-1">info@pdjtrade.com</a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 py-8 md:py-0 px-4 sm:px-8 text-center sm:text-left">
          <div className="p-3 bg-white/5 rounded-full flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-accent" />
          </div>
          <div className="flex flex-col mt-1">
            <a href="tel:+1844560789" className="text-white hover:text-brand-accent transition-colors font-medium">+(084) 456-0789</a>
            <a href="tel:+1844560790" className="text-white/60 hover:text-brand-accent transition-colors font-light text-sm mt-1">+(084) 456-0790</a>
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 py-8 md:py-0 px-4 sm:px-8 text-center sm:text-left">
          <div className="p-3 bg-white/5 rounded-full flex-shrink-0">
            <MapPin className="w-6 h-6 text-brand-accent" />
          </div>
          <div className="flex flex-col mt-1">
            <span className="text-white font-medium">5609 E Sprague Ave,</span>
            <span className="text-white/60 font-light text-sm mt-1">Spokane Valley, WA 99212, USA</span>
          </div>
        </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactInfoBanner;
