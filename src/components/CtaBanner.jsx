import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#FDF9F1]" id="get-started">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#133026] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#183C30]">
          
          {/* Concentric background rings */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-0 top-0 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Banner Copy */}
          <div className="relative z-10 max-w-lg">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] tracking-wider mb-3 uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 fill-[#F59E0B]" />
              <span>ACCELERATE YOUR JOURNEY TO LBSNAA</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight leading-tight mb-3">
              Your ambition deserves a<br className="hidden sm:inline" /> smarter, disciplined plan.
            </h2>
            <p className="text-sm sm:text-base text-[#D7E5DB] leading-relaxed font-normal">
              Start with a 15-minute diagnostic test to identify your GS strengths, negative marks vulnerabilities, and get a personalized 2026/27 roadmap.
            </p>
          </div>

          {/* Call to Action Actions */}
          <div className="relative z-10 flex flex-col items-start md:items-center gap-3.5">
            <a
              href="#get-started"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-[0_4px_18px_rgba(245,158,11,0.32)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.5)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
              <span className="relative">Start Free Daily Prep</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
            <a
              href="#dashboard-demo"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-[#D7E5DB] hover:text-white transition-colors duration-200"
            >
              <span>View 7-day preparation demo</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
            <span className="text-[11px] text-[#D7E5DB]/70 font-normal">
              Free to start • No credit card required • Aligned with CSE 2026
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
