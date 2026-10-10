import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner({ onOpenAuth }) {
  return (
    <section className="py-20 bg-[#0B1E19] relative overflow-hidden" id="get-started">
      {/* Subtle geometric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#133026_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Accent Bar */}
        <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Your UPSC Journey Starts Today
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          You don't need the perfect plan to begin. Take your first mock, discover your next step, and build momentum with AI.
        </p>

        {/* Action Button & Trust Indicator */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
            className="group inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <span>Start Free Mock Test</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <div className="flex items-center gap-1.5 text-slate-400 text-sm mt-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.2]" />
            <span>No credit card. Just your next step.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
