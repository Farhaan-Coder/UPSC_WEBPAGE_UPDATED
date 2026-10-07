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
    description: 'Solve exam-caliber Prelims questions. Uncover the precise trap behind every mistake with automated elimination logic.',
    tag: 'PRELIMS GS + CSAT',
    subTitle: 'Polity: Parliament Revision Set',
    subMeta: '25 Questions • UPSC 2013-2024 Trends',
  },
  {
    id: 'current-affairs',
    icon: Newspaper,
    title: 'Daily Editorial & GS Mapping',
    description: 'Condense multi-page editorials from The Hindu and Indian Express into 5-minute syllabus-mapped executive summaries.',
    tag: 'DAILY EDITORIAL BRIEF',
    subTitle: 'Urban Flooding & Disaster Mgmt',
    subMeta: 'GS III Syllabus Connect • High-Yield Mains Data',
  },
  {
    id: 'pyqs',
    icon: RotateCcw,
    title: '25-Year Topic-Wise PYQ Intelligence',
    description: 'Decode the examiner mindset. Identify recurring high-yield themes and filter historical questions by subject and trend.',
    tag: 'EXAM TREND ANALYSIS',
    subTitle: 'Modern History: Gandhian Movements',
    subMeta: 'Prelims + Mains Previous Years Questions',
  },
  {
    id: 'smart-notes',
    icon: PenLine,
    title: 'Active Recall & Spaced Repetition',
    description: 'Condense bulky reference textbooks into intelligent flashcards engineered for rapid, long-term retention.',
    tag: 'ACTIVE RECALL LIBRARY',
    subTitle: 'Fundamental Rights & DPSP Matrix',
    subMeta: '18 Spaced Revision Flashcards',
  },
  {
    id: 'ai-assistant',
    icon: Sparkles,
    title: 'Mains Answer Structure Assistant',
    description: 'Generate multi-dimensional 150/250-word answer frameworks complete with constitutional articles, committee citations, and case studies.',
    tag: 'MAINS MENTOR ON DEMAND',
    subTitle: 'Quasi-Federalism in Indian Polity',
    subMeta: 'Structured Framework • 10-Mark Model Answer',
  },
  {
    id: 'progress-tracking',
    icon: BarChart3,
    title: 'Comprehensive Readiness Analytics',
    description: 'Quantify your readiness with clarity. Track GS I-IV coverage, percentile rankings, CSAT speed, and optional milestones in real time.',
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
                className="group bg-white border border-stone-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-stone-300 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Card Top: Icon & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#133026] group-hover:text-[#F59E0B]">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:bg-[#F59E0B] group-hover:text-stone-900 transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mb-6 flex-1">
                  <h3 className="text-lg font-serif font-bold text-[#133026] mb-2 leading-snug group-hover:text-[#183C30] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer with Meta */}
                <div className="pt-4 border-t border-stone-100">
                  <span className="text-[10px] font-bold text-[#133026] tracking-wider uppercase bg-[#EAF1EB] px-2 py-0.5 rounded-md inline-block mb-1.5">
                    {card.tag}
                  </span>
                  <div className="text-xs sm:text-[13px] font-semibold text-stone-900">
                    {card.subTitle}
                  </div>
                  <div className="text-[11px] text-stone-500 font-normal mt-0.5">
                    {card.subMeta}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
