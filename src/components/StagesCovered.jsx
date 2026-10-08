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
    desc: 'Develop intro-body-conclusion flow, incorporate SC verdicts & NITI Aayog data, and solve GS IV Ethics case studies.',
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
              FROM DAY 1 TO LBSNAA MUSSOORIE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] leading-tight">
              One goal. Every stage of UPSC covered.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-sm md:text-right leading-relaxed font-normal">
            Civil Services is a 3-tier mental marathon spanning 12 months. Your platform grows with you at each stage.
          </p>
        </div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Aspirant Spotlight Card - Dynamic High-Resolution Image Container */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-[#133026] text-white relative shadow-xl min-h-[420px] flex flex-col justify-end transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer group border border-[#183C30]">
            {/* High-Resolution Placeholder Image (Text-free, ready for custom HD asset) */}
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80" 
              alt="UPSC Aspirant study desk environment"
              className="w-full h-full object-cover rounded-2xl absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for Maximum Text Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[#0F281E]/60 to-transparent pointer-events-none" />

            {/* HTML / Tailwind Text Content Overlay */}
            <div className="relative z-10 p-6 sm:p-8 mt-auto flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#F59E0B] tracking-wider block mb-2 uppercase">
                COMMITTED TO EVERY ASPIRANT'S AMBITION
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight mb-2.5">
                From foundational preparation to the academy halls of LBSNAA.
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
