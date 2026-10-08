import React from 'react';
import { 
  ClipboardCheck, 
  Newspaper, 
  RotateCcw, 
  PenLine, 
  Sparkles, 
  BarChart3, 
  ArrowUpRight 
} from 'lucide-react';

const featureCards = [
  {
    id: 'mock-tests',
    icon: ClipboardCheck,
    title: 'AI Mock Tests & Option Elimination',
    description: 'Practice real exam-level Prelims questions with guided explanations. Understand why you picked the wrong option and master the art of elimination.',
    tag: 'PRELIMS GS + CSAT',
    subTitle: 'Polity: Parliament Revision Set',
    subMeta: '25 Questions • UPSC 2013-2024 Trends',
  },
  {
    id: 'current-affairs',
    icon: Newspaper,
    title: 'Daily Editorial & GS Mapping',
    description: 'Stop spending three hours on the newspaper. Get crisp, syllabus-mapped takeaways from The Hindu and Indian Express in just 10 focused minutes.',
    tag: 'DAILY EDITORIAL BRIEF',
    subTitle: 'Urban Flooding & Disaster Mgmt',
    subMeta: 'GS III Syllabus Connect • High-Yield Mains Data',
  },
  {
    id: 'pyqs',
    icon: RotateCcw,
    title: '25-Year Topic-Wise PYQ Intelligence',
    description: 'Understand what the examiner really tests. Explore past 25 years of questions categorized by topic so you know exactly where to invest your energy.',
    tag: 'EXAM TREND ANALYSIS',
    subTitle: 'Modern History: Gandhian Movements',
    subMeta: 'Prelims + Mains Previous Years Questions',
  },
  {
    id: 'smart-notes',
    icon: PenLine,
    title: 'Active Recall & Spaced Repetition',
    description: 'Never forget Laxmikanth or Spectrum again. Review bite-sized flashcards timed to refresh your memory right before you are about to forget.',
    tag: 'ACTIVE RECALL LIBRARY',
    subTitle: 'Fundamental Rights & DPSP Matrix',
    subMeta: '18 Spaced Revision Flashcards',
  },
  {
    id: 'ai-assistant',
    icon: Sparkles,
    title: 'Mains Answer Structure Assistant',
    description: 'Overcome blank-page syndrome during answer writing. Get proven introduction-body-conclusion frameworks backed by relevant articles, committees, and data.',
    tag: 'MAINS MENTOR ON DEMAND',
    subTitle: 'Quasi-Federalism in Indian Polity',
    subMeta: 'Structured Framework • 10-Mark Model Answer',
  },
  {
    id: 'progress-tracking',
    icon: BarChart3,
    title: 'Comprehensive Readiness Analytics',
    description: 'Know where you stand without the guesswork. Track your syllabus completion, mock test percentiles, and revision streaks in one calm dashboard.',
    tag: 'REAL PERFORMANCE DATA',
    subTitle: 'Aspirant Readiness Index',
    subMeta: 'GS Covered: 78% • CSAT Speed: Optimal',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 md:py-24 bg-[#EAF1EB]/70 border-b border-stone-200/60" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
              STRATEGIC PREPARATION TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] leading-tight">
              One unified platform.<br />Master Prelims, Mains, and the Interview.
            </h2>
          </div>
          <p className="text-sm text-stone-600 font-normal max-w-sm md:text-right leading-relaxed">
            Move beyond crowded coaching classrooms into a personalized preparation ecosystem engineered to maximize your rank.
          </p>
        </div>

        {/* 3x2 Grid of Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Card Top: Icon & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#133026] group-hover:text-[#F59E0B]">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#F59E0B] group-hover:text-slate-900 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content with proper vertical breathing room */}
                <div className="space-y-3 mb-6 flex-1">
                  <h3 className="font-sans font-semibold text-lg text-slate-800 tracking-tight group-hover:text-[#133026] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer with Meta */}
                <div className="pt-4.5 border-t border-slate-100 mt-auto flex flex-col items-start">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-green-50/80 border border-green-200/50 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-green-800">
                    {card.tag}
                  </span>
                  <h4 className="font-sans font-semibold text-sm sm:text-base text-slate-800 leading-tight mt-3">
                    {card.subTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                    {card.subMeta}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
