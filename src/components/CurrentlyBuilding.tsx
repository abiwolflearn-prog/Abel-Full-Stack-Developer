import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, Cpu, Activity, Server, Zap, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CurrentlyBuilding: React.FC = () => {
  const item = PORTFOLIO_DATA.currentlyBuilding;

  return (
    <section id="sprint" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#3A3A38]/20 dark:border-white/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-2">
              <span className="w-1.5 h-3 bg-[#FF8C69]" />
              <span>08. ACTIVE ENGINEERING SPRINT</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight">
              Currently building.
            </h2>
          </div>
          
          <div className="inline-flex items-center gap-2 border border-[#FF8C69] bg-[#FF8C69]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase text-[#1A3C2B] dark:text-[#E5EFE9]">
            <span className="w-2 h-2 bg-[#FF8C69] animate-pulse inline-block" />
            <span>STATUS: {item.status}</span>
          </div>
        </motion.div>

        {/* Big Product Development Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10 p-8 sm:p-12"
        >
          {/* Corner Markers */}
          <div className="corner-marker cm-tl" />
          <div className="corner-marker cm-tr" />
          <div className="corner-marker cm-bl" />
          <div className="corner-marker cm-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
            
            <div className="lg:col-span-8">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#FF8C69] font-bold mb-2">
                ACTIVE REPOSITORY // {item.badge}
              </div>
              
              <h3 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-3">
                {item.title}
              </h3>
              
              <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 uppercase tracking-wide mb-6">
                {item.subtitle}
              </p>

              <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Technologies Being Used */}
              <div className="flex flex-wrap gap-2">
                {item.techStack.map(t => (
                  <span key={t} className="border border-[#1A3C2B] dark:border-[#9EFFBF]/50 bg-[#F7F7F5] dark:bg-[#1A2820] px-3 py-1 font-mono text-[10px] uppercase font-bold text-[#1A3C2B] dark:text-[#E5EFE9]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side Sprint Telemetry */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#3A3A38]/20 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              
              <div>
                <div className="flex justify-between font-mono text-[10px] uppercase mb-2">
                  <span className="text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">COMPLETION PROGRESS:</span>
                  <span className="font-bold text-[#1A3C2B] dark:text-[#9EFFBF]">{item.progressPercentage}%</span>
                </div>
                {/* 1px Border Progress Bar */}
                <div className="w-full h-3 border border-[#1A3C2B] dark:border-white/20 bg-[#F7F7F5] dark:bg-[#1A2820] p-[1px]">
                  <div className="h-full bg-[#1A3C2B] dark:bg-[#9EFFBF]" style={{ width: `${item.progressPercentage}%` }} />
                </div>
              </div>

              <div className="p-4 bg-[#F7F7F5] dark:bg-[#1A2820] border border-[#3A3A38]/20 dark:border-white/10">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 block mb-1">
                  CURRENT FOCUS SPRINT:
                </span>
                <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white uppercase block">
                  {item.currentPhase}
                </span>
              </div>

              <div className="p-4 bg-[#1A1A1A] text-[#9EFFBF] font-mono text-[11px] leading-relaxed border border-black/40">
                <span className="text-[#FF8C69] text-[9px] block uppercase mb-1">LATEST STRESS TEST:</span>
                "{item.keyMilestone}"
              </div>

            </div>

          </div>

          {/* Pipeline Lifecycle Bar: Idea → Development → Testing → Deployment → Growth */}
          <div className="pt-8 border-t border-[#3A3A38]/20 dark:border-white/10">
            <div className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 tracking-wider mb-4">
              PRODUCT LIFECYCLE PROGRESSION:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {item.pipelineSteps.map((step, idx) => {
                const isCompleted = step.status === 'completed';
                const isInProgress = step.status === 'in-progress';
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.04 * idx, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-3 border font-mono text-xs uppercase flex flex-col justify-between h-[80px] ${
                      isCompleted
                        ? 'bg-[#1A3C2B] dark:bg-[#1A2820] text-white dark:text-[#9EFFBF] border-[#1A3C2B] dark:border-[#9EFFBF]/40'
                        : isInProgress
                        ? 'bg-[#FF8C69]/10 border-[#FF8C69] text-[#1A3C2B] dark:text-white'
                        : 'bg-[#F7F7F5] dark:bg-[#16221B] border-[#3A3A38]/20 dark:border-white/10 text-[#1A3C2B]/40 dark:text-[#E5EFE9]/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[9px]">
                      <span>0{idx + 1}</span>
                      {isCompleted && <span className="text-[#9EFFBF]">✓ DONE</span>}
                      {isInProgress && <span className="text-[#FF8C69] font-bold animate-pulse">● ACTIVE</span>}
                      {!isCompleted && !isInProgress && <span>UPCOMING</span>}
                    </div>
                    <div className="font-heading font-bold text-sm">
                      {step.step}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

