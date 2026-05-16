import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const faqs = [
  {
    question: "What types of salt do you export?",
    answer: "We export a wide variety of premium salts including edible salt, industrial salt, raw salt, and specialized refined salts to meet diverse global requirements."
  },
  {
    question: "What are your global shipping capabilities?",
    answer: "PDJ Traders has a robust logistics network capable of shipping bulk salt orders to over 50 countries worldwide, ensuring timely and safe delivery."
  },
  {
    question: "Do you offer customized packaging?",
    answer: "Yes, we offer fully customizable packaging solutions ranging from small retail packs to large jumbo bags, tailored to your brand and compliance needs."
  },
  {
    question: "What quality certifications do your products hold?",
    answer: "Our salt products are rigorously tested and certified to meet international food safety and industrial standards, guaranteeing 99.9% purity."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FDFCF7] py-20 lg:py-32 relative z-40 border-t border-[#2D4F44]/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#5BA298] font-bold tracking-widest uppercase text-sm mb-4 block">
            Support & Help
          </span>
          <h2 className="text-[#2D4F44] font-heading text-[clamp(2rem,4vw,3.5rem)] font-black leading-tight mb-2">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div 
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer border border-transparent ${
                  isActive 
                    ? 'bg-white shadow-[0_15px_40px_rgba(45,79,68,0.08)] border-[#2D4F44]/5' 
                    : 'bg-[#2D4F44]/[0.04] hover:bg-[#2D4F44]/[0.06]'
                }`}
              >
                {/* Question Area */}
                <div className="flex items-center justify-between p-5 md:px-8 md:py-6">
                  <h3 className={`text-base md:text-lg font-bold pr-6 md:pr-8 transition-colors ${
                    isActive ? 'text-[#2D4F44]' : 'text-[#2D4F44]/80'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* Icon Button */}
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'bg-[#2D4F44]/10 text-[#2D4F44] rotate-90' 
                      : 'bg-white text-[#2D4F44] shadow-sm rotate-0'
                  }`}>
                    {isActive ? <X size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                  </div>
                </div>

                {/* Answer Area (Collapsible) */}
                <div 
                  className={`grid transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-8 pb-6 md:pb-8 text-[#2D4F44]/70 text-sm md:text-base leading-relaxed transform transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-top">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
