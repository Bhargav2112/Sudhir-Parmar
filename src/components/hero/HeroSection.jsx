import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BIODATA_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6958bb5c948dcfee61d603da/321430816_Biodata1.pdf";
const HERO_IMAGE = "./home.jpeg";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1D37] via-[#081829] to-[#0F3D2E]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A24D] rounded-full filter blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F3D2E] rounded-full filter blur-[150px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-[#C9A24D]/20 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase">
                Welcome
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sudhir Sanjaybhai
              <span className="block text-[#C9A24D] mt-2">Parmar</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#BFC7CE] mb-8 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              M.Sc. Chemistry Student | Government Exam Aspirant
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href={BIODATA_URL}
                download="Sudhir_Parmar_Biodata.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201, 162, 77, 0.5)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#C9A24D] via-[#E6C878] to-[#C9A24D] text-[#0A1D37] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,77,0.6)] text-sm sm:text-base w-full sm:w-auto"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Bio Data (PDF)
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#C9A24D] text-[#C9A24D] font-semibold rounded-lg transition-all duration-300 hover:bg-[#C9A24D]/10 text-sm sm:text-base w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Border Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#C9A24D]/50 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#C9A24D]">
                  <img
                    src={HERO_IMAGE}
                    alt="Sudhir Sanjaybhai Parmar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#C9A24D] rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#C9A24D]/60 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-[#C9A24D]"
          >
            <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}