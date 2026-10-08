import React from 'react';
import { Route, Info } from 'lucide-react';

export const JOURNEY_STEPS = [
  {
    step: 1,
    name: 'Prelims',
    whatItIs: 'Objective MCQ screening test. Marks only decide who qualifies for Mains.',
    helpWith: 'AI mock tests, PYQs, option elimination',
    mappedCardIds: ['prelims'],
  },
  {
    step: 2,
    name: 'Mains',
    whatItIs: 'Descriptive written exam. Its marks count towards your final rank.',
    helpWith: 'Answer evaluator, structure frameworks, optional planning',
    mappedCardIds: ['mains', 'optional'],
  },
  {
    step: 3,
    name: 'Interview',
    whatItIs: 'Personality test with a panel. The last step to selection.',
    helpWith: 'DAF analysis, mock panels, current affairs briefs',
    mappedCardIds: ['interview'],
  },
];

export default function JourneyRoadmapCard({
  activeStep,
  hoveredStep,
  onStepSelect,
  onStepHover,
  onCardMouseEnter,
  onCardMouseLeave,
}) {
  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <div
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
      className="rounded-2xl bg-gradient-to-br from-[#133026] via-[#183C30] to-[#0A1D16] text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-[#1E493B] transition-all duration-300 hover:shadow-2xl h-full"
    >
      <div>
        {/* Top Row: Pill Badge and Line Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
            3 STAGES - 1 ROADMAP
          </span>
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#F59E0B]">
            <Route className="w-4 h-4 stroke-[2.2]" />
          </div>
        </div>

        {/* Title & Sub-line */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight leading-snug mb-1.5">
          Your UPSC journey, stage by stage.
        </h3>
        <p className="text-sm text-[#D7E5DB] leading-relaxed font-normal mb-5">
          Know what each stage tests and how we help you clear it.
        </p>

        {/* Vertical Stepper */}
        <div className="space-y-1.5">
          {JOURNEY_STEPS.map((stepItem, idx) => {
            const isStepActive = currentStep === stepItem.step;
            const isStepPassed = currentStep !== null && currentStep > stepItem.step;
            const isLineFilled = currentStep !== null && currentStep > stepItem.step;

            return (
              <button
                key={stepItem.step}
                type="button"
                onClick={() => onStepSelect(stepItem.step)}
                onMouseEnter={() => onStepHover(stepItem.step)}
                onMouseLeave={() => onStepHover(null)}
                onFocus={() => onStepHover(stepItem.step)}
                onBlur={() => onStepHover(null)}
                aria-pressed={isStepActive}
                aria-controls="stages-grid"
                className={`w-full text-left p-3 sm:p-3.5 rounded-xl transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:ring-offset-2 focus:ring-offset-[#133026] min-h-[44px] flex items-start gap-3.5 relative ${
                  isStepActive 
                    ? 'bg-white/10 shadow-sm border border-white/15' 
                    : 'hover:bg-white/5 border border-transparent'
                }`}
              >
                {/* Left Column: Number Circle & Continuous Vertical Connecting Line */}
                <div className="flex flex-col items-center shrink-0 self-stretch relative">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 z-10 shrink-0 ${
                      isStepActive
                        ? 'bg-[#F59E0B] text-stone-950 font-extrabold ring-4 ring-[#F59E0B]/30 scale-105'
                        : isStepPassed
                        ? 'bg-amber-400 text-stone-950 font-bold'
                        : 'bg-[#133026] text-[#D7E5DB] border-2 border-white/20'
                    }`}
                  >
                    {stepItem.step}
                  </div>

                  {/* Vertical Line with Amber Progress Fill */}
                  {idx < JOURNEY_STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 min-h-[40px] bg-white/15 my-0.5 relative overflow-hidden -mb-4 z-0">
                      <div
                        className={`w-full bg-[#F59E0B] transition-all duration-500 ease-out ${
                          isLineFilled ? 'h-full' : 'h-0'
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Right Column: Stage Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-sans font-bold text-base tracking-tight transition-colors ${
                        isStepActive ? 'text-[#F59E0B]' : 'text-white'
                      }`}
                    >
                      {stepItem.name}
                    </span>
                    {isStepActive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200 bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded-full">
                        Active Stage
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-[#D7E5DB] leading-snug font-normal mt-1">
                    {stepItem.whatItIs}
                  </p>

                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-xs font-semibold text-amber-200">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                      We help with:
                    </span>
                    <span className="text-xs font-medium text-amber-100">
                      {stepItem.helpWith}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Section */}
      <div className="border-t border-white/10 pt-3.5 mt-4">
        {/* Verify these figures against the latest official UPSC notification before submission. */}
        <div className="flex items-start gap-2 text-xs text-[#D7E5DB] font-medium leading-relaxed">
          <Info className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
          <span>Mains + Interview = 2,025 marks. That decides your rank.</span>
        </div>
        <p className="text-[11px] text-stone-400 font-normal mt-1.5 pl-6">
          Click a stage to see its tools
        </p>
      </div>
    </div>
  );
}
