import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Brain, BookOpen, Users, Target, Lightbulb } from 'lucide-react';

export default function SkillsSection() {
  const academicSkills = [
    { name: "Chemistry", level: 90, icon: FlaskConical },
    { name: "Scientific Research", level: 85, icon: BookOpen },
    { name: "Analytical Thinking", level: 88, icon: Brain },
  ];

  const personalStrengths = [
    { name: "Discipline", level: 95, icon: Target },
    { name: "Communication", level: 85, icon: Users },
    { name: "Problem Solving", level: 88, icon: Lightbulb },
  ];

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <skill.icon className="w-5 h-5 text-[#C9A24D]" />
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-[#C9A24D] font-semibold">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-[#C9A24D] via-[#E6C878] to-[#C9A24D] rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-[#081829] to-[#0A1D37] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F3D2E]/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Skills & <span className="text-[#C9A24D]">Strengths</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Academic Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-lg flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-[#0A1D37]" />
                </div>
                Academic Skills
              </h3>
              {academicSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Personal Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-[#0A1D37]" />
                </div>
                Personal Strengths
              </h3>
              {personalStrengths.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}