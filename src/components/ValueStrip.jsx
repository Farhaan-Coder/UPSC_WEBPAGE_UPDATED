import React from 'react';
import { GitFork, Target, BookOpen } from 'lucide-react';

const valueProps = [
  {
    icon: GitFork,
    title: 'Granular Syllabus Mapping',
    description: 'Track progress across every micro-theme from GS Paper I to GS IV with zero ambiguity.',
  },
  {
    icon: Target,
    title: 'Negative Marking Elimination',
    description: 'Pinpoint recurring knowledge blind spots and eliminate 50:50 option traps systematically.',
  },
  {
    icon: BookOpen,
    title: 'Static & Editorial Sync',
    description: 'Connect daily national current affairs with foundational textbooks and syllabus themes.',
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-[#133026] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white py-14 sm:py-16 border-y border-[#183C30] relative overflow-hidden" aria-label="Core Principles">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 items-start">
          
          {/* Column 1: Heading */}
          <div className="lg:pr-4">
            <span className="text-xs font-bold text-[#F59E0B] tracking-wider block mb-2 uppercase">
              STRATEGIC PREPARATION
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug">
              Focus on outcome-driven learning,<br className="hidden sm:inline" /> not just study hours.
            </h2>
          </div>

          {/* Pillars 2, 3, 4 rendered via DRY .map() */}
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col group p-4 -m-4 rounded-xl transition-all duration-200 hover:bg-white/5 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#F59E0B] mb-3 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#D7E5DB] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
