import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onOpenCaseStudy: (id: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'mobile'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'fullstack') return p.category === 'Full-Stack';
    if (filter === 'mobile') return p.category === 'Mobile';
    return true;
  });

  return (
    <section id="projects" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#3A3A38]/20 dark:border-white/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-2">
              <span className="w-1.5 h-3 bg-[#FF8C69]" />
              <span>06. FEATURED PROJECTS // STACK DECK</span>
            </div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight">
                Things I've built.
              </h2>
              <span className="font-mono text-xs text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FF8C69]" />
                [STICKY STACKING DECK]
              </span>
            </div>
          </div>

          {/* Filter Pills & Scroll Hint */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex items-center border border-[#1A3C2B] dark:border-white/20 bg-white dark:bg-[#121C16] p-1 font-mono text-[10px] uppercase shadow-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold'
                    : 'text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                ALL ({PORTFOLIO_DATA.projects.length})
              </button>
              <button
                onClick={() => setFilter('fullstack')}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  filter === 'fullstack'
                    ? 'bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold'
                    : 'text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                FULL-STACK WEB
              </button>
              <button
                onClick={() => setFilter('mobile')}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  filter === 'mobile'
                    ? 'bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold'
                    : 'text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                MOBILE APPS
              </button>
            </div>
          </div>
        </motion.div>

        {/* Informative Deck Tracker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between font-mono text-[10px] text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 uppercase tracking-widest px-2 py-2 mb-8 bg-[#1A3C2B]/5 dark:bg-[#121C16] border border-[#1A3C2B]/10 dark:border-white/10"
        >
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#1A3C2B] dark:bg-[#9EFFBF] animate-ping" />
            <span>SCROLL TO SHUFFLE THROUGH PROJECT CARDS</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>SHOWING {filteredProjects.length} ACTIVE ARCHITECTURES</span>
            <span>DECK DEPTH: {filteredProjects.length} LAYERS</span>
          </div>
        </motion.div>

        {/* Stacking Cards Container */}
        <div className="relative pb-28 sm:pb-36 space-y-10 sm:space-y-12">
          {filteredProjects.map((project, index) => {
            // Offset calculation for sticky stacking deck effect
            const topOffsetPx = 80 + index * 24;
            const zIndex = 10 + index;
            const cardNumberStr = String(index + 1).padStart(2, '0');
            const totalCardsStr = String(filteredProjects.length).padStart(2, '0');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  top: `calc(${topOffsetPx}px + 1vh)`,
                  zIndex: zIndex,
                }}
                className="sticky bg-white dark:bg-[#121C16] border-2 border-[#1A3C2B] dark:border-white/20 p-6 sm:p-9 transition-all duration-300 group shadow-[0_-6px_20px_rgba(0,0,0,0.06),0_16px_36px_rgba(26,60,43,0.12)] hover:shadow-[0_-8px_25px_rgba(0,0,0,0.08),0_20px_45px_rgba(26,60,43,0.18)] dark:shadow-[0_-6px_20px_rgba(0,0,0,0.3)]"
              >
                {/* Technical Corner Markers */}
                <div className="corner-marker cm-tl" />
                <div className="corner-marker cm-tr" />
                <div className="corner-marker cm-bl" />
                <div className="corner-marker cm-br" />

                {/* Top Deck Index Bar on Card */}
                <div className="flex items-center justify-between border-b border-[#3A3A38]/20 dark:border-white/10 pb-3 mb-6 font-mono text-[10px] text-[#1A3C2B] dark:text-[#E5EFE9] uppercase">
                  <div className="flex items-center gap-3">
                    <span className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-2 py-0.5 font-bold tracking-wider">
                      CARD [{cardNumberStr} / {totalCardsStr}]
                    </span>
                    <span className="hidden sm:inline-block text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">
                      ID: {project.codename}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: project.accentHex }} />
                    <span className="font-bold">{project.category}</span>
                    <span className="text-[#1A3C2B]/40 dark:text-[#E5EFE9]/40">•</span>
                    <span className="text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70">{project.status.toUpperCase()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Side: Mockup Image & Quick Key Metrics */}
                  <div className="lg:col-span-6 flex flex-col space-y-4">
                    <div className="relative border border-[#3A3A38]/30 dark:border-white/20 bg-black overflow-hidden aspect-video shadow-inner">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover img-luminosity group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-[#1A3C2B] dark:bg-[#0C120E] text-white dark:text-[#9EFFBF] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider border dark:border-[#9EFFBF]/30">
                        {project.codename} // {project.category.toUpperCase()}
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 dark:bg-[#0C120E]/95 backdrop-blur-xs text-[#1A3C2B] dark:text-[#9EFFBF] px-2.5 py-1 font-mono text-[9px] uppercase border border-[#3A3A38]/20 dark:border-white/20 font-bold">
                        VERIFIED METRICS
                      </div>
                    </div>

                    {/* Metrics Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-[#3A3A38]/20 dark:bg-white/10 border border-[#3A3A38]/20 dark:border-white/10">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="p-3 bg-[#F7F7F5] dark:bg-[#1A2820]">
                          <span className="font-mono text-[8px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 block mb-0.5">
                            {m.label}
                          </span>
                          <span className="font-heading font-bold text-base text-[#1A3C2B] dark:text-white">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Information, Problem Solved, Tech, CTAs */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Header Label with Accent Color Bar */}
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider mb-2">
                        <span className="w-1.5 h-3" style={{ backgroundColor: project.accentHex }} />
                        <span className="font-bold text-[#1A3C2B] dark:text-white">{project.codename}</span>
                        <span className="text-[#1A3C2B]/40 dark:text-[#E5EFE9]/40">•</span>
                        <span className="text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70">{project.tagline}</span>
                      </div>

                      <h3 className="font-heading font-bold text-2xl sm:text-4xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-2">
                        {project.title}
                      </h3>

                      <p className="font-mono text-xs text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 uppercase tracking-wide mb-4">
                        {project.overview}
                      </p>

                      {/* Problem Solved Highlight Box */}
                      <div className="p-4 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/15 dark:border-white/10 mb-5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#FF8C69] font-bold block mb-1">
                          PROBLEM SOLVED & ARCHITECTURAL IMPACT:
                        </span>
                        <p className="font-mono text-xs text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      {/* Key Features List */}
                      <div className="mb-5 space-y-1.5 font-mono text-xs text-[#1A3C2B] dark:text-[#E5EFE9]">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-[#1A3C2B] dark:text-[#9EFFBF] font-bold mt-0.5">▪</span>
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((t) => (
                          <span
                            key={t}
                            className="border border-[#1A3C2B]/25 dark:border-white/20 bg-white dark:bg-[#1A2820] px-2.5 py-1 font-mono text-[10px] text-[#1A3C2B] dark:text-[#E5EFE9] uppercase font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="pt-5 border-t border-[#3A3A38]/15 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => onOpenCaseStudy(project.id)}
                        className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-5 py-2.5 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#12281D] dark:hover:bg-[#85e4a8] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#9EFFBF] dark:text-[#0C120E]" />
                      </button>

                      <div className="flex items-center gap-3 font-mono text-xs">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#1A3C2B] dark:text-[#E5EFE9] hover:text-[#FF8C69] dark:hover:text-[#9EFFBF] inline-flex items-center gap-1 uppercase font-bold transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>SOURCE</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#1A3C2B] dark:text-[#E5EFE9] hover:text-[#2A5A41] dark:hover:text-[#9EFFBF] inline-flex items-center gap-1 uppercase font-bold transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>LIVE DEMO</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
