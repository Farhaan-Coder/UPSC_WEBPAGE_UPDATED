import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is UPSC ZONE AI suitable for both working professionals and full-time aspirants?",
    answer: "Yes, absolutely. The dynamic daily scheduler features dedicated modes: a 3 to 4-hour focused evening routine for working professionals, and a 6 to 8-hour comprehensive plan for full-time students. It automatically adapts your spaced repetition, reading quotas, and MCQ targets based on your available study bandwidth."
  },
  {
    question: "How does the AI Answer Evaluator analyze Mains answers?",
    answer: "Our evaluation model assesses your answers across standard UPSC scoring dimensions: contextual introduction, multidimensional core body arguments, integration of constitutional articles and commission recommendations, and a balanced way forward. It identifies missing keywords, flags structural gaps, and benchmarks your attempt against rubric standards."
  },
  {
    question: "Are the Prelims mock questions and PYQ banks updated for the latest exam trends?",
    answer: "All question banks, elimination drills, and full-length mocks reflect modern UPSC CSE testing patterns—including paired assertion-reasoning formats, statement-elimination nuances, and interdisciplinary current affairs synthesis across GS Papers I through IV."
  },
  {
    question: "Can I align the preparation schedule with my specific Optional subject?",
    answer: "Yes. When setting up your profile, you can select your Optional subject (PSIR, Geography, Sociology, History, Public Administration, Anthropology, etc.). The study planner reserves dedicated focus blocks for Optional syllabus completion alongside General Studies."
  },
  {
    question: "Is there any financial commitment or credit card required to begin?",
    answer: "Zero financial commitment. You can begin immediately with our full 15-minute diagnostic evaluation, access daily editorial takeaways, plan your daily timetable, and explore sample PYQ elimination drills completely free without entering any payment details."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="pt-8 md:pt-10 pb-16 md:pb-20 bg-[#FDF9F1] border-b border-stone-200/60 font-sans" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-sm font-bold uppercase tracking-widest text-green-800 mb-4 font-sans shadow-2xs">
            <HelpCircle className="w-4 h-4 text-green-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Common questions about UPSC ZONE AI.
          </h2>
          <p className="text-[15px] sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            Everything you need to know about our study pedagogy, answer evaluations, and daily preparation workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200/80 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:bg-stone-50/60"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-stone-900 tracking-tight">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#133026] text-white' : 'text-stone-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed font-normal animate-fadeIn"
                  >
                    <div className="pt-2 border-t border-stone-100">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-8 text-center text-xs text-stone-500">
          Have additional queries about syllabus strategy?{' '}
          <a href="#get-started" className="font-semibold text-[#133026] hover:text-[#F59E0B] underline">
            Start a free diagnostic test
          </a>{' '}
          or talk to our mentoring team.
        </div>

      </div>
    </section>
  );
}
