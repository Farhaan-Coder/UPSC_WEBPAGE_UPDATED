import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MobileStickyCta({
  onOpenSignup,
  isModalOpen = false,
  isMobileMenuOpen = false,
}) {
  const { t } = useLanguage();
  const [heroCtaOut, setHeroCtaOut] = useState(false);
  const [bottomInView, setBottomInView] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Observe Hero CTA
    const heroCtaEl = document.getElementById('hero-cta-container');
    let heroObserver;
    if (heroCtaEl) {
      heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // When hero CTA is NOT intersecting, it has scrolled out of view
            setHeroCtaOut(!entry.isIntersecting);
          });
        },
        { threshold: 0.1 }
      );
      heroObserver.observe(heroCtaEl);
    }

    // Observe Final CTA Banner and Footer
    const finalCtaEl = document.getElementById('get-started');
    const footerEl = document.querySelector('footer');
    let bottomObserver;
    if (finalCtaEl || footerEl) {
      bottomObserver = new IntersectionObserver(
        (entries) => {
          const anyIntersecting = entries.some((e) => e.isIntersecting);
          setBottomInView(anyIntersecting);
        },
        { threshold: 0.1 }
      );
      if (finalCtaEl) bottomObserver.observe(finalCtaEl);
      if (footerEl) bottomObserver.observe(footerEl);
    }

    return () => {
      if (heroObserver) heroObserver.disconnect();
      if (bottomObserver) bottomObserver.disconnect();
    };
  }, []);

  const handleScrollToSample = (e) => {
    e?.preventDefault();
    const target = document.getElementById('sample-drill');
    if (target) {
      const navbarHeight = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        target.classList.remove('pulse-amber-active');
        void target.offsetWidth;
        target.classList.add('pulse-amber-active');
        setTimeout(() => {
          target.classList.remove('pulse-amber-active');
        }, 1600);
      }
    }
  };

  // Determine visibility:
  // Must be out of hero view, bottom not in view, and neither modal nor mobile menu open
  const isVisible = heroCtaOut && !bottomInView && !isModalOpen && !isMobileMenuOpen;

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#133026]/95 backdrop-blur-md border-t border-[#1E493B] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-all duration-300"
      role="region"
      aria-label="Quick Action Bar"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenSignup && onOpenSignup()}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] active:from-[#F59E0B] active:to-[#D97706] text-stone-900 font-bold text-xs sm:text-sm py-2.5 px-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer min-h-[44px]"
        >
          <span>{t('hero.primaryCta')}</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={handleScrollToSample}
          className="inline-flex items-center justify-center text-xs font-semibold text-[#F59E0B] hover:text-amber-300 px-3 py-2.5 rounded-lg border border-amber-400/25 bg-white/5 active:bg-white/10 transition-colors cursor-pointer shrink-0 min-h-[44px]"
        >
          <span>Try Drill</span>
        </button>
      </div>
    </div>
  );
}
