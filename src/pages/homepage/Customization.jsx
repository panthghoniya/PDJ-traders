import React from 'react';
import { Settings, Package, Droplet, Scale } from 'lucide-react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const items = [
  { icon: Settings, title: 'Grain Size', desc: 'Fine powder to coarse crystals — any mesh size as per your requirement.' },
  { icon: Droplet,  title: 'Purity Grade', desc: 'Food, pharma & industrial grades available with lab certification.' },
  { icon: Package,  title: 'Packaging', desc: 'From 1kg retail bags to 1-ton FIBC jumbo bags with custom branding.' },
  { icon: Scale,    title: 'Additives', desc: 'Iodized, anti-caking & mineral fortification as per your specs.' },
];

const Customization = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="relative z-40 bg-brand-background py-12 md:py-20">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div data-animate="fade-up" className="text-center mb-8 md:mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-dark/50 mb-2 block">
            Custom Orders
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-dark leading-tight">
            We Customize Salt <span className="text-brand-dark/60">For You</span>
          </h2>
        </div>

        {/* 4 Cards — 1 col on mobile, 2 on sm, 4 on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              data-animate="fade-up"
              data-delay={i * 100}
              className="flex sm:flex-col items-start gap-4 sm:gap-0 bg-white border border-brand-dark/10 rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-auto sm:h-auto sm:mb-8 sm:mt-2">
                <item.icon className="w-7 h-7 text-brand-dark/50 group-hover:text-brand-dark transition-colors duration-300" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-brand-dark font-semibold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-brand-dark/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-animate="fade-up" data-delay="500" className="text-center mt-8 md:mt-10">
          <button className="w-full sm:w-auto bg-brand-dark hover:bg-brand-black text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-md">
            Request Custom Quote →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Customization;
