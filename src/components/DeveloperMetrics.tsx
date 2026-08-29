import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface MetricItem {
  label: string;
  target: number;
  suffix: string;
  decimals?: number;
  sub: string;
  code: string;
}

const CountUpValue: React.FC<{
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}> = ({ target, suffix = '', decimals = 0, duration = 1.8 }) => {
  const [displayValue, setDisplayValue] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth cubic ease-out
    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const eased = easeOutCubic(progress);

      setDisplayValue(eased * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, target, duration]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue).toString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      <span className="text-[#9EFFBF] dark:text-[#9EFFBF] ml-0.5">{suffix}</span>
    </span>
  );
};

export const DeveloperMetrics: React.FC = () => {
  const metrics: MetricItem[] = [
    { label: "PROJECTS SHIPPED", target: 14, suffix: "+", sub: "Full-Stack Web & Mobile Apps", code: "SYS_PRJ_COUNT" },
    { label: "TECHNOLOGIES MASTERED", target: 18, suffix: "+", sub: "React, Next.js, Node, Postgres", code: "SYS_TECH_MATRIX" },
    { label: "APIs & ENDPOINTS", target: 35, suffix: "+", sub: "RESTful, JWT, Webhooks", code: "SYS_API_ROUTES" },
    { label: "GIT REPOSITORIES", target: 28, suffix: "+", sub: "Clean Modular Architectures", code: "SYS_GIT_REPOS" },
    { label: "ACTIVE BUILDING", target: 3, suffix: "+ YRS", sub: "Continuous Engineering", code: "SYS_RUNTIME_AGE" },
    { label: "SYSTEM UPTIME AVG", target: 99.9, suffix: "%", decimals: 1, sub: "Resilient Cloud Deployments", code: "SYS_RELIABILITY" },
  ];

  return (
    <section id="metrics" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-16 lg:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#3A3A38]/20 dark:border-white/10 gap-2 font-mono"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1A3C2B] dark:text-[#E5EFE9] font-bold">
            <span className="w-2 h-2 bg-[#9EFFBF] inline-block" />
            <span>07. DEVELOPER METRICS &amp; TELEMETRY</span>
          </div>
          <div className="text-[10px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50">
            RECORDED &amp; VERIFIED // ZERO ARTIFICIAL METRICS
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[#3A3A38]/20 dark:bg-white/10 border border-[#3A3A38]/20 dark:border-white/10">
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-[#121C16] p-5 sm:p-6 flex flex-col justify-between hover:bg-[#FAF9F6] dark:hover:bg-[#16221B] transition-colors relative group"
            >
              <div className="corner-marker cm-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="font-mono text-[9px] uppercase text-[#1A3C2B]/50 dark:text-[#E5EFE9]/50 mb-3 tracking-wider">
                {item.code}
              </div>

              <div className="my-2">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[#1A3C2B] dark:text-white tracking-tight">
                  <CountUpValue
                    target={item.target}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    duration={1.6 + idx * 0.1}
                  />
                </div>
                <div className="font-mono text-[10px] uppercase font-bold text-[#1A3C2B] dark:text-[#9EFFBF] mt-1">
                  {item.label}
                </div>
              </div>

              <div className="font-mono text-[9px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 pt-3 border-t border-[#3A3A38]/10 dark:border-white/10 leading-tight">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

