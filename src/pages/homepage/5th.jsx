import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { manProcessing as manprocessing, manPurify as manpurify, manWithSalt as manwithsalt } from '../../assets/images';


const Manufacturer = () => {
    const sectionRef = useRef(null);
    const [transform, setTransform] = useState(0);

    // Data - Updated with Salt/Trade imagery and descriptions to match theme
    const sections = [
        {
            id: 1,
            title: "Premium Salt Extraction",
            description: "Advanced extraction techniques ensuring 99.9% purity and natural mineral preservation.",
            image: manprocessing
        },
        {
            id: 2,
            title: "Global Export Network",
            description: "Seamless logistics connecting our Indian facilities to major ports in 50+ countries.",
            image: manwithsalt
        },
        {
            id: 3,
            title: "Industrial Grade Quality",
            description: "Meeting rigorous international standards for food grade and industrial salt requirements.",
            image: manpurify
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            // Only run on desktop
            if (window.innerWidth < 1024) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();
            const offsetTop = rect.top;
            const scrollDistance = section.clientHeight - window.innerHeight; // Total scrollable distance

            // Calculate progress (0 to 1) based on how far we've scrolled into the section
            let progress = -offsetTop / scrollDistance;

            // Clamp progress between 0 and 1
            progress = Math.max(0, Math.min(progress, 1));

            // Max horizontal translation
            const totalWidth = 50 + (sections.length * 80); // in vw
            const maxTranslate = totalWidth - 100; // Subtract one viewport width

            setTransform(progress * maxTranslate);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections.length]);

    return (
        // relative z-40 ensures it covers the previous sticky section
        <div ref={sectionRef} className="relative z-40 bg-brand-background h-auto lg:h-[300vh]">

            {/* Sticky Viewport */}
            <div className="lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row">

                {/* Mobile: Vertical Stack (Normal Layout) */}
                <div className="lg:hidden w-full">
                    <div className="bg-brand-background p-8 md:p-12 py-24 md:py-24 border-b border-brand-dark/10">
                        <h2 className="text-4xl font-heading font-bold text-brand-dark leading-tight mb-6">
                            Power of <br /> <span className="text-brand-accent">Production.</span>
                        </h2>
                        <p className="text-brand-dark/60">
                            Our manufacturing capabilities and supply chain excellence.
                        </p>
                    </div>

                    {sections.map((item) => (
                        <div key={item.id} className="relative h-[60vh] w-full">
                            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="text-brand-accent font-bold mb-2 block">0{item.id}</span>
                                <h3 className="text-3xl font-heading font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Horizontal Track */}
                <div
                    className="hidden lg:flex h-full will-change-transform"
                    style={{ transform: `translateX(-${transform}vw)` }}
                >
                    {/* Intro Block (Fixed Width) */}
                    <div className="w-[50vw] h-full bg-brand-background flex items-center justify-center p-20 border-r border-brand-dark/10 shrink-0 relative z-20">
                        <div className="space-y-8 relative z-10">
                            <h2 className="text-7xl font-heading font-bold text-brand-dark leading-[0.9]">
                                Power of <br /> <span className="text-brand-accent">Production.</span>
                            </h2>
                            <p className="text-brand-dark/60 max-w-sm text-lg">
                                State-of-the-art facilities meeting global standards.
                            </p>
                            <div className="flex items-center gap-2 text-brand-accent animate-pulse mt-8">
                                <span>Scroll Down to Explore</span> <ArrowRight size={20} className="rotate-90" />
                            </div>
                        </div>
                        {/* Decorative Background for Intro */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
                    </div>

                    {/* Cards */}
                    {sections.map((item) => (
                        <div key={item.id} className="w-[80vw] h-full relative shrink-0 group border-r border-white/10">
                            <div className="absolute inset-0 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                            </div>

                            <div className="absolute bottom-0 left-0 p-24 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-40">
                                <div className="border-l-4 border-brand-accent pl-8">
                                    <span className="text-brand-accent font-bold tracking-[0.2em] text-lg uppercase mb-2 block">0{item.id}</span>
                                    <h3 className="text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-white/90 text-xl max-w-2xl leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Manufacturer;