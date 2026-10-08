import React from 'react';
import { SlidersHorizontal, PenTool, BookMarked, MessageSquare } from 'lucide-react';

const stagesData = [
  {
    id: 'prelims',
    tag: 'ELIMINATION & SPEED',
    title: 'Prelims (GS I & CSAT)',
    desc: 'Master option elimination techniques, statement verification, and CSAT mental ability & comprehension drills.',
    meta: 'GS Paper I • CSAT • 25-Yr Topic-wise PYQs',
    icon: SlidersHorizontal,
  },
  {
    id: 'mains',
    tag: 'DEPTH & MULTI-DIMENSIONALITY',
    title: 'Mains (GS I-IV & Essay)',
    desc: 'Develop intro-body-conclusion flow, incorporate judicial principles & national development data, and solve GS IV Ethics case studies.',
    meta: 'GS I-IV • Essay • Daily Answer Evaluation',
    icon: PenTool,
  },
  {
    id: 'optional',
    tag: 'THE RANK DECIDER (500 MARKS)',
    title: 'Optional Subjects',
    desc: 'Paper-wise thinkers, PYQ trends, and comprehensive syllabus planning for PSIR, Sociology, Geography, History, Anthro & more.',
    meta: 'PSIR • Sociology • Pub Ad • History • Geography',
    icon: BookMarked,
  },
  {
    id: 'interview',
    tag: 'ADMINISTRATIVE APTITUDE',
    title: 'Personality Test (Interview)',
    desc: 'In-depth DAF analysis, state & hobby questionnaire prompts, national policy debates, and mock panel simulations.',
    meta: 'Detailed Application Form (DAF) • Mock Q&A',
    icon: MessageSquare,
  },
];

export default function StagesCovered() {
  return (
    <section className="py-20 lg:py-24 bg-[#FDF9F1] border-b border-stone-200/60" id="stages">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
              FROM DAY 1 TO FINAL SELECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#133026] tracking-tight leading-tight">
              One goal. Every stage of UPSC covered.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-sm md:text-right leading-relaxed font-normal">
            Civil Services is a 3-tier mental marathon spanning 12 months. Your platform grows with you at each stage.
          </p>
        </div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Aspirant Spotlight Card - Original SVG & Gradient Illustration Container */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-gradient-to-br from-[#133026] via-[#183C30] to-[#0A1D16] text-white relative shadow-xl min-h-[420px] flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-[#1E493B] group">
            {/* Background Decorative SVG Graphic */}
            <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="160" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 8" />
                <circle cx="200" cy="200" r="110" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M200 40V360M40 200H360" stroke="#BCD3C3" strokeWidth="0.75" />
              </svg>
            </div>

            {/* Top Illustration Element */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#F59E0B] shadow-inner group-hover:scale-105 transition-transform">
                <BookMarked className="w-7 h-7 stroke-[2]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                Full CSE Cycle Coverage
              </span>
            </div>

            {/* Mid Graphic: Progression Nodes */}
            <div className="relative z-10 my-auto py-6">
              <div className="flex items-center justify-between text-xs font-semibold text-[#D7E5DB] mb-2 px-1">
                <span>Prelims Foundation</span>
                <span>Mains Synthesis</span>
                <span>Interview Board</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-gradient-to-r from-[#F59E0B] via-emerald-400 to-[#F59E0B] rounded-full w-full animate-pulse" />
              </div>
            </div>

            {/* HTML / Tailwind Text Content Overlay */}
            <div className="relative z-10 mt-auto flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#F59E0B] tracking-wider block mb-2 uppercase">
                COMMITTED TO EVERY ASPIRANT'S AMBITION
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight leading-tight mb-2.5">
                From foundation to final selection.
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E5DB] leading-relaxed font-normal">
                Stay consistent through every phase. We provide the strategic roadmap; you bring the dedication.
              </p>
            </div>
          </div>

          {/* Preparation Stages Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stagesData.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="bg-white border border-slate-200/70 rounded-2xl p-6 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 cursor-default group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100/80 rounded-md px-2.5 py-1">
                        {stage.tag}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center transition-colors group-hover:bg-[#133026] group-hover:text-[#F59E0B]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-slate-800 tracking-tight text-base sm:text-lg mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed mb-5 font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 text-xs text-slate-500 font-medium">
                    {stage.meta}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
