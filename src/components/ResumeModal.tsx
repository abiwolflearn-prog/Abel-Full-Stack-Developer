import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, CheckCircle2, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#F7F7F5] dark:bg-[#0C120E] border border-[#3A3A38]/40 dark:border-white/20 my-auto max-h-[90vh] flex flex-col shadow-2xl transition-colors duration-300">
        
        {/* Corner Markers */}
        <div className="corner-marker cm-tl" />
        <div className="corner-marker cm-tr" />
        <div className="corner-marker cm-bl" />
        <div className="corner-marker cm-br" />

        {/* Top bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#3A3A38]/20 dark:border-white/10 bg-white dark:bg-[#121C16]">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#1A3C2B] dark:text-[#9EFFBF]" />
            <span className="font-mono text-xs uppercase font-bold text-[#1A3C2B] dark:text-[#E5EFE9]">
              CURRICULUM VITAE // ABEL_BIMREW_RESUME.SPEC
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="border border-[#3A3A38]/30 dark:border-white/20 px-3 py-1 font-mono text-[10px] uppercase text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-black/5 dark:hover:bg-white/5 inline-flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3 h-3" />
              <span>PRINT</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 border border-[#1A3C2B] dark:border-[#9EFFBF] bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] hover:bg-[#12281D] dark:hover:bg-[#85e4a8] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto font-mono text-xs text-[#1A3C2B] dark:text-[#E5EFE9] space-y-8 bg-white dark:bg-[#121C16]">
          
          {/* Header section */}
          <div className="border-b border-[#3A3A38]/20 dark:border-white/10 pb-6">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl uppercase text-[#1A3C2B] dark:text-white">
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <p className="text-xs uppercase text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mt-1 mb-3">
              {PORTFOLIO_DATA.profile.role}
            </p>
            <div className="flex flex-wrap gap-4 text-[10px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80 pt-2 border-t border-[#3A3A38]/10 dark:border-white/10">
              <span>EMAIL: {PORTFOLIO_DATA.profile.email}</span>
              <span>GITHUB: {PORTFOLIO_DATA.profile.github}</span>
              <span>LOCATION: {PORTFOLIO_DATA.profile.location}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <div className="font-bold text-[11px] uppercase tracking-wider text-[#FF8C69] mb-2">
              01. EXECUTIVE ENGINEERING PROFILE
            </div>
            <p className="text-[12px] leading-relaxed text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85">
              {PORTFOLIO_DATA.profile.bio} Specializing in high-performance web systems (MERN / Next.js), cross-platform mobile apps (React Native), relational database architecture (PostgreSQL), and cloud infrastructure (Docker, Render, Vercel).
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <div className="font-bold text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#9EFFBF] mb-2">
              02. TECHNICAL SKILLS SPECIFICATION
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10">
                <span className="font-bold block mb-0.5 text-[#1A3C2B] dark:text-white">FRONTEND &amp; CLIENT:</span>
                <span className="text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">React 19, Next.js App Router, TypeScript, Tailwind CSS, Framer Motion</span>
              </div>
              <div className="p-2.5 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10">
                <span className="font-bold block mb-0.5 text-[#1A3C2B] dark:text-white">BACKEND &amp; SERVICES:</span>
                <span className="text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">Node.js, Express.js, REST APIs, Webhooks, JWT Auth, Microservices</span>
              </div>
              <div className="p-2.5 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10">
                <span className="font-bold block mb-0.5 text-[#1A3C2B] dark:text-white">DATABASES &amp; STORAGE:</span>
                <span className="text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">PostgreSQL (ACID), Prisma ORM, MongoDB, Redis Caching, Supabase</span>
              </div>
              <div className="p-2.5 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10">
                <span className="font-bold block mb-0.5 text-[#1A3C2B] dark:text-white">MOBILE &amp; DEVOPS:</span>
                <span className="text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">React Native, Expo, Docker, GitHub Actions, Vercel, Render CI/CD</span>
              </div>
            </div>
          </div>

          {/* Production Experience */}
          <div>
            <div className="font-bold text-[11px] uppercase tracking-wider text-[#F4D35E] mb-3">
              03. PRODUCTION EXPERIENCE &amp; LEADERSHIP
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.experience.map((exp) => (
                <div key={exp.company} className="border-l-2 border-[#1A3C2B] dark:border-[#9EFFBF] pl-4">
                  <div className="flex justify-between items-center text-[11px] font-bold">
                    <span className="text-[#1A3C2B] dark:text-white">{exp.role} — {exp.company}</span>
                    <span className="text-[10px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">{exp.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-[11px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>• {r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Key Products */}
          <div>
            <div className="font-bold text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#9EFFBF] mb-2">
              04. PROVEN SOFTWARE PRODUCTS
            </div>
            <div className="space-y-2 text-[11px]">
              {PORTFOLIO_DATA.projects.map((p) => (
                <div key={p.id} className="p-3 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10">
                  <span className="font-bold uppercase text-[#1A3C2B] dark:text-white">{p.title}</span> — {p.tagline}
                  <div className="text-[10px] text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mt-0.5">
                    Stack: {p.technologies.join(', ')} | Status: {p.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#3A3A38]/20 dark:border-white/10 bg-white dark:bg-[#121C16] flex justify-between items-center font-mono text-[10px]">
          <span className="text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">VERIFIED SPECIFICATION // ABEL BIMREW</span>
          <button
            onClick={onClose}
            className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-4 py-1.5 uppercase font-bold cursor-pointer"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </div>
    </div>
  );
};

