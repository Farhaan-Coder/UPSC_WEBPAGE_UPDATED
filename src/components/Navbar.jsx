import React, { useState } from 'react';
import { ArrowRight, Menu, X, BookOpenCheck } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'AI Mentorship', href: '#ai-tools' },
  { name: 'Daily Target', href: '#preparation' },
  { name: 'Editorial Insights', href: '#resources' },
  { name: 'Ranker Stories', href: '#testimonials' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FDF9F1]/90 backdrop-blur-md border-b border-stone-200/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#133026] flex items-center justify-center text-[#F59E0B] shadow-xs transition-transform duration-300 group-hover:scale-105">
            <BookOpenCheck className="w-5 h-5 stroke-[2.2]" />
          </div>
          <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#133026] transition-colors duration-200">
            UPSC ZONE
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-700 hover:text-[#133026] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href="#login"
            className="text-sm font-semibold text-stone-700 hover:text-[#133026] px-4 py-2 rounded-xl border border-stone-200/80 hover:border-stone-300 bg-white/60 hover:bg-white transition-all duration-200 shadow-2xs hover:shadow-xs"
          >
            Aspirant Login
          </a>
          <a
            href="#get-started"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-[0_3px_12px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_22px_rgba(245,158,11,0.4)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            <span className="relative">Start Free Prep</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="#get-started"
            className="text-xs font-bold bg-[#F59E0B] hover:bg-amber-500 text-stone-900 px-3.5 py-1.5 rounded-lg shadow-xs transition-all active:scale-95"
          >
            Start Free
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-800 hover:text-[#133026] transition-colors duration-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDF9F1] border-b border-stone-200 px-6 py-5 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-[#133026] py-1 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-stone-800 hover:text-[#133026] py-1 transition-colors duration-200"
              >
                Aspirant Login
              </a>
              <a
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-amber-500 text-stone-900 text-sm font-bold py-2.5 rounded-lg shadow-sm transition-all active:scale-95"
              >
                <span>Start Free Prep</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
