import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6958bb5c948dcfee61d603da/159385863_IMG_20250622_162957.jpg",
    category: "portrait",
    caption: ""
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6958bb5c948dcfee61d603da/e3c296a63_IMG-20260103-WA0000.jpg",
    category: "portrait",
    caption: ""
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6958bb5c948dcfee61d603da/832e06ff5_IMG20250322154855.jpg",
    category: "family",
    caption: "Parents - Sanjaybhai & Minaben"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6958bb5c948dcfee61d603da/639f8f863_IMG-20241114-WA0020.jpg",
    category: "family",
    caption: "With Brother Bhargav"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="pt-24 pb-12 bg-gradient-to-b from-[#081829] to-[#0A1D37] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Moments
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Photo <span className="text-[#C9A24D]">Gallery</span>
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          {['all', 'portrait', 'family'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-[#C9A24D] to-[#E6C878] text-[#0A1D37]'
                  : 'bg-white/5 border border-[#C9A24D]/30 text-[#BFC7CE] hover:bg-[#C9A24D]/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="relative group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption || "Gallery image"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    {image.caption && (
                      <p className="text-white font-medium text-sm">{image.caption}</p>
                    )}
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-[#C9A24D]/90 rounded-full flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 text-[#0A1D37]" />
                    </div>
                  </div>
                </div>
                {/* Gold Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C9A24D] rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A1D37]/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || "Gallery image"}
                className="max-w-full max-h-[85vh] object-contain rounded-xl border-2 border-[#C9A24D]/30"
              />
              {selectedImage.caption && (
                <p className="text-center text-white font-medium mt-4">{selectedImage.caption}</p>
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <X className="w-6 h-6 text-[#0A1D37]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}