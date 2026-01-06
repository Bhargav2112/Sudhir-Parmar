import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import EducationSection from '@/components/education/EducationSection';
import SkillsSection from '@/components/skills/SkillsSection';
import FocusSection from '@/components/focus/FocusSection';
import GallerySection from '@/components/gallery/GallerySection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1D37]">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <FocusSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}