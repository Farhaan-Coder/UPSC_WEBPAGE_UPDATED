import React from 'react';
import { RotateCw, BookOpen, ArrowUpRight, ArrowRight } from 'lucide-react';

const fieldNotes = [
  {
    id: 'revision-plan',
    icon: RotateCw,
    tag: 'ACTIVE RECALL STRATEGY',
    title: 'How to revise Laxmikanth 5 times before Prelims',
    desc: 'Build a structured 1-7-30 day spaced repetition cycle without letting fresh current affairs pile up.',
    meta: 'Topper Playbook • 5 min read',
  },
  {
    id: 'pyq-playbook',
    icon: BookOpen,
    tag: 'PYQ INTELLIGENCE',
    title: 'Reverse-engineering the UPSC Mindset from 10-Yr PYQs',
    desc: 'How the Commission frames tricky options with extreme keywords and how to identify repeating themes in GS I.',
    meta: 'Prelims Strategy • 8 min read',
  },
];

export default function Insights() {
  return (
    <section className="py-20 lg:py-24 bg-[#EAF1EB]/70 border-b border-stone-200/60" id="resources">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
              EDITORIALS & CURATED FIELD NOTES
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#133026] tracking-tight leading-tight">
              Less information overload. High-yield UPSC insights.
            </h2>
          </div>
          <a
            href="#resources"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#133026] hover:underline transition-colors duration-200"
          >
            <span>Explore all 150+ topic briefs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#F59E0B]" />
          </a>
        </div>

        {/* Insights Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Editorial Highlight Card */}
          <div className="lg:col-span-6 bg-white border border-stone-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 cursor-pointer group">
            <div>
              {/* High-Resolution Dynamic Image Container */}
              <div className="relative h-48 sm:h-56 bg-[#133026] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1000&q=80"
                  alt="Urban environment and infrastructure"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Gradient Overlay for Maximum Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                
                {/* Clean HTML Text Badge Overlay */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="bg-[#F59E0B] text-stone-900 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                    GS III • Disaster Management
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#133026] mb-2.5">
                  <span className="tracking-wider uppercase bg-[#EAF1EB] px-2 py-0.5 rounded">THE SYLLABUS CONNECTION</span>
                  <span className="text-stone-400 font-normal">6 min read</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-[#133026] tracking-tight mb-2.5 group-hover:text-[#183C30] transition-colors">
                  Urban Flooding in Indian Metros: Beyond heavy rainfall
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 font-normal">
                  Connecting wetlands encroachment, storm-water drain design, NDMA guidelines, and the sponge cities model. Features Prelims facts and a 15-mark Mains structure.
                </p>
              </div>
            </div>

            <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
              <span>NDMA Guidelines • AMRUT 2.0 • Sponge Cities</span>
              <ArrowUpRight className="w-4 h-4 text-[#F59E0B] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
            </div>
          </div>

          {/* Field Notes Grid */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            {fieldNotes.map((note) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.id}
                  className="bg-white border border-stone-200/80 rounded-2xl p-6 flex items-stretch gap-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 cursor-pointer flex-1 group"
                >
                  {/* Category Badge */}
                  <div className="w-20 bg-[#133026] rounded-xl p-3 flex flex-col items-center justify-center text-center text-white shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-[#F59E0B] mb-1.5" />
                    <span className="text-[8px] font-bold tracking-wider leading-tight text-[#D7E5DB] uppercase">
                      SANKALP<br />NOTES
                    </span>
                  </div>

                  {/* Note Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-[#133026] tracking-wider block mb-1 uppercase bg-[#EAF1EB] px-2 py-0.5 rounded w-fit">
                        {note.tag}
                      </span>
                      <h3 className="text-base font-sans font-bold text-[#133026] tracking-tight leading-snug mb-1.5 group-hover:text-[#183C30] transition-colors">
                        {note.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed mb-3 font-normal">
                        {note.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-stone-500 border-t border-stone-100 pt-3 font-medium">
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
