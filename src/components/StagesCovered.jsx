import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, PenTool, BookMarked, MessageSquare } from 'lucide-react';
import JourneyRoadmapCard from './JourneyRoadmapCard';

const stagesData = [
  {
    id: 'prelims',
    tag: 'ELIMINATION & SPEED',
    title: 'Prelims (GS I & CSAT)',
    desc: 'Master option elimination techniques, statement verification drills, and CSAT mental ability with 25-year PYQ patterns.',
    meta: 'GS Paper I • CSAT • 25-Yr Topic-wise PYQs',
    icon: SlidersHorizontal,
  },
  {
    id: 'mains',
    tag: 'DEPTH & MULTI-DIMENSIONALITY',
    title: 'Mains (GS I-IV & Essay)',
    desc: 'Craft clear intro-body-conclusion flows, cite constitutional articles & socio-economic data, and tackle realistic GS IV ethics case studies.',
    meta: 'GS I-IV • Essay • Daily Answer Evaluation',
    icon: PenTool,
  },
  {
    id: 'optional',
    tag: 'THE RANK DECIDER (500 MARKS)',
    title: 'Optional Subjects',
    desc: 'Deep-dive into paper-wise thinkers, recurring question trends, and structured syllabus planning for PSIR, Sociology, Geography, and more.',
    meta: 'PSIR • Sociology • Pub Ad • History • Geography',
    icon: BookMarked,
  },
  {
    id: 'interview',
    tag: 'ADMINISTRATIVE APTITUDE',
    title: 'Personality Test (Interview)',
    desc: 'Line-by-line DAF analysis, personalized state & hobby prompts, contemporary policy debates, and realistic mock board simulations.',
    meta: 'Detailed Application Form (DAF) • Mock Q&A',
    icon: MessageSquare,
  },
];

const STEP_TO_CARD_IDS = {
  1: ['prelims'],
  2: ['mains', 'optional'],
  3: ['interview'],
};

const CARD_TO_STEP = {
  prelims: 1,
  mains: 2,
  optional: 2,
  interview: 3,
};

export default function StagesCovered() {
  const [activeStep, setActiveStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  // Auto-play highlights Step 1, 2, 3 in a loop every 4s unless paused, interacted, or prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || userInteracted || isAutoPlayPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev ? (prev % 3) + 1 : 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [userInteracted, isAutoPlayPaused]);

  const handleStepSelect = (stepNum) => {
    setUserInteracted(true);
    // Clicking again resets everything
    if (activeStep === stepNum) {
      setActiveStep(null);
    } else {
      setActiveStep(stepNum);
    }
  };

  const handleStepHover = (stepNum) => {
    setHoveredStep(stepNum);
  };

  const handleCardMouseEnter = () => {
    setIsAutoPlayPaused(true);
  };

  const handleCardMouseLeave = () => {
    setIsAutoPlayPaused(false);
    setHoveredStep(null);
  };

  const currentDisplayStep = hoveredStep !== null ? hoveredStep : activeStep;
  const activeMappedIds = currentDisplayStep ? STEP_TO_CARD_IDS[currentDisplayStep] || [] : [];

  return (
    <section className="py-20 lg:py-24 bg-[#FDF9F1] border-b border-stone-200/60 font-sans" id="stages">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Split Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase font-sans">
              FROM DAY 1 TO FINAL SELECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#133026] tracking-tight leading-tight">
              One goal. Every stage of UPSC covered.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-sm md:text-right leading-relaxed font-normal font-sans">
            Civil Services is a 3-tier mental marathon spanning 12 months. Your platform grows with you at each stage.
          </p>
        </div>

        {/* Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Roadmap Card */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <JourneyRoadmapCard
              activeStep={activeStep}
              hoveredStep={hoveredStep}
              onStepSelect={handleStepSelect}
              onStepHover={handleStepHover}
              onCardMouseEnter={handleCardMouseEnter}
              onCardMouseLeave={handleCardMouseLeave}
            />
          </div>

          {/* Right Column: Preparation Stages Grid */}
          <div
            id="stages-grid"
            onMouseEnter={handleCardMouseEnter}
            onMouseLeave={handleCardMouseLeave}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch"
          >
            {stagesData.map((stage) => {
              const Icon = stage.icon;
              const isMapped = currentDisplayStep !== null && activeMappedIds.includes(stage.id);
              const isDimmed = currentDisplayStep !== null && !isMapped;

              return (
                <div
                  key={stage.id}
                  onClick={() => handleStepSelect(CARD_TO_STEP[stage.id])}
                  className={`bg-white rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group ${
                    isMapped
                      ? 'border-2 border-[#F59E0B] ring-4 ring-[#F59E0B]/20 shadow-xl -translate-y-1.5 opacity-100 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500'
                      : isDimmed
                      ? 'border border-slate-200/70 opacity-70 shadow-xs translate-y-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300'
                      : 'border border-slate-200/70 opacity-100 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className={`font-sans text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md transition-colors ${
                          isMapped
                            ? 'text-amber-800 bg-amber-100/90'
                            : 'text-slate-500 bg-slate-100/80 group-hover:bg-slate-200/80 group-hover:text-slate-700'
                        }`}
                      >
                        {stage.tag}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                          isMapped
                            ? 'bg-[#133026] text-[#F59E0B]'
                            : 'bg-slate-100 text-slate-600 group-hover:bg-[#133026] group-hover:text-[#F59E0B]'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-sans font-bold text-slate-800 text-lg tracking-tight mb-2 group-hover:text-slate-900 transition-colors">
                      {stage.title}
                    </h3>
                    <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-5 font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-slate-100 text-xs text-slate-500 font-medium font-sans">
                    {stage.meta}
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
