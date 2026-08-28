import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

export const SectionConnectorSpine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate dynamic glow and opacity
  const glowOpacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0.4, 1, 1, 0.6]);

  return (
    <div className="absolute top-0 bottom-0 left-1 sm:left-3 xl:left-8 w-4 sm:w-6 pointer-events-none z-10 block overflow-hidden">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 24 1000"
      >
        <defs>
          {/* High-Contrast Architectural Gradient */}
          <linearGradient id="spineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A3C2B" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#FF8C69" stopOpacity="1" />
            <stop offset="55%" stopColor="#1A3C2B" stopOpacity="0.95" />
            <stop offset="80%" stopColor="#9EFFBF" stopOpacity="1" />
            <stop offset="100%" stopColor="#1A3C2B" stopOpacity="0.9" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="spineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Blueprint Dashed Guide Track Line */}
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="1000"
          stroke="#1A3C2B"
          strokeOpacity="0.2"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />

        {/* Periodic Calibration Ticks along the vertical axis */}
        {Array.from({ length: 50 }).map((_, i) => (
          <line
            key={i}
            x1={i % 5 === 0 ? "2" : "6"}
            y1={i * 20 + 10}
            x2={i % 5 === 0 ? "22" : "18"}
            y2={i * 20 + 10}
            stroke="#1A3C2B"
            strokeOpacity={i % 5 === 0 ? "0.3" : "0.12"}
            strokeWidth={i % 5 === 0 ? "1.5" : "1"}
          />
        ))}

        {/* Base Dynamic Self-Drawing Journey Line */}
        <motion.line
          x1="12"
          y1="0"
          x2="12"
          y2="1000"
          stroke="url(#spineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            pathLength: smoothProgress,
          }}
        />

        {/* Neon Highlighting Tracer Wire */}
        <motion.line
          x1="12"
          y1="0"
          x2="12"
          y2="1000"
          stroke="#9EFFBF"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#spineGlow)"
          style={{
            pathLength: smoothProgress,
            opacity: glowOpacity,
          }}
        />
      </svg>
    </div>
  );
};
