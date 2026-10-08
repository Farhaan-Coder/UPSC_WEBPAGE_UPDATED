import React, { useState } from 'react';
import { 
  MessageSquare, 
  Scale, 
  PenTool, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ArrowUp,
  CheckCircle2
} from 'lucide-react';

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

const structuredSteps = [
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
];

const tabsData = [
  { id: 'concept', label: 'Concept Breakdown' },
  { id: 'answer', label: '15-Mark Answer Framework' },
  { id: 'revise', label: 'PYQ & Model Intro/Conclusion' },
];

export default function DarkSection({ onOpenLogin }) {
  const [activeTab, setActiveTab] = useState('concept');
  const [promptInput, setPromptInput] = useState('');
  const [inputSubmitted, setInputSubmitted] = useState(false);

  const handlePromptSubmit = (e) => {
    e.preventDefault();
    if (promptInput.trim()) {
      setInputSubmitted(true);
      setTimeout(() => setInputSubmitted(false), 3500);
    }
  };

  return (
    <section 
      className="py-20 lg:py-28 bg-[#133026] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white relative overflow-hidden scroll-mt-20" 
      id="ai-tools"
    >
      {/* Anchor for #ai-assistant */}
      <div id="ai-assistant" className="absolute -top-20" />

      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Section Copy */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-[#F59E0B] tracking-wider block mb-3 uppercase">
              24/7 AI UPSC MENTOR & MAINS LAB
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
              Not just answers. The art of UPSC Mains Answer Writing.
            </h2>
            <p className="text-sm sm:text-base text-[#D7E5DB] leading-relaxed mb-8 max-w-md font-normal">
              From tackling nuanced GS II constitutional dilemmas to articulating multi-dimensional GS IV Ethics case studies, bridge the gap between reading reference material and scoring 120+ in Mains.
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

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1" role="tablist">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
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

              {/* AI Response Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#133026] tracking-wider block uppercase">
                    UPSC ZONE AI STRUCTURED BREAKDOWN
                  </span>
                  <span className="text-xs font-semibold text-[#133026] bg-[#EAF1EB] px-2.5 py-0.5 rounded-full">
                    Score Target: 9.5 / 15
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Scholars often characterize the Indian framework as <em>"quasi-federal with a unitary bias"</em>. Here is an evaluated 3-part Mains structure:
                </p>

                {/* Structured Answer Breakdown */}
                <div className="space-y-2.5 my-3">
                  {structuredSteps.map((step, idx) => (
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
                    <strong>Recommended Study Reference:</strong> Standard Polity Reference; Inter-State Council Reports; Article 246 & 356.
                  </span>
                </div>

                {/* Question Input form */}
                <form onSubmit={handlePromptSubmit} className="mt-4 flex items-center justify-between border border-stone-200 rounded-full px-3.5 py-1.5 bg-white shadow-2xs">
                  <input
                    type="text"
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder='Ask: "Add a crisp 25-word conclusion on constitutional morality"'
                    className="w-full text-xs text-stone-700 placeholder:text-stone-400 outline-none bg-transparent mr-2"
                  />
                  <button 
                    type="submit" 
                    aria-label="Send follow up prompt"
                    className="w-7 h-7 rounded-full bg-[#F59E0B] text-stone-900 flex items-center justify-center shrink-0 hover:bg-amber-500 transition-colors cursor-pointer"
                  >
                    <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </form>

                {inputSubmitted && (
                  <div className="text-[11px] text-emerald-700 bg-emerald-50 rounded-lg p-2 text-center flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Sample response generated: Conclusion framed using constitutional morality framework!</span>
                  </div>
                )}
              </div>

            </div>

            <p className="text-center text-xs text-[#D7E5DB]/80 mt-3.5 font-normal">
              Sample analysis for demonstration. AI feedback is illustrative.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
