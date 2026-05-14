import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const photos = [
  // Block 1
  {
    id: 1,
    image: "https://i.pinimg.com/736x/8d/eb/95/8deb95eee44321a094e8cf6173579e04.jpg",
    name: "Premium Pink Salt",
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/94/32/25/943225be170d66019f628cc496e56f0e.jpg",
    name: "Refined Sea Salt",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/1200x/44/77/46/447746bbcac79c18537fe1cd82002cec.jpg",
    name: "Bulk Packaging",
    span: "col-span-1 row-span-1"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/1200x/9a/96/54/9a96548a1991385c16e0b0005e705a03.jpg",
    name: "Port Loading",
    span: "col-span-1 row-span-1"
  },
  // Block 2
  {
    id: 5,
    image: "https://i.pinimg.com/1200x/8e/94/34/8e9434c7e894a2322b8312b02c2ebc64.jpg",
    name: "Global Freight",
    span: "col-span-1 row-span-1"
  },
  {
    id: 6,
    image: "https://i.pinimg.com/736x/17/52/90/1752900c7fac0f714258c4be6ed68293.jpg",
    name: "Distribution Network",
    span: "col-span-1 row-span-1"
  },
  {
    id: 7,
    image: "https://i.pinimg.com/1200x/11/6d/d1/116dd1c2edf6af22f6243f030fcd50e5.jpg",
    name: "Salt Lamps",
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1 md:row-span-2"
  },
  {
    id: 8,
    image: "https://i.pinimg.com/1200x/b7/e3/25/b7e32583894f604a63ba83d2d3c343a1.jpg",
    name: "Control Lab",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
  },
  // Block 3
  {
    id: 9,
    image: "https://i.pinimg.com/736x/d6/46/7b/d6467b8e0299677ab31af948902b5417.jpg",
    name: "Warehouse Storage",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2"
  },
  {
    id: 10,
    image: "https://i.pinimg.com/736x/13/e5/56/13e556eef5d2044f98f2ea51e660de21.jpg",
    name: "Industrial Grades",
    span: "col-span-1 row-span-1"
  },
  {
    id: 11,
    image: "https://i.pinimg.com/1200x/8d/23/5d/8d235d1c0e7c3ee3da265366e9559206.jpg",
    name: "Custom Lines",
    span: "col-span-1 row-span-1"
  }
];

const GalleryPhotos = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImg]);

  return (
    <div className="w-full bg-brand-background relative">
      <div className="max-w-[110rem] mx-auto px-4 md:px-10 py-10 md:py-20">
        
        {/* CSS Grid Bento Layout - Perfectly flush at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6 w-full">
          {photos.map((item, index) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImg(item)}
              className={`relative group overflow-hidden bg-brand-dark/5 rounded-[1.5rem] shadow-sm cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-8 ${item.span}`}
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                <p className="text-xl md:text-2xl font-heading font-bold leading-tight">{item.name}</p>
                <div className="w-10 h-1 bg-brand-dark mt-3 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Using extremely high z-index and fixed position */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 z-[10000] border border-white/20 group"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImg(null);
            }}
          >
            <X className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-300" />
          </button>
          
          <div 
            className="relative max-w-7xl w-full max-h-full flex flex-col items-center justify-center animate-in zoom-in-95 duration-300 pointer-events-none"
          >
            <img 
              src={selectedImg.image} 
              alt={selectedImg.name} 
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto" 
            />
            <div className="mt-8 text-center text-white pointer-events-auto">
              <p className="text-2xl md:text-4xl font-heading font-bold tracking-tight">{selectedImg.name}</p>
              <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPhotos;
