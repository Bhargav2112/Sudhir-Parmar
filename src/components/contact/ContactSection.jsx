import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 99042 48830" },
    { icon: Mail, label: "Email", value: "parmarsudhir2606@gmail.com" },
    {
      icon: MapPin,
      label: "Address",
      value: "295, Royal Residency, Kenal Road, Kamrej, Surat",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#0A1D37] to-[#081829] py-20"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F3D2E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2
            className="text-white font-bold text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact <span className="text-[#C9A24D]">Me</span>
          </h2>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto card-glass p-10 rounded-2xl"
        >
          <h3 className="font-bold text-white mb-10 text-2xl text-center">
            Let's Connect
          </h3>

          <div className="space-y-8">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#0A1D37]" />
                </div>

                <div>
                  <h4 className="text-[#BFC7CE] text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </h4>
                  <p className="text-white font-medium break-words">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#C9A24D]/20 pt-8 mt-10">
            <p className="text-[#BFC7CE] italic text-center text-sm">
              "Discipline is the bridge between goals and accomplishment."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
