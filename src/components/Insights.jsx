import React from 'react';
import { RotateCw, BarChart3, Scale, ArrowUpRight, ArrowRight } from 'lucide-react';

const fieldNotes = [
  {
    id: 'revision-plan',
    icon: RotateCw,
    tag: 'ACTIVE RECALL STRATEGY',
    title: 'How to structure Polity revisions before Prelims',
    desc: 'Build a disciplined 1-7-30 day spaced repetition cycle without letting fresh current affairs pile up.',
    meta: 'Study Framework • 5 min read',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="24" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" fill="none" />
        <circle cx="32" cy="32" r="14" stroke="#FFFFFF" strokeWidth="0.75" fill="none" />
      </svg>
    ),
  },
  {
    id: 'pyq-playbook',
    icon: BarChart3,
    tag: 'PYQ INTELLIGENCE',
    title: 'Deconstructing Exam Framing from 25-Year PYQs',
    desc: 'How questions frame distractors with extreme qualifiers and how to spot repeating syllabus themes.',
    meta: 'Prelims Strategy • 8 min read',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 64 64">
        <path d="M12 48 L24 36 L36 42 L52 20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="52" cy="20" r="3" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    id: 'polity-notes',
    icon: Scale,
    tag: 'POLITY & GOVERNANCE',
    title: 'Seventh Schedule & Fiscal Autonomy Frameworks',
    desc: 'Constitutional articles, Finance Commission formulas, and inter-state mechanisms in one structured brief.',
    meta: 'Mains GS II • 6 min read',
    svgPattern: (
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 64 64">
        <line x1="16" y1="20" x2="48" y2="20" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="32" y1="20" x2="32" y2="48" stroke="#FFFFFF" strokeWidth="1.5" />
        <line x1="20" y1="48" x2="44" y2="48" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Insights() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#EAF1EB]/70 border-b border-stone-200/60 scroll-mt-20" id="resources">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <span className="text-xs font-bold text-[#133026] tracking-wider block mb-2 uppercase">
              EDITORIALS & CURATED FIELD NOTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] tracking-tight leading-tight">
              Less information overload. High-yield UPSC insights.
            </h2>
          </div>
          <a
            href="#features"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#133026] hover:underline transition-colors duration-200"
          >
            <span>Explore all topic briefs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#F59E0B]" />
          </a>
        </div>

        {/* Insights Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Editorial Highlight Card */}
          <div className="lg:col-span-6 bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-stone-300 cursor-pointer group">
            {/* Premium Image Header */}
            <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-slate-900 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80"
                alt="Urban Watersheds & Infrastructure Resilience"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/assets/urban_flooding.png';
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Smooth dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Bottom Overlay: Orange Badge & White Text */}
              <div className="absolute bottom-4 left-5 right-5 z-10 flex flex-col items-start">
                <span className="bg-[#F59E0B] text-stone-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded shadow-md inline-block mb-1.5">
                  GS III • Disaster Management
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/95 tracking-wide drop-shadow-md">
                  Urban Watersheds & Infrastructure Resilience
                </span>
              </div>
            </div>

            {/* Content Body: Distributes evenly so footer is pushed to bottom without empty void */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-[#133026] mb-3">
                  <span className="tracking-wider uppercase bg-[#EAF1EB] px-2.5 py-1 rounded font-semibold text-[11px]">
                    THE SYLLABUS CONNECTION
                  </span>
                  <span className="text-slate-500 font-normal text-xs">6 min read</span>
                </div>
                <h3 className="font-sans font-bold text-slate-900 text-lg md:text-xl tracking-tight mb-2.5 group-hover:text-[#183C30] transition-colors leading-snug">
                  Urban Flooding in Metros: Beyond heavy rainfall
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed font-normal">
                  Connecting wetlands conservation, stormwater engineering, national disaster frameworks, and ecological sponge city solutions. Features Prelims facts and a 15-mark Mains structure.
                </p>
              </div>

              {/* Modern Footer Tags & Arrow: Naturally pushed to bottom with crisp border */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3 mt-6">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                    Disaster Resilience
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                    Urban Planning
                  </span>
                  <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs font-medium">
                    Climate Adaptation
                  </span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#133026] group-hover:scale-110 transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Field Notes Grid with Original Inline SVG Illustration Tiles */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
            {fieldNotes.map((note, idx) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.id}
                  className="bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 flex items-stretch gap-4 sm:gap-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-stone-300 cursor-pointer flex-1 group"
                >
                  {/* Original SVG Illustration Card: 56-72px rounded dark-green tile with amber icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#133026] via-[#1a4235] to-[#0c1f18] flex flex-col items-center justify-center text-center text-white shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform duration-300 border border-[#1e493b]">
                    {note.svgPattern}
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B] relative z-10" />
                  </div>

                  {/* Note Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-xs font-bold text-[#133026] tracking-wider block mb-1 uppercase bg-[#EAF1EB] px-2 py-0.5 rounded w-fit">
                        {note.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-sans font-bold text-[#133026] tracking-tight leading-snug mb-1 group-hover:text-[#183C30] transition-colors truncate">
                        {note.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-2 font-normal line-clamp-2">
                        {note.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-stone-500 border-t border-stone-100 pt-2 font-medium">
                      <span>{note.meta}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
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
