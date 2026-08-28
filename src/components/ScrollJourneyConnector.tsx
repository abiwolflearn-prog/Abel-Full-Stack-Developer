import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Compass, ArrowUp, ArrowDown, ChevronRight, Sparkles, Navigation } from 'lucide-react';

interface Waypoint {
  id: string;
  num: string;
  label: string;
  shortLabel: string;
  tag: string;
}

const WAYPOINTS: Waypoint[] = [
  { id: 'hero', num: '01', label: 'HERO // IDENTITY', shortLabel: 'HERO', tag: 'START' },
  { id: 'about', num: '02', label: 'ABOUT // PROFILE', shortLabel: 'ABOUT', tag: 'EVOLUTION' },
  { id: 'pipeline', num: '03', label: 'PRODUCT PIPELINE', shortLabel: 'PIPELINE', tag: 'METHOD' },
  { id: 'stack', num: '04', label: 'TECH STACK SYSTEM', shortLabel: 'STACK', tag: 'TOOLING' },
  { id: 'projects', num: '05', label: 'FEATURED PROJECTS', shortLabel: 'PROJECTS', tag: 'STACK DECK' },
  { id: 'metrics', num: '06', label: 'DEVELOPER METRICS', shortLabel: 'METRICS', tag: 'VERIFIED' },
  { id: 'sprint', num: '07', label: 'ACTIVE SPRINT', shortLabel: 'SPRINT', tag: 'WIP' },
  { id: 'testimonials', num: '08', label: 'ENDORSEMENTS', shortLabel: 'REVIEWS', tag: 'PEERS' },
  { id: 'contact', num: '09', label: 'TRANSMISSION // CTA', shortLabel: 'CONTACT', tag: 'CONNECT' },
];

export const ScrollJourneyConnector: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeWaypoint, setActiveWaypoint] = useState<string>('hero');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Framer / Motion scroll percentage tracking
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  // Calculate pixel-based path dimensions for the vertical SVG spine
  const spineHeight = 440; // Total height of the SVG circuit board
  const spineWidth = 52;
  
  // Waypoint Y positions along the vertical spine
  const totalWaypoints = WAYPOINTS.length;
  const topPadding = 30;
  const bottomPadding = 30;
  const usableHeight = spineHeight - topPadding - bottomPadding;
  const stepHeight = usableHeight / (totalWaypoints - 1);

  // Compute waypoint coordinates along a circuit trace (alternating subtle offsets)
  const waypointPositions = WAYPOINTS.map((wp, idx) => {
    const y = topPadding + idx * stepHeight;
    const x = idx % 2 === 0 ? 20 : 32;
    return { ...wp, x, y, progressRatio: idx / (totalWaypoints - 1) };
  });

  // Build the SVG path string that connects all waypoints with technical circuit angles
  const buildCircuitPath = () => {
    if (waypointPositions.length === 0) return '';
    let d = `M ${waypointPositions[0].x} ${waypointPositions[0].y}`;
    for (let i = 1; i < waypointPositions.length; i++) {
      const prev = waypointPositions[i - 1];
      const curr = waypointPositions[i];
      const midY = (prev.y + curr.y) / 2;
      // Step-circuit routing: down halfway, horizontal shift, down to next node
      d += ` L ${prev.x} ${midY} L ${curr.x} ${midY} L ${curr.x} ${curr.y}`;
    }
    return d;
  };

  const circuitPathD = buildCircuitPath();

  // Scroll listener for detecting active section and calculating precise %
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const percentage = totalScroll > 0 ? Math.min(Math.max((currentScroll / totalScroll) * 100, 0), 100) : 0;
      setScrollProgress(percentage);

      // Detect which section is currently centered/in viewport
      const scrollMiddle = window.scrollY + window.innerHeight * 0.35;
      let currentSectionId = WAYPOINTS[0].id;

      for (const wp of WAYPOINTS) {
        const el = document.getElementById(wp.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollMiddle >= top - 120) {
            currentSectionId = wp.id;
          }
        }
      }
      setActiveWaypoint(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70; // Navbar offset
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const activeIndex = WAYPOINTS.findIndex((w) => w.id === activeWaypoint);
  const currentWaypointData = WAYPOINTS[activeIndex] || WAYPOINTS[0];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP HEADER SVG JOURNEY PROGRESS TRACER LINE (Fixed on All Screens)    */}
      {/* ========================================================================= */}
      <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none h-1.5 sm:h-2 bg-[#1A3C2B]/10 overflow-hidden shadow-xs">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1000 10"
        >
          {/* Subtle Background Guide Track */}
          <line
            x1="0"
            y1="5"
            x2="1000"
            y2="5"
            stroke="#1A3C2B"
            strokeOpacity="0.2"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Animated SVG Progress Stroke */}
          <motion.line
            x1="0"
            y1="5"
            x2="1000"
            y2="5"
            stroke="#1A3C2B"
            strokeWidth="6"
            style={{
              pathLength: smoothProgress,
            }}
          />
          {/* Accent Neon Lead Highlighter */}
          <motion.line
            x1="0"
            y1="5"
            x2="1000"
            y2="5"
            stroke="#9EFFBF"
            strokeWidth="3.5"
            style={{
              pathLength: smoothProgress,
            }}
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE PHONE & TABLET VERTICAL SVG JOURNEY CONDUIT (Right Screen Edge)*/}
      {/* ========================================================================= */}
      <div className="xl:hidden fixed right-1 sm:right-2 top-20 bottom-24 z-30 pointer-events-none flex flex-col items-center justify-between w-6 select-none">
        <div className="relative w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 24 600" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mobileSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1A3C2B" />
                <stop offset="50%" stopColor="#FF8C69" />
                <stop offset="100%" stopColor="#9EFFBF" />
              </linearGradient>
            </defs>

            {/* Background Dashed Guide Track */}
            <line
              x1="12"
              y1="10"
              x2="12"
              y2="590"
              stroke="#1A3C2B"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeDasharray="3 4"
            />

            {/* Dynamic Self-Drawing Mobile SVG Line */}
            <motion.line
              x1="12"
              y1="10"
              x2="12"
              y2="590"
              stroke="url(#mobileSpineGrad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{
                pathLength: smoothProgress,
              }}
            />

            {/* Neon Tracer Core */}
            <motion.line
              x1="12"
              y1="10"
              x2="12"
              y2="590"
              stroke="#9EFFBF"
              strokeWidth="1.5"
              strokeLinecap="round"
              style={{
                pathLength: smoothProgress,
              }}
            />

            {/* Waypoint Dots along the mobile path */}
            {WAYPOINTS.map((wp, idx) => {
              const yPos = 20 + (idx * 550) / (WAYPOINTS.length - 1);
              const isPassed = scrollProgress >= (idx / (WAYPOINTS.length - 1)) * 100 - 2;
              const isActive = activeWaypoint === wp.id;

              return (
                <g key={wp.id}>
                  <circle
                    cx="12"
                    cy={yPos}
                    r={isActive ? "5" : "3.5"}
                    fill={isActive ? "#FF8C69" : isPassed ? "#1A3C2B" : "#FFFFFF"}
                    stroke={isActive ? "#1A3C2B" : isPassed ? "#1A3C2B" : "#3A3A38"}
                    strokeWidth="1.5"
                  />
                  {isActive && (
                    <circle
                      cx="12"
                      cy={yPos}
                      r="8"
                      fill="none"
                      stroke="#FF8C69"
                      strokeWidth="1.5"
                      className="animate-ping origin-center"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. DESKTOP & LAPTOP DOCKED ARCHITECTURAL SVG JOURNEY SPINE (Left Rail HUD)*/}
      {/* ========================================================================= */}
      <aside
        aria-label="Journey Progress Connector"
        className="hidden xl:block fixed left-3 2xl:left-5 top-1/2 -translate-y-1/2 z-40 select-none transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative bg-white/95 backdrop-blur-md border-2 border-[#1A3C2B] p-2.5 sm:p-3 shadow-[0_12px_32px_rgba(26,60,43,0.14)]">
          {/* Technical Corner Markers */}
          <div className="corner-marker cm-tl" />
          <div className="corner-marker cm-tr" />
          <div className="corner-marker cm-bl" />
          <div className="corner-marker cm-br" />

          {/* Top Spine Telemetry Header */}
          <div className="flex items-center justify-between border-b border-[#3A3A38]/20 pb-2 mb-2 font-mono text-[9px] text-[#1A3C2B]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C2B] animate-pulse" />
              <span className="font-bold">JOURNEY.SVG</span>
            </div>
            <span className="font-bold text-[#FF8C69]">
              {scrollProgress.toFixed(0)}%
            </span>
          </div>

          {/* Main SVG Circuit Drawing Canvas */}
          <div className="relative flex items-start gap-3">
            <svg
              width={spineWidth}
              height={spineHeight}
              viewBox={`0 0 ${spineWidth} ${spineHeight}`}
              className="overflow-visible"
            >
              <defs>
                {/* Circuit Glowing Filter */}
                <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                {/* Linear Gradient for Journey Line */}
                <linearGradient id="journeyLineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1A3C2B" />
                  <stop offset="50%" stopColor="#FF8C69" />
                  <stop offset="100%" stopColor="#9EFFBF" />
                </linearGradient>
              </defs>

              {/* Background Inactive Circuit Track (Dashed Blueprint) */}
              <path
                d={circuitPathD}
                fill="none"
                stroke="#1A3C2B"
                strokeOpacity="0.18"
                strokeWidth="2"
                strokeDasharray="3 3"
              />

              {/* Grid Graduation Ticks along the vertical axis */}
              {Array.from({ length: 20 }).map((_, i) => {
                const tickY = topPadding + (i * usableHeight) / 19;
                return (
                  <line
                    key={i}
                    x1="4"
                    y1={tickY}
                    x2="10"
                    y2={tickY}
                    stroke="#1A3C2B"
                    strokeOpacity={i % 5 === 0 ? '0.4' : '0.15'}
                    strokeWidth={i % 5 === 0 ? '1.5' : '1'}
                  />
                );
              })}

              {/* DYNAMIC DRAWING SVG LINE: Draws forward as user scrolls */}
              <motion.path
                d={circuitPathD}
                fill="none"
                stroke="url(#journeyLineGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  pathLength: smoothProgress,
                }}
              />

              {/* Glowing Pulse Laser Line Layer */}
              <motion.path
                d={circuitPathD}
                fill="none"
                stroke="#9EFFBF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#laserGlow)"
                style={{
                  pathLength: smoothProgress,
                }}
              />

              {/* Waypoint Circuit Nodes */}
              {waypointPositions.map((wp) => {
                const isPassed = scrollProgress >= (wp.progressRatio * 100) - 2;
                const isActive = activeWaypoint === wp.id;

                return (
                  <g
                    key={wp.id}
                    onClick={() => scrollToSection(wp.id)}
                    className="cursor-pointer group/node"
                  >
                    {/* Node Click Hitbox */}
                    <circle cx={wp.x} cy={wp.y} r="14" fill="transparent" />

                    {/* Outer Node Halo (Active/Passed) */}
                    {isActive && (
                      <circle
                        cx={wp.x}
                        cy={wp.y}
                        r="9"
                        fill="none"
                        stroke="#FF8C69"
                        strokeWidth="1.5"
                        className="animate-ping origin-center"
                      />
                    )}

                    {/* Node Housing Ring */}
                    <circle
                      cx={wp.x}
                      cy={wp.y}
                      r="6"
                      fill={isActive ? '#1A3C2B' : isPassed ? '#1A3C2B' : '#FFFFFF'}
                      stroke={isActive ? '#FF8C69' : isPassed ? '#1A3C2B' : '#3A3A38'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      className="transition-all duration-300 group-hover/node:scale-125"
                    />

                    {/* Node Core Diode Indicator */}
                    <circle
                      cx={wp.x}
                      cy={wp.y}
                      r="2.5"
                      fill={isActive ? '#9EFFBF' : isPassed ? '#9EFFBF' : '#C4C4C0'}
                    />

                    {/* Node Index Number */}
                    <text
                      x={wp.x + 10}
                      y={wp.y + 3}
                      fontFamily="monospace"
                      fontSize="8"
                      fill={isActive ? '#FF8C69' : isPassed ? '#1A3C2B' : '#3A3A38'}
                      opacity={isActive ? 1 : 0.6}
                      fontWeight={isActive ? 'bold' : 'normal'}
                      className="transition-opacity pointer-events-none"
                    >
                      {wp.num}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Expandable / Tooltip Waypoint Legend on Hover */}
            <div
              className={`flex flex-col justify-between py-1 transition-all duration-300 font-mono text-[10px] ${
                isHovered ? 'w-36 opacity-100' : 'w-0 opacity-0 overflow-hidden'
              }`}
              style={{ height: spineHeight }}
            >
              {waypointPositions.map((wp) => {
                const isActive = activeWaypoint === wp.id;
                const isPassed = scrollProgress >= (wp.progressRatio * 100) - 2;

                return (
                  <button
                    key={wp.id}
                    onClick={() => scrollToSection(wp.id)}
                    className={`text-left px-1.5 py-0.5 whitespace-nowrap transition-colors flex items-center justify-between rounded-xs cursor-pointer ${
                      isActive
                        ? 'bg-[#1A3C2B] text-white font-bold'
                        : isPassed
                        ? 'text-[#1A3C2B] hover:bg-black/5'
                        : 'text-[#1A3C2B]/50 hover:text-[#1A3C2B]'
                    }`}
                  >
                    <span className="truncate">{wp.shortLabel}</span>
                    <span className={`text-[8px] ml-1 ${isActive ? 'text-[#9EFFBF]' : 'text-[#1A3C2B]/40'}`}>
                      {wp.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Telemetry & Navigation Actions */}
          <div className="mt-3 pt-2 border-t border-[#3A3A38]/20 flex items-center justify-between font-mono text-[9px] text-[#1A3C2B]">
            <button
              onClick={scrollToTop}
              title="Jump to Top"
              className="p-1 hover:bg-[#1A3C2B] hover:text-white transition-colors cursor-pointer border border-[#1A3C2B]/20"
            >
              <ArrowUp className="w-3 h-3" />
            </button>
            <span className="font-bold uppercase tracking-wider text-[8px] text-[#1A3C2B]/70">
              {currentWaypointData.shortLabel}
            </span>
            <button
              onClick={scrollToBottom}
              title="Jump to Contact"
              className="p-1 hover:bg-[#1A3C2B] hover:text-white transition-colors cursor-pointer border border-[#1A3C2B]/20"
            >
              <ArrowDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 4. MOBILE & TABLET FLOATING RADAR & INTERACTIVE WAYPOINTS LAUNCHER       */}
      {/* ========================================================================= */}
      <div className="xl:hidden fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {/* Expanded Quick Waypoint Drawer for Mobile */}
        {isExpanded && (
          <div className="mb-2 bg-white/95 backdrop-blur-md border-2 border-[#1A3C2B] p-3 shadow-2xl w-64 max-h-80 overflow-y-auto font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between border-b border-[#3A3A38]/20 pb-2 mb-2 text-[10px]">
              <span className="font-bold text-[#1A3C2B] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#FF8C69]" />
                JOURNEY WAYPOINTS
              </span>
              <span className="text-[#FF8C69] font-bold">{scrollProgress.toFixed(0)}%</span>
            </div>
            <div className="space-y-1">
              {WAYPOINTS.map((wp) => {
                const isActive = activeWaypoint === wp.id;
                return (
                  <button
                    key={wp.id}
                    onClick={() => {
                      scrollToSection(wp.id);
                      setIsExpanded(false);
                    }}
                    className={`w-full text-left px-2 py-1.5 flex items-center justify-between text-[11px] transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-[#1A3C2B] text-white font-bold'
                        : 'text-[#1A3C2B] hover:bg-black/5'
                    }`}
                  >
                    <span>{wp.num}. {wp.shortLabel}</span>
                    <span className={`text-[9px] uppercase ${isActive ? 'text-[#9EFFBF]' : 'text-[#1A3C2B]/50'}`}>
                      {wp.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Circular Floating SVG Scroll Radar Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group relative bg-white border-2 border-[#1A3C2B] w-14 h-14 flex items-center justify-center shadow-[0_8px_20px_rgba(26,60,43,0.2)] hover:scale-105 transition-transform cursor-pointer"
          aria-label="Toggle Journey Navigation"
        >
          {/* Circular SVG Path that draws around the dial based on scroll % */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 48 48">
            {/* Background ring */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#1A3C2B"
              strokeOpacity="0.15"
              strokeWidth="2.5"
            />
            {/* Animated Progress Ring */}
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#1A3C2B"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="125.6"
              style={{
                pathLength: smoothProgress,
              }}
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#9EFFBF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="125.6"
              style={{
                pathLength: smoothProgress,
              }}
            />
          </svg>

          {/* Center Text with Live Percentage */}
          <div className="flex flex-col items-center justify-center font-mono text-center">
            <span className="text-[10px] font-bold text-[#1A3C2B] leading-none">
              {scrollProgress.toFixed(0)}%
            </span>
            <span className="text-[7px] text-[#FF8C69] uppercase font-bold tracking-tighter">
              {currentWaypointData.shortLabel}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};
