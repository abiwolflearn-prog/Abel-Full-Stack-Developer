import React, { useState, useEffect } from 'react';
import { ArrowUp, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#F7F7F5] dark:bg-[#0C120E] border-t border-[#3A3A38]/20 dark:border-white/10 py-16 font-mono text-xs text-[#1A3C2B] dark:text-[#E5EFE9] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#3A3A38]/20 dark:border-white/10 items-start">
          
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1A3C2B] dark:bg-[#9EFFBF] text-[#9EFFBF] dark:text-[#0C120E] flex items-center justify-center font-bold text-sm">
                AB
              </div>
              <div>
                <div className="font-heading font-bold text-lg text-[#1A3C2B] dark:text-[#E5EFE9] uppercase">
                  {PORTFOLIO_DATA.profile.name}
                </div>
                <div className="text-[10px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase">
                  {PORTFOLIO_DATA.profile.role}
                </div>
              </div>
            </div>
            <p className="text-[11px] text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 max-w-sm leading-relaxed">
              Engineering high-resilience web and mobile applications with MERN, Next.js, Node.js, and PostgreSQL.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-4 grid grid-cols-2 gap-2 text-[11px] uppercase">
            <div className="space-y-2">
              <a href="#projects" className="block text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 hover:text-[#1A3C2B] dark:hover:text-white">
                01. WORK
              </a>
              <a href="#about" className="block text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 hover:text-[#1A3C2B] dark:hover:text-white">
                02. ABOUT
              </a>
            </div>
            <div className="space-y-2">
              <a href="#stack" className="block text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 hover:text-[#1A3C2B] dark:hover:text-white">
                03. STACK
              </a>
              <a href="#contact" className="block text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70 hover:text-[#1A3C2B] dark:hover:text-white">
                04. CONTACT
              </a>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                className="block text-[#FF8C69] hover:underline"
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          {/* Telemetry & Time Column */}
          <div className="md:col-span-3 space-y-3 md:text-right">
            <div className="text-[10px] text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 uppercase">
              LOCAL SYSTEM CLOCK:
            </div>
            <div className="font-mono text-sm font-bold text-[#1A3C2B] dark:text-[#E5EFE9]">
              {time || '12:00:00 UTC'}
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center gap-1.5 border border-[#3A3A38]/30 dark:border-white/20 bg-white dark:bg-[#121C16] px-3 py-1.5 text-[10px] uppercase text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-[#1A3C2B] hover:text-white dark:hover:bg-[#9EFFBF] dark:hover:text-[#0C120E] transition-colors cursor-pointer"
                title="Toggle visual theme mode"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3 h-3 text-[#F4D35E]" />
                    <span>THEME: DARK</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3 h-3 text-[#1A3C2B]" />
                    <span>THEME: LIGHT</span>
                  </>
                )}
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1 border border-[#1A3C2B]/30 dark:border-white/20 bg-white dark:bg-[#121C16] px-3 py-1.5 text-[10px] uppercase text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-[#1A3C2B] hover:text-white dark:hover:bg-white/20 transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3 h-3 text-[#FF8C69]" />
                <span>TOP</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#9EFFBF] inline-block" />
            <span>Built with Next.js, React, Tailwind CSS &amp; curiosity.</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} ABEL BIMREW // ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

