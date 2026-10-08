import React, { useState } from 'react';
import { 
  MessageSquare, 
  Scale, 
  PenTool, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  ArrowUp 
} from 'lucide-react';

const darkBullets = [
  {
    icon: MessageSquare,
    title: 'Instant Doubt Resolution at Midnight',
    desc: 'Break down complex provisions from Laxmikanth, Shankar IAS, or The Hindu editorials without waiting for weekly coaching sessions.',
  },
  {
    icon: Scale,
    title: 'Multi-Dimensional Mains Frameworks',
    desc: 'Structure answers using PESTLE (Political, Economic, Social, Technological, Legal, Environmental) angles to stand out to the examiner.',
  },
  {
    icon: PenTool,
    title: 'Landmark SC Cases & Committee Citations',
    desc: 'Automatically integrate Sarkaria Commission, 2nd ARC, and landmark judgments (Kesavananda, Puttaswamy) into your arguments.',
  },
];

const structuredSteps = [
  {
    num: '01',
    heading: 'Federal Foundations (Basic Structure)',
    body: 'Written Constitution, clear Seventh Schedule division of powers, and judicial review (Kesavananda Bharati, 1973).',
  },
  {
    num: '02',
    heading: 'Unitary Tilt for National Integrity',
    body: 'Single integrated judiciary, All-India Services (Art. 312), and emergency powers (Art. 352/356) establish Union primacy.',
  },
  {
    num: '03',
    heading: 'Cooperative & Competitive Federalism',
    body: 'S.R. Bommai guidelines (1994), GST Council consensus, and NITI Aayog index-based federal competition.',
  },
];

const tabsData = [
  { id: 'concept', label: 'Concept Breakdown' },
  { id: 'answer', label: '15-Mark Answer Framework' },
  { id: 'revise', label: 'PYQ & Model Intro/Conclusion' },
];

export default function DarkSection() {
  const [activeTab, setActiveTab] = useState('concept');

  return (
    <section className="py-20 lg:py-28 bg-[#133026] text-white relative overflow-hidden" id="ai-tools">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Section Copy */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold text-[#F59E0B] tracking-wider block mb-3 uppercase">
              24/7 AI UPSC MENTOR & MAINS LAB
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight mb-4">
              Not just answers. The art of UPSC Mains Answer Writing.
            </h2>
            <p className="text-sm sm:text-base text-[#D7E5DB] leading-relaxed mb-8 max-w-md font-normal">
              From tackling tricky GS II Constitutional dilemmas to articulating multi-dimensional GS IV Ethics case studies, bridge the gap between reading Laxmikanth and scoring 120+ in Mains.
            </p>

            {/* Core Capabilities */}
            <div className="space-y-6 mb-8">
              {darkBullets.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/10 text-[#F59E0B] flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-4.5 h-4.5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#D7E5DB] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#ai-assistant"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B] hover:text-amber-300 transition-colors duration-200"
            >
              <span>Explore AI Answer Evaluation demo</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Answer Lab Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-7 text-stone-900 shadow-2xl max-w-lg mx-auto lg:ml-auto border border-stone-200">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF1EB] flex items-center justify-center text-[#133026]">
                    <Sparkles className="w-4.5 h-4.5 fill-[#133026]" />
                  </div>
                  <div>
                    <div className="text-sm font-sans font-bold text-slate-800 tracking-tight">Sankalp AI • UPSC Answer Lab</div>
                    <div className="text-[10px] text-slate-500 font-normal">Trained on 10,000+ Topper Answer Copies</div>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100/80 rounded-md px-2.5 py-1">
                  GS II • Indian Polity
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                {tabsData.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-[#133026] text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* User Prompt Box */}
              <div className="bg-[#FBFDFB] border border-stone-200/80 rounded-xl p-3.5 mb-4">
                <span className="text-[9px] font-bold text-slate-500 tracking-wider block mb-1">
                  YOU (ASPIRANT)
                </span>
                <p className="text-xs font-medium text-slate-900 leading-relaxed">
                  "Why is India called a 'quasi-federal' state with a unitary tilt? Frame a 15-mark answer with constitutional provisions & Sarkaria Commission recommendations."
                </p>
              </div>

              {/* AI Response Area */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-bold text-[#133026] tracking-wider block uppercase">
                    SANKALP AI STRUCTURED BREAKDOWN
                  </span>
                  <span className="text-[10px] font-semibold text-[#133026] bg-[#EAF1EB] px-2 py-0.5 rounded">
                    Score Target: 9.5 / 15
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Prof. K.C. Wheare described the Indian Constitution as <em>"quasi-federal"</em>. Here is a high-scoring 3-part Mains structure:
                </p>

                {/* Structured Answer Breakdown */}
                <div className="space-y-2.5 my-3">
                  {structuredSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-xs font-bold text-[#133026] shrink-0 mt-0.5">{step.num}</span>
                      <div>
                        <strong className="text-xs sm:text-[13px] font-sans font-bold text-slate-900 block">{step.heading}</strong>
                        <p className="text-[11.5px] text-slate-600 leading-snug font-normal">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reference Sources */}
                <div className="bg-[#EAF1EB] border border-[#133026]/10 rounded-lg p-2.5 flex items-center gap-2.5 text-[11px] text-[#133026]">
                  <BookOpen className="w-3.5 h-3.5 text-[#133026] shrink-0" />
                  <span><strong>Recommended Reference:</strong> Laxmikanth Ch. 13; Sarkaria Commission Report (1988); Article 246 & 356.</span>
                </div>

                {/* Question Input */}
                <div className="mt-4 flex items-center justify-between border border-stone-200 rounded-full px-3.5 py-1.5 bg-white shadow-2xs">
                  <span className="text-xs text-stone-400 truncate">
                    Ask: "Add a crisp 25-word conclusion quoting Dr. B.R. Ambedkar"
                  </span>
                  <button className="w-7 h-7 rounded-full bg-[#F59E0B] text-stone-900 flex items-center justify-center shrink-0 ml-2 hover:bg-amber-500 transition-colors">
                    <ArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

            </div>

            <p className="text-center text-[10.5px] text-[#D7E5DB] mt-3.5 font-normal">
              Verified against UPSC Mains syllabus guidelines and model answers from top-ranking candidates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
