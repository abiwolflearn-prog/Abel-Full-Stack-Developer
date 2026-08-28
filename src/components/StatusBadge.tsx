import React from 'react';

interface StatusBadgeProps {
  label?: string;
  status?: 'active' | 'building' | 'live' | 'system';
  className?: string;
  dotColor?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label = "AVAILABLE FOR OPPORTUNITIES",
  status = "active",
  className = "",
  dotColor
}) => {
  const getDotClass = () => {
    if (dotColor) return '';
    switch (status) {
      case 'active':
      case 'live':
        return 'bg-[#1A3C2B] dark:bg-[#9EFFBF]';
      case 'building':
        return 'bg-[#FF8C69]';
      case 'system':
        return 'bg-[#9EFFBF]';
      default:
        return 'bg-[#1A3C2B] dark:bg-[#9EFFBF]';
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 border border-[#1A3C2B]/20 dark:border-white/20 bg-white/80 dark:bg-[#121C16]/80 px-3 py-1 font-mono text-[10px] font-medium tracking-widest uppercase text-[#1A3C2B] dark:text-[#E5EFE9] backdrop-blur-xs select-none transition-colors duration-300 ${className}`}
    >
      <span
        className={`inline-block h-2 w-2 flex-shrink-0 ${getDotClass()}`}
        style={dotColor ? { backgroundColor: dotColor } : {}}
      />
      <span>{label}</span>
    </div>
  );
};

