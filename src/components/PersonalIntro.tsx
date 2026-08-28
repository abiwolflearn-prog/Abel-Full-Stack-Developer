import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Terminal, Sparkles, Cpu, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PersonalIntro: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2);

  const progression = [
    { name: "Learning", tag: "FUNDAMENTALS", desc: "Understanding the event loop, ASTs, and memory allocation." },
    { name: "Experimenting", tag: "PROTOTYPES", desc: "Building mini-tools, testing APIs, and failing fast." },
    { name: "Building", tag: "FULL-STACK", desc: "Architecting React frontends with Node/Express APIs." },
    { name: "Deploying", tag: "INFRASTRUCTURE", desc: "Setting up CI/CD pipelines, Docker containers, and Cloud SQL." },
    { name: "Solving Real Problems", tag: "OPTIMIZATION", desc: "Eliminating booking race conditions and reducing query latency." },
    { name: "Building Products", tag: "END-TO-END", desc: "Creating full SaaS platforms that serve real paying users." },
  ];

  return (
    <section id="about" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-16 lg:py-24 transition-colors duration-300">
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
              <span>02. PERSONAL INTRODUCTION</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight">
              More than just code.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 max-w-sm">
            THE STORY OF TURNING CURIOSITY INTO HIGH-IMPACT SOFTWARE PRODUCTS.
          </p>
        </motion.div>

        {/* Story Text Box with Corner Markers */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10 p-8 sm:p-12 mb-12"
        >
          <div className="corner-marker cm-tl" />
          <div className="corner-marker cm-tr" />
          <div className="corner-marker cm-bl" />
          <div className="corner-marker cm-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8C69] font-bold block mb-3">
                STATEMENT OF INTENT //
              </span>
              <p className="text-xl sm:text-2xl lg:text-3xl text-[#1A3C2B] dark:text-[#E5EFE9] font-light leading-snug tracking-tight mb-6">
                “I started with curiosity about how software works. That curiosity turned into a habit of 
                <span className="font-semibold text-[#1A3C2B] dark:text-[#9EFFBF]"> learning, building, breaking things, fixing them</span>, 
                and eventually creating complete products from frontend to backend.”
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/75 dark:text-[#E5EFE9]/75 leading-relaxed">
                As a developer, I don't treat features in isolation. I design around the whole lifecycle: how the UI 
                feels under low bandwidth, how database indexes behave under concurrent writes, and how deployment 
                pipelines ensure zero downtime for the people relying on the system.
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#3A3A38]/20 dark:border-white/10 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between h-full space-y-4">
              <div className="font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 tracking-wider">
                CORE CAPABILITIES MATRIX:
              </div>
              <ul className="space-y-2.5 font-mono text-xs text-[#1A3C2B] dark:text-[#E5EFE9]">
                {[
                  { color: 'bg-[#1A3C2B] dark:bg-[#9EFFBF]', text: 'Full-Stack Web (MERN / Next.js)' },
                  { color: 'bg-[#FF8C69]', text: 'Mobile Apps (React Native / Expo)' },
                  { color: 'bg-[#9EFFBF]', text: 'Relational Databases (PostgreSQL / ACID)' },
                  { color: 'bg-[#F4D35E]', text: 'Secure APIs & Auth (JWT / RBAC)' },
                  { color: 'bg-[#1A3C2B] dark:bg-[#9EFFBF]', text: 'CI/CD & Cloud Deployment (Docker)' },
                ].map((cap, i) => (
                  <motion.li
                    key={cap.text}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-2"
                  >
                    <span className={`w-1.5 h-1.5 ${cap.color}`} />
                    <span>{cap.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Visual Progression Stepper: Learning -> Experimenting -> Building -> Deploying -> Solving Real Problems -> Building Products */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] mb-4">
            <span className="font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-[#9EFFBF] inline-block" />
              DEVELOPMENT EVOLUTION PIPELINE
            </span>
            <span className="text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">CLICK STEP TO INSPECT PARADIGM</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 bg-[#3A3A38]/20 dark:bg-white/10 border border-[#3A3A38]/20 dark:border-white/10">
            {progression.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.05 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 text-left transition-all relative flex flex-col justify-between h-[150px] cursor-pointer ${
                    isSelected
                      ? 'bg-white dark:bg-[#1A2820]'
                      : 'bg-[#F7F7F5] dark:bg-[#121C16] hover:bg-[#FAF9F6] dark:hover:bg-[#16221B]'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#1A3C2B] dark:bg-[#9EFFBF]" />
                  )}
                  <div>
                    <span className="font-mono text-[10px] text-[#1A3C2B]/40 dark:text-[#E5EFE9]/40 block mb-1">
                      0{idx + 1}. // {item.tag}
                    </span>
                    <span className="font-heading font-bold text-sm text-[#1A3C2B] dark:text-white uppercase block">
                      {item.name}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 leading-normal line-clamp-3">
                    {item.desc}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* Active Step Diagnostic Box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 p-4 border border-[#3A3A38]/20 dark:border-white/10 bg-white dark:bg-[#121C16] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs"
          >
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold text-[10px] uppercase">
                STAGE 0{activeStep + 1}
              </span>
              <span className="font-bold text-[#1A3C2B] dark:text-white">
                {progression[activeStep].name.toUpperCase()} — {progression[activeStep].tag}
              </span>
            </div>
            <p className="text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80 text-xs">
              {progression[activeStep].desc}
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

