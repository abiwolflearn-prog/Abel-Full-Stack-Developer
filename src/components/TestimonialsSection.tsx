import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  initials: string;
  discBg: string;
  discText: string;
  rating: number;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Abel turned our complex multi-tenant booking requirements into a remarkably fast and stable application. His deep understanding of both database transaction locks and clean frontend UX was instrumental in our launch.",
    author: "Sarah Chen",
    role: "CTO & Co-Founder",
    organization: "WeVentureHub Ecosystem",
    initials: "SC",
    discBg: "#EEF2FF",
    discText: "#4F46E5",
    rating: 5,
  },
  {
    id: "t2",
    quote: "Working with Abel was refreshing. He doesn't just write code blindly; he actively interrogates product assumptions, optimizes PostgreSQL indexes, and delivers polished software well ahead of schedule.",
    author: "Michael Tadesse",
    role: "Lead Academic Coordinator",
    organization: "Educational Assessment Board",
    initials: "MT",
    discBg: "#ECFDF5",
    discText: "#059669",
    rating: 5,
  },
  {
    id: "t3",
    quote: "The mobile evaluation system Abel engineered transformed our student survey response rate from 14% to over 80%. His offline sync architecture performed flawlessly across campus network outages.",
    author: "Elena Rostova",
    role: "Product Manager",
    organization: "Campus Tech Labs",
    initials: "ER",
    discBg: "#FEF3C7",
    discText: "#D97706",
    rating: 5,
  },
  {
    id: "t4",
    quote: "Exceptional architecture discipline. His API schemas and end-to-end type safety made team collaboration completely seamless. A rare engineer who excels equally at systems design and component styling.",
    author: "David Kassa",
    role: "Principal Systems Architect",
    organization: "Distributed Cloud Networks",
    initials: "DK",
    discBg: "#F5F3FF",
    discText: "#7C3AED",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const current = TESTIMONIALS[currentIndex];

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FAFAFA] dark:bg-[#0C120E] border-b border-[#E4E4E7] dark:border-white/10 py-16 sm:py-20 lg:py-24 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================================= */}
        {/* STANDARD INTERACTIVE LAYOUT (Heading & lede left, quote card right)       */}
        {/* ========================================================================= */}
        {!shouldReduceMotion ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Heading, Lede, and Real Button Pagination Dots */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFFFFF] dark:bg-[#121C16] border border-[#E4E4E7] dark:border-white/10 shadow-[0_1px_2px_rgba(9,9,11,0.04)] text-[11px] font-sans font-semibold text-[#4F46E5] dark:text-[#9EFFBF] mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5] dark:bg-[#9EFFBF]" />
                  <span>08 // ENDORSEMENTS</span>
                </div>

                <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#09090B] dark:text-white tracking-tight leading-tight">
                  Trusted by founders and product leaders.
                </h2>

                <p className="mt-4 font-sans font-normal text-base sm:text-lg text-[#71717A] dark:text-[#E5EFE9]/70 leading-relaxed">
                  Real feedback from technical leads, startup founders, and engineering peers who have shipped high-stakes software with me.
                </p>
              </div>

              {/* Dot Pagination Controls (Real buttons with aria-current) */}
              <div className="mt-8 sm:mt-10 flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={t.id}
                      onClick={() => handleSelect(idx)}
                      aria-label={`Go to testimonial ${idx + 1} from ${t.author}`}
                      aria-current={isActive ? "true" : "false"}
                      className={`transition-all duration-300 cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                        isActive
                          ? "w-8 h-2.5 bg-[#4F46E5] dark:bg-[#9EFFBF]"
                          : "w-2.5 h-2.5 bg-[#E4E4E7] dark:bg-white/20 hover:bg-[#71717A]/40"
                      }`}
                      style={{
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  );
                })}

                <span className="ml-3 font-sans font-medium text-xs text-[#71717A] dark:text-[#E5EFE9]/60">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
              </div>
            </motion.div>

            {/* Right Column: Quote Card with Star Rating & Cross-fade animation */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 min-w-0"
            >
              <div className="relative min-h-[290px] sm:min-h-[260px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full bg-[#FFFFFF] dark:bg-[#121C16] border border-[#E4E4E7] dark:border-white/10 rounded-[14px] p-6 sm:p-8 shadow-[0_1px_2px_rgba(9,9,11,0.04)]"
                  >
                    {/* Five Star Rating */}
                    <div className="flex items-center gap-1 mb-5" aria-label={`${current.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote text */}
                    <blockquote className="font-sans font-normal text-base sm:text-lg text-[#09090B] dark:text-[#E5EFE9] leading-relaxed">
                      "{current.quote}"
                    </blockquote>

                    {/* Author Information with Initial-based Avatar (No image dependency) */}
                    <div className="mt-6 pt-5 border-t border-[#E4E4E7] dark:border-white/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-sans font-semibold text-xs select-none"
                          style={{
                            backgroundColor: current.discBg,
                            color: current.discText,
                          }}
                          aria-hidden="true"
                        >
                          {current.initials}
                        </div>
                        <div className="min-w-0">
                          <div className="font-sans font-semibold text-sm text-[#09090B] dark:text-white tracking-tight truncate">
                            {current.author}
                          </div>
                          <div className="font-sans font-normal text-xs text-[#71717A] dark:text-[#E5EFE9]/60 truncate">
                            {current.role} • {current.organization}
                          </div>
                        </div>
                      </div>

                      {/* Accent Verified Tag */}
                      <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 px-2.5 py-0.5 rounded-[8px] bg-[#FAFAFA] dark:bg-[#1A2820] border border-[#E4E4E7] dark:border-white/10 text-[11px] font-sans font-medium text-[#71717A] dark:text-[#E5EFE9]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        Verified Partner
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        ) : (
          /* ========================================================================= */
          /* REDUCED MOTION FALLBACK: Plain readable list/grid, no animation mechanic   */
          /* ========================================================================= */
          <div>
            <div className="max-w-2xl mb-8">
              <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#09090B] dark:text-white tracking-tight leading-tight">
                Trusted by founders and product leaders.
              </h2>
              <p className="mt-2 font-sans font-normal text-base text-[#71717A] dark:text-[#E5EFE9]/70 leading-relaxed">
                Real feedback from technical leads, startup founders, and engineering peers who have shipped high-stakes software with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="bg-[#FFFFFF] dark:bg-[#121C16] border border-[#E4E4E7] dark:border-white/10 rounded-[14px] p-6 shadow-[0_1px_2px_rgba(9,9,11,0.04)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="font-sans font-normal text-base text-[#09090B] dark:text-[#E5EFE9] leading-relaxed mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E4E4E7] dark:border-white/10 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 font-sans font-semibold text-xs"
                      style={{
                        backgroundColor: t.discBg,
                        color: t.discText,
                      }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-sans font-semibold text-sm text-[#09090B] dark:text-white truncate">
                        {t.author}
                      </div>
                      <div className="font-sans font-normal text-xs text-[#71717A] dark:text-[#E5EFE9]/60 truncate">
                        {t.role} • {t.organization}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
