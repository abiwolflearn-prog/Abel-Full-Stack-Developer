import React, { useState } from 'react';

interface NetworkTopologyProps {
  className?: string;
}

export const NetworkTopology: React.FC<NetworkTopologyProps> = ({ className = "" }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className={`relative flex items-center justify-center p-6 border border-[#3A3A38]/20 dark:border-white/20 bg-[#F7F7F5] dark:bg-[#121C16] w-full max-w-[420px] aspect-square transition-colors duration-300 ${className}`}>
      {/* Corner Markers */}
      <div className="corner-marker cm-tl" />
      <div className="corner-marker cm-tr" />
      <div className="corner-marker cm-bl" />
      <div className="corner-marker cm-br" />

      {/* Header Info */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 border-b border-[#3A3A38]/10 dark:border-white/10 pb-1.5 pointer-events-none">
        <span className="font-bold text-[#1A3C2B] dark:text-[#E5EFE9]">SYS_TOPOLOGY // 3-TIER SPINE</span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 bg-[#9EFFBF] inline-block animate-pulse"></span>
          REALTIME ROTATION
        </span>
      </div>

      {/* SVG Canvas with Animated Nodes */}
      <div className="relative w-[280px] h-[280px]">
        <svg
          width="280"
          height="280"
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible select-none"
        >
          {/* Outer Orbit Guides */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            className="text-[#3A3A38]/20 dark:text-white/15 animate-pulse-slow"
            strokeDasharray="4 4"
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            className="text-[#3A3A38]/15 dark:text-white/10"
            strokeDasharray="2 2"
          />

          {/* Coordinate Crosshairs */}
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" className="text-[#3A3A38]/15 dark:text-white/10" strokeWidth="0.5" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" className="text-[#3A3A38]/15 dark:text-white/10" strokeWidth="0.5" />

          {/* Animated Orbiting Group with Spinning Spines & Text (20s linear infinite) */}
          <g className="animate-orbit-cw origin-center" style={{ transformOrigin: '100px 100px' }}>
            
            {/* 1. FRONTEND SPINE (Center -> Right 180, 100) */}
            <line
              x1="100"
              y1="100"
              x2="180"
              y2="100"
              stroke="#FF8C69"
              strokeWidth="1.5"
              strokeDasharray="3 1.5"
              strokeOpacity="0.8"
            />
            {/* FRONTEND Spine Label along the line */}
            <g transform="translate(138, 94)">
              <rect
                x="-22"
                y="-6.5"
                width="44"
                height="8.5"
                fill="#1A3C2B"
                className="dark:fill-[#0C120E]"
                rx="2"
                stroke="#FF8C69"
                strokeWidth="0.6"
              />
              <text
                x="0"
                y="-0.5"
                fontFamily="JetBrains Mono, monospace"
                fontSize="5"
                fontWeight="bold"
                fill="#FF8C69"
                textAnchor="middle"
                letterSpacing="0.6px"
              >
                FRONTEND
              </text>
            </g>

            {/* Orbit Node 1: FRONTEND Node (Coral) */}
            <circle
              cx="180"
              cy="100"
              r="7"
              fill="#FF8C69"
              className="cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setActiveNode('frontend')}
              onMouseLeave={() => setActiveNode(null)}
            />
            <circle cx="180" cy="100" r="11" fill="none" stroke="#FF8C69" strokeOpacity="0.4" strokeWidth="1" />
            <text
              x="180"
              y="118"
              fontFamily="JetBrains Mono, monospace"
              fontSize="4.5"
              fontWeight="bold"
              fill="#FF8C69"
              textAnchor="middle"
            >
              UI / CLIENT
            </text>


            {/* 2. API SPINE (Center -> Top-Left 40, 60) */}
            <line
              x1="100"
              y1="100"
              x2="40"
              y2="60"
              stroke="#F4D35E"
              strokeWidth="1.5"
              strokeDasharray="3 1.5"
              strokeOpacity="0.8"
            />
            {/* API Spine Label along the line */}
            <g transform="translate(68, 79) rotate(33.7)">
              <rect
                x="-14"
                y="-6.5"
                width="28"
                height="8.5"
                fill="#1A3C2B"
                className="dark:fill-[#0C120E]"
                rx="2"
                stroke="#F4D35E"
                strokeWidth="0.6"
              />
              <text
                x="0"
                y="-0.5"
                fontFamily="JetBrains Mono, monospace"
                fontSize="5.5"
                fontWeight="bold"
                fill="#F4D35E"
                textAnchor="middle"
                letterSpacing="0.8px"
              >
                API
              </text>
            </g>

            {/* Orbit Node 2: API Node (Gold) */}
            <circle
              cx="40"
              cy="60"
              r="7"
              fill="#F4D35E"
              className="cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setActiveNode('api')}
              onMouseLeave={() => setActiveNode(null)}
            />
            <circle cx="40" cy="60" r="11" fill="none" stroke="#F4D35E" strokeOpacity="0.4" strokeWidth="1" />
            <text
              x="40"
              y="48"
              fontFamily="JetBrains Mono, monospace"
              fontSize="4.5"
              fontWeight="bold"
              fill="#F4D35E"
              textAnchor="middle"
            >
              REST / GATEWAY
            </text>


            {/* 3. BACKEND SPINE (Center -> Bottom-Left 70, 170) */}
            <line
              x1="100"
              y1="100"
              x2="70"
              y2="170"
              stroke="#9EFFBF"
              strokeWidth="1.5"
              strokeDasharray="3 1.5"
              strokeOpacity="0.8"
            />
            {/* BACKEND Spine Label along the line */}
            <g transform="translate(85, 135) rotate(-66.8)">
              <rect
                x="-20"
                y="-6.5"
                width="40"
                height="8.5"
                fill="#1A3C2B"
                className="dark:fill-[#0C120E]"
                rx="2"
                stroke="#9EFFBF"
                strokeWidth="0.6"
              />
              <text
                x="0"
                y="-0.5"
                fontFamily="JetBrains Mono, monospace"
                fontSize="5"
                fontWeight="bold"
                fill="#9EFFBF"
                textAnchor="middle"
                letterSpacing="0.6px"
              >
                BACKEND
              </text>
            </g>

            {/* Orbit Node 3: BACKEND Node (Mint) */}
            <circle
              cx="70"
              cy="170"
              r="7"
              fill="#9EFFBF"
              className="cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setActiveNode('backend')}
              onMouseLeave={() => setActiveNode(null)}
            />
            <circle cx="70" cy="170" r="11" fill="none" stroke="#9EFFBF" strokeOpacity="0.4" strokeWidth="1" />
            <text
              x="70"
              y="188"
              fontFamily="JetBrains Mono, monospace"
              fontSize="4.5"
              fontWeight="bold"
              fill="#9EFFBF"
              textAnchor="middle"
            >
              SERVICES / DB
            </text>

          </g>

          {/* Central Solid Node (System Core) */}
          <circle
            cx="100"
            cy="100"
            r="16"
            className="cursor-pointer fill-[#1A3C2B] dark:fill-[#9EFFBF] transition-all hover:scale-110"
            onMouseEnter={() => setActiveNode('core')}
            onMouseLeave={() => setActiveNode(null)}
          />
          <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" className="text-[#1A3C2B]/30 dark:text-[#9EFFBF]/40" strokeWidth="1" />

          {/* Center Text */}
          <text
            x="100"
            y="103"
            fontFamily="JetBrains Mono, monospace"
            fontSize="7"
            fontWeight="bold"
            className="fill-[#9EFFBF] dark:fill-[#0C120E]"
            textAnchor="middle"
            pointerEvents="none"
          >
            SYS
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80 border-t border-[#3A3A38]/10 dark:border-white/10 pt-1.5">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#9EFFBF] inline-block" />
          {activeNode === 'frontend' && 'TIER 01: FRONTEND (React 19 / Next.js)'}
          {activeNode === 'api' && 'TIER 02: API (REST / Zod / JWT)'}
          {activeNode === 'backend' && 'TIER 03: BACKEND (Express / PostgreSQL)'}
          {activeNode === 'core' && 'SYS_CORE: FULL-STACK UNIFIED ARCHITECTURE'}
          {!activeNode && 'SPINE: FRONTEND → API → BACKEND'}
        </span>
        <span className="text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 font-bold">ACTIVE</span>
      </div>
    </div>
  );
};


