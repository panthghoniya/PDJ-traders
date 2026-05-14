import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, Share2 } from 'lucide-react';
import Navbar from '../../common components/layout/Navbar';
import Footer from '../../common components/layout/footer';

// Full product data from 4th.jsx
const productsData = {
  1: {
    id: 1,
    title: "Premium Pink Salt",
    category: "Edible Salt",
    sku: "SKU-PS-001",
    rating: 4.8,
    reviews: 245,
    description: "Our Premium Pink Himalayan Salt is extracted from the pristine foothills of the Himalayas. Rich in trace minerals, it offers unmatched purity, making it ideal for culinary, therapeutic, and industrial applications.",
    images: [
      "https://i.pinimg.com/1200x/b2/9d/ec/b29dec41a37c99340bfc5513f78f0a2f.jpg",
      "https://i.pinimg.com/736x/ed/a0/2c/eda02c75a15492762b1e304d811ba276.jpg",
      "https://i.pinimg.com/736x/b4/bd/eb/b4bdebff1fa4748cc11b911bd13a6039.jpg",
      "https://i.pinimg.com/736x/97/b4/be/97b4beecea19f8d9e51bbb84254decd1.jpg"
    ]
  },
  2: {
    id: 2,
    title: "Refined Sea Salt",
    category: "Edible Salt",
    sku: "SKU-SS-002",
    rating: 4.9,
    reviews: 182,
    description: "High-grade refined sea salt, perfect for bulk industrial use or mass culinary production. Guaranteed 99.9% purity with uniform granulation for consistent dissolving rates.",
    images: [
      "https://i.pinimg.com/736x/21/80/47/218047f27fb25401044ecee15b701034.jpg",
      "https://i.pinimg.com/1200x/cd/40/e5/cd40e5e93951d7443dfa8c3c098445d0.jpg",
      "https://i.pinimg.com/736x/b4/bd/eb/b4bdebff1fa4748cc11b911bd13a6039.jpg",
      "https://i.pinimg.com/736x/97/b4/be/97b4beecea19f8d9e51bbb84254decd1.jpg"
    ]
  },
  3: {
    id: 3,
    title: "Industrial Salt",
    category: "Industrial Salt",
    sku: "SKU-IS-003",
    rating: 4.7,
    reviews: 156,
    description: "Premium industrial grade salt for manufacturing, water softening, and de-icing. Sourced and processed to meet strict industrial standards.",
    images: [
      "https://i.pinimg.com/1200x/16/c1/da/16c1daf5e8c88b14221b7f700060c27d.jpg",
      "https://i.pinimg.com/1200x/cd/40/e5/cd40e5e93951d7443dfa8c3c098445d0.jpg",
      "https://i.pinimg.com/736x/ed/a0/2c/eda02c75a15492762b1e304d811ba276.jpg",
      "https://i.pinimg.com/736x/97/b4/be/97b4beecea19f8d9e51bbb84254decd1.jpg"
    ]
  },
  4: {
    id: 4,
    title: "Himalayan Bath Salt",
    category: "Bath & Spa",
    sku: "SKU-BS-004",
    rating: 5.0,
    reviews: 89,
    description: "Luxurious Himalayan bath salt crystals designed to rejuvenate your skin and relax your muscles. Infused with natural minerals for the ultimate spa experience.",
    images: [
      "https://i.pinimg.com/736x/f7/57/cc/f757cc26833d373cd7cbfda79231167c.jpg",
      "https://i.pinimg.com/736x/78/03/7f/78037f19196fc6e98c7fda730145a3bc.jpg",
      "https://i.pinimg.com/736x/e5/76/8b/e5768bd15123d75f32b1ee5280f7a1b8.jpg",
      "https://i.pinimg.com/1200x/cd/40/e5/cd40e5e93951d7443dfa8c3c098445d0.jpg"
    ]
  },
  5: {
    id: 5,
    title: "Coarse Cooking Salt",
    category: "Edible Salt",
    sku: "SKU-CS-005",
    rating: 4.8,
    reviews: 112,
    description: "High-quality coarse cooking salt, perfect for grilling, roasting, and finishing dishes. Its large crystals provide a satisfying crunch and burst of flavor.",
    images: [
      "https://i.pinimg.com/736x/d5/63/c0/d563c0b03ba755a852af2ced90c826d7.jpg",
      "https://i.pinimg.com/736x/97/b4/be/97b4beecea19f8d9e51bbb84254decd1.jpg",
      "https://i.pinimg.com/736x/e5/76/8b/e5768bd15123d75f32b1ee5280f7a1b8.jpg",
      "https://i.pinimg.com/736x/ed/a0/2c/eda02c75a15492762b1e304d811ba276.jpg"
    ]
  },
  6: {
    id: 6,
    title: "Crystal Salt Lamp",
    category: "Salt Lamps",
    sku: "SKU-SL-006",
    rating: 4.9,
    reviews: 310,
    description: "Beautifully hand-carved crystal salt lamps that emit a warm, soothing glow. Known for their air-purifying properties and ability to create a relaxing ambiance.",
    images: [
      "https://i.pinimg.com/736x/30/ba/5c/30ba5c9546a706b52cf3977310efc52b.jpg",
      "https://i.pinimg.com/736x/78/03/7f/78037f19196fc6e98c7fda730145a3bc.jpg",
      "https://i.pinimg.com/736x/97/b4/be/97b4beecea19f8d9e51bbb84254decd1.jpg",
      "https://i.pinimg.com/1200x/cd/40/e5/cd40e5e93951d7443dfa8c3c098445d0.jpg"
    ]
  }
};

const Innerproduct = () => {
  const { id } = useParams();
  const product = productsData[id] || productsData[1];
  
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedWeight, setSelectedWeight] = useState("1 kg");
  const [customWeight, setCustomWeight] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const weights = ["500 g", "1 kg", "5 kg", "25 kg", "Custom Bulk"];

  const handleInquiry = () => {
    const finalWeight = selectedWeight === "Custom Bulk" 
      ? (customWeight ? `${customWeight} kg (Custom)` : null)
      : selectedWeight;
      
    if (selectedWeight === "Custom Bulk" && !customWeight) {
      alert("Please enter a custom weight in kg before sending inquiry.");
      return;
    }
    
    const subject = `Inquiry for ${product.title}`;
    const body = `Hello,\n\nI am interested in inquiring about the following product:\n\nProduct: ${product.title}\nSKU: ${product.sku}\nWeight/Packaging Required: ${finalWeight}\n\nPlease provide a quote and further details.\n\nThank you.`;
    
    window.location.href = `mailto:support@pdjtrade.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <Navbar />
      
      {/* Page Content */}
      <div className="bg-brand-background min-h-screen pt-20 md:pt-28 pb-16 md:pb-24 font-sans text-brand-dark">
        <div className="max-w-[110rem] mx-auto px-4 md:px-10">
          
          {/* Breadcrumb Header */}
          <div className="text-center mb-10 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-3xl md:text-5xl font-bold font-heading mb-3 md:mb-4 text-brand-dark md:pt-10">Product Details</h1>
            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-brand-dark/60 font-medium">
              <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span>/</span>
              <span className="text-brand-dark">Product Details</span>
            </div>
          </div>

          {/* Top Section: Image & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 max-w-7xl mx-auto">
            
            {/* Left: Images */}
            <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="w-full aspect-[4/5] md:aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-white shadow-sm border border-brand-dark/10 relative group">
                <img src={activeImage} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="grid grid-cols-4 gap-3 md:gap-4">
                {product.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300 ${activeImage === img ? 'border-brand-dark shadow-md scale-105' : 'border-transparent hover:border-brand-accent/50 opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="flex flex-col justify-start animate-in fade-in slide-in-from-right-8 duration-700">
              <p className="text-brand-dark/50 text-xs md:text-sm mb-2 uppercase tracking-widest font-semibold">{product.category}</p>
              
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-brand-black leading-tight">{product.title}</h2>
              </div>

              <div className="flex items-center gap-2 mb-6 md:mb-8 text-brand-dark/60 font-medium text-sm md:text-base">
                <span className="uppercase tracking-widest text-xs font-bold text-brand-dark">SKU:</span>
                <span>{product.sku}</span>
              </div>

              <p className="text-brand-dark/70 leading-relaxed mb-8 md:mb-10 text-sm sm:text-base md:text-lg">
                {product.description}
              </p>

              {/* Weight Options */}
              <div className="mb-8 md:mb-10">
                <h4 className="text-xs md:text-sm font-bold text-brand-black mb-3 md:mb-4 uppercase tracking-widest">Weight / Packaging</h4>
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
                  {weights.map(weight => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border-2 ${
                        selectedWeight === weight 
                        ? 'bg-brand-dark text-white border-brand-dark shadow-md scale-105' 
                        : 'bg-transparent text-brand-dark/70 border-brand-dark/20 hover:border-brand-accent hover:text-brand-accent'
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
                
                {/* Custom Bulk Input */}
                {selectedWeight === "Custom Bulk" && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300 max-w-sm">
                    <div className="relative">
                      <input 
                        type="number" 
                        min="1"
                        value={customWeight}
                        onChange={(e) => setCustomWeight(e.target.value)}
                        placeholder="Enter custom weight" 
                        className="w-full bg-white border-2 border-brand-dark/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-brand-accent pr-16 shadow-sm transition-all text-brand-dark font-bold"
                      />
                      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-brand-dark/50 font-bold text-sm pointer-events-none">kg</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Inquiry Action */}
              <div className="flex items-center gap-3 md:gap-4">
                <button 
                  onClick={handleInquiry}
                  className="flex-1 bg-brand-dark hover:bg-brand-black text-white py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-[0_10px_20px_rgba(45,79,68,0.2)] hover:shadow-[0_15px_30px_rgba(45,79,68,0.3)] transform hover:-translate-y-1"
                >
                  Send Inquiry
                </button>
                <button className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border-2 border-brand-dark/20 text-brand-dark/50 hover:text-brand-accent hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-300 flex-shrink-0">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>



            </div>
          </div>

          {/* Bottom Section: Tabs */}
          <div className="py-8 md:py-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <div className="flex items-center justify-start md:justify-center gap-4 md:gap-16 border-b-2 border-brand-dark/10 mb-8 md:mb-12 overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar pb-1">
              {['description', 'additional information', 'review'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 md:pb-3 text-sm md:text-2xl font-bold capitalize transition-all duration-300 relative whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab ? 'text-brand-dark' : 'text-brand-dark/50 hover:text-brand-dark/70'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute -bottom-[6px] left-0 w-full h-[3px] bg-brand-dark rounded-t-full"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="text-brand-dark/70 leading-relaxed text-left text-sm sm:text-base md:text-lg">
              {activeTab === 'description' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="mb-6 md:mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-8 md:mb-10">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                  <ul className="text-left max-w-3xl mx-0 space-y-3 md:space-y-4 text-brand-dark/70">
                    <li className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/10 text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm font-bold">✓</div>
                      100% Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/10 text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm font-bold">✓</div>
                      Ut at nunc vel nisi gravida dictum.
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/10 text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm font-bold">✓</div>
                      Donec non velit sed risus tincidunt suscipit.
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-brand-accent/10 text-brand-dark flex items-center justify-center flex-shrink-0 mt-0.5 text-xs md:text-sm font-bold">✓</div>
                      Cras laoreet lacus in dui posuere fringilla.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === 'additional information' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="mb-4"><strong>Weight options:</strong> 500g, 1kg, 5kg, 25kg, Bulk.</p>
                  <p className="mb-4"><strong>Purity:</strong> 99.9% certified.</p>
                  <p className="mb-4"><strong>Packaging:</strong> Moisture-proof PP bags.</p>
                </div>
              )}
              {activeTab === 'review' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-6 md:mb-8">{product.reviews} Reviews for {product.title}</h3>
                  
                  <div className="space-y-6 md:space-y-8">
                    {[1, 2].map((reviewIdx) => (
                      <div key={reviewIdx} className="bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-brand-dark/10">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4 gap-3">
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-dark font-bold text-base md:text-lg flex-shrink-0">
                              {reviewIdx === 1 ? 'JD' : 'SM'}
                            </div>
                            <div>
                              <h4 className="font-bold text-brand-dark text-sm md:text-base">{reviewIdx === 1 ? 'John Doe' : 'Sarah Miller'}</h4>
                              <p className="text-xs md:text-sm text-brand-dark/50">Oct 12, 2023</p>
                            </div>
                          </div>
                          <div className="flex text-brand-accent">
                            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" />)}
                          </div>
                        </div>
                        <p className="text-brand-dark/70 leading-relaxed text-sm md:text-base">
                          {reviewIdx === 1 
                            ? "Excellent quality salt! The purity is exactly as described and it worked perfectly for our industrial needs. The packaging was very secure and moisture-free."
                            : "Very professional service and premium quality product. The grain size was consistent throughout the entire bulk order. Will definitely be ordering again."}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 md:mt-10 text-center">
                    <button className="px-6 py-2.5 md:px-8 md:py-3 rounded-full border-2 border-brand-dark text-brand-dark font-bold hover:bg-brand-dark hover:text-white transition-all duration-300 text-sm md:text-base">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Related Products */}
          <div className="py-8 md:py-10 max-w-7xl mx-auto animate-in fade-in duration-1000 delay-500">
             <div className="text-center mb-10 md:mb-16">
               <p className="text-brand-accent font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 text-xs md:text-sm">Related Products</p>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-brand-dark">Explore <span className="text-brand-accent">Related Products</span></h2>
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
               {[1,2,3,0].map(item => (
                 <div key={item} className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-brand-dark/10 group cursor-pointer hover:-translate-y-2">
                   <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-brand-background">
                     <img src={product.images[item]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Related" />
                   </div>
                   <div className="px-3 pb-3 md:pb-4">
                     <p className="text-brand-dark/50 text-xs md:text-sm mb-1.5 md:mb-2 font-medium">Sea Salt</p>
                     <div className="flex justify-between items-start mb-2 md:mb-3 gap-2">
                       <h3 className="font-bold text-brand-dark text-base md:text-lg leading-tight">Premium Salt Variant</h3>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Innerproduct;
