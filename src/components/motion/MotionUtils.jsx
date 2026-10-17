import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';

// Reusable scroll reveal wrapper for sections
export function SectionReveal({ children, className = '', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Reusable word-by-word reveal for headings
export function WordReveal({ text, className = '', as = 'span', delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(' ');
  const Tag = motion[as] || motion.span;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {word}{i !== words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Tag>
  );
}

// Stagger container for card grids
export function StaggerGrid({ children, className = '', staggerDelay = 0.08 }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered card that lifts 6px with deeper shadow & gold glow
export function StaggerCard({ children, className = '', hoverLift = true, onClick }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
      }}
      whileHover={
        shouldReduceMotion || !hoverLift
          ? undefined
          : {
              y: -6,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(245, 158, 11, 0.4)',
              transition: { duration: 0.25, ease: 'easeOut' }
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth count-up component
export function CountUp({ end, duration = 1.2, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setVal(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, end, shouldReduceMotion]);

  useEffect(() => {
    if (!hasStarted || shouldReduceMotion) return;
    let startTimestamp = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = startVal + (end - startVal) * easedProgress;
      setVal(currentVal);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration, shouldReduceMotion]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

// Confetti launcher with reduced-motion respect
export function triggerConfetti(origin = { x: 0.5, y: 0.6 }) {
  if (typeof window === 'undefined') return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  try {
    confetti({
      particleCount: 35,
      spread: 55,
      origin,
      colors: ['#F59E0B', '#10B981', '#133026', '#FBBF24', '#059669'],
      disableForReducedMotion: true,
      zIndex: 9999,
    });
  } catch (err) {
    // ignore in testing environments without canvas
  }
}

// Framer motion interactive button props
export const motionButtonProps = {
  whileHover: { scale: 1.03, transition: { duration: 0.2, ease: 'easeOut' } },
  whileTap: { scale: 0.97, transition: { duration: 0.1 } },
};
