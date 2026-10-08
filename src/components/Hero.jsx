import React, { useState } from 'react';
import { 
  ArrowRight, 
  Play, 
  Check, 
  Sparkles, 
  Bell, 
  BookOpenCheck, 
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Newspaper, 
  BookMarked, 
  Bot, 
  ChevronRight,
  ShieldCheck,
  Compass,
  Quote
} from 'lucide-react';
import { EXAM_YEAR, PRELIMS_DATE, PRELIMS_DATE_LABEL } from '../config/exam.js';
import { useCountdown } from '../hooks/useCountdown.js';

const STOIC_QUOTES = [
  "Discipline is choosing between what you want now and what you want most.", // Sun
  "One topic at a time. The syllabus yields to steady discipline.", // Mon
  "Revision is not repetition; it is the consolidation of mastery.", // Tue
  "Consistency compounds. Every PYQ solved today is a rank tomorrow.", // Wed
  "Calmness under pressure is the first quality of an administrator.", // Thu
  "Master the fundamentals; depth beats superficial coverage every time.", // Fri
  "Endure the quiet isolation of preparation to celebrate serving the nation." // Sat
];

const initialTasks = [
  {
    id: 1,
    title: 'Polity: Fundamental Rights & Constitutional Remedies',
    subtitle: 'GS II • Target: 45 Mins • 15 PYQs',
    completed: true,
  },
  {
    id: 2,
    title: 'Environment: Biodiversity & Protected Areas PYQ Drill',
    subtitle: 'Prelims Focus • 20 Questions Elimination Drill',
    completed: false,
  },
  {
    id: 3,
    title: 'Daily National Editorial Synthesis & Key Takeaways',
    subtitle: 'Daily Current Affairs • Spaced Flashcards Recall',
    completed: false,
  },
];

export default function Hero({ onOpenAuth }) {
  const [tasks, setTasks] = useState(initialTasks);
  const timeLeft = useCountdown(PRELIMS_DATE);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const currentQuote = STOIC_QUOTES[new Date().getDay()];

  return (
    <section className="pt-8 pb-16 md:pt-14 md:pb-20 bg-[#FDF9F1] bg-grid-pattern overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Eyebrow & Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-12">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-6 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#EAF1EB] border border-[#133026]/15 text-[#133026] text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#133026] fill-[#133026]" />
              <span className="uppercase font-sans font-bold text-xs tracking-wider">BUILT FOR SERIOUS UPSC CSE ASPIRANTS</span>
            </div>

            {/* Serif High-Impact Headline with Saffron Underline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#133026] leading-[1.15] tracking-tight mb-5">
              Your UPSC day,<br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10">planned to the minute.</span>
                <svg 
                  className="absolute -bottom-2.5 left-0 w-full h-3 sm:h-4 text-[#F59E0B] -z-0 overflow-visible" 
                  viewBox="0 0 280 14" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    d="M3 9C60 2.5 170 2 277 8.5C215 5 110 5.8 28 12" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-line */}
            <p className="text-stone-700 text-base sm:text-lg lg:text-[19px] leading-relaxed mb-8 max-w-lg font-normal">
              AI mock tests, daily current affairs, notes and PYQs in one calm workspace.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={() => onOpenAuth ? onOpenAuth('signup') : window.location.assign('#get-started')}
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(245,158,11,0.28)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.42)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative tracking-tight">Start Free Preparation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <a
                href="#preparation"
                className="group inline-flex items-center gap-2.5 bg-white/95 hover:bg-white text-stone-800 hover:text-[#133026] font-semibold text-sm px-6 py-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(19,48,38,0.1)] border border-stone-200/90 hover:border-stone-300 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span className="tracking-tight">Explore Live Dashboard</span>
                <span className="w-5 h-5 rounded-full bg-stone-100 group-hover:bg-[#133026] flex items-center justify-center transition-colors duration-300">
                  <Play className="w-2.5 h-2.5 fill-stone-700 group-hover:fill-[#F59E0B] text-stone-700 group-hover:text-[#F59E0B] ml-0.5 transition-colors duration-300" />
                </span>
              </a>
            </div>

            {/* Trust Row - Min 14px Text */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-stone-700 font-medium pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#133026] stroke-[2.4] shrink-0" />
                <span>Zero Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpenCheck className="w-4.5 h-4.5 text-[#133026] stroke-[2.4] shrink-0" />
                <span>Full GS I-IV + CSAT Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4.5 h-4.5 text-[#133026] stroke-[2.4] shrink-0" />
                <span>Updated for CSE {EXAM_YEAR}</span>
              </div>
            </div>

            {/* Signature Element 1: Live Prelims Countdown Widget */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm border border-stone-200/90 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#133026] relative">
                    <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#133026]">
                    PRELIMS {EXAM_YEAR} LIVE COUNTDOWN
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {PRELIMS_DATE_LABEL}
                </span>
              </div>

              {/* Countdown Digits */}
              <div className="grid grid-cols-4 gap-2.5 text-center mb-3.5">
                <div className="bg-stone-50/90 border border-stone-200/60 rounded-xl py-2 px-1">
                  <div className="text-xl sm:text-2xl font-sans font-extrabold text-[#133026] tracking-tight">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mt-0.5">
                    Days
                  </div>
                </div>

                <div className="bg-stone-50/90 border border-stone-200/60 rounded-xl py-2 px-1">
                  <div className="text-xl sm:text-2xl font-sans font-extrabold text-[#133026] tracking-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mt-0.5">
                    Hours
                  </div>
                </div>

                <div className="bg-stone-50/90 border border-stone-200/60 rounded-xl py-2 px-1">
                  <div className="text-xl sm:text-2xl font-sans font-extrabold text-[#133026] tracking-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-600 mt-0.5">
                    Mins
                  </div>
                </div>

                <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl py-2 px-1 relative overflow-hidden">
                  <div className="text-xl sm:text-2xl font-sans font-extrabold text-amber-800 tracking-tight animate-pulse">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mt-0.5">
                    Secs
                  </div>
                </div>
              </div>

              {/* Day-of-week Stoic Quote */}
              <div className="flex items-start gap-2 pt-2 text-stone-600">
                <Quote className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-[13px] font-serif italic text-stone-700 leading-snug">
                  "{currentQuote}"
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Dashboard Mockup */}
          <div className="lg:col-span-6">
            {/* Meta Tag */}
            <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-3 px-2">
              <span className="tracking-wider text-[#133026]/80 uppercase font-sans font-bold">LESS GUESSWORK. MORE DIRECTION.</span>
              <span className="text-stone-500 font-medium text-xs">• Sample data for demonstration</span>
            </div>

            {/* Dashboard Container */}
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              
              {/* Top Navigation */}
              <div className="px-4 sm:px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white/95">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#133026] flex items-center justify-center text-[#F59E0B] shadow-2xs">
                    <BookOpenCheck className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-bold text-sm text-[#133026] tracking-tight">UPSC ZONE AI</span>
                  <span className="bg-[#EAF1EB] text-[#133026] border border-green-200/80 text-xs font-bold px-2.5 py-0.5 rounded-full shadow-2xs">
                    CSE {EXAM_YEAR}
                  </span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all duration-200 cursor-pointer shadow-2xs">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  {/* Clean Initials Avatar - No Stock Photos */}
                  <div className="flex items-center gap-2 pl-1.5 border-l border-slate-200 cursor-pointer">
                    <div className="w-7 h-7 rounded-full bg-[#133026] text-[#F59E0B] font-bold text-xs flex items-center justify-center ring-2 ring-[#EAF1EB]">
                      AS
                    </div>
                    <span className="text-xs font-bold text-slate-800 hidden sm:inline">Ananya S.</span>
                  </div>
                </div>
              </div>

              {/* Workspace Layout: Responsive flex structure with widened sidebar to prevent truncation */}
              <div className="flex flex-col md:flex-row min-h-[380px]">
                {/* Navigation Sidebar: Widened to 176px (w-44) on desktop so all labels fit on ONE line */}
                <div className="w-full md:w-44 lg:w-48 shrink-0 bg-slate-50/70 border-r border-slate-100 p-3 sm:p-4 flex flex-col justify-start">
                  <div>
                    <span className="text-xs font-bold text-slate-500 tracking-wider px-2 block mb-3 uppercase font-sans">
                      STUDY DESK
                    </span>
                    <ul className="space-y-2 sm:space-y-2.5">
                      <li className="flex items-center gap-2.5 text-xs font-bold bg-[#133026] text-white px-3 py-2.5 rounded-xl shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap">
                        <LayoutDashboard className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span className="tracking-tight">Daily Schedule</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer group whitespace-nowrap">
                        <Calendar className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Prelims Revision</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer group whitespace-nowrap">
                        <FileText className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Mains Writing</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer group whitespace-nowrap">
                        <Newspaper className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Daily Editorial</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer group whitespace-nowrap">
                        <BookMarked className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">NCERT Library</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-700 px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all duration-200 cursor-pointer group whitespace-nowrap">
                        <Bot className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">AI Mentor</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Workspace */}
                <div className="flex-1 min-w-0 p-4 sm:p-5 flex flex-col justify-start bg-white">
                  <div>
                    {/* Welcome Header */}
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-sans font-bold tracking-tight text-slate-900">
                        Welcome back, Ananya
                      </h3>
                      <p className="text-xs text-slate-600 font-normal mt-0.5">
                        Consistency drives top ranks. Here is your strategic plan for today.
                      </p>
                    </div>

                    {/* Performance Metrics: Min 12px labels with high contrast */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                      <div className="border border-slate-200/90 rounded-xl px-3.5 py-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs flex flex-col items-start justify-center">
                        <div className="text-lg font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors whitespace-nowrap">
                          68%
                        </div>
                        <div className="text-xs text-stone-600 font-medium mt-1">Syllabus done</div>
                      </div>
                      <div className="border border-slate-200/90 rounded-xl px-3.5 py-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs flex flex-col items-start justify-center">
                        <div className="text-lg font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors whitespace-nowrap flex items-baseline gap-1">
                          <span>118</span>
                          <span className="text-xs font-semibold text-slate-500">/ 200</span>
                        </div>
                        <div className="text-xs text-stone-600 font-medium mt-1">Mock score</div>
                      </div>
                      <div className="border border-slate-200/90 rounded-xl px-3.5 py-3 bg-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs flex flex-col items-start justify-center">
                        <div className="text-lg font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors whitespace-nowrap">
                          6h 15m
                        </div>
                        <div className="text-xs text-stone-600 font-medium mt-1">This week</div>
                      </div>
                    </div>

                    {/* Today's Checklist */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2.5">
                        <span className="font-sans font-bold text-slate-800">Daily Priority Checklist</span>
                        <span className="text-[#133026] font-semibold text-xs bg-[#EAF1EB] px-2 py-0.5 rounded-full">
                          {completedCount} of 3 complete
                        </span>
                      </div>

                      <div className="space-y-2 mb-1">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                          >
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 shrink-0 ${
                              task.completed 
                                ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' 
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-sm font-semibold truncate transition-colors ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                {task.title}
                              </div>
                              <div className="text-xs text-slate-600 font-normal mt-0.5 truncate">{task.subtitle}</div>
                            </div>
                            {task.completed ? (
                              <Check className="w-4 h-4 text-[#133026] stroke-[2.5] shrink-0" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-600 transition-all duration-200 shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Target Milestone & Action Banner */}
              <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50/40">
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
                  {/* Target Milestone Card with Live Days Left */}
                  <div className="md:w-60 shrink-0 bg-gradient-to-br from-slate-50 to-green-50/30 border border-slate-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                    <span className="text-xs font-bold text-slate-500 tracking-wider block mb-0.5 uppercase">
                      TARGET MILESTONE
                    </span>
                    <span className="text-sm font-sans font-bold text-slate-800 block group-hover:text-[#133026] transition-colors tracking-tight">
                      Prelims {EXAM_YEAR} Target
                    </span>
                    <span className="text-xs text-slate-600 font-medium block mt-0.5">
                      {timeLeft.days} Days Remaining • Consistent
                    </span>
                  </div>

                  {/* Accelerate Focus Dark Banner */}
                  <div className="flex-1 bg-gradient-to-r from-[#133026] to-[#1b4234] hover:from-[#16382c] hover:to-[#225342] border border-emerald-900/40 rounded-xl p-3 text-white flex items-center justify-between shadow-lg shadow-teal-900/20 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 relative z-10 min-w-0">
                      <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0 fill-[#F59E0B] group-hover:rotate-12 transition-transform duration-300" />
                      <div>
                        <div className="text-xs sm:text-[13px] font-sans font-bold text-white tracking-tight leading-snug">
                          Accelerate focus on Environment PYQs.
                        </div>
                        <div className="text-xs text-stone-200 mt-0.5 font-normal leading-normal">
                          Sample drill: 15-minute targeted revision recommendation.
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] shrink-0 relative z-10 group-hover:translate-x-1 transition-transform duration-200 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Flow Caption */}
            <div className="flex items-center justify-center gap-2.5 text-xs text-stone-600 mt-4 font-medium">
              <span className="text-[#133026] font-semibold">Syllabus Clarity</span>
              <span className="text-[#F59E0B]">→</span>
              <span className="text-[#133026] font-semibold">Daily PYQ Practice</span>
              <span className="text-[#F59E0B]">→</span>
              <strong className="text-[#133026] font-sans font-bold">Final Selection</strong>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
