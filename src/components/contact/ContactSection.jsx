import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 99042 48830" },
    { icon: Mail, label: "Email", value: "parmarsudhir2606@gmail.com" },
    { icon: MapPin, label: "Address", value: "295, Royal Residency, Kenal Road, Kamrej, Surat" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'parmarsudhir2606@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      toast.success('Message sent successfully!');
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="pt-12 pb-24 bg-gradient-to-b from-[#0A1D37] to-[#081829] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F3D2E]/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#C9A24D]/10 border border-[#C9A24D]/30 rounded-full text-[#C9A24D] text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact <span className="text-[#C9A24D]">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
              
              <div className="space-y-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#C9A24D] to-[#E6C878] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#0A1D37]" />
                    </div>
                    <div>
                      <h4 className="text-[#BFC7CE] text-sm uppercase tracking-wider mb-1">{item.label}</h4>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Quote */}
              <div className="border-t border-[#C9A24D]/20 pt-8">
                <p className="text-[#BFC7CE] italic text-center">
                  "Discipline is the bridge between goals and accomplishment."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-[#C9A24D]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[#BFC7CE] text-sm mb-2 block">Your Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-[#C9A24D]/30 text-white placeholder:text-[#BFC7CE]/50 focus:border-[#C9A24D] h-12"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-[#BFC7CE] text-sm mb-2 block">Your Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-[#C9A24D]/30 text-white placeholder:text-[#BFC7CE]/50 focus:border-[#C9A24D] h-12"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#BFC7CE] text-sm mb-2 block">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-[#C9A24D]/30 text-white placeholder:text-[#BFC7CE]/50 focus:border-[#C9A24D] h-12"
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label className="text-[#BFC7CE] text-sm mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-[#C9A24D]/30 text-white placeholder:text-[#BFC7CE]/50 focus:border-[#C9A24D] resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(201, 162, 77, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#C9A24D] via-[#E6C878] to-[#C9A24D] text-[#0A1D37] font-semibold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,162,77,0.6)] disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-[#0A1D37] border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}