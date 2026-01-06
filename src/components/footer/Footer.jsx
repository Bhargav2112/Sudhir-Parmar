import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081829] relative">
      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-[#C9A24D]/30 hover:shadow-[0_0_30px_rgba(201,162,77,0.5)] transition-all duration-300"
          >
            <ChevronUp className="w-6 h-6 text-[#0A1D37]" />
          </motion.button>

          {/* Name */}
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sudhir Sanjaybhai <span className="text-[#C9A24D]">Parmar</span>
          </motion.h3>

          {/* Tagline */}
          <motion.p 
            className="text-[#C9A24D] text-sm md:text-base tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discipline • Knowledge • Legacy
          </motion.p>

          {/* Divider */}
          <div className="w-24 h-px bg-[#C9A24D]/30 mb-8" />

          {/* Copyright */}
          <motion.p 
            className="text-[#BFC7CE]/60 text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Sudhir Parmar. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}