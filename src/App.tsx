import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { INITIAL_PROJECTS } from './data/mockProjects';
import { Project, StillFrame } from './types/film';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InDevelopmentSection } from './components/InDevelopmentSection';
import { BiographySection } from './components/BiographySection';
import { StillFramesSection } from './components/StillFramesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { FilmGrainBackground } from './components/FilmGrainBackground';

export default function App() {
  const [projects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxStill, setLightboxStill] = useState<StillFrame | null>(null);
  const [lightboxProjectTitle, setLightboxProjectTitle] = useState<string>('');

  const handleOpenLightbox = (still: StillFrame, projectTitle: string) => {
    setLightboxStill(still);
    setLightboxProjectTitle(projectTitle);
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('bio');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#EDEDED] selection:bg-white/20 selection:text-white">
      {/* 35mm Celluloid Film Grain & Matte Cinema Canvas */}
      <FilmGrainBackground />

      {/* Global subtle film grain veil */}
      <div className="authentic-film-grain-overlay" aria-hidden="true" />

      {/* Top Floating Minimalist Bar */}
      <Navbar onOpenContact={handleScrollToContact} />

      {/* Main Narrative Flow */}
      <main className="relative z-10">
        {/* Full-bleed Cover Still & Monograph Intro */}
        <HeroSection onExploreProjects={handleExploreProjects} />

        {/* Biography (About Lý Minh Bá) - Placed before Filmography */}
        <BiographySection />

        {/* Filmography (Selected Works) */}
        <ProjectsSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* In Development (Doping + Statement) */}
        <InDevelopmentSection />

        {/* Film Stills Archive */}
        <StillFramesSection
          projects={projects}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {lightboxStill && (
          <LightboxModal
            key="lightbox-modal"
            still={lightboxStill}
            projectTitle={lightboxProjectTitle}
            onClose={() => setLightboxStill(null)}
          />
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectDetailModal
            key="project-modal"
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onOpenLightbox={handleOpenLightbox}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
