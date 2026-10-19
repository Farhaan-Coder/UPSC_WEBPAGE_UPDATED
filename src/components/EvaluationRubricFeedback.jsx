import React from 'react';
import { 
  Check, 
  Plus, 
  PenLine, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

/**
 * Editorial & Handcrafted UPSC Mains Evaluation Component
 * 
 * Refined with Senior Typography standards:
 * - Editorial weight & tighter tracking on the question
 * - Explicit score micro-typography (dark achieved score vs muted total score)
 * - Fully rounded pill keywords with ultra-subtle missing states
 * - Elegant examiner's remarks note with delicate emerald-400 left accent line
 * - Generous p-6 md:p-8 padding & diffused shadow
 */
export default function EvaluationRubricFeedback({
  tag = "GS II MAINS EVALUATION",
  question = "Evaluate the role of the Finance Commission in balancing fiscal federalism.",
  score = "6.5",
  maxScore = "10",
  scoreLabel = "Evaluation Score",
  subScores = [
    { title: "Introduction", achieved: "1.5", total: "2.0", note: "Clear Article citation", status: "emerald" },
    { title: "Core Body Arguments", achieved: "3.5", total: "5.0", note: "Good cooperative points", status: "amber" },
    { title: "Way Forward", achieved: "1.5", total: "3.0", note: "Needs institutional reform", status: "rose" },
  ],
  includedKeywords = [
    "Article 280 Mandate (Included)",
    "Vertical Devolution 41% (Included)",
  ],
  missingKeywords = [
    "Missing: Horizontal Equity Criteria",
    "Missing: Cess & Surcharge Erosion",
  ],
  feedback = "Strong contextual opening with balanced arguments. To jump from 6.5 to 8.0, incorporate a simple 3-tier flowchart illustrating statutory grants under Article 275 versus tax sharing.",
  feedbackTitle = "Examiner's Remarks",
  syllabusNote = "Aligned with the latest UPSC CSE syllabus",
  commandStatus = "Command Center Active",
  embedded = false,
  onAddKeyword = null,
}) {
  const content = (
    <div className="p-6 md:p-8 space-y-7 animate-fadeIn font-sans">
      
      {/* 1. Header: Soft Top Badge, Editorial Question Typography & Clear Score Hierarchy */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 pb-6 border-b border-slate-100">
        <div className="space-y-2.5 max-w-xl">
          {/* Subtle Thematic Badge */}
          <span className="inline-block bg-orange-50 text-orange-700 font-semibold px-3 py-1 rounded-md text-xs tracking-wide">
            {tag}
          </span>
          {/* Editorial Question Typography */}
          <h4 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 leading-snug">
            Question: &ldquo;{question}&rdquo;
          </h4>
        </div>

        {/* Clear Score Visual Hierarchy */}
        <div className="shrink-0 flex items-center justify-between sm:flex-col sm:items-end bg-slate-50/70 ring-1 ring-slate-900/5 rounded-xl px-4 py-2.5 min-w-[130px]">
          <div className="flex items-baseline gap-1">
            <span className="font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              {score}
            </span>
            <span className="text-slate-400 font-normal text-sm sm:text-base">
              / {maxScore}
            </span>
          </div>
          <div className="text-xs font-semibold text-emerald-700 mt-0.5">
            {scoreLabel}
          </div>
        </div>
      </div>

      {/* 2. Sub-score Cards: Score Micro-Typography (Achieved vs Total) + Soft Fills (No Harsh Borders) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {subScores.map((item, index) => {
          const noteColor = 
            item.status === 'emerald'
              ? 'text-emerald-700'
              : item.status === 'amber'
              ? 'text-amber-700'
              : 'text-rose-600';

          // Explicit differentiation of achieved score from total score
          const achieved = item.achieved || (item.score ? item.score.split('/')[0]?.trim() : '0');
          const total = item.total || (item.score ? item.score.split('/')[1]?.trim() : '0');

          return (
            <div 
              key={index}
              className="bg-slate-50/70 shadow-sm ring-1 ring-slate-900/5 rounded-xl p-4 sm:p-5 text-center transition-all duration-200 flex flex-col justify-between"
            >
              <div className="text-xs font-medium text-slate-500 tracking-tight">
                {item.title}
              </div>
              
              {/* Score Micro-Typography: bold dark achieved vs soft smaller denominator */}
              <div className="flex items-baseline justify-center my-2">
                <span className="text-2xl font-bold text-slate-800 tracking-tight">
                  {achieved}
                </span>
                <span className="text-sm font-medium text-slate-400 ml-1">
                  / {total}
                </span>
              </div>

              <div className={`text-xs font-semibold ${noteColor}`}>
                {item.note}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Refined Keyword Tags: Fully Rounded Pills + Ultra-Subtle Inactive States */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-700 tracking-tight flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            Keywords to Integrate (Rubric standard):
          </span>
          <span className="text-slate-400 font-normal hidden sm:inline">
            Commonly used keywords
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-0.5">
          {/* Included Keywords: Rounded-full Pills */}
          {includedKeywords.map((kw, i) => (
            <span
              key={`inc-${i}`}
              className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-full px-4 py-1.5 text-sm font-medium shadow-2xs"
            >
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
              <span>{kw}</span>
            </span>
          ))}

          {/* Missing Keywords: Ultra-Subtle Inactive Pills */}
          {missingKeywords.map((kw, i) => (
            <button
              key={`miss-${i}`}
              type="button"
              onClick={() => onAddKeyword && onAddKeyword(kw)}
              className="inline-flex items-center gap-2 bg-slate-50/50 text-slate-500 border border-slate-100 hover:bg-slate-100 transition-colors rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2]" />
              <span>{kw}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Examiner's Remarks: Delicate Left Accent Line (border-l-2 border-emerald-400) + Generous p-6 */}
      <div className="bg-emerald-50/40 rounded-xl rounded-l-none border-l-2 border-emerald-400 p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-emerald-100/70 text-emerald-800 flex items-center justify-center shrink-0">
              <PenLine className="w-3.5 h-3.5" />
            </div>
            <h5 className="text-sm font-bold tracking-wide text-slate-800">
              {feedbackTitle}
            </h5>
          </div>
          <span className="text-xs font-medium text-slate-400 hidden sm:inline-block">
            Mains Answer Audit
          </span>
        </div>

        {/* Generous breathing room, normal readable text */}
        <p className="text-sm leading-relaxed text-slate-700 font-normal">
          {feedback}
        </p>
      </div>

    </div>
  );

  if (embedded) {
    return content;
  }

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden font-sans transition-all">
      {content}

      {/* Bottom Status Bar */}
      <div className="px-6 md:px-8 py-3.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-stone-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="font-medium">{syllabusNote}</span>
        </div>
        <span className="font-semibold text-[#133026] flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          {commandStatus}
        </span>
      </div>
    </div>
  );
}
