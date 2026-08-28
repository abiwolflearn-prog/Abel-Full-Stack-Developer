import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PersonalIntro } from './components/PersonalIntro';
import { BentoOverview } from './components/BentoOverview';
import { ProductPipeline } from './components/ProductPipeline';
import { TechStackSystem } from './components/TechStackSystem';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DeveloperMetrics } from './components/DeveloperMetrics';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TechnicalContactForm } from './components/TechnicalContactForm';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { ScrollJourneyConnector } from './components/ScrollJourneyConnector';
import { SectionConnectorSpine } from './components/SectionConnectorSpine';
import { PORTFOLIO_DATA, ProjectCaseStudy } from './data/portfolioData';

function PortfolioApp() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenCaseStudy = (projectId: string) => {
    const found = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (found) {
      setSelectedCaseStudy(found);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F5] dark:bg-[#0C120E] text-[#1A3C2B] dark:text-[#E5EFE9] selection:bg-[#1A3C2B] selection:text-[#9EFFBF] dark:selection:bg-[#9EFFBF] dark:selection:text-[#0C120E] flex flex-col transition-colors duration-300">
      {/* Scroll-Reactive SVG Journey Line Connector & HUD Telemetry */}
      <ScrollJourneyConnector />

      {/* Fixed Technical Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* In-Page Ambient Vertical SVG Journey Conduit */}
      <SectionConnectorSpine />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 01. Hero Section with Topology Graph & Space Grotesk Headline */}
        <HeroSection onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 02. Personal Introduction: "More than just code" & Evolution Progression */}
        <PersonalIntro />

        {/* 03. 2x2 Bento Benchmark Grid */}
        <BentoOverview onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 04. Product Thinking & Architectural Pipeline (Idea to Real Users) */}
        <ProductPipeline />

        {/* 05. Tech Stack System: Categorized & Connected Flow */}
        <TechStackSystem />

        {/* 06. Featured Projects: Large Bento Case Studies */}
        <FeaturedProjects onOpenCaseStudy={handleOpenCaseStudy} />

        {/* 07. Verified Developer Metrics & Statistics */}
        <DeveloperMetrics />

        {/* 08. Currently Building: Active Sprint Progress Card */}
        <CurrentlyBuilding />

        {/* 09. Peer & Stakeholder Testimonials */}
        <TestimonialsSection />

        {/* 10. Technical Form CTA with 4 Corner Markers */}
        <TechnicalContactForm />
      </main>

      {/* Minimalist Technical Footer */}
      <Footer />

      {/* Dynamic Deep Case Study Modal / Drawer */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Interactive CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

