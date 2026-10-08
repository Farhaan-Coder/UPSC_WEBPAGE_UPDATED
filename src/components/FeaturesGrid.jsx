import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Newspaper, 
  RotateCcw, 
  PenLine, 
  Sparkles, 
  BarChart3, 
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  HelpCircle
} from 'lucide-react';

export default function FeaturesGrid({ onOpenLogin }) {
  // Interactive mini option elimination widget for Card 1
  const [selectedOption, setSelectedOption] = useState('B');
  const [eliminatedOptions, setEliminatedOptions] = useState(['A', 'C']);

  const toggleEliminate = (optKey) => {
    if (eliminatedOptions.includes(optKey)) {
      setEliminatedOptions(eliminatedOptions.filter(k => k !== optKey));
    } else {
      setEliminatedOptions([...eliminatedOptions, optKey]);
    }
  };

  // Interactive PYQ frequency bars for Card 2
  const pyqFrequency = [
    { subject: 'Polity & Governance', weight: 88, count: '380+ PYQs', color: 'bg-[#133026]' },
    { subject: 'Environment & Ecology', weight: 76, count: '310+ PYQs', color: 'bg-emerald-700' },
    { subject: 'Economy & Development', weight: 68, count: '275+ PYQs', color: 'bg-[#F59E0B]' },
    { subject: 'Modern Indian History', weight: 58, count: '230+ PYQs', color: 'bg-amber-800' },
  ];

  return (
    <section className="py-20 md:py-24 bg-[#EAF1EB]/70 border-b border-stone-200/60 scroll-mt-20" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#133026] tracking-wider block mb-2 uppercase">
              STRATEGIC PREPARATION TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] leading-tight">
              One unified platform.<br />Master Prelims, Mains, and the Interview.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-normal max-w-sm md:text-right leading-relaxed">
            Move beyond scattered materials into a calm preparation ecosystem engineered to maximize your score per study hour.
          </p>
        </div>

        {/* Bento Grid: 2 Large Cards (with Mini UI Previews) + 4 Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* BENTO CARD 1 (Large - 7 cols): AI Mock Tests & Option Elimination with Interactive Widget */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 shadow-2xs">
                    <ClipboardCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200/60 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      PRELIMS GS I + CSAT
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-tight mt-0.5">
                      AI Mock Tests & Option Elimination
                    </h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#F59E0B] group-hover:text-slate-900 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Understand why an option is a distractor. Practice statement verification and eliminate 50:50 traps with instant AI explanation tags.
              </p>

              {/* Mini UI Preview Widget: Option Elimination Simulator */}
              <div className="bg-[#FAF6EE] border border-stone-200/90 rounded-xl p-4 sm:p-5 mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#133026] mb-3 pb-2 border-b border-stone-200/70">
                  <span className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Prelims Drill • Sample Statement Diagnosis</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-medium">Click option to test elimination</span>
                </div>

                <p className="text-xs font-medium text-slate-800 mb-3 leading-snug">
                  "Consider the constitutional mandate for inter-state harmony. Which statement is correct?"
                </p>

                {/* 4 Interactive Statement Options */}
                <div className="space-y-2">
                  {[
                    { key: 'A', text: 'Decisions of the council are legally binding on all states.', trap: 'Extreme keyword trap ("legally binding"). It is recommendatory.' },
                    { key: 'B', text: 'It functions as an advisory body to foster cooperative federalism.', trap: 'Correct statement. Established under Article 263.' },
                    { key: 'C', text: 'It meets mandatorily four times every calendar month.', trap: 'Arbitrary number trap. It meets periodically as convened.' },
                  ].map((opt) => {
                    const isEliminated = eliminatedOptions.includes(opt.key);
                    const isSelected = selectedOption === opt.key;
                    return (
                      <div
                        key={opt.key}
                        onClick={() => {
                          setSelectedOption(opt.key);
                          toggleEliminate(opt.key);
                        }}
                        className={`p-2.5 rounded-lg border text-xs transition-all cursor-pointer flex items-start gap-2.5 ${
                          isEliminated 
                            ? 'bg-rose-50/70 border-rose-200 text-stone-400 line-through' 
                            : isSelected
                            ? 'bg-white border-[#133026] text-slate-900 shadow-xs'
                            : 'bg-white border-stone-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 ${
                          isEliminated 
                            ? 'bg-rose-200 text-rose-700' 
                            : isSelected 
                            ? 'bg-[#133026] text-white' 
                            : 'bg-stone-100 text-stone-600'
                        }`}>
                          {opt.key}
                        </span>
                        <div className="flex-1">
                          <div>{opt.text}</div>
                          {isEliminated && (
                            <div className="text-[10.5px] text-rose-600 font-sans mt-0.5 no-underline font-medium">
                              Eliminated: {opt.trap}
                            </div>
                          )}
                        </div>
                        {isEliminated ? (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        ) : isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Polity & Governance Module • 25 Topic PYQs</span>
              <span className="text-[#133026] font-bold">Interactive Drill Active</span>
            </div>
          </div>

          {/* BENTO CARD 2 (Large - 5 cols): 25-Year PYQ Intelligence with Mini Frequency Chart */}
          <div className="lg:col-span-5 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 shadow-2xs">
                    <RotateCcw className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200/60 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      EXAM TREND RADAR
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-tight mt-0.5">
                      25-Year PYQ Intelligence
                    </h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#F59E0B] group-hover:text-slate-900 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Understand what the Commission truly tests. Categorize recurring question patterns across 25 years of Prelims and Mains.
              </p>

              {/* Mini UI Preview Widget: Subject Frequency Bar Chart */}
              <div className="bg-[#FAF6EE] border border-stone-200/90 rounded-xl p-4 sm:p-5 mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#133026] mb-3 pb-2 border-b border-stone-200/70">
                  <span>Topic Recurrence Index</span>
                  <span className="text-[10px] text-stone-500 font-medium">1999–2024 Trends</span>
                </div>

                <div className="space-y-3">
                  {pyqFrequency.map((bar, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <div className="flex justify-between text-[11px] font-medium text-slate-700">
                        <span>{bar.subject}</span>
                        <span className="font-bold text-[#133026]">{bar.count}</span>
                      </div>
                      <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${bar.color} rounded-full transition-all duration-500`}
                          style={{ width: `${bar.weight}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Mapped to UPSC Syllabus Micro-Themes</span>
              <span className="text-emerald-700 font-bold">100% Verified</span>
            </div>
          </div>

          {/* BENTO CARD 3: Daily Editorial & Syllabus Mapping (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <Newspaper className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                DAILY BRIEF
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Daily Editorial & GS Mapping
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Condense national news into 10-minute syllabus takeaways. Connect issues to GS I, II, and III topics without clutter.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Curated Every Morning • 7:00 AM
            </div>
          </div>

          {/* BENTO CARD 4: Active Recall & Spaced Repetition (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <PenLine className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                RETENTION ENGINE
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Active Recall & Flashcards
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Retain constitutional articles, environmental treaties, and historical timelines right before the forgetting curve hits.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              1-7-30 Day Spaced Cycles
            </div>
          </div>

          {/* BENTO CARD 5: Mains Answer Structure Assistant (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <Sparkles className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                MAINS WRITING
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Answer Structure Assistant
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Overcome blank-page syndrome. Get structured intro-body-conclusion outlines with relevant case laws and data points.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Rubric-Based Evaluation
            </div>
          </div>

          {/* BENTO CARD 6: Comprehensive Readiness Analytics (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <BarChart3 className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                READINESS INDEX
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Readiness Analytics
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Track syllabus completion percentage, mock test accuracy, and active study streaks in one clean overview.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Data-Driven Progress View
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
