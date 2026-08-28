import React, { useState, useEffect } from 'react';
import { X, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const { theme, toggleTheme, setTheme } = useTheme();
  const [history, setHistory] = useState<string[]>([
    '==================================================',
    '       ABEL BIMREW // SYSTEM CLI RUNTIME v3.8     ',
    '==================================================',
    'Type "help" to list available diagnostic commands.',
    ''
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    let out: string[] = [];

    switch (cmd) {
      case 'help':
        out = [
          'AVAILABLE SYSTEM COMMANDS:',
          '  about       - Display developer summary',
          '  skills      - Full breakdown of languages & tools',
          '  projects    - List major production applications',
          '  metrics     - Print operational statistics',
          '  theme       - Toggle or set theme mode (e.g. theme dark / theme light)',
          '  dark        - Switch to dark mode directly',
          '  light       - Switch to light mode directly',
          '  contact     - View contact coordinates',
          '  date        - Current timestamp',
          '  clear       - Wipe terminal screen'
        ];
        break;
      case 'about':
        out = [
          `NAME: ${PORTFOLIO_DATA.profile.name}`,
          `ROLE: ${PORTFOLIO_DATA.profile.role}`,
          `STATEMENT: ${PORTFOLIO_DATA.profile.headline}`,
          `PHILOSOPHY: ${PORTFOLIO_DATA.profile.bio}`
        ];
        break;
      case 'skills':
        out = [
          'CORE STACK MATRIX:',
          '  - Frontend: React 19, Next.js App Router, TypeScript, Tailwind CSS, Motion',
          '  - Backend: Node.js, Express, REST APIs, JWT, Microservices',
          '  - Database: PostgreSQL, Prisma ORM, MongoDB, Supabase, Redis',
          '  - Mobile: React Native, Expo SDK, Expo Router',
          '  - DevOps: Docker, Vercel, Render, GitHub CI/CD Actions'
        ];
        break;
      case 'projects':
        out = [
          'PRODUCTION SYSTEMS:',
          '  1. WeVentureHub (Coworking & Event Platform) -> Full-Stack',
          '  2. Fetena Pro (Examination Delivery & Analytics) -> Full-Stack',
          '  3. Secure Voting System (Cryptographic Web Voting) -> Full-Stack',
          '  4. EVA Teacher Evaluation (Mobile Feedback System) -> React Native',
          '  5. Technical Portfolio (Bento Grid Blueprint) -> React'
        ];
        break;
      case 'metrics':
        out = [
          'TELEMETRY DATA:',
          '  - Projects Shipped: 14+',
          '  - Core Technologies: 18+',
          '  - APIs Built: 35+',
          '  - Repositories: 28+',
          '  - System Uptime Average: 99.9%'
        ];
        break;
      case 'theme':
        toggleTheme();
        out = [`Toggled theme. Current mode: ${theme === 'dark' ? 'LIGHT' : 'DARK'}`];
        break;
      case 'theme dark':
      case 'dark':
        setTheme('dark');
        out = ['Theme updated: DARK MODE'];
        break;
      case 'theme light':
      case 'light':
        setTheme('light');
        out = ['Theme updated: LIGHT MODE'];
        break;
      case 'contact':
        out = [
          `Email: ${PORTFOLIO_DATA.profile.email}`,
          `GitHub: ${PORTFOLIO_DATA.profile.github}`,
          `LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}`
        ];
        break;
      case 'date':
        out = [new Date().toISOString()];
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        out = [`Unknown command: "${raw}". Type "help" for options.`];
    }

    setHistory(prev => [...prev, `abel@system:~$ ${raw}`, ...out, '']);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#1A1A1A] border border-black p-6 text-[#9EFFBF] font-mono text-xs shadow-2xl flex flex-col max-h-[85vh]">
        
        {/* Corner markers in mint */}
        <div className="corner-marker cm-tl" style={{ borderColor: '#9EFFBF' }} />
        <div className="corner-marker cm-tr" style={{ borderColor: '#9EFFBF' }} />
        <div className="corner-marker cm-bl" style={{ borderColor: '#9EFFBF' }} />
        <div className="corner-marker cm-br" style={{ borderColor: '#9EFFBF' }} />

        {/* Top bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15 text-white/50 text-[10px]">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-[#FF8C69]" />
            <span className="text-white font-bold uppercase">abel-terminal-v3.8 (interactive)</span>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1 cursor-pointer"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output */}
        <div className="flex-1 overflow-y-auto space-y-1 pr-2 text-[11px] leading-5 text-gray-300 min-h-[250px]">
          {history.map((line, idx) => (
            <div key={idx} className={line.startsWith('abel@') ? 'text-[#9EFFBF] font-bold' : ''}>
              {line}
            </div>
          ))}
        </div>

        {/* Quick Command Buttons */}
        <div className="pt-3 border-t border-white/15">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {['help', 'about', 'skills', 'projects', 'metrics', 'theme', 'contact', 'clear'].map(c => (
              <button
                key={c}
                onClick={() => runCommand(c)}
                className="px-2 py-0.5 border border-white/20 text-white/80 hover:bg-[#9EFFBF] hover:text-[#1A3C2B] text-[10px] uppercase transition-colors cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim()) runCommand(input);
            }}
            className="flex items-center gap-2"
          >
            <span className="text-[#9EFFBF] font-bold">&gt;</span>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type a command... (e.g. 'theme', 'projects', 'help')"
              className="flex-1 bg-transparent border-none text-[#9EFFBF] text-xs font-mono focus:outline-hidden"
            />
            <button
              type="submit"
              className="px-3 py-1 bg-[#9EFFBF] text-[#1A3C2B] font-bold text-[10px] uppercase cursor-pointer"
            >
              EXEC
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

