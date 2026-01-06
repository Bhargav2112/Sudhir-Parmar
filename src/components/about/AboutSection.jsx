import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Target } from 'lucide-react';

export default function AboutSection() {
  const details = [
    { icon: User, label: "Age", value: "21 Years" },
    { icon: MapPin, label: "Native", value: "Dadva Randal, Bhavnagar" },
    { icon: GraduationCap, label: "Education", value: "M.Sc. Chemistry (Running)" },
    { icon: Target, label: "Goal", value: "Government Service" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#081829] to-[#0A1D37] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C9A24D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0F3D2E]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Know My <span className="text-[#C9A24D]">Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-8 md:p-10">
              <p className="text-[#BFC7CE] text-lg leading-relaxed mb-6">
                A disciplined and focused individual from <span className="text-[#C9A24D]">Dadva Randal, Bhavnagar</span>, 
                I am currently pursuing my Master's degree in Chemistry from Ms.S.V. Patel Gardi Bed College, Nyara, Rajkot.
              </p>
              <p className="text-[#BFC7CE] text-lg leading-relaxed mb-6">
                With a strong foundation in science and an unwavering commitment to excellence, I am dedicated to 
                preparing for <span className="text-[#C9A24D]">Government Competitive Examinations</span> while 
                aspiring to build a career in the Chemical Industry.
              </p>
              <p className="text-[#BFC7CE] text-lg leading-relaxed">
                My interests extend beyond academics – from exploring <span className="text-[#C9A24D]">Indian Mythology</span> 
                {" "}to appreciating Indian Classical Dance, I believe in the holistic development of mind and spirit.
              </p>
            </div>
          </motion.div>

          {/* Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-xl p-6 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0A1D37]" />
                </div>
                <h3 className="text-[#BFC7CE] text-sm uppercase tracking-wider mb-1">{item.label}</h3>
                <p className="text-white font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}