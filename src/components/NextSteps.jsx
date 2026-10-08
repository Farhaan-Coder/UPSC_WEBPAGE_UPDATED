import React from 'react';
import { SlidersHorizontal, Calendar, RotateCw } from 'lucide-react';

const stepsData = [
  {
    step: '01',
    title: 'Set Target Year & Daily Hours',
    description: 'Whether you have 8 full-time study hours or 3 focused hours after office, build an achievable syllabus completion schedule.',
    feature: 'Personalized to your study constraints',
    icon: SlidersHorizontal,
  },
  {
    step: '02',
    title: 'Daily High-Yield Execution',
    description: 'Balance standard foundational textbooks with daily national editorial breakdowns and active recall flashcards.',
    feature: 'No backlogs, no FOMO on materials',
    icon: Calendar,
  },
  {
    step: '03',
    title: 'Mock Drills & Mains Answer Lab',
    description: 'Diagnose option elimination traps in Prelims mocks, submit daily Mains answers for instant rubric evaluation, and improve your score.',
    feature: 'Continuous rank-enhancing feedback',
    icon: RotateCw,
  },
];

export default function NextSteps() {
  return (
    <section className="py-20 lg:py-24 bg-[#EAF1EB]/70 border-b border-stone-200/60" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
              YOUR BATTLE-TESTED ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#133026] tracking-tight leading-tight">
              Your next step doesn't have to be<br className="hidden sm:inline" /> guesswork.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-sm md:text-right leading-relaxed font-normal">
            From Day 1 NCERT basics to cracking the UPSC Civil Services Interview board with confidence.
          </p>
        </div>

        {/* 3 Step Cards with dynamic mapping */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden md:block absolute top-[28px] left-[48px] right-[48px] h-0.5 bg-stone-300 z-0" />

          {stepsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="relative z-10 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl cursor-default group"
              >
                <div>
                  {/* Step Bubble */}
                  <div className="w-12 h-12 rounded-xl bg-[#133026] text-white font-sans font-bold text-base flex items-center justify-center mb-6 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    {item.step}
                  </div>

                  <h3 className="font-sans font-bold text-slate-800 tracking-tight text-lg mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link feature */}
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700 border-t border-slate-100 pt-4">
                  <Icon className="w-4 h-4 text-[#F59E0B]" />
                  <span>{item.feature}</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
