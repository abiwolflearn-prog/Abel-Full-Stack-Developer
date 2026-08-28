import React from 'react';
import { motion } from 'motion/react';

interface ToolItem {
  name: string;
  initials: string;
  role: string;
  body: string;
  tag: string;
  discBg: string;
  discText: string;
}

const ROW_ONE_TOOLS: ToolItem[] = [
  {
    name: "TypeScript",
    initials: "TS",
    role: "Static Typing // Core Runtime",
    body: "Eliminates entire classes of runtime errors across React clients and Node APIs with strict compiler checks and clean generic contracts.",
    tag: "Core Daily",
    discBg: "#EEF2FF",
    discText: "#4F46E5",
  },
  {
    name: "React 19",
    initials: "RE",
    role: "UI Architecture // Concurrent Mode",
    body: "Powers concurrent rendering, reactive component hierarchies, and fluid layout state across complex SaaS application views.",
    tag: "Core Daily",
    discBg: "#F0FDF4",
    discText: "#16A34A",
  },
  {
    name: "Next.js",
    initials: "NX",
    role: "App Router // Streaming SSR",
    body: "Leverages React Server Components, streaming SSR, and edge middleware for instant first-contentful paint and SEO optimization.",
    tag: "Production",
    discBg: "#F4F4F5",
    discText: "#18181B",
  },
  {
    name: "Node.js",
    initials: "ND",
    role: "Backend Runtime // Event Loop",
    body: "Handles high-concurrency event loops, asynchronous streams, buffer transformations, and RESTful microservices with low latency.",
    tag: "Backend",
    discBg: "#ECFDF5",
    discText: "#059669",
  },
  {
    name: "PostgreSQL",
    initials: "PG",
    role: "Relational DB // ACID Storage",
    body: "Architects normalized schemas, transactional safety, parameterized queries, and performant indexes for zero data loss.",
    tag: "Persistence",
    discBg: "#EFF6FF",
    discText: "#2563EB",
  },
  {
    name: "Tailwind CSS",
    initials: "TW",
    role: "Design System // Zero-Runtime",
    body: "Builds design-token UI layouts with hairline precision, responsive breakpoints, and strictly zero runtime style overhead.",
    tag: "Styling",
    discBg: "#ECFEFF",
    discText: "#0891B2",
  },
  {
    name: "Docker",
    initials: "DK",
    role: "Containerization // Reproducibility",
    body: "Packages isolated microservices into multi-stage reproducible images ready for instant Cloud Run and container orchestration.",
    tag: "DevOps",
    discBg: "#F0F9FF",
    discText: "#0284C7",
  },
];

const ROW_TWO_TOOLS: ToolItem[] = [
  {
    name: "Prisma ORM",
    initials: "PR",
    role: "Schema Modeling // Type Safety",
    body: "Automates declarative database migrations, typed relations, and transaction locking across multi-tenant enterprise data.",
    tag: "Persistence",
    discBg: "#F5F3FF",
    discText: "#7C3AED",
  },
  {
    name: "Express.js",
    initials: "EX",
    role: "REST APIs // Middleware Pipeline",
    body: "Structures clean router trees, rate limiters, token validators, and standardized JSON error handling middleware.",
    tag: "Backend",
    discBg: "#FEF3C7",
    discText: "#D97706",
  },
  {
    name: "Supabase",
    initials: "SB",
    role: "Managed Postgres // RLS Security",
    body: "Provides instant auth hooks, realtime Postgres subscriptions, and rigorous Row-Level Security policies for data isolation.",
    tag: "Cloud DB",
    discBg: "#ECFDF5",
    discText: "#059669",
  },
  {
    name: "React Native",
    initials: "RN",
    role: "Mobile Client // Cross-Platform",
    body: "Delivers smooth 60fps native iOS & Android applications with offline caching, touch gestures, and responsive mobile UX.",
    tag: "Mobile",
    discBg: "#EFF6FF",
    discText: "#3B82F6",
  },
  {
    name: "GitHub Actions",
    initials: "GH",
    role: "CI/CD // Automated Pipelines",
    body: "Automates lint validation, type verification, automated test suites, and continuous deployment workflows on every push.",
    tag: "Tooling",
    discBg: "#FFF1F2",
    discText: "#E11D48",
  },
  {
    name: "Framer Motion",
    initials: "FM",
    role: "Layout Animations // Spring Physics",
    body: "Coordinates realistic physics-based UI transitions, scroll telemetry, and micro-interactions without frame drops.",
    tag: "UI Motion",
    discBg: "#FDF4FF",
    discText: "#C026D3",
  },
  {
    name: "Vercel & Render",
    initials: "VR",
    role: "Edge Hosting // Serverless Compute",
    body: "Deploys edge-rendered frontend clients, cron worker daemons, and serverless lambdas with global CDN distribution.",
    tag: "Cloud Infra",
    discBg: "#F4F4F5",
    discText: "#27272A",
  },
];

interface ToolCardProps {
  tool: ToolItem;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div
      className="shrink-0 w-[300px] sm:w-[340px] bg-[#FFFFFF] dark:bg-[#121C16] border border-[#E4E4E7] dark:border-white/10 rounded-[14px] p-4 sm:p-5 shadow-[0_1px_2px_rgba(9,9,11,0.04)] text-left transition-all duration-200 hover:border-[#4F46E5]/40 dark:hover:border-[#9EFFBF]/50 flex flex-col justify-between"
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div>
        {/* Header with Initial-based Avatar & Metadata */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            {/* Coloured Initials Disc Avatar (No image dependency) */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-sans font-semibold text-xs select-none"
              style={{
                backgroundColor: tool.discBg,
                color: tool.discText,
              }}
              aria-hidden="true"
            >
              {tool.initials}
            </div>

            {/* Name & Role */}
            <div className="min-w-0">
              <h3 className="font-sans font-semibold text-sm text-[#09090B] dark:text-white tracking-tight truncate leading-snug">
                {tool.name}
              </h3>
              <p className="font-sans font-normal text-xs text-[#71717A] dark:text-[#E5EFE9]/60 truncate leading-none mt-0.5">
                {tool.role}
              </p>
            </div>
          </div>

          {/* Subtle Tag Badge */}
          <span className="shrink-0 font-sans font-medium text-[11px] text-[#71717A] dark:text-[#E5EFE9]/80 bg-[#FAFAFA] dark:bg-[#1A2820] border border-[#E4E4E7] dark:border-white/10 px-2 py-0.5 rounded-[8px] whitespace-nowrap">
            {tool.tag}
          </span>
        </div>

        {/* Card Body Copy */}
        <p className="font-sans font-normal text-xs text-[#09090B]/90 dark:text-[#E5EFE9]/90 leading-relaxed line-clamp-3">
          {tool.body}
        </p>
      </div>

      {/* Footer Accent Indicator */}
      <div className="mt-3 pt-2.5 border-t border-[#E4E4E7]/70 dark:border-white/10 flex items-center justify-between text-[11px] font-sans text-[#71717A] dark:text-[#E5EFE9]/60">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-[#9EFFBF]" />
          Production Verified
        </span>
        <span className="text-[#4F46E5] dark:text-[#9EFFBF] font-medium text-[11px]">Active Stack</span>
      </div>
    </div>
  );
};

export const TechStackSystem: React.FC = () => {
  return (
    <section
      id="stack"
      className="relative w-full bg-[#FAFAFA] dark:bg-[#0C120E] border-b border-[#E4E4E7] dark:border-white/10 py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#121C16] border border-[#E4E4E7] dark:border-white/10 shadow-[0_1px_2px_rgba(9,9,11,0.04)] text-[11px] font-sans font-semibold text-[#4F46E5] dark:text-[#9EFFBF] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-[#9EFFBF] animate-pulse" />
            <span>05 // TECH STACK ARCHITECTURE</span>
          </div>
          
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-white tracking-tight leading-tight">
            Tools I build with.
          </h2>
          
          <p className="mt-3 font-sans font-normal text-sm sm:text-base text-[#71717A] dark:text-[#E5EFE9]/70 max-w-xl mx-auto leading-relaxed">
            A battle-tested repertoire of modern runtimes, typed languages, persistent databases, and infrastructure tools powering production applications.
          </p>
        </motion.div>

        {/* TWO ROWS OF COMPACT CARDS SCROLLING IN OPPOSITE DIRECTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full overflow-hidden pause-on-hover mask-edge-fade py-2"
        >
          
          {/* Row 1: Scrolling Left */}
          <div className="relative w-full overflow-hidden mb-4 sm:mb-5">
            <div className="animate-marquee-left flex gap-4 sm:gap-5">
              {/* Primary Card Set */}
              <div className="flex gap-4 sm:gap-5 shrink-0">
                {ROW_ONE_TOOLS.map((tool, idx) => (
                  <ToolCard key={`row1-primary-${idx}-${tool.name}`} tool={tool} />
                ))}
              </div>

              {/* Duplicate Card Set (aria-hidden for seamless loop & accessibility) */}
              <div className="flex gap-4 sm:gap-5 shrink-0 reduced-motion-duplicate" aria-hidden="true">
                {ROW_ONE_TOOLS.map((tool, idx) => (
                  <ToolCard key={`row1-dup-${idx}-${tool.name}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Scrolling Right (Opposite Direction) */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-right flex gap-4 sm:gap-5">
              {/* Primary Card Set */}
              <div className="flex gap-4 sm:gap-5 shrink-0">
                {ROW_TWO_TOOLS.map((tool, idx) => (
                  <ToolCard key={`row2-primary-${idx}-${tool.name}`} tool={tool} />
                ))}
              </div>

              {/* Duplicate Card Set (aria-hidden for seamless loop & accessibility) */}
              <div className="flex gap-4 sm:gap-5 shrink-0 reduced-motion-duplicate" aria-hidden="true">
                {ROW_TWO_TOOLS.map((tool, idx) => (
                  <ToolCard key={`row2-dup-${idx}-${tool.name}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>

        </motion.div>

        {/* Footer Meta Summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 pt-6 border-t border-[#E4E4E7]/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-[#71717A]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="font-medium text-[#09090B]">14 Core Technologies</span>
            <span>•</span>
            <span>Hover rail to pause transmission</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#71717A]">
            <span>Continuous Deployment Ready</span>
            <span>•</span>
            <span className="font-semibold text-[#4F46E5]">100% Typed Workflows</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
