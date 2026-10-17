import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 22 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-20 md:bottom-6 right-5 sm:right-6 z-40 p-3 rounded-full bg-[#133026] text-white hover:bg-[#183C30] shadow-xl hover:shadow-2xl border border-emerald-800 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#F59E0B]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
