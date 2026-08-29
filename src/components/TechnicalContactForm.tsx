import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechnicalContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#1A3C2B', '#9EFFBF', '#FF8C69', '#F4D35E']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full border-b border-[#3A3A38]/20 dark:border-white/10 bg-[#F7F7F5] dark:bg-[#0C120E] py-20 lg:py-28 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#1A3C2B] dark:text-[#E5EFE9] mb-3">
            <span className="w-1.5 h-3 bg-[#FF8C69]" />
            <span>10. INITIATE CONTACT // TRANSMISSION</span>
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-6xl text-[#1A3C2B] dark:text-white uppercase tracking-tight mb-4">
            Have an idea worth building?
          </h2>
          <p className="font-mono text-xs sm:text-sm uppercase tracking-wide text-[#1A3C2B]/70 dark:text-[#E5EFE9]/70">
            “Let's turn it into something people can actually use.”
          </p>
        </motion.div>

        {/* Quick Channel Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <button
            onClick={handleCopyEmail}
            className="border border-[#1A3C2B] dark:border-[#9EFFBF] bg-white dark:bg-[#121C16] px-4 py-2 font-mono text-xs uppercase text-[#1A3C2B] dark:text-[#E5EFE9] inline-flex items-center gap-2 hover:bg-[#1A3C2B] dark:hover:bg-[#9EFFBF] hover:text-white dark:hover:text-[#0C120E] transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#9EFFBF] dark:text-[#0C120E]" /> : <Copy className="w-3.5 h-3.5 text-[#1A3C2B] dark:text-[#9EFFBF]" />}
            <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : `EMAIL: ${PORTFOLIO_DATA.profile.email}`}</span>
          </button>

          <a
            href={PORTFOLIO_DATA.profile.github}
            target="_blank"
            rel="noreferrer"
            className="border border-[#3A3A38]/30 dark:border-white/20 bg-white dark:bg-[#121C16] px-4 py-2 font-mono text-xs uppercase text-[#1A3C2B] dark:text-[#E5EFE9] inline-flex items-center gap-2 hover:border-[#1A3C2B] dark:hover:border-[#9EFFBF] hover:text-[#1A3C2B] dark:hover:text-[#9EFFBF] transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GITHUB</span>
          </a>

          <a
            href={PORTFOLIO_DATA.profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="border border-[#3A3A38]/30 dark:border-white/20 bg-white dark:bg-[#121C16] px-4 py-2 font-mono text-xs uppercase text-[#1A3C2B] dark:text-[#E5EFE9] inline-flex items-center gap-2 hover:border-[#1A3C2B] dark:hover:border-[#9EFFBF] hover:text-[#1A3C2B] dark:hover:text-[#9EFFBF] transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
          </a>
        </motion.div>

        {/* Technical Form CTA Container: Centered 640px Wide Form Box */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[640px] mx-auto bg-[#F7F7F5] dark:bg-[#121C16] border border-[#3A3A38]/20 dark:border-white/10 p-8 sm:p-12 transition-colors duration-300"
        >
          
          {/* Four L-Shaped Corner Markers */}
          <div className="corner-marker cm-tl" />
          <div className="corner-marker cm-tr" />
          <div className="corner-marker cm-bl" />
          <div className="corner-marker cm-br" />

          {/* Form Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#3A3A38]/15 dark:border-white/10 font-mono text-[10px] uppercase text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60">
            <span>FORM_ID: TRANSMIT_MESSAGE</span>
            <span>ENCRYPTED &amp; DIRECT</span>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 bg-[#1A3C2B] dark:bg-[#9EFFBF] text-[#9EFFBF] dark:text-[#0C120E] flex items-center justify-center mx-auto font-bold text-xl">
                ✓
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase text-[#1A3C2B] dark:text-white">
                Transmission Received.
              </h3>
              <p className="font-mono text-xs text-[#1A3C2B]/80 dark:text-[#E5EFE9]/80 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out, {formData.name}. I will review your message and reply via {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 border border-[#1A3C2B] dark:border-[#9EFFBF] px-4 py-2 font-mono text-xs uppercase text-[#1A3C2B] dark:text-[#9EFFBF] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field: Name */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-1.5">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-white dark:bg-[#1A2820] border border-[#3A3A38]/30 dark:border-white/20 px-4 py-3 font-mono text-xs text-[#1A3C2B] dark:text-white placeholder-[#1A3C2B]/40 dark:placeholder-[#E5EFE9]/40 focus:outline-hidden focus:border-[#1A3C2B] dark:focus:border-[#9EFFBF] rounded-none transition-colors"
                />
              </div>

              {/* Field: Email */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-1.5">
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-white dark:bg-[#1A2820] border border-[#3A3A38]/30 dark:border-white/20 px-4 py-3 font-mono text-xs text-[#1A3C2B] dark:text-white placeholder-[#1A3C2B]/40 dark:placeholder-[#E5EFE9]/40 focus:outline-hidden focus:border-[#1A3C2B] dark:focus:border-[#9EFFBF] rounded-none transition-colors"
                />
              </div>

              {/* Field: Project / Subject */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-1.5">
                  PROJECT / SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Full-Stack Web App / Mobile MVP / Contract"
                  className="w-full bg-white dark:bg-[#1A2820] border border-[#3A3A38]/30 dark:border-white/20 px-4 py-3 font-mono text-xs text-[#1A3C2B] dark:text-white placeholder-[#1A3C2B]/40 dark:placeholder-[#E5EFE9]/40 focus:outline-hidden focus:border-[#1A3C2B] dark:focus:border-[#9EFFBF] rounded-none transition-colors"
                />
              </div>

              {/* Field: Message */}
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[#1A3C2B] dark:text-[#E5EFE9] font-bold mb-1.5">
                  MESSAGE / SCOPE *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your product requirements, timeline, and architectural goals..."
                  className="w-full bg-white dark:bg-[#1A2820] border border-[#3A3A38]/30 dark:border-white/20 px-4 py-3 font-mono text-xs text-[#1A3C2B] dark:text-white placeholder-[#1A3C2B]/40 dark:placeholder-[#E5EFE9]/40 focus:outline-hidden focus:border-[#1A3C2B] dark:focus:border-[#9EFFBF] rounded-none resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1A3C2B] dark:bg-[#9EFFBF] text-white dark:text-[#0C120E] py-4 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#12281D] dark:hover:bg-[#85e4a8] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#9EFFBF] dark:text-[#0C120E]" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>

            </form>
          )}

          {/* Footer of Form Card */}
          <div className="mt-6 pt-4 border-t border-[#3A3A38]/15 dark:border-white/10 flex items-center justify-between font-mono text-[9px] text-[#1A3C2B]/60 dark:text-[#E5EFE9]/60 uppercase">
            <span>DIRECT INBOX DISPATCH</span>
            <span>RESPONSES WITHIN 24 HOURS</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
