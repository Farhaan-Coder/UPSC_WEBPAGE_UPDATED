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
import { PYQ_RANGE, PYQ_TOTAL, pyqThemes } from '../data/pyqSample.js';

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

  // Top 4 frequency items from unified pyqThemes
  const topPyqThemes = pyqThemes.slice(0, 4);

  return (
    <section className="pt-16 md:pt-20 pb-8 md:pb-10 bg-transparent border-b border-stone-200/60 scroll-mt-20" id="features">
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
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-green-50 border border-green-200/60 text-xs font-bold uppercase tracking-wider text-green-800">
                      PRELIMS GS + CSAT
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-tight mt-0.5">
                      Targeted Mock Drills with Elimination Simulator
                    </h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#F59E0B] group-hover:text-slate-900 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Train your instincts for the exam hall. Move beyond blind guesses with structured option elimination, negative-marks diagnosis, and precision speed drills.
              </p>

              {/* Mini UI Preview Widget: Interactive Option Elimination Box */}
              <div className="bg-[#FAF6EE] border border-stone-200/90 rounded-xl p-4 sm:p-5 mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#133026] mb-3 pb-2 border-b border-stone-200/70">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#133026] text-white px-2 py-0.5 rounded text-[11px] font-bold">Q.42</span>
                    <span>Right to Privacy & Art. 21 (Sample Drill)</span>
                  </div>
                  <span className="text-xs text-stone-600 font-medium">Click ✗ to eliminate</span>
                </div>

                <div className="space-y-2 mb-3">
                  {[
                    { key: 'A', text: 'Part III provides absolute protection without legislative limits' },
                    { key: 'B', text: 'Intrinsic part of Art. 21 subject to proportional state action', correct: true },
                    { key: 'C', text: 'Only enforceable against Central Government actions' },
                    { key: 'D', text: 'Requires annual parliamentary reaffirmation' },
                  ].map((opt) => {
                    const isEliminated = eliminatedOptions.includes(opt.key);
                    const isSelected = selectedOption === opt.key;
                    return (
                      <div
                        key={opt.key}
                        className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all duration-150 ${
                          isEliminated 
                            ? 'bg-stone-100/80 border-stone-200 text-stone-400 line-through opacity-60' 
                            : isSelected 
                            ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-medium' 
                            : 'bg-white border-stone-200/80 text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        <div 
                          className="flex items-center gap-2.5 flex-1 cursor-pointer"
                          onClick={() => !isEliminated && setSelectedOption(opt.key)}
                        >
                          <span className={`w-5 h-5 rounded-md flex items-center justify-center font-bold text-xs ${
                            isSelected ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-600'
                          }`}>
                            {opt.key}
                          </span>
                          <span className="truncate">{opt.text}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => toggleEliminate(opt.key)}
                          className={`ml-2 p-1 rounded hover:bg-stone-200/60 transition-colors ${
                            isEliminated ? 'text-red-500 font-bold' : 'text-stone-400 hover:text-stone-700'
                          }`}
                          title={isEliminated ? "Restore option" : "Eliminate distractor"}
                        >
                          {isEliminated ? <RotateCcw className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-stone-600 pt-1">
                  <span>{eliminatedOptions.length} distractors eliminated</span>
                  <span className="text-emerald-700 font-bold">Confidence: High</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Polity & Governance Module • 25 Topic PYQs</span>
              <span className="text-[#133026] font-bold">Sample drill active</span>
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
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200/60 text-xs font-bold uppercase tracking-wider text-amber-800">
                      EXAM TREND RADAR
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-800 tracking-tight mt-0.5">
                      25-Year PYQ Intelligence
                    </h3>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#F59E0B] group-hover:text-slate-900 transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Understand what the Commission tests. Categorize recurring question patterns across 25 years of Prelims and Mains.
              </p>

              {/* Mini UI Preview Widget: Subject Frequency Bar Chart using pyqSample */}
              <div className="bg-[#FAF6EE] border border-stone-200/90 rounded-xl p-4 sm:p-5 mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#133026] mb-3 pb-2 border-b border-stone-200/70">
                  <span>Topic Recurrence Index</span>
                  <div className="flex items-center gap-1.5 text-xs text-stone-600 font-medium">
                    <span>{PYQ_RANGE} Trends</span>
                    <span className="hidden sm:inline">• Illustrative sample data</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {topPyqThemes.map((bar, bIdx) => {
                    const relativeWidth = Math.round((bar.count / topPyqThemes[0].count) * 100);
                    return (
                      <div key={bIdx} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium text-slate-700">
                          <span>{bar.name}</span>
                          <span className="font-bold text-[#133026]">
                            {bar.count} Qs ({bar.share}%)
                          </span>
                        </div>
                        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${bIdx === 0 ? 'bg-[#133026]' : bIdx === 1 ? 'bg-emerald-700' : bIdx === 2 ? 'bg-[#F59E0B]' : 'bg-amber-800'} rounded-full transition-all duration-500`}
                            style={{ width: `${relativeWidth}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span>Mapped to UPSC Syllabus Micro-Themes</span>
              <span className="text-emerald-800 font-bold">Sample mapping</span>
            </div>
          </div>

          {/* BENTO CARD 3: Daily Editorial & Syllabus Mapping (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <Newspaper className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                DAILY BRIEF
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Daily Editorial & GS Mapping
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Condense national news into 10-minute syllabus takeaways. Connect issues to GS I, II, and III topics without clutter.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              Curated Every Morning • 7:00 AM
            </div>
          </div>

          {/* BENTO CARD 4: Active Recall & Spaced Repetition (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <PenLine className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                RETENTION ENGINE
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                Active Recall & Spaced Cards
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Never re-read the same chapter passively. High-yield flashcards schedule your reviews right when memory begins to fade.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              Daily 15-Minute Spaced Intervals
            </div>
          </div>

          {/* BENTO CARD 5: CSAT Speed & Accuracy Drills (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <BarChart3 className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                PAPER II SAFETY
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                CSAT Speed & Accuracy Lab
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Clear the qualifying cutoff with confidence. Daily micro-drills targeting reading comprehension and quantitative reasoning.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              66.7 Marks Qualifying Buffer
            </div>
          </div>

          {/* BENTO CARD 6: Interactive Syllabus Tracker (3 cols) */}
          <div className="md:col-span-1 lg:col-span-3 bg-white border border-slate-200/90 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EAF1EB] text-[#133026] flex items-center justify-center group-hover:bg-[#133026] group-hover:text-[#F59E0B] transition-colors duration-200 mb-4">
                <Sparkles className="w-5 h-5 stroke-[2]" />
              </div>
              <span className="inline-block px-2 py-0.5 rounded bg-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                SYLLABUS COVERAGE
              </span>
              <h4 className="font-sans font-bold text-base text-slate-800 tracking-tight mb-2 group-hover:text-[#133026] transition-colors">
                GS Micro-Theme Checklist
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mb-4">
                Map every standard chapter to its official notification keyword. Track real progress across General Studies I through IV.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              GS I–IV Micro-Topic Granularity
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
