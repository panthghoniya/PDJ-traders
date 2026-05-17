import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { godown } from '../../assets/images';
import photosData from "../../data/gallery.json";

// Resolve local assets that can't live in JSON
const photos = photosData.map(item => ({
  ...item,
  image: item.image === 'godown' ? godown : item.image
}));

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
