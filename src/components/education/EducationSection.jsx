import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle, Clock } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: "M.Sc. Chemistry",
      institution: "Ms.S.V. Patel Gardi Bed College, Nyara, Rajkot",
      status: "Running",
      icon: Clock,
      description: "Currently pursuing Master's degree with focus on advanced chemistry concepts and research.",
      isCurrent: true
    },
    {
      degree: "B.Sc. Chemistry",
      institution: "H. & H.B. Kotak Institute of Science, Rajkot",
      status: "Completed",
      icon: CheckCircle,
      description: "Successfully completed Bachelor's degree with strong foundation in chemical sciences.",
      isCurrent: false
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-[#0A1D37] to-[#081829] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#C9A24D]/5 rounded-full blur-3xl transform -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Education
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Academic <span className="text-[#C9A24D]">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9A24D] via-[#C9A24D]/50 to-transparent transform md:-translate-x-1/2" />

          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#C9A24D] rounded-full transform -translate-x-1/2 mt-8 z-10">
                <div className="absolute inset-0 bg-[#C9A24D] rounded-full animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                  className={`bg-white/5 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-300 ${
                    item.isCurrent ? 'border-[#C9A24D]/50' : 'border-[#C9A24D]/20'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      item.isCurrent 
                        ? 'bg-gradient-to-r from-[#C9A24D] to-[#E6C878]' 
                        : 'bg-[#0F3D2E]'
                    }`}>
                      <GraduationCap className={`w-7 h-7 ${item.isCurrent ? 'text-[#0A1D37]' : 'text-[#C9A24D]'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.degree}</h3>
                      <div className="flex items-center gap-2">
                        <item.icon className={`w-4 h-4 ${item.isCurrent ? 'text-[#C9A24D]' : 'text-green-500'}`} />
                        <span className={`text-sm font-medium ${item.isCurrent ? 'text-[#C9A24D]' : 'text-green-500'}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#BFC7CE] mb-4">
                    <BookOpen className="w-4 h-4 text-[#C9A24D]" />
                    <span className="text-sm">{item.institution}</span>
                  </div>
                  
                  <p className="text-[#BFC7CE]/80">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}