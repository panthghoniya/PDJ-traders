import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';
import ProductHero from './producthero';
import { Heart, Search, ChevronDown, Filter } from 'lucide-react';
import initialProducts from '../../data/products.json';

import saltImage from '../../assets/salt.png';

const ProductListing = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredProducts = selectedCategory === 'All'
        ? initialProducts
        : initialProducts.filter(p => p.category === selectedCategory);

    return (
        <>
            <Navbar />
            <div className="bg-brand-background min-h-screen font-sans">
                <ProductHero />

                <div className="max-w-[110rem] mx-auto px-6 md:px-10 py-16 md:py-24">

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* Sidebar Filters */}
                        <div className="w-full lg:w-1/4 flex flex-col gap-10">
                            <div className="flex items-center gap-2 font-bold text-xl font-heading mb-2">
                                <Filter className="w-5 h-5 text-brand-accent" />
                                <h2>Filters</h2>
                            </div>

                            {/* Categories */}
                            <div>
                                <h3 className="font-semibold text-brand-dark mb-4 tracking-wide uppercase text-sm">Categories</h3>
                                <div className="flex flex-col gap-3">
                                    {['All', 'Edible Salt', 'Industrial Salt', 'Bath & Spa', 'Salt Lamps'].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 cursor-pointer group" onClick={() => setSelectedCategory(cat)}>
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedCategory === cat ? 'bg-brand-accent border-brand-accent' : 'border-brand-dark/30 group-hover:border-brand-accent'}`}>
                                                {selectedCategory === cat && <div className="w-2.5 h-2.5 bg-white rounded-[2px]" />}
                                            </div>
                                            <span className={`transition-colors ${selectedCategory === cat ? 'text-brand-accent font-medium' : 'text-brand-dark/80 group-hover:text-brand-accent'}`}>{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Product Grid */}
                        <div className="w-full lg:w-3/4 flex flex-col">

                            {/* Top Bar */}
                            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-brand-dark/10 gap-4">
                                <p className="text-brand-dark/60">Showing {filteredProducts.length} products</p>

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-sm text-brand-dark/80 cursor-pointer hover:text-brand-accent transition-colors">
                                        <span>Sort by:</span>
                                        <span className="font-semibold">Featured</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {filteredProducts.map((product) => (
                                    <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col relative">

                                        {/* Card Body */}
                                        <div className="relative bg-brand-dark/5 rounded-[2rem] aspect-[4/5] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] group-hover:bg-white mb-6">

                                            {/* Product Image */}
                                            <img
                                                src={product.images[0]}
                                                alt={product.name}
                                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Product Info - Only Name as requested */}
                                        <div className="flex flex-col items-center text-center px-4">
                                            <h3 className="font-heading font-semibold text-xl text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">{product.name}</h3>
                                        </div>

                                    </Link>
                                ))}
                            </div>

                            {/* Load More Button */}
                            {filteredProducts.length > 0 && (
                                <div className="mt-16 flex justify-center">
                                    <button className="px-10 py-4 rounded-full border border-brand-dark/20 font-semibold text-brand-dark hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all duration-300">
                                        Load More
                                    </button>
                                </div>
                            )}

                            {filteredProducts.length === 0 && (
                                <div className="mt-10 text-center text-brand-dark/60">
                                    No products found in this category.
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Promotional Banner exactly like the image but our theme */}
                    <div className="mt-24 md:mt-32 relative bg-[#3B5A51] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 lg:p-20 shadow-2xl">
                        <div className="relative z-10 md:w-1/2 text-center md:text-left">
                            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                                Stay Updated,<br />
                                <span className="text-[#A8D5BA]">Stay Radiant.</span>
                            </h2>
                            <p className="text-white/80 text-lg mb-10 max-w-md mx-auto md:mx-0">
                                Be the first to know about new products, exclusive offers, and expert tips.
                            </p>

                            <div className="flex bg-white rounded-full p-2 max-w-md mx-auto md:mx-0 shadow-lg">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="bg-transparent px-6 py-3 w-full outline-none text-brand-dark placeholder:text-brand-dark/40"
                                />
                                <button className="bg-brand-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-accent transition-colors whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        <div className="absolute right-0 bottom-0 w-full md:w-[45%] h-full pointer-events-none flex items-center justify-center p-6">
                            <img 
                                src="https://i.pinimg.com/736x/8e/b3/c1/8eb3c19f37fdda88e792857c430aa104.jpg" 
                                alt="Decorative" 
                                className="w-full h-full object-contain object-center" 
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListing;
