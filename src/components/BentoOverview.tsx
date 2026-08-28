import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Star, Terminal, Layers, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface BentoOverviewProps {
  onOpenCaseStudy: (id: string) => void;
}

export const BentoOverview: React.FC<BentoOverviewProps> = ({ onOpenCaseStudy }) => {
  return (
    <section className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] transition-colors duration-300">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#3A3A38]/20 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1A3C2B] dark:text-[#E5EFE9]">
          <span className="w-1.5 h-3 bg-[#9EFFBF]" />
          <span>SYSTEM BENCHMARK // 2X2 ARCHITECTURE MATRIX</span>
        </div>
        <div className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 tracking-wider">
          ESTABLISHED 2021 — PRESENT // ALL METRICS VERIFIED
        </div>
      </motion.div>

      {/* Bento Grid: 2x2 with 1px Grid Gap */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#3A3A38]/20 dark:bg-white/10 border-x border-[#3A3A38]/20 dark:border-white/10">
          
          {/* Cell 1: Featured Project: Fetena Pro */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="bento-cell bg-[#F7F7F5] dark:bg-[#121C16] p-6 sm:p-8 relative flex flex-col justify-between group transition-colors duration-300"
          >
            <div className="corner-marker cm-tl" />
            
            <div>
              {/* Monospaced Header Label with Coral Accent Bar */}
              <div className="mono-label font-mono text-[10px] uppercase tracking-wider mb-3 flex items-center text-[#1A3C2B] dark:text-[#E5EFE9]">
                <span className="w-1 h-3 mr-2 bg-[#FF8C69] inline-block" />
                <span>FEATURED_PROJECT: FETENA_PRO</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-2">
                Educational Exam Infrastructure
              </h3>
              
              <p className="text-xs sm:text-sm text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-6 leading-relaxed">
                PostgreSQL-backed platform engineered for timed exam delivery, student percentile analytics, and zero-tampering answer evaluation.
              </p>

              {/* Internal Mockup Box: Code Block with Flat Color Chips */}
              <div className="bg-[#1A1A1A] p-4 font-mono text-[11px] leading-5 text-[#9EFFBF] border border-black/30 overflow-x-auto relative mb-6">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] text-white/40 uppercase">
                  <span>EXAM_ENGINE.TS</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-[#FF8C69] inline-block" />
                    <span className="w-2 h-2 bg-[#9EFFBF] inline-block" />
                    <span className="w-2 h-2 bg-[#F4D35E] inline-block" />
                  </div>
                </div>
                <div className="text-gray-300">
                  <span className="text-[#FF8C69]">const</span> examSession = <span className="text-[#FF8C69]">new</span> <span className="text-[#F4D35E]">ExamEngine</span>(&#123;<br />
                  &nbsp;&nbsp;db: <span className="text-[#9EFFBF]">'POSTGRES_SQL'</span>,<br />
                  &nbsp;&nbsp;auth: <span className="text-[#9EFFBF]">'JWT_STRICT'</span>,<br />
                  &nbsp;&nbsp;antiCheat: <span className="text-[#FF8C69]">true</span><br />
                  &#125;);
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#3A3A38]/15 dark:border-white/10 font-mono text-xs">
              <span className="text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">5,000+ ATTEMPTS PROCESSED</span>
              <button
                onClick={() => onOpenCaseStudy('fetena-pro')}
                className="font-bold text-[#1A3C2B] dark:text-[#9EFFBF] inline-flex items-center gap-1 hover:text-[#FF8C69] transition-colors cursor-pointer"
              >
                <span>OPEN CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Cell 2: Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="bento-cell bg-[#F7F7F5] dark:bg-[#121C16] p-6 sm:p-8 relative flex flex-col justify-between transition-colors duration-300"
          >
            <div className="corner-marker cm-tr" />
            
            <div>
              {/* Monospaced Header Label with Mint Accent Bar */}
              <div className="mono-label font-mono text-[10px] uppercase tracking-wider mb-3 flex items-center text-[#1A3C2B] dark:text-[#E5EFE9]">
                <span className="w-1 h-3 mr-2 bg-[#9EFFBF] inline-block" />
                <span>ENGINEERING_PHILOSOPHY</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-2">
                4 Core Engineering Pillars
              </h3>
              
              <p className="text-xs sm:text-sm text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-6 leading-relaxed">
                Guiding principles that dictate how I plan schemas, write APIs, structure components, and deploy software.
              </p>

              {/* Internal 2x2 Subgrid of Principles */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                  <span className="font-heading font-bold text-xs uppercase text-[#1A3C2B] dark:text-[#9EFFBF] block mb-1">
                    01. PEOPLE FIRST
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 leading-tight block">
                    Useful only when it solves a real human problem.
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                  <span className="font-heading font-bold text-xs uppercase text-[#1A3C2B] dark:text-[#9EFFBF] block mb-1">
                    02. KEEP LEARNING
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 leading-tight block">
                    Continuous mastery of architecture &amp; tools.
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                  <span className="font-heading font-bold text-xs uppercase text-[#1A3C2B] dark:text-[#9EFFBF] block mb-1">
                    03. OWN THE STACK
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 leading-tight block">
                    UI, Backend, Database &amp; Cloud together.
                  </span>
                </div>
                <div className="p-3 bg-white dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                  <span className="font-heading font-bold text-xs uppercase text-[#1A3C2B] dark:text-[#9EFFBF] block mb-1">
                    04. ITERATE FAST
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 leading-tight block">
                    Build, test, measure &amp; improve continuously.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#3A3A38]/15 dark:border-white/10 font-mono text-xs">
              <span className="text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">METHODOLOGY: AGILE &amp; RIGOROUS</span>
              <a href="#pipeline" className="font-bold text-[#1A3C2B] dark:text-[#9EFFBF] hover:text-[#FF8C69] transition-colors">
                VIEW PIPELINE →
              </a>
            </div>
          </motion.div>

          {/* Cell 3: Testimonial Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="bento-cell bg-[#F7F7F5] dark:bg-[#121C16] p-6 sm:p-8 relative flex flex-col justify-between transition-colors duration-300"
          >
            <div className="corner-marker cm-bl" />
            
            <div>
              {/* Monospaced Header Label with Gold Accent Bar */}
              <div className="mono-label font-mono text-[10px] uppercase tracking-wider mb-3 flex items-center text-[#1A3C2B] dark:text-[#E5EFE9]">
                <span className="w-1 h-3 mr-2 bg-[#F4D35E] inline-block" />
                <span>TESTIMONIAL.METADATA</span>
              </div>

              {/* Star ratings */}
              <div className="flex items-center gap-1 mb-4 text-[#F4D35E] text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                <span className="font-mono text-[10px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 ml-2 uppercase">5.0 / 5.0 VERIFIED REVIEW</span>
              </div>

              {/* Testimonial Quote */}
              <p className="font-mono text-xs sm:text-[13px] text-[#1A3C2B] dark:text-[#E5EFE9] leading-relaxed mb-6 bg-white/70 dark:bg-[#1A2820]/70 p-4 border border-[#3A3A38]/20 dark:border-white/10">
                “Abel turned our complex reservation requirements into a remarkably fast and stable application. His deep understanding of database locks and clean frontend UX was unmatched.”
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-4 border-t border-[#3A3A38]/15 dark:border-white/10 flex items-center justify-between font-mono">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1A3C2B] dark:bg-[#9EFFBF] text-[#9EFFBF] dark:text-[#0C120E] flex items-center justify-center font-bold text-xs">
                  SC
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1A3C2B] dark:text-white uppercase">SARAH CHEN</div>
                  <div className="text-[9px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase">CTO &amp; CO-FOUNDER @ WEVENTUREHUB</div>
                </div>
              </div>
              <span className="text-[9px] uppercase text-[#1A3C2B]/40 dark:text-[#E5EFE9]/40 hidden sm:inline">SYS_REF_2024</span>
            </div>
          </motion.div>

          {/* Cell 4: Core Stations & Tech Spectrum */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="bento-cell bg-[#F7F7F5] dark:bg-[#121C16] p-6 sm:p-8 relative flex flex-col justify-between transition-colors duration-300"
          >
            <div className="corner-marker cm-br" />
            
            <div>
              {/* Monospaced Header Label with Forest Accent Bar */}
              <div className="mono-label font-mono text-[10px] uppercase tracking-wider mb-3 flex items-center text-[#1A3C2B] dark:text-[#E5EFE9]">
                <span className="w-1 h-3 mr-2 bg-[#1A3C2B] dark:bg-[#9EFFBF] inline-block" />
                <span>CORE_STATIONS_2024</span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-2">
                Production Ecosystem
              </h3>

              <p className="text-xs sm:text-sm text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-4 leading-relaxed">
                Technologies utilized daily for building scalable client runtimes, distributed APIs, and persistence layers.
              </p>

              {/* Chip Cloud with 1px Forest Borders */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'POSTGRESQL', 'REACT NATIVE', 'DOCKER', 'PRISMA', 'EXPRESS', 'TAILWIND'].map((t) => (
                  <div
                    key={t}
                    className="border border-[#1A3C2B] dark:border-[#9EFFBF]/50 bg-white dark:bg-[#1A2820] px-3 py-1.5 font-mono text-[10px] font-medium uppercase text-[#1A3C2B] dark:text-[#E5EFE9]"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom System Bar */}
            <div className="pt-4 border-t border-[#3A3A38]/15 dark:border-white/10 flex items-end justify-between font-mono">
              <div className="text-[9px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase leading-tight">
                © ABEL BIMREW<br />
                ENGINEERING PORTFOLIO // V3
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 bg-[#1A3C2B]/20 dark:bg-white/20 inline-block" />
                <span className="w-3 h-3 bg-[#1A3C2B]/50 dark:bg-[#9EFFBF]/50 inline-block" />
                <span className="w-3 h-3 bg-[#1A3C2B] dark:bg-[#9EFFBF] inline-block" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

