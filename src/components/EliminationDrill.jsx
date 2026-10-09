import React, { useState } from 'react';
import { X, RotateCcw, CheckCircle2, AlertTriangle, XCircle, Check } from 'lucide-react';

export const DRILL_CONFIG = {
  headerChip: "Q.1 • Polity • Sample drill",
  question: "Which of the following statements about the Right to Privacy in India is correct?",
  correctId: "B",
  options: [
    {
      id: "A",
      text: "It is an absolute right and cannot be restricted by any law.",
      why: "No fundamental right is absolute; lawful restrictions can apply.",
    },
    {
      id: "B",
      text: "It is protected as part of the right to life and personal liberty under Article 21, subject to lawful and proportionate restrictions.",
      why: "Correct. It flows from Article 21 and Part III, with restrictions that must be lawful, necessary and proportionate.",
    },
    {
      id: "C",
      text: "It is available only to citizens and not to foreigners.",
      why: "Article 21 protects all persons, not only citizens.",
    },
    {
      id: "D",
      text: "It is a Directive Principle that courts cannot enforce.",
      why: "It is a Fundamental Right under Part III and is enforceable by courts.",
    },
  ],
};

export default function EliminationDrill() {
  const [eliminated, setEliminated] = useState(new Set());
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const toggleEliminate = (id) => {
    if (selectedAnswer) return;
    setEliminated((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelectAnswer = (id) => {
    if (eliminated.has(id)) return;
    setSelectedAnswer(id);
  };

  const handleReset = () => {
    setEliminated(new Set());
    setSelectedAnswer(null);
  };

  const remainingCount = DRILL_CONFIG.options.length - eliminated.size;
  const isCorrectEliminated = eliminated.has(DRILL_CONFIG.correctId);
  const wrongEliminatedCount = Array.from(eliminated).filter(
    (id) => id !== DRILL_CONFIG.correctId
  ).length;

  let confidenceLabel = "Low";
  let confidenceColor = "text-stone-700";
  let guessChance = `${Math.round(100 / Math.max(1, remainingCount))}%`;

  if (isCorrectEliminated) {
    confidenceLabel = "Off track";
    confidenceColor = "text-red-600";
    guessChance = "0%";
  } else {
    switch (wrongEliminatedCount) {
      case 1:
        confidenceLabel = "Medium";
        confidenceColor = "text-amber-700";
        break;
      case 2:
        confidenceLabel = "High";
        confidenceColor = "text-emerald-700";
        break;
      case 3:
        confidenceLabel = "Very High";
        confidenceColor = "text-emerald-800 font-extrabold";
        break;
      default:
        confidenceLabel = "Low";
        confidenceColor = "text-stone-700";
    }
  }

  const selectedOptObj = DRILL_CONFIG.options.find((o) => o.id === selectedAnswer);
  const correctOptObj = DRILL_CONFIG.options.find((o) => o.id === DRILL_CONFIG.correctId);

  return (
    <div
      id="sample-drill"
      className="bg-[#FAF6EE] border border-stone-200/90 rounded-2xl p-4 sm:p-5 transition-all duration-300 scroll-mt-24"
    >
      {/* Header Chip & Question */}
      <div className="pb-3 border-b border-stone-200/80 mb-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#133026] text-white text-[11px] font-bold tracking-wide uppercase font-sans">
            {DRILL_CONFIG.headerChip}
          </span>
          <span className="text-[11px] text-stone-500 font-medium">
            Illustrative sample data
          </span>
        </div>
        <p className="font-sans font-semibold text-sm sm:text-base text-slate-900 leading-snug">
          {DRILL_CONFIG.question}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-2.5 mb-4">
        {DRILL_CONFIG.options.map((opt) => {
          const isElim = eliminated.has(opt.id);
          const isCorrect = opt.id === DRILL_CONFIG.correctId;
          const isSelected = selectedAnswer === opt.id;

          // Compute style classes based strictly on state
          let cardStyle = "bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/80 shadow-2xs";
          let badgeStyle = "bg-stone-100 text-stone-700";
          let textStyle = "font-normal text-slate-800";

          if (selectedAnswer) {
            if (isCorrect) {
              // ONLY the correct answer turns green after user selects a final answer
              cardStyle = "bg-emerald-50/90 border-emerald-400 text-emerald-950 shadow-xs ring-1 ring-emerald-400/50";
              badgeStyle = "bg-emerald-700 text-white font-bold";
              textStyle = "font-semibold text-emerald-950";
            } else if (isSelected) {
              // Wrongly chosen answer turns red
              cardStyle = "bg-red-50/90 border-red-300 text-red-950 shadow-xs ring-1 ring-red-300/50";
              badgeStyle = "bg-red-600 text-white font-bold";
              textStyle = "font-medium text-red-950 line-through";
            } else if (isElim) {
              cardStyle = "bg-stone-100/70 border-stone-200/80 opacity-60";
              badgeStyle = "bg-stone-200 text-stone-500";
              textStyle = "line-through text-stone-500";
            } else {
              cardStyle = "bg-stone-50/50 border-stone-200/80 opacity-60";
              badgeStyle = "bg-stone-100 text-stone-400";
              textStyle = "text-stone-500";
            }
          } else if (isElim) {
            if (isCorrect) {
              cardStyle = "bg-amber-50/70 border-amber-300/80";
              badgeStyle = "bg-amber-200 text-amber-800";
              textStyle = "line-through text-amber-900";
            } else {
              cardStyle = "bg-stone-100/70 border-stone-200/80";
              badgeStyle = "bg-stone-200 text-stone-500";
              textStyle = "line-through text-stone-500";
            }
          }

          return (
            <div
              key={opt.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${cardStyle}`}
            >
              <div className="p-3 flex items-start justify-between gap-2.5">
                {/* Selectable Option Row Button */}
                <button
                  type="button"
                  disabled={isElim || !!selectedAnswer}
                  onClick={() => handleSelectAnswer(opt.id)}
                  aria-label={`Select option ${opt.id} as final answer`}
                  className={`flex items-start gap-3 flex-1 text-left cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133026] focus-visible:ring-offset-1 rounded-lg p-0.5 transition-opacity ${
                    isElim ? 'opacity-70' : 'opacity-100'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                  >
                    {opt.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className={`text-xs sm:text-[13px] leading-relaxed ${textStyle}`}>
                      {opt.text}
                    </p>

                    {/* Eliminated Feedback */}
                    {isElim && !selectedAnswer && (
                      <div className="mt-1.5">
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-semibold px-2 py-0.5 rounded-md shadow-2xs">
                            <AlertTriangle className="w-3 h-3 text-amber-700 shrink-0" />
                            Careful - that was the correct option.
                          </span>
                        ) : (
                          <p className="text-[11px] text-stone-500 font-medium leading-tight">
                            {opt.why}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </button>

                {/* Small X Elimination Toggle Button */}
                {!selectedAnswer && (
                  <button
                    type="button"
                    onClick={() => toggleEliminate(opt.id)}
                    aria-label={`Eliminate option ${opt.id}`}
                    aria-pressed={isElim}
                    title={isElim ? `Restore option ${opt.id}` : `Eliminate option ${opt.id}`}
                    className={`p-1.5 rounded-lg border transition-all duration-150 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#133026] focus-visible:ring-offset-1 cursor-pointer min-h-[32px] min-w-[32px] flex items-center justify-center ${
                      isElim
                        ? 'bg-stone-200 border-stone-300 text-stone-700 hover:bg-stone-300'
                        : 'bg-stone-50 border-stone-200/90 text-stone-400 hover:text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {isElim ? (
                      <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" />
                    ) : (
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    )}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Status Bar */}
      <div
        aria-live="polite"
        className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs transition-colors ${
          isCorrectEliminated
            ? 'bg-red-50 border-red-200 text-red-900'
            : 'bg-white border-stone-200 text-slate-700'
        }`}
      >
        <div className="flex items-center gap-2 font-medium">
          <span
            className={`inline-block w-2 h-2 rounded-full shrink-0 ${
              isCorrectEliminated ? 'bg-red-500' : 'bg-emerald-600'
            }`}
          />
          <span>
            {wrongEliminatedCount} {wrongEliminatedCount === 1 ? 'wrong option' : 'wrong options'} eliminated
          </span>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3.5 pt-1 sm:pt-0 border-t sm:border-t-0 border-stone-100">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500">Chance of a correct guess:</span>
            <span className="font-bold text-slate-900">{guessChance}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500">Confidence:</span>
            <span className={`font-bold ${confidenceColor}`}>{confidenceLabel}</span>
          </div>
        </div>
      </div>

      {/* Result Panel (when final answer is selected) */}
      {selectedAnswer && (
        <div
          aria-live="polite"
          className={`mt-4 p-4 rounded-xl border animate-fadeIn transition-all ${
            selectedAnswer === DRILL_CONFIG.correctId
              ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950'
              : 'bg-red-50/90 border-red-300 text-red-950'
          }`}
        >
          <div className="flex items-start gap-3 mb-2.5">
            {selectedAnswer === DRILL_CONFIG.correctId ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <h4 className="font-bold text-sm sm:text-base font-sans">
                {selectedAnswer === DRILL_CONFIG.correctId ? 'Correct!' : 'Not quite.'}
              </h4>
              <div className="text-xs sm:text-sm mt-1 leading-relaxed space-y-1">
                {selectedAnswer === DRILL_CONFIG.correctId ? (
                  <p>{correctOptObj?.why}</p>
                ) : (
                  <>
                    <p className="text-red-900">
                      <strong>Option {selectedAnswer}:</strong> {selectedOptObj?.why}
                    </p>
                    <p className="text-emerald-900 font-medium">
                      <strong>Correct Answer (Option {DRILL_CONFIG.correctId}):</strong> {correctOptObj?.why}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="pt-2.5 mt-2.5 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-[11px] sm:text-xs text-stone-600 italic">
              Prelims has 1/3 negative marking, so smart elimination matters.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#133026] text-white text-xs font-semibold hover:bg-[#1a4235] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#133026] transition-colors cursor-pointer self-start sm:self-auto shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Try again</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
