import React from 'react';
import { GitFork, Target, BookOpen } from 'lucide-react';

const valueProps = [
  {
    icon: GitFork,
    title: 'Granular Syllabus Mapping',
    description: 'Clear progress tracking across every micro-theme from GS Paper I to GS IV.',
  },
  {
    icon: Target,
    title: 'Negative Marking Elimination',
    description: 'Pinpoint recurring blind spots and eliminate option traps after every sectional mock.',
  },
  {
    icon: BookOpen,
    title: 'Static & Editorial Sync',
    description: 'Seamlessly connect daily national news with NCERTs and standard reference textbooks.',
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-[#133026] text-white py-12 border-y border-[#183C30]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
          
          {/* Column 1: Heading */}
          <div>
            <span className="text-[11px] font-bold text-[#F59E0B] tracking-wider block mb-1.5 uppercase">
              STRATEGIC PREPARATION
            </span>
            <h2 className="text-xl font-sans font-bold text-white tracking-tight leading-snug">
              Focus on outcome-driven learning,<br className="hidden sm:inline" /> not just study hours.
            </h2>
          </div>

          {/* Pillars 2, 3, 4 rendered via DRY .map() */}
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col group p-3 -m-3 rounded-xl transition-all duration-200 hover:bg-white/5 cursor-pointer">
                <div className="mb-2.5 text-[#F59E0B] transition-transform duration-200 group-hover:scale-110">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D7E5DB] leading-relaxed">
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
