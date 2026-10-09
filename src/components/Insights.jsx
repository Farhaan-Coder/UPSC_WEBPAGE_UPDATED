import React from 'react';
import { BrainCircuit, BarChart3, Scale, ArrowUpRight, ArrowRight } from 'lucide-react';

const fieldNotes = [
  {
    id: 'revision-plan',
    icon: BrainCircuit,
    tag: 'ACTIVE RECALL STRATEGY',
    title: 'How to structure Polity revisions before Prelims',
    desc: 'Build a disciplined 1-7-30 day spaced repetition cycle without letting fresh current affairs pile up.',
    meta: 'Study Framework • 5 min read',
    svgPattern: null,
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
    <section className="pt-10 md:pt-12 pb-16 md:pb-20 bg-transparent border-b border-stone-200/60 scroll-mt-20" id="resources">
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
            {/* Original Inline SVG Illustration: City Skyline, River Drainage & Sponge City Green Belt */}
            <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-[#0A1D16] shrink-0 select-none">
              <svg
                viewBox="0 0 600 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-cover"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0B1E15" />
                    <stop offset="50%" stopColor="#133026" />
                    <stop offset="100%" stopColor="#1E493B" />
                  </linearGradient>

                  <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#183C30" />
                    <stop offset="50%" stopColor="#2A6150" />
                    <stop offset="100%" stopColor="#1E493B" />
                  </linearGradient>

                  <linearGradient id="spongeParkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3A7C67" />
                    <stop offset="100%" stopColor="#133026" />
                  </linearGradient>

                  <pattern id="rainPattern" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
                    <line x1="5" y1="0" x2="5" y2="8" stroke="#BCD3C3" strokeWidth="1.2" strokeOpacity="0.3" strokeLinecap="round" />
                    <line x1="25" y1="15" x2="25" y2="25" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.25" strokeLinecap="round" />
                  </pattern>
                </defs>

                {/* Sky Backdrop */}
                <rect width="600" height="320" fill="url(#skyGrad)" />

                {/* Gentle Rain Overlay */}
                <rect width="600" height="260" fill="url(#rainPattern)" />

                {/* Distant City Skyline Silhouettes */}
                <g fill="#0F281E" opacity="0.85">
                  <rect x="40" y="80" width="36" height="150" rx="2" />
                  <rect x="85" y="60" width="48" height="170" rx="3" />
                  <rect x="142" y="110" width="32" height="120" rx="2" />
                  <rect x="182" y="50" width="42" height="180" rx="3" />
                  <rect x="232" y="90" width="50" height="140" rx="2" />
                  <rect x="290" y="70" width="38" height="160" rx="3" />
                  <rect x="336" y="105" width="44" height="125" rx="2" />
                  <rect x="388" y="45" width="46" height="185" rx="3" />
                  <rect x="442" y="85" width="34" height="145" rx="2" />
                  <rect x="484" y="65" width="42" height="165" rx="3" />
                  <rect x="534" y="100" width="38" height="130" rx="2" />
                </g>

                {/* Midground City Skyline with Windows */}
                <g fill="#16382C">
                  <rect x="65" y="100" width="44" height="130" rx="2" />
                  <rect x="117" y="75" width="54" height="155" rx="2" />
                  <rect x="205" y="70" width="48" height="160" rx="2" />
                  <rect x="260" y="115" width="38" height="115" rx="2" />
                  <rect x="306" y="90" width="56" height="140" rx="2" />
                  <rect x="410" y="65" width="50" height="165" rx="2" />
                  <rect x="506" y="85" width="46" height="145" rx="2" />

                  {/* Window Dot Grids */}
                  <circle cx="132" cy="95" r="1.5" fill="#F59E0B" opacity="0.8" />
                  <circle cx="148" cy="95" r="1.5" fill="#F59E0B" opacity="0.6" />
                  <circle cx="132" cy="115" r="1.5" fill="#FDF9F1" opacity="0.7" />
                  <circle cx="148" cy="115" r="1.5" fill="#F59E0B" opacity="0.9" />
                  <circle cx="220" cy="85" r="1.5" fill="#F59E0B" opacity="0.85" />
                  <circle cx="236" cy="85" r="1.5" fill="#FDF9F1" opacity="0.5" />
                  <circle cx="220" cy="105" r="1.5" fill="#F59E0B" opacity="0.7" />
                  <circle cx="324" cy="110" r="1.5" fill="#F59E0B" opacity="0.8" />
                  <circle cx="340" cy="110" r="1.5" fill="#FDF9F1" opacity="0.6" />
                  <circle cx="426" cy="80" r="1.5" fill="#F59E0B" opacity="0.9" />
                  <circle cx="444" cy="80" r="1.5" fill="#FDF9F1" opacity="0.7" />
                  <circle cx="426" cy="100" r="1.5" fill="#F59E0B" opacity="0.7" />
                </g>

                {/* Sponge City Bio-Retention Green Belt (Wetlands & Park) */}
                <path
                  d="M0 220 Q120 190 260 215 T520 200 Q560 202 600 210 L600 270 L0 270 Z"
                  fill="url(#spongeParkGrad)"
                />

                {/* Stylized Sponge City Trees & Vegetation */}
                <circle cx="90" cy="205" r="10" fill="#3A7C67" />
                <circle cx="90" cy="200" r="7" fill="#F59E0B" opacity="0.8" />
                <rect x="88" y="210" width="4" height="12" fill="#0F281E" rx="1" />

                <circle cx="135" cy="202" r="12" fill="#2A6150" />
                <circle cx="135" cy="198" r="8" fill="#3A7C67" />
                <rect x="133" y="210" width="4" height="14" fill="#0F281E" rx="1" />

                <circle cx="470" cy="200" r="11" fill="#3A7C67" />
                <circle cx="470" cy="195" r="8" fill="#F59E0B" opacity="0.7" />
                <rect x="468" y="208" width="4" height="12" fill="#0F281E" rx="1" />

                <circle cx="510" cy="204" r="9" fill="#2A6150" />
                <rect x="508" y="210" width="4" height="10" fill="#0F281E" rx="1" />

                {/* Urban Watershed / River with Animated Wave Pattern */}
                <g className="animate-slow-wave">
                  <path
                    d="M-20 245 C80 230 160 265 260 250 C360 235 440 270 540 255 C580 250 630 252 650 255 L650 320 L-20 320 Z"
                    fill="url(#riverGrad)"
                    opacity="0.95"
                  />
                  <path
                    d="M-20 258 C80 245 160 278 260 265 C360 252 440 282 540 270 C580 265 630 268 650 270"
                    stroke="#BCD3C3"
                    strokeWidth="2.5"
                    strokeOpacity="0.45"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M-20 275 C90 265 170 292 270 280 C370 268 450 295 550 285 C590 280 630 282 650 285"
                    stroke="#F59E0B"
                    strokeWidth="1.8"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Water Retention & Percolation Infiltration Nodes */}
                <circle cx="180" cy="265" r="3" fill="#BCD3C3" opacity="0.6" />
                <circle cx="340" cy="275" r="2.5" fill="#F59E0B" opacity="0.5" />
                <circle cx="460" cy="270" r="3" fill="#BCD3C3" opacity="0.7" />
              </svg>

              {/* Contrast Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* Bottom Overlay: Orange Badge & White Text */}
              <div className="absolute bottom-4 left-5 right-5 z-10 flex flex-col items-start pointer-events-none">
                <span className="bg-[#F59E0B] text-stone-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider px-2.5 py-1 rounded shadow-md inline-block mb-1.5">
                  GS III - Disaster Management
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white/95 tracking-wide drop-shadow-md">
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
                  {/* Semantic Icon Card: Rounded dark green container with vibrant yellow/gold icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#133026] via-[#1a4235] to-[#0c1f18] flex items-center justify-center text-center text-white shrink-0 shadow-sm relative overflow-hidden group-hover:scale-105 transition-all duration-300 border border-[#1e493b]">
                    {note.svgPattern}
                    <Icon className="w-6 h-6 text-yellow-400 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Note Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-xs font-bold text-[#133026] tracking-wider block mb-1 uppercase bg-[#EAF1EB] px-2 py-0.5 rounded w-fit">
                        {note.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-sans font-bold text-[#133026] tracking-tight leading-snug mb-1 group-hover:text-[#183C30] transition-colors">
                        {note.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-2 font-normal">
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
