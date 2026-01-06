import React from 'react';
import { motion } from 'framer-motion';
import { Target, BookOpen, Award, Briefcase, TrendingUp, Shield } from 'lucide-react';

export default function FocusSection() {
  const focusAreas = [
    {
      icon: Target,
      title: "Government Exams",
      description: "Dedicated preparation for competitive examinations to serve the nation"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Pursuing M.Sc. Chemistry with focus on research and advanced concepts"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Committed to lifelong learning and professional development"
    },
    {
      icon: Shield,
      title: "Public Service",
      description: "Vision to contribute to society through government service"
    }
  ];

  return (
    <section id="focus" className="py-24 bg-gradient-to-b from-[#0A1D37] via-[#0F3D2E]/30 to-[#081829] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23C9A24D%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Vision
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Current <span className="text-[#C9A24D]">Focus</span>
          </h2>
        </motion.div>

        {/* Main Focus Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative bg-gradient-to-r from-[#C9A24D]/20 via-[#C9A24D]/10 to-[#C9A24D]/20 backdrop-blur-xl border border-[#C9A24D]/30 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#C9A24D] via-transparent to-[#C9A24D] opacity-20 transform -translate-x-1/2" />
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-2xl flex items-center justify-center shadow-lg shadow-[#C9A24D]/30"
            >
              <Award className="w-10 h-10 text-[#0A1D37]" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Preparing for Government Competitive Examinations
            </h3>
            <p className="text-[#BFC7CE] text-lg max-w-2xl mx-auto">
              With discipline, dedication, and unwavering focus, I am preparing to serve the nation through government service while building expertise in the field of Chemistry.
            </p>
          </div>
        </motion.div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-6 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#0A1D37] border border-[#C9A24D]/30 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[#C9A24D] group-hover:to-[#E6C878] transition-all duration-300">
                <area.icon className="w-7 h-7 text-[#C9A24D] group-hover:text-[#0A1D37] transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{area.title}</h4>
              <p className="text-[#BFC7CE]/80 text-sm">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}