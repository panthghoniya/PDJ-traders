import React from 'react';
import FlowArt, { FlowSection } from '../../components/ui/story-scroll';


export default function Story() {
  return (
    <div id="about">
      
      <FlowArt aria-label="PDJ Trade Connect Story">
      
      {/* 1. About Us */}
      <FlowSection aria-label="About Us" style={{ backgroundColor: '#2D4F44', color: '#F2EDD1' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">01 — About Us</p>
        <hr className="my-[2vw] border-none border-t border-[#F2EDD1]/40 opacity-100" />
        <div>
          <h1
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight"
          >
            About
            <br />
            Us
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-[#F2EDD1]/40 opacity-100" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-light leading-relaxed">
          We believe global trade deserves a partner that puts quality first. No compromises, no
          delays — just pure premium salt and the industries that rely on it.
        </p>
      </FlowSection>

      {/* 2. Our Story */}
      <FlowSection aria-label="Our Story" style={{ backgroundColor: '#1A2B25', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">02 — Our Story</p>
        <hr className="my-[2vw] border-none border-t border-brand-accent/40" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight"
          >
            Our
            <br />
            Story
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-brand-accent/40" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-light leading-relaxed">
          From our first extraction to becoming a global export leader. We're rewriting the rules of how premium salt gets extracted, refined, and distributed worldwide.
        </p>
        <hr className="my-[2vw] border-none border-t border-brand-accent/40" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Humble Beginnings</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-light leading-relaxed opacity-75">
              Started with a vision to provide the purest salt, growing steadily through unmatched dedication.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Rapid Expansion</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-light leading-relaxed opacity-75">
              Expanded our Indian facilities to connect with major ports across 50+ countries globally.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">Future Forward</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-light leading-relaxed opacity-75">
              Continuously innovating our supply chain to ensure fair pricing and transparent operations.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 3. Why Choose Us */}
      <FlowSection aria-label="Why Choose Us" style={{ backgroundColor: '#FDFCF7', color: '#1A2B25' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">03 — Why Choose Us</p>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight text-brand-dark"
          >
            Why
            <br />
            Choose
            <br />
            Us
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed">
          Three reasons why we lead the market. Zero complexity. Your supply chain starts moving the moment you partner with us.
        </p>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">01 — Pure Quality</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 font-medium">
              We extract raw salt from the finest pristine reserves, ensuring 99.9% purity in every batch.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">02 — Global Reach</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 font-medium">
              Our massive ocean freight network delivers bulk quantities securely to your nearest port.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-accent">03 — Sustainable</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75 font-medium">
              Eco-friendly extraction and processing that respects the environment while meeting demand.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 4. Our Speciality */}
      <FlowSection aria-label="Our Speciality" style={{ backgroundColor: '#5BA298', color: '#1A2B25' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FDFCF7]">04 — Our Speciality</p>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight text-[#FDFCF7]"
          >
            Our
            <br />
            Speciality
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-medium leading-relaxed">
          We specialize in processing and exporting the highest grade of salt for both industrial applications and human consumption.
        </p>
        <hr className="my-[2vw] border-none border-t border-[#1A2B25]/20" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Food Grade</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-medium leading-relaxed opacity-80">
              Refined, iodized, and pure. Meeting strict global dietary requirements.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Industrial Grade</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-medium leading-relaxed opacity-80">
              Perfectly processed for chemical, manufacturing, and de-icing applications.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Raw Crystals</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] font-medium leading-relaxed opacity-80">
              Unprocessed, mineral-rich raw salt directly from pristine salt pans.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* 5. Our Services */}
      <FlowSection aria-label="Our Services" style={{ backgroundColor: '#1A2B25', color: '#FDFCF7' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">05 — Our Services</p>
        <hr className="my-[2vw] border-none border-t border-[#FDFCF7]/20" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-heading font-black leading-[0.85] uppercase tracking-tight text-brand-teal"
          >
            Our
            <br />
            Services
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-[#FDFCF7]/20" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-light leading-relaxed text-[#FDFCF7]">
          We manage the entire process—from extraction to container loading and ocean freight. Partner with PDJ Trade Connect and experience exports without limits.
        </p>
      </FlowSection>
      
    </FlowArt>
    </div>
  );
}
