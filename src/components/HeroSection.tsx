import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, Layers, ShieldCheck, Database, Server, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { StatusBadge } from './StatusBadge';
import { NetworkTopology } from './NetworkTopology';

interface HeroSectionProps {
  onOpenCaseStudy: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<'topology' | 'blueprint'>('topology');

  const coreTech = [
    { name: 'React', color: '#FF8C69' },
    { name: 'Next.js', color: '#1A3C2B' },
    { name: 'Node.js', color: '#9EFFBF' },
    { name: 'Express', color: '#3A3A38' },
    { name: 'PostgreSQL', color: '#F4D35E' },
    { name: 'MongoDB', color: '#FF8C69' },
    { name: 'React Native', color: '#9EFFBF' },
    { name: 'TypeScript', color: '#1A3C2B' },
  ];

  return (
    <section id="hero" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 overflow-hidden bg-mosaic transition-colors duration-300">
      {/* Background Section Ambient Grid lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        
        {/* Top Eyebrow & System Spec */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#3A3A38]/15 dark:border-white/10 mb-10"
        >
          <div className="flex items-center gap-3">
            <StatusBadge label={PORTFOLIO_DATA.profile.availability} status="active" />
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 tracking-wider">
              {PORTFOLIO_DATA.profile.specMatrix}
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 uppercase">
            <span className="w-1.5 h-1.5 bg-[#9EFFBF] inline-block"></span>
            <span>PROD_READY // FULL_STACK_ENGINEERING</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Huge Space Grotesk Headline + Monospaced Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            
            <div className="font-mono text-xs uppercase tracking-widest text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF8C69] inline-block" />
              <span>{PORTFOLIO_DATA.profile.shortRole}</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.92] tracking-[-0.04em] text-[#1A3C2B] dark:text-white uppercase mb-8">
              I build digital <br className="hidden sm:inline" />
              products that turn <br className="hidden sm:inline" />
              <span className="text-[#1A3C2B] dark:text-[#9EFFBF] underline decoration-[#9EFFBF] dark:decoration-[#FF8C69] decoration-4 underline-offset-8">
                ideas into reality.
              </span>
            </h1>

            {/* Subtext in JetBrains Mono with 1px Vertical Line */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-[2px] self-stretch min-h-[48px] bg-[#1A3C2B] dark:bg-[#9EFFBF] flex-shrink-0" />
              <p className="font-mono text-xs sm:text-sm uppercase tracking-wide text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed max-w-xl">
                {PORTFOLIO_DATA.profile.subHeadline}
              </p>
            </div>

            {/* Subtle Technology Badge Strip */}
            <div className="mb-10">
              <div className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 tracking-wider mb-2.5 flex items-center gap-1.5">
                <span>CORE STACK ARCHITECTURE:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreTech.map((tech, idx) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="border border-[#1A3C2B]/30 dark:border-white/20 bg-white/60 dark:bg-[#121C16]/80 px-2.5 py-1 font-mono text-[10px] tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] uppercase hover:border-[#1A3C2B] dark:hover:border-[#9EFFBF] hover:bg-[#1A3C2B] dark:hover:bg-[#9EFFBF] hover:text-white dark:hover:text-[#0C120E] transition-colors cursor-default"
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-6 py-3.5 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#12281D] dark:hover:bg-[#83e5a7] transition-colors inline-flex items-center gap-2"
              >
                <span>VIEW MY WORK</span>
                <ArrowDownRight className="w-4 h-4 text-[#9EFFBF] dark:text-[#0C120E]" />
              </a>

              <a
                href="#contact"
                className="border border-[#1A3C2B] dark:border-white/30 bg-transparent text-[#1A3C2B] dark:text-white px-6 py-3.5 font-mono text-xs uppercase tracking-widest font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-2"
              >
                <span>LET'S WORK TOGETHER</span>
                <span className="text-[#FF8C69]">→</span>
              </a>

              <button
                onClick={() => onOpenCaseStudy('weventurehub')}
                className="text-xs font-mono uppercase tracking-wider text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 hover:text-[#1A3C2B] dark:hover:text-[#9EFFBF] underline underline-offset-4 py-2 px-1 cursor-pointer"
              >
                [01. FEATURED CASE STUDY]
              </button>
            </div>

          </motion.div>

          {/* Right Column: Abstract Technical Wireframe Graphic / Network Topology */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            
            {/* View Switcher Bar */}
            <div className="w-full max-w-[420px] flex items-center justify-between border-t border-x border-[#3A3A38]/20 dark:border-white/20 bg-white/70 dark:bg-[#121C16]/90 px-3 py-2 font-mono text-[10px] uppercase">
              <span className="font-bold text-[#1A3C2B] dark:text-[#E5EFE9]">SYS_GRAPH // FULL-STACK SPINE</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('topology')}
                  className={`px-2 py-0.5 border cursor-pointer ${
                    activeTab === 'topology'
                      ? 'border-[#1A3C2B] dark:border-[#9EFFBF] bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold'
                      : 'border-transparent text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 hover:text-[#1A3C2B] dark:hover:text-white'
                  }`}
                >
                  TOPOLOGY
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`px-2 py-0.5 border cursor-pointer ${
                    activeTab === 'blueprint'
                      ? 'border-[#1A3C2B] dark:border-[#9EFFBF] bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold'
                      : 'border-transparent text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 hover:text-[#1A3C2B] dark:hover:text-white'
                  }`}
                >
                  CODE BLUEPRINT
                </button>
              </div>
            </div>

            {/* Interactive Panel */}
            {activeTab === 'topology' ? (
              <NetworkTopology className="border-t-0" />
            ) : (
              <div className="relative w-full max-w-[420px] p-6 border border-[#3A3A38]/20 dark:border-white/20 bg-[#1A1A1A] text-[#9EFFBF] font-mono text-[11px] leading-relaxed">
                <div className="corner-marker cm-tl" />
                <div className="corner-marker cm-tr" />
                <div className="corner-marker cm-bl" />
                <div className="corner-marker cm-br" />
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-white/50 text-[9px] uppercase">
                  <span>RUNTIME_ENVIRONMENT.TS</span>
                  <span className="text-[#FF8C69]">STRICT_MODE</span>
                </div>

                <pre className="overflow-x-auto text-[11px] font-mono leading-5 text-gray-300">
                  <span className="text-[#FF8C69]">import</span> &#123; FullStackEngine &#125; <span className="text-[#FF8C69]">from</span> <span className="text-[#9EFFBF]">'@core/abel'</span>;{'\n\n'}
                  <span className="text-gray-500">// Initialize Architecture</span>{'\n'}
                  <span className="text-[#FF8C69]">const</span> engineer = <span className="text-[#FF8C69]">new</span> <span className="text-[#F4D35E]">FullStackEngine</span>(&#123;{'\n'}
                  &nbsp;&nbsp;name: <span className="text-[#9EFFBF]">'Abel Bimrew'</span>,{'\n'}
                  &nbsp;&nbsp;stack: [<span className="text-[#9EFFBF]">'React'</span>, <span className="text-[#9EFFBF]">'Node'</span>, <span className="text-[#9EFFBF]">'Postgres'</span>],{'\n'}
                  &nbsp;&nbsp;mindset: <span className="text-[#9EFFBF]">'Product First'</span>,{'\n'}
                  &nbsp;&nbsp;execution: <span className="text-[#9EFFBF]">'Scalable &amp; Clean'</span>{'\n'}
                  &#125;);{'\n\n'}
                  <span className="text-[#9EFFBF]">await</span> engineer.shipProducts(&#123;{'\n'}
                  &nbsp;&nbsp;uptime: <span className="text-[#F4D35E]">0.9994</span>,{'\n'}
                  &nbsp;&nbsp;security: <span className="text-[#FF8C69]">true</span>{'\n'}
                  &#125;);
                </pre>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[9px] text-white/50">
                  <span>COMPILATION: 0 ERRORS</span>
                  <span className="text-[#9EFFBF]">ONLINE ●</span>
                </div>
              </div>
            )}

            {/* Under-Card Summary Bar */}
            <div className="w-full max-w-[420px] mt-2 flex justify-between font-mono text-[9px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase px-1">
              <span>FIG 1.0 // ARCHITECTURE MATRIX</span>
              <span>SCALE: 1:1 COMPUTATION</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

