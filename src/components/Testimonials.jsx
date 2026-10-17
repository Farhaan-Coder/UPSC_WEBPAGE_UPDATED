import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionReveal, WordReveal } from './motion/MotionUtils.jsx';

const testimonialsData = [
  {
    id: 1,
    quote: "“I wasted months drowning in dozens of unorganized channels and conflicting PDFs. UPSC ZONE AI's structured daily schedule gave me the calm confidence of finishing core Polity modules and topic-wise PYQs systematically.”",
    initial: 'AS',
    name: 'Ananya S.',
    role: 'Full-Time Aspirant • 2nd Attempt',
    bg: 'bg-emerald-800 text-emerald-100',
    tag: 'Structured daily execution',
  },
  {
    id: 2,
    quote: "“Balancing a 9-to-6 professional job while preparing for CSE felt impossible. The 2-hour daily study sprint and instant rubric feedback on Mains answer writing made my limited study window twice as productive.”",
    initial: 'RV',
    name: 'Rahul V.',
    role: 'Working Professional • 1st Attempt',
    bg: 'bg-amber-700 text-amber-100',
    tag: 'Disciplined 3-hour evening plan',
  },
  {
    id: 3,
    quote: "“In my previous attempt, I struggled with option elimination traps and negative marking. The diagnostic tests highlighted my blind spots in Environment and CSAT comprehension before test day.”",
    initial: 'PM',
    name: 'Priya M.',
    role: 'Returning Aspirant • Prelims Cleared',
    bg: 'bg-teal-800 text-teal-100',
    tag: 'Mastered option elimination',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Auto-play carousel (5s interval), pauses on hover or reduced-motion
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const currentItem = testimonialsData[currentIndex];

  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-10 bg-transparent border-b border-stone-200/60 scroll-mt-20 font-sans" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          {/* Section Header */}
          <div className="mb-8 sm:mb-9 max-w-2xl">
            <span className="text-xs font-bold text-[#133026] tracking-wider block mb-2 uppercase font-sans">
              ASPIRANT STORIES & DISCIPLINE
            </span>
            <WordReveal
              text="Different journeys. One shared pursuit of clarity."
              as="h2"
              className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight mb-2"
            />
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              From dedicated home libraries to late-night study desks across India, see how serious aspirants build unshakeable consistency.
            </p>
          </div>

          {/* Auto-Play Carousel with Pause on Hover & Smooth Slide */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative max-w-3xl mx-auto"
          >
            {/* Carousel Slide Card */}
            <div className="min-h-[260px] sm:min-h-[240px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    {/* 5 Stars Rating & Slide Counter */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#F59E0B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-stone-400">
                        {currentIndex + 1} / {testimonialsData.length}
                      </span>
                    </div>

                    <p className="font-sans text-[15px] sm:text-base text-slate-700 leading-relaxed mb-6 font-normal italic">
                      {currentItem.quote}
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        {/* Clean Initials Avatar Circle */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-xs shrink-0 ${currentItem.bg}`}>
                          {currentItem.initial}
                        </div>
                        <div>
                          <div className="font-sans font-semibold text-slate-900 text-sm">{currentItem.name}</div>
                          <div className="text-xs text-slate-500 font-normal">{currentItem.role}</div>
                        </div>
                      </div>

                      <div className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-medium text-slate-700">
                        {currentItem.tag}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows & Dot Indicators */}
            <div className="flex items-center justify-between mt-6 px-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Active dot stretches into a pill */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx 
                        ? 'w-8 bg-[#133026]' 
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Required Sample Reviews Caption */}
          <p className="text-sm text-slate-400 font-medium text-center mt-6">
            Sample reviews for design purposes. Based on typical preparation workflows of UPSC CSE candidates.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
