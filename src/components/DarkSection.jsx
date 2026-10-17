import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Scale, 
  PenTool, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Plus,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { SectionReveal, WordReveal, motionButtonProps } from './motion/MotionUtils.jsx';

const darkBullets = [
  {
    icon: MessageSquare,
    title: 'Instant Doubt Resolution at Any Hour',
    desc: 'Break down complex provisions from standard Polity references, Environment PYQs, or daily national editorials without waiting for scheduled doubts.',
  },
  {
    icon: Scale,
    title: 'Multi-Dimensional Mains Frameworks',
    desc: 'Structure answers using PESTLE (Political, Economic, Social, Technological, Legal, Environmental) angles to satisfy every dimension of the question.',
  },
  {
    icon: PenTool,
    title: 'Constitutional Precedents & Reports',
    desc: 'Automatically integrate relevant commission recommendations, Administrative Reforms Commission insights, and landmark judicial principles into your arguments.',
  },
];

const tabContentMap = {
  concept: {
    target: 'Score Target: 9.5 / 15',
    summary: 'Scholars often characterize the Indian framework as "quasi-federal with a unitary bias". Here is an evaluated 3-part Mains structure:',
    steps: [
      {
        num: '01',
        heading: 'Federal Foundations (Basic Structure)',
        body: 'Written Constitution, clear Seventh Schedule distribution of legislative powers, and judicial review safeguards.',
      },
      {
        num: '02',
        heading: 'Unitary Tilt for National Integrity',
        body: 'Single integrated judiciary, All-India Services (Art. 312), and emergency powers (Art. 352/356) establish Union primacy in exceptional circumstances.',
      },
      {
        num: '03',
        heading: 'Cooperative & Competitive Federalism',
        body: 'Inter-State Council mechanisms, GST Council consensus model, and performance-linked fiscal transfers.',
      },
    ],
    reference: 'Standard Polity Reference; Inter-State Council Reports; Article 246 & 356.',
  },
  answer: {
    target: '15-Mark Structure Blueprint',
    summary: 'High-scoring 3-stage Mains answer framework designed to cover institutional, legal, and operational dimensions:',
    steps: [
      {
        num: '01',
        heading: 'Introduction: Conceptual Anchor (30 words)',
        body: 'Define "quasi-federal" character citing K.C. Wheare & B.R. Ambedkar; quote Article 1 ("Union of States").',
      },
      {
        num: '02',
        heading: 'Body: Asymmetry & Centralizing Tendencies (170 words)',
        body: 'Contrast Seventh Schedule federal division with emergency powers (Arts. 352, 356) and appointment of Governors.',
      },
      {
        num: '03',
        heading: 'Way Forward & Commission Recommendations (50 words)',
        body: 'Incorporate Sarkaria Commission (1988) on Art. 356 and Punchhi Commission (2010) on cooperative federal dispute resolution.',
      },
    ],
    reference: 'Sarkaria Commission (1988); Punchhi Commission (2010); S.R. Bommai v. Union of India (1994).',
  },
  revise: {
    target: 'Opening Hook & Definition',
    summary: 'Model opening lines designed to establish intellectual depth within the first 30 seconds of evaluation:',
    steps: [
      {
        num: '01',
        heading: 'Constitutional Assembly Perspective',
        body: '"The Indian Constitution is federal in form, but unitary in spirit." — Dr. B.R. Ambedkar highlighting unity amid diversity.',
      },
      {
        num: '02',
        heading: 'Granville Austin Formulation',
        body: '"The Constitution was designed to produce a strong central government without depriving states of their constitutional vitality."',
      },
      {
        num: '03',
        heading: 'Contemporary Federalism Synthesis',
        body: 'Shift from classic bargaining federalism to cooperative and competitive federalism anchored in fiscal transparency and NITI Aayog.',
      },
    ],
    reference: 'Granville Austin, "The Indian Constitution: Cornerstone of a Nation"; Constituent Assembly Debates.',
  },
};

const tabsData = [
  { id: 'concept', label: 'Concept Breakdown' },
  { id: 'answer', label: '15-Mark Framework' },
  { id: 'revise', label: 'Model Intro' },
];

export default function DarkSection({ onOpenLogin }) {
  const [activeTab, setActiveTab] = useState('concept');
  const [promptInput, setPromptInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const [typedSummaryLength, setTypedSummaryLength] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const currentTabContent = tabContentMap[activeTab] || tabContentMap.concept;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    }
  }, []);

  // Typewriter effect for AI breakdown text when tab changes
  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedSummaryLength(currentTabContent.summary.length);
      return;
    }
    setTypedSummaryLength(0);
    let idx = 0;
    const interval = setInterval(() => {
      idx += 2;
      if (idx >= currentTabContent.summary.length) {
        setTypedSummaryLength(currentTabContent.summary.length);
        clearInterval(interval);
      } else {
        setTypedSummaryLength(idx);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [activeTab, shouldReduceMotion, currentTabContent.summary]);

  const handleMouseMove = (e) => {
    if (isTouchDevice || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePromptSubmit = (e) => {
    if (e) e.preventDefault();
    if (isGenerating) return;
    setIsGenerating(true);
    setInputSubmitted(false);

    setTimeout(() => {
      setIsGenerating(false);
      setInputSubmitted(true);
    }, 1500);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="py-20 lg:py-28 bg-[#133026] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white relative overflow-hidden scroll-mt-20" 
      id="ai-tools"
    >
      {/* Anchor for #ai-assistant */}
      <div id="ai-assistant" className="absolute -top-20" />

      {/* Subtle moving dot/grid backdrop pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none animate-slow-wave" />

      {/* Cursor tracking faint gold radial glow on desktop */}
      {!isTouchDevice && !shouldReduceMotion && mousePos.x >= 0 && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-200"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.09), transparent 70%)`
          }}
        />
      )}

      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Section Copy */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-[#F59E0B] tracking-wider block mb-3 uppercase">
                24/7 AI UPSC MENTOR & MAINS LAB
              </span>
              <WordReveal
                text="Not just answers. The art of UPSC Mains Answer Writing."
                as="h2"
                className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-4"
              />
              <p className="text-sm sm:text-base text-[#D7E5DB] leading-relaxed mb-8 max-w-md font-normal">
                From tackling nuanced GS II constitutional dilemmas to articulating multi-dimensional GS IV Ethics case studies, bridge the gap between reading reference material and scoring higher in Mains.
              </p>

              {/* Core Capabilities */}
            <div className="space-y-6 mb-8">
              {darkBullets.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 text-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-[15px] font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#D7E5DB] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onOpenLogin}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-amber-300 transition-colors duration-200"
            >
              <span>Explore AI Answer Evaluation demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Answer Lab Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-stone-900 shadow-2xl max-w-lg mx-auto lg:ml-auto border border-stone-200 relative">
              
              {/* Sample data label */}
              <div className="absolute top-2 right-4 text-[10px] text-stone-600 font-medium tracking-wide">
                Sample data for demonstration
              </div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#EAF1EB] flex items-center justify-center text-[#133026]">
                    <Sparkles className="w-5 h-5 fill-[#133026]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base font-sans font-bold text-slate-800 tracking-tight">
                      UPSC ZONE AI • Answer Lab
                    </div>
                    <div className="text-xs text-slate-500 font-normal">
                      AI feedback on structure, content & keywords
                    </div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-600 bg-slate-100/90 rounded-md px-2.5 py-1">
                  GS II • Indian Polity
                </span>
              </div>

              {/* Filter Tabs - Equal Width Segmented Control */}
              <div className="grid grid-cols-3 gap-2 w-full mb-4" role="tablist">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-center text-center text-[11px] sm:text-[13px] md:text-sm px-1.5 sm:px-3 py-2.5 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                      activeTab === tab.id
                        ? 'bg-[#133026] text-white shadow-xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* User Prompt Box */}
              <div className="bg-[#FBFDFB] border border-stone-200/90 rounded-xl p-3.5 mb-4">
                <span className="text-[10px] font-bold text-slate-500 tracking-wider block mb-1">
                  YOU (ASPIRANT QUESTION)
                </span>
                <p className="text-xs sm:text-[13px] font-medium text-slate-900 leading-relaxed">
                  "Why is India characterized as a 'quasi-federal' system with a unitary tilt? Frame a 15-mark answer with constitutional provisions and commission recommendations."
                </p>
              </div>

              {/* AI Response Area with smooth cross-fade tab transition & typewriter effect */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab} 
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#133026] tracking-wider block uppercase">
                      UPSC ZONE AI STRUCTURED BREAKDOWN
                    </span>
                    <span className="text-xs font-semibold text-[#133026] bg-[#EAF1EB] px-2.5 py-0.5 rounded-full">
                      {currentTabContent.target}
                    </span>
                  </div>
                  
                  {/* Typewriter text with blinking cursor */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal min-h-[38px]">
                    {currentTabContent.summary.slice(0, typedSummaryLength)}
                    {typedSummaryLength < currentTabContent.summary.length && (
                      <span className="inline-block w-1.5 h-3.5 bg-orange-500 ml-0.5 animate-pulse align-middle" />
                    )}
                  </p>

                  {/* Structured Answer Breakdown */}
                  <div className="space-y-2.5 my-3">
                    {currentTabContent.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <span className="text-xs font-bold text-[#133026] shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#EAF1EB] flex items-center justify-center">
                          {step.num}
                        </span>
                        <div>
                          <strong className="text-xs sm:text-[13px] font-sans font-bold text-slate-900 block">
                            {step.heading}
                          </strong>
                          <p className="text-xs text-slate-600 leading-relaxed font-normal">
                            {step.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Reference Sources */}
                  <div className="bg-[#EAF1EB] border border-[#133026]/10 rounded-xl p-3 flex items-center gap-2.5 text-xs text-[#133026]">
                    <BookOpen className="w-4 h-4 text-[#133026] shrink-0" />
                    <span>
                      <strong>Recommended Study Reference:</strong> {currentTabContent.reference}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Question Input form - Single Seamless Pill */}
              <form 
                onSubmit={handlePromptSubmit} 
                className="mt-4 flex items-center w-full bg-white border border-slate-300 rounded-full p-1 pl-4 shadow-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 transition-all"
              >
                <input
                  type="text"
                  value={promptInput}
                  disabled={isGenerating}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder='Ask: "Add a crisp 25-word conclusion on constitutional morality"'
                  className="bg-transparent border-none outline-none focus:ring-0 focus:outline-none flex-1 w-full text-xs sm:text-sm text-slate-700 placeholder:text-stone-400 disabled:opacity-60 disabled:cursor-not-allowed pr-2"
                />
                <motion.button 
                  {...motionButtonProps}
                  type="submit" 
                  disabled={isGenerating}
                  aria-label="Generate sample AI answer breakdown"
                  className="w-8 h-8 rounded-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white flex items-center justify-center shrink-0 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  )}
                </motion.button>
              </form>

              {/* AI Generating Indicator */}
              {isGenerating && (
                <div className="mt-2.5 text-[11px] text-amber-800 bg-amber-50/90 border border-amber-200/80 rounded-lg p-2.5 text-center flex items-center justify-center gap-2 animate-fadeIn shadow-2xs">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600 shrink-0" />
                  <span className="font-medium">Synthesizing Mains evaluation rubric</span>
                  <span className="inline-flex gap-1 items-center ml-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce"></span>
                  </span>
                </div>
              )}

              {/* Sample Response Generated with Smooth Reveal */}
              {inputSubmitted && !isGenerating && (
                <div className="mt-2.5 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200/70 rounded-lg p-2.5 text-center flex items-center justify-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-500 animate-response-reveal shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Sample response generated:</strong> Conclusion framed using constitutional morality framework!
                  </span>
                </div>
              )}

            </div>

            <p className="text-center text-xs text-[#D7E5DB]/80 mt-3.5 font-normal">
              Sample analysis for demonstration. AI feedback is illustrative.
            </p>
          </div>

        </div>
        </SectionReveal>
      </div>
    </section>
  );
}
