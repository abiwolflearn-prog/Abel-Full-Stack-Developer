import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, CheckCircle2, Layers, ShieldCheck, Database, Server, Smartphone, Globe, Users, Sparkles } from 'lucide-react';

export const ProductPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(2);

  const pipeline = [
    {
      id: "idea",
      name: "Idea",
      icon: "💡",
      subtitle: "Problem Definition & Scope",
      description: "Interrogating the user pain point, business objectives, and defining crisp success metrics before touching any editor.",
      deliverable: "Product Spec & Requirements Matrix"
    },
    {
      id: "uiux",
      name: "UI / UX",
      icon: "📐",
      subtitle: "Ergonomics & Design System",
      description: "Drafting wireframes, information hierarchy, responsive layouts, and establishing typographic scale and accessibility rules.",
      deliverable: "Bento Layouts & Component Tokens"
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: "⚡",
      subtitle: "Reactive Component Architecture",
      description: "Engineering performant React / Next.js interfaces with predictable state flow, zero layout shift, and snappy micro-interactions.",
      deliverable: "Responsive Web / Native UI"
    },
    {
      id: "backend",
      name: "Backend",
      icon: "⚙️",
      subtitle: "Microservices & Business Logic",
      description: "Designing modular Express/Node.js servers, enforcing data validation schemas, rate limiting, and background workers.",
      deliverable: "RESTful Service Layer"
    },
    {
      id: "database",
      name: "Database",
      icon: "🗄️",
      subtitle: "Relational Schemas & Integrity",
      description: "Structuring normalized PostgreSQL tables, indexes, ACID transaction boundaries, row-level locks, and Prisma migrations.",
      deliverable: "ACID Persistence Schema"
    },
    {
      id: "api",
      name: "API & Auth",
      icon: "🔐",
      subtitle: "Contracts & Cryptographic Auth",
      description: "Enforcing stateless JWT auth, HTTP-only secure cookie sessions, webhook listeners, and OpenAPI type definitions.",
      deliverable: "Secure Gateway & RBAC"
    },
    {
      id: "deployment",
      name: "Deployment",
      icon: "🚀",
      subtitle: "CI/CD & Cloud Infrastructure",
      description: "Automated GitHub actions, containerizing with Docker, provisioning Render/Vercel edge environments, and setting up monitoring.",
      deliverable: "Production Cloud Container"
    },
    {
      id: "users",
      name: "Real Users",
      icon: "👥",
      subtitle: "Feedback & Value Realization",
      description: "Monitoring real-world performance, collecting telemetry, listening to user feedback, and rolling out continuous improvements.",
      deliverable: "Happy, Empowered Users"
    }
  ];

  return (
    <section id="pipeline" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#3A3A38]/20 dark:border-white/10 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 mb-2">
              <span className="w-1.5 h-3 bg-[#F4D35E]" />
              <span>04. ABOUT ME // PRODUCT THINKING</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-[#1A3C2B] dark:text-white uppercase tracking-tight">
              The developer behind the code.
            </h2>
          </div>
          <div className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] font-bold px-4 py-2 font-mono text-xs uppercase tracking-wider">
            END-TO-END MINDSET
          </div>
        </motion.div>

        {/* Big Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10 p-8 sm:p-12 mb-12"
        >
          <div className="corner-marker cm-tl" />
          <div className="corner-marker cm-tr" />
          <div className="corner-marker cm-bl" />
          <div className="corner-marker cm-br" />

          <div className="max-w-4xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF8C69] font-bold block mb-2">
              ENGINEERING PERSPECTIVE //
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-4">
              “I don't just write features. I think about the complete product.”
            </h3>
            <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/75 dark:text-[#E5EFE9]/75 leading-relaxed">
              Writing code is only 20% of engineering. The other 80% is understanding user friction, 
              preventing edge cases, ensuring database integrity under concurrency, and building systems that 
              can be maintained and scaled effortlessly.
            </p>
          </div>
        </motion.div>

        {/* Interactive Vertical / Horizontal Pipeline Flow */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] mb-4">
            <span className="font-bold">THE PRODUCT ENGINEERING PIPELINE:</span>
            <span className="text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">CLICK ANY NODE TO INSPECT ARCHITECTURAL ARTIFACT</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1 bg-[#3A3A38]/20 dark:bg-white/10 border border-[#3A3A38]/20 dark:border-white/10">
            {pipeline.map((item, idx) => {
              const isSelected = activeStage === idx;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.03 * idx, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 text-left transition-all relative flex flex-col justify-between h-[150px] cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A3C2B] dark:bg-[#1A2820] text-white dark:text-[#9EFFBF]'
                      : 'bg-white dark:bg-[#121C16] text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-[#FAF9F6] dark:hover:bg-[#16221B]'
                  }`}
                >
                  {isSelected && (
                    <div className="corner-marker cm-tl" style={{ borderColor: '#9EFFBF' }} />
                  )}
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] mb-2 opacity-60">
                      <span>0{idx + 1}</span>
                      <span>{item.icon}</span>
                    </div>
                    <div className="font-heading font-bold text-base uppercase tracking-tight mb-1">
                      {item.name}
                    </div>
                  </div>
                  
                  <div className={`font-mono text-[9px] uppercase tracking-wider ${isSelected ? 'text-[#9EFFBF]' : 'text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60'}`}>
                    {idx < 7 ? '↓ NEXT' : '● OUTCOME'}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 p-6 bg-white dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-[#3A3A38]/15 dark:border-white/10 gap-2 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-[#1A3C2B] dark:bg-[#9EFFBF] text-[#9EFFBF] dark:text-[#0C120E] font-bold text-[10px] uppercase">
                  NODE 0{activeStage + 1} // {pipeline[activeStage].name.toUpperCase()}
                </span>
                <span className="text-[#1A3C2B] dark:text-white font-bold">
                  {pipeline[activeStage].subtitle}
                </span>
              </div>
              <span className="text-[#FF8C69] text-[10px] uppercase font-bold">
                ARTIFACT: {pipeline[activeStage].deliverable}
              </span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-[#1A3C2B]/85 dark:text-[#E5EFE9]/85 leading-relaxed">
              {pipeline[activeStage].description}
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

