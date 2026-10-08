import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, BookOpenCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenAuth, onMobileMenuToggle }) {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Inform parent of mobile menu status for sticky CTA
  useEffect(() => {
    if (onMobileMenuToggle) {
      onMobileMenuToggle(mobileMenuOpen);
    }
  }, [mobileMenuOpen, onMobileMenuToggle]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.aiAnswerLab'), href: '#ai-tools' },
    { name: t('nav.dailyTarget'), href: '#preparation' },
    { name: t('nav.editorialNotes'), href: '#resources' },
    { name: t('nav.rankerStories'), href: '#testimonials' },
  ];

  // Scroll detection for backdrop shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section link highlighting
  useEffect(() => {
    const sectionIds = ['features', 'ai-tools', 'ai-assistant', 'preparation', 'resources', 'testimonials'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (id === 'ai-assistant') setActiveSection('ai-tools');
                else setActiveSection(id);
              }
            });
          },
          { rootMargin: '-20% 0px -70% 0px' }
        );
        obs.observe(el);
        observers.push(obs);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FDF9F1]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-0' 
          : 'bg-[#FDF9F1]/80 backdrop-blur-sm border-b border-stone-200/50 py-1'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#133026] rounded-xl p-1"
          aria-label="UPSC ZONE AI Homepage"
        >
          <div className="w-9 h-9 rounded-xl bg-[#133026] flex items-center justify-center text-[#F59E0B] shadow-xs transition-transform duration-300 group-hover:scale-105">
            <BookOpenCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="font-sans font-extrabold text-lg sm:text-xl tracking-tight text-[#133026]">
            UPSC ZONE AI
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                  isActive 
                    ? 'text-[#133026] font-bold' 
                    : 'text-stone-700 hover:text-[#133026]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle: EN | हिं */}
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center p-0.5 rounded-lg bg-stone-200/80 border border-stone-300/70 shrink-0"
          >
            <button
              type="button"
              onClick={() => toggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all min-h-[32px] cursor-pointer ${
                lang === 'en'
                  ? 'bg-white text-[#133026] shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all min-h-[32px] cursor-pointer ${
                lang === 'hi'
                  ? 'bg-[#133026] text-white shadow-2xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              हिं
            </button>
          </div>

          <button
            type="button"
            onClick={() => onOpenAuth ? onOpenAuth('login') : null}
            className="text-sm font-semibold text-stone-700 hover:text-[#133026] px-4 py-2 rounded-xl border border-stone-200/80 hover:border-stone-300 bg-white/70 hover:bg-white transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer active:scale-95"
          >
            {t('nav.login')}
          </button>
          
          <button
            type="button"
            onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-[0_3px_12px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_22px_rgba(245,158,11,0.4)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            <span className="relative">{t('nav.startFreePrep')}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Actions & Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Compact Mobile Language Toggle */}
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center p-0.5 rounded-lg bg-stone-200/80 border border-stone-300/70"
          >
            <button
              type="button"
              onClick={() => toggleLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1.5 min-h-[40px] min-w-[36px] flex items-center justify-center rounded text-xs font-bold ${
                lang === 'en' ? 'bg-white text-[#133026] shadow-2xs' : 'text-stone-600'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => toggleLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`px-2.5 py-1.5 min-h-[40px] min-w-[36px] flex items-center justify-center rounded text-xs font-bold ${
                lang === 'hi' ? 'bg-[#133026] text-white shadow-2xs' : 'text-stone-600'
              }`}
            >
              हिं
            </button>
          </div>

          <button
            type="button"
            onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
            className="text-xs font-bold bg-[#F59E0B] hover:bg-amber-500 text-stone-900 px-3 py-2 rounded-lg shadow-xs transition-all active:scale-95 min-h-[44px] flex items-center"
          >
            {t('nav.startFreePrep')}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-stone-800 hover:text-[#133026] transition-colors duration-200 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-stone-100 cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Scrim */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[64px] bg-black/35 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 md:hidden bg-[#FDF9F1] border-b border-stone-200 px-6 py-5 shadow-2xl animate-fadeIn">
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-semibold text-stone-800 hover:text-[#133026] py-2.5 px-2 rounded-lg hover:bg-stone-100 transition-colors duration-200 min-h-[44px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              {/* Language toggle inside drawer as well */}
              <div className="flex items-center justify-between py-1">
                <span className="text-sm font-medium text-stone-600">Language / भाषा</span>
                <div
                  role="group"
                  aria-label="Language"
                  className="inline-flex items-center p-0.5 rounded-lg bg-stone-200/80 border border-stone-300/70"
                >
                  <button
                    type="button"
                    onClick={() => toggleLang('en')}
                    aria-pressed={lang === 'en'}
                    className={`px-3 py-2 rounded-md text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                      lang === 'en' ? 'bg-white text-[#133026] shadow-2xs' : 'text-stone-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleLang('hi')}
                    aria-pressed={lang === 'hi'}
                    className={`px-3 py-2 rounded-md text-xs font-bold transition-all min-h-[44px] flex items-center justify-center ${
                      lang === 'hi' ? 'bg-[#133026] text-white shadow-2xs' : 'text-stone-600'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAuth) onOpenAuth('login');
                }}
                className="w-full text-center text-sm font-semibold text-stone-800 bg-white border border-stone-200 py-3 rounded-xl shadow-xs transition-colors min-h-[44px]"
              >
                {t('nav.login')}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAuth) onOpenAuth('signup');
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-stone-900 text-sm font-bold py-3 rounded-xl shadow-sm transition-all min-h-[44px]"
              >
                <span>{t('nav.startFreePrep')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
        </>
      )}
    </header>
  );
}
