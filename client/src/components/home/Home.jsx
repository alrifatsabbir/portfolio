import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Certification from './Certification';

function Home() {
  return (
    <div>
      <HeroSection />
      <Certification />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}

export default Home;