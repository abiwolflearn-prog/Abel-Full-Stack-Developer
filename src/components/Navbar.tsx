import React, { useState } from 'react';
import { Menu, X, FileText, ArrowUpRight, Terminal, Sun, Moon } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { num: '01.', label: 'WORK', href: '#projects' },
    { num: '02.', label: 'ABOUT', href: '#about' },
    { num: '03.', label: 'STACK', href: '#stack' },
    { num: '04.', label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F7F5]/95 dark:bg-[#0C120E]/95 backdrop-blur-md border-b border-[#3A3A38]/20 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left: Square Logo Box */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#1A3C2B] dark:bg-[#9EFFBF] flex items-center justify-center text-white dark:text-[#0C120E] font-mono font-bold text-sm transition-transform group-hover:scale-95">
            <span className="text-[#9EFFBF] dark:text-[#0C120E]">AB</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-tight text-[#1A3C2B] dark:text-[#E5EFE9]">
              {PORTFOLIO_DATA.profile.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">
              FULL-STACK PRODUCT ENGINEER
            </span>
          </div>
        </a>

        {/* Center: Monospaced Nav Links with Numerical Prefixes */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center py-1 transition-colors hover:text-[#1A3C2B] dark:hover:text-white"
            >
              <span className="opacity-40 mr-1 text-[10px] group-hover:opacity-100 group-hover:text-[#FF8C69] transition-opacity">
                {link.num}
              </span>
              <span className="relative">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#1A3C2B] dark:bg-[#9EFFBF] transition-all group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        {/* Right Side: Theme Toggle + Ghost Button + Solid Forest Green Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 border border-[#3A3A38]/30 dark:border-white/20 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-[#1A3C2B] hover:text-white dark:hover:bg-[#9EFFBF] dark:hover:text-[#0C120E] transition-all cursor-pointer group"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode (Press 'T' or 'Shift+D')`}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#F4D35E] transition-transform duration-300 group-hover:rotate-45" />
                <span className="hidden md:inline font-bold text-[#F4D35E] group-hover:text-[#0C120E]">LIGHT</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#1A3C2B] group-hover:text-white transition-transform duration-300 group-hover:-rotate-12" />
                <span className="hidden md:inline font-bold">DARK</span>
              </>
            )}
            <span className="text-[8px] opacity-50 ml-0.5 border border-current px-1 py-0.2 hidden xl:inline">
              T
            </span>
          </button>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 border border-[#3A3A38]/30 dark:border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] hover:bg-[#1A3C2B] hover:text-white dark:hover:bg-white/10 transition-colors"
              title="Open Interactive Technical Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#FF8C69]" />
              <span>TERMINAL</span>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="border border-[#1A3C2B] dark:border-[#9EFFBF] px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#9EFFBF] hover:bg-black/5 dark:hover:bg-white/5 transition-colors inline-flex items-center gap-1 cursor-pointer"
          >
            <FileText className="w-3 h-3 text-[#1A3C2B] dark:text-[#9EFFBF]" />
            <span>RESUME.PDF</span>
          </button>

          <a
            href="#contact"
            className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-4 py-1.5 font-mono text-[10px] uppercase tracking-wider font-bold hover:bg-[#12281D] dark:hover:bg-[#85e6a8] transition-colors inline-flex items-center gap-1.5"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3 h-3 text-[#9EFFBF] dark:text-[#0C120E]" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 border border-[#3A3A38]/30 dark:border-white/20 text-[#1A3C2B] dark:text-[#E5EFE9] flex items-center justify-center"
            aria-label="Toggle Theme Mode"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F4D35E]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1A3C2B]" />
            )}
          </button>

          <a
            href="#contact"
            className="bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] px-3 py-1 font-mono text-[10px] uppercase font-bold"
          >
            HIRE
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 border border-[#3A3A38]/30 dark:border-white/20 text-[#1A3C2B] dark:text-[#E5EFE9]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] px-6 py-6 font-mono text-xs uppercase tracking-wider">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-[#3A3A38]/10 dark:border-white/10 text-[#1A3C2B] dark:text-[#E5EFE9]"
              >
                <span>
                  <span className="opacity-40 mr-2">{link.num}</span>
                  {link.label}
                </span>
                <span className="text-[#FF8C69]">→</span>
              </a>
            ))}
            
            {/* Mobile Theme Switch row */}
            <div className="flex items-center justify-between py-2 border-b border-[#3A3A38]/10 dark:border-white/10 text-[#1A3C2B] dark:text-[#E5EFE9]">
              <span className="flex items-center gap-2">
                {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-[#9EFFBF]" /> : <Sun className="w-3.5 h-3.5 text-[#FF8C69]" />}
                APPEARANCE: {theme.toUpperCase()}
              </span>
              <button
                onClick={toggleTheme}
                className="border border-[#1A3C2B] dark:border-[#9EFFBF] px-3 py-1 text-[10px] font-bold"
              >
                SWITCH TO {theme === 'dark' ? 'LIGHT' : 'DARK'}
              </button>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] py-3 font-mono text-xs uppercase tracking-widest font-bold"
              >
                LET'S WORK TOGETHER
              </a>
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full text-center border border-[#1A3C2B] dark:border-[#9EFFBF] text-[#1A3C2B] dark:text-[#9EFFBF] py-2.5 font-mono text-xs uppercase"
                >
                  📄 VIEW CURRICULUM VITAE
                </button>
              )}
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full text-center border border-[#3A3A38]/40 dark:border-white/20 text-[#1A3C2B] dark:text-[#E5EFE9] py-2.5 font-mono text-xs uppercase"
                >
                  &gt;_ LAUNCH CLI TERMINAL
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

