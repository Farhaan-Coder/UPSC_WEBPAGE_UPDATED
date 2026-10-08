import React from 'react';
import { RotateCw, BarChart3, Scale, ArrowUpRight, ArrowRight, CloudRain } from 'lucide-react';

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
          <div className="lg:col-span-6 bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 cursor-pointer group">
            <div>
              {/* Original SVG Illustration Container */}
              <div className="relative h-48 sm:h-56 bg-gradient-to-br from-[#133026] via-[#1A4235] to-[#0D241C] overflow-hidden flex items-center justify-center p-6">
                {/* SVG Visual Graphic */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <path d="M0,100 C150,180 250,20 400,100 L400,200 L0,200 Z" fill="#F59E0B" />
                  <path d="M0,130 C120,60 280,180 400,120 L400,200 L0,200 Z" fill="#BCD3C3" />
                </svg>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#F59E0B] mb-2 group-hover:scale-110 transition-transform">
                    <CloudRain className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-semibold text-white/90">Urban Watersheds & Infrastructure Resilience</span>
                </div>

                {/* Clean HTML Text Badge Overlay */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="bg-[#F59E0B] text-stone-900 font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    GS III • Disaster Management
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs font-bold text-[#133026] mb-2.5">
                  <span className="tracking-wider uppercase bg-[#EAF1EB] px-2 py-0.5 rounded">THE SYLLABUS CONNECTION</span>
                  <span className="text-stone-500 font-normal">6 min read</span>
                </div>
                <h3 className="text-lg sm:text-xl font-sans font-bold text-[#133026] tracking-tight mb-2.5 group-hover:text-[#183C30] transition-colors">
                  Urban Flooding in Metros: Beyond heavy rainfall
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal">
                  Connecting wetlands conservation, stormwater engineering, national disaster frameworks, and ecological sponge city solutions. Features Prelims facts and a 15-mark Mains structure.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
              <span>Disaster Resilience • Urban Planning • Climate Adaptation</span>
              <ArrowUpRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
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
