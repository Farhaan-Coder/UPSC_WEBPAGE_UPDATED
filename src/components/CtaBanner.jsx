import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionReveal, WordReveal } from './motion/MotionUtils.jsx';

const sparkles = [
  { top: '18%', left: '12%', size: 'w-1.5 h-1.5', delay: 0 },
  { top: '25%', right: '15%', size: 'w-2 h-2', delay: 1.2 },
  { top: '65%', left: '18%', size: 'w-2 h-2', delay: 0.8 },
  { top: '75%', right: '20%', size: 'w-1.5 h-1.5', delay: 2.1 },
  { top: '40%', left: '8%', size: 'w-1 h-1', delay: 1.8 },
  { top: '50%', right: '10%', size: 'w-1 h-1', delay: 0.5 },
  { top: '82%', left: '42%', size: 'w-1.5 h-1.5', delay: 2.5 },
];

export default function CtaBanner({ onOpenAuth }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      className="py-20 bg-[#0B1E19] bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] relative overflow-hidden" 
      id="get-started"
    >
      {/* Slow animated background gradients */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          opacity: [0.35, 0.65, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-amber-500/20 via-emerald-600/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : {
          opacity: [0.3, 0.6, 0.3],
          scale: [1.05, 1, 1.05],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-orange-500/20 via-emerald-700/15 to-transparent rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating gold sparkle dots */}
      {!shouldReduceMotion && sparkles.map((s, i) => (
        <motion.div
          key={i}
          style={{ top: s.top, left: s.left, right: s.right }}
          animate={{
            y: [-6, 6, -6],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.9, 1.25, 0.9],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
          className={`absolute ${s.size} rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.8)] pointer-events-none`}
        />
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <SectionReveal>
          {/* Accent Bar */}
          <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6" />

          {/* Heading */}
          <WordReveal
            text="Your UPSC Journey Starts Today"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
          />

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            You don't need the perfect plan to begin. Take your first mock, discover your next step, and build momentum with AI.
          </p>

          {/* Action Button & Trust Indicator */}
          <div className="mt-8 flex flex-col items-center">
            <motion.button
              type="button"
              onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
              animate={shouldReduceMotion ? {} : {
                scale: [1, 1.025, 1],
                boxShadow: [
                  '0 10px 25px -5px rgba(249,115,22,0.3)',
                  '0 10px 35px 2px rgba(249,115,22,0.55)',
                  '0 10px 25px -5px rgba(249,115,22,0.3)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              <span>Start Free Mock Test</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>

            <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-4">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.2]" />
              <span>No credit card. Just your next step.</span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
