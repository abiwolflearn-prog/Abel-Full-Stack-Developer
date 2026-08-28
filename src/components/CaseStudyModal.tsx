import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ArrowDown, Shield, Database, Server, Globe, Cpu, CheckCircle2, Code2, Layers } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/70 backdrop-blur-xs overflow-y-auto">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#F7F7F5] dark:bg-[#0C120E] border border-[#3A3A38]/40 dark:border-white/20 my-auto max-h-[90vh] flex flex-col shadow-2xl transition-colors duration-300">
        
        {/* Corner Markers */}
        <div className="corner-marker cm-tl" />
        <div className="corner-marker cm-tr" />
        <div className="corner-marker cm-bl" />
        <div className="corner-marker cm-br" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-[#3A3A38]/20 dark:border-white/10 bg-white dark:bg-[#121C16]">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 flex-shrink-0"
              style={{ backgroundColor: project.accentHex }}
            />
            <div className="font-mono text-xs uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold">
              CASE STUDY // {project.codename} // {project.category.toUpperCase()}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 border border-[#3A3A38]/30 dark:border-white/20 hover:bg-[#1A3C2B] dark:hover:bg-[#9EFFBF] hover:text-white dark:hover:text-[#0C120E] transition-colors text-[#1A3C2B] dark:text-[#E5EFE9]"
                title="View GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 border border-[#3A3A38]/30 dark:border-white/20 hover:bg-[#1A3C2B] dark:hover:bg-[#9EFFBF] hover:text-white dark:hover:text-[#0C120E] transition-colors text-[#1A3C2B] dark:text-[#E5EFE9]"
                title="View Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 border border-[#1A3C2B] dark:border-[#9EFFBF] bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] hover:bg-[#12281D] dark:hover:bg-[#85e4a8] transition-colors ml-2 cursor-pointer"
              aria-label="Close Case Study Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 bg-white dark:bg-[#121C16]">
          
          {/* Header Title & Tagline */}
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 mb-2">
              <span>STATUS: {project.status.toUpperCase()}</span>
              <span>•</span>
              <span>AUDIT SCORE: 100%</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-3">
              {project.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm uppercase text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80 max-w-2xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Image Banner with Luminosity mix-blend */}
          <div className="relative border border-[#3A3A38]/30 dark:border-white/20 overflow-hidden bg-black max-h-[300px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover img-luminosity opacity-90"
            />
            <div className="absolute bottom-2 left-2 bg-[#1A3C2B] dark:bg-[#0C120E] text-[#9EFFBF] font-mono text-[9px] px-2 py-1 uppercase border border-[#9EFFBF]/30">
              FIG. DIAGRAM // {project.id.toUpperCase()}
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-[#3A3A38]/20 dark:bg-white/10 border border-[#3A3A38]/20 dark:border-white/10">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-4 bg-white dark:bg-[#1A2820]">
                <span className="font-mono text-[9px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 block mb-1">
                  {m.label}
                </span>
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#1A3C2B] dark:text-white">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* The Problem & The Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10 relative">
              <div className="corner-marker cm-tl" />
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#FF8C69] font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#FF8C69] inline-block" />
                THE PROBLEM
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10 relative">
              <div className="corner-marker cm-tr" />
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#9EFFBF] font-bold mb-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-[#9EFFBF] inline-block" />
                THE ARCHITECTURAL SOLUTION
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* System Architecture Flow: Frontend ↓ API ↓ Backend ↓ Database */}
          <div className="p-6 sm:p-8 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
            <div className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 font-bold mb-4 flex items-center justify-between border-b border-[#3A3A38]/15 dark:border-white/10 pb-2">
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
              <span>4-TIER MODEL</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-4 bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10">
                <span className="font-mono text-[9px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 block mb-1">01. FRONTEND TIER</span>
                <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white block mb-2">CLIENT UI</span>
                <p className="font-mono text-[11px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">{project.architecture.frontend}</p>
              </div>

              <div className="p-4 bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10">
                <span className="font-mono text-[9px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 block mb-1">02. API CONTRACT</span>
                <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white block mb-2">GATEWAY / REST</span>
                <p className="font-mono text-[11px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">{project.architecture.api}</p>
              </div>

              <div className="p-4 bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10">
                <span className="font-mono text-[9px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 block mb-1">03. BACKEND CORE</span>
                <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white block mb-2">MICROSERVICES</span>
                <p className="font-mono text-[11px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">{project.architecture.backend}</p>
              </div>

              <div className="p-4 bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10">
                <span className="font-mono text-[9px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 block mb-1">04. PERSISTENCE</span>
                <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white block mb-2">DATABASE &amp; CACHE</span>
                <p className="font-mono text-[11px] text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80">{project.architecture.database}</p>
              </div>
            </div>
          </div>

          {/* Key Engineering Challenges & Resolutions */}
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#FF8C69]" />
              <span>KEY ENGINEERING CHALLENGES &amp; RESOLUTIONS</span>
            </div>

            <div className="space-y-4">
              {project.challenges.map((ch, idx) => (
                <div key={ch.title} className="p-6 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                  <div className="font-heading font-bold text-base text-[#1A3C2B] dark:text-white uppercase mb-2">
                    CHALLENGE 0{idx + 1}: {ch.title}
                  </div>
                  <p className="font-mono text-xs text-[#1A3C2B]/75 dark:text-[#E5EFE9]/75 mb-3 leading-relaxed">
                    <span className="text-[#FF8C69] font-bold">SYMPTOM: </span>
                    {ch.description}
                  </p>
                  <p className="font-mono text-xs text-[#1A3C2B] dark:text-[#E5EFE9] leading-relaxed bg-[#F7F7F5] dark:bg-[#121C16] p-3 border border-[#3A3A38]/15 dark:border-white/10">
                    <span className="text-[#1A3C2B] dark:text-[#9EFFBF] font-bold">RESOLUTION: </span>
                    {ch.resolution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-3 flex items-center justify-between">
                <span>CORE LOGIC SNIPPET // {project.title.toUpperCase()}</span>
                <span className="text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 text-[10px]">TYPESCRIPT / NODE</span>
              </div>
              <div className="bg-[#1A1A1A] p-5 font-mono text-xs text-[#9EFFBF] border border-black overflow-x-auto">
                <pre className="text-gray-300 leading-relaxed font-mono">
                  {project.codeSnippet}
                </pre>
              </div>
            </div>
          )}

          {/* What I Learned */}
          <div className="p-6 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
            <div className="font-mono text-xs uppercase tracking-wider text-[#1A3C2B] dark:text-[#9EFFBF] font-bold mb-3">
              WHAT THIS PROJECT TAUGHT ME:
            </div>
            <ul className="space-y-2 font-mono text-xs text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#9EFFBF] font-bold">✓</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-[#3A3A38]/20 dark:border-white/10 bg-white dark:bg-[#121C16] flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase">
            © ABEL BIMREW // CASE STUDY ARCHIVE
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="border border-[#1A3C2B] dark:border-white/20 px-5 py-2 font-mono text-xs uppercase text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
            >
              CLOSE
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold px-5 py-2 font-mono text-xs uppercase inline-flex items-center gap-2 hover:bg-[#12281D] dark:hover:bg-[#85e4a8]"
              >
                <span>OPEN LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9EFFBF] dark:text-[#0C120E]" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

