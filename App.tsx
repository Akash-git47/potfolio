
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Projects from './components/Projects';
import About from './components/About';
import Metrics from './components/Metrics';
import Library from './components/Library';
import Process from './components/Process';
import Stack from './components/Stack';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CaseStudy from './components/CaseStudy';
import SectionDivider from './components/SectionDivider';
import TableOfContents from './components/TableOfContents';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';
import { DetailedProject } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  // Global Scroll Reveal System
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once revealed, we don't need to observe it anymore for performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-white">
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <TableOfContents />
      <Hero />
      <SocialProof />
      <Metrics />
      
      <Projects onViewProject={(project) => setSelectedProject(project)} />
      
      <SectionDivider variant="diamond" className="my-10" />
      
      <About />
      <Library />
      
      <SectionDivider variant="circle" className="my-10" />
      
      <Process />
      <Stack />
      <Skills />
      <Experience />
      
      <SectionDivider variant="cross" className="my-10" />
      
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <ChatWidget />

      {/* Detail Overlay */}
      {selectedProject && (
        <CaseStudy 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </main>
  );
};

export default App;
