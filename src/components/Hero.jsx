import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowDown,
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
  Quote,
  Layers,
  Clock
} from 'lucide-react';
import { EXAM_YEAR, PRELIMS_DATE, PRELIMS_DATE_LABEL } from '../config/exam.js';
import { useCountdown } from '../hooks/useCountdown.js';
import { PYQ_RANGE } from '../data/pyqSample.js';

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
    title: 'Polity: Fundamental Rights',
    subtitle: 'GS II - 45 min - 15 PYQs',
    completed: true,
  },
  {
    id: 2,
    title: 'Environment: Biodiversity',
    subtitle: 'Prelims - 20 Qs - Elimination',
    completed: false,
  },
  {
    id: 3,
    title: 'Daily Editorial Brief',
    subtitle: 'Current Affairs - Flashcards',
    completed: false,
  },
];

const MOCK_DATA = [
  { label: 'M1', score: 86, x: 38, y: 67 },
  { label: 'M2', score: 95, x: 88, y: 58 },
  { label: 'M3', score: 104, x: 138, y: 49 },
  { label: 'M4', score: 114, x: 188, y: 39 },
  { label: 'M5', score: 125, x: 238, y: 30 },
  { label: 'M6', score: 134, x: 288, y: 20 },
];

export default function Hero({ onOpenAuth }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [toastMessage, setToastMessage] = useState(null);
  const [hoveredMockPoint, setHoveredMockPoint] = useState(null);
  const toastTimeoutRef = useRef(null);
  const timeLeft = useCountdown(PRELIMS_DATE);

  const handleInactiveNavClick = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage('Feature unlocked in Premium Plan');
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleScrollToSample = (e) => {
    e?.preventDefault();
    const target = document.getElementById('sample-drill');
    if (target) {
      const navbarHeight = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!prefersReducedMotion) {
        target.classList.remove('pulse-amber-active');
        void target.offsetWidth;
        target.classList.add('pulse-amber-active');
        setTimeout(() => {
          target.classList.remove('pulse-amber-active');
        }, 1600);
      }
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const currentQuote = STOIC_QUOTES[new Date().getDay()];

  // Dynamic progress calculations connecting checklist to dashboard metrics
  const progressPercent = completedCount === 0 ? 0 : completedCount === 1 ? 33 : completedCount === 2 ? 66 : 100;
  const currentSyllabusPercent = 67 + completedCount;
  const totalMinutes = 345 + completedCount * 30; // 5h 45m baseline + 30 mins per completed task
  const displayHours = Math.floor(totalMinutes / 60);
  const displayMins = totalMinutes % 60;
  const displayTimeString = `${displayHours}h ${displayMins}m`;

  return (
    <section className="pt-8 pb-16 md:pt-14 md:pb-20 bg-transparent overflow-hidden relative">
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
            <div id="hero-cta-container" className="flex flex-wrap items-center gap-3.5 mb-3">
              <button
                type="button"
                onClick={() => onOpenAuth ? onOpenAuth('signup') : window.location.assign('#get-started')}
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 font-bold text-sm px-7 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(245,158,11,0.28)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.42)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative tracking-tight">Start Free Prep</span>
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

            {/* Try a sample question link with down arrow */}
            <div className="mb-7">
              <button
                type="button"
                onClick={handleScrollToSample}
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#133026] hover:text-[#B45309] transition-colors cursor-pointer py-1 underline-offset-4 hover:underline"
                aria-label="Try a sample question"
              >
                <span>Try a sample question</span>
                <ArrowDown className="w-4 h-4 text-[#F59E0B] transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
            </div>

            {/* 4-Item Honest UPSC Trust Strip - Min 14px Text & 2x2 Responsive Wrap */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm text-stone-700 font-medium pt-2">
              <div className="flex items-start gap-2.5 bg-white/70 sm:bg-white/50 p-2.5 sm:p-3 rounded-xl border border-stone-200/70 shadow-2xs">
                <Layers className="w-5 h-5 text-[#133026] stroke-[2.2] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-bold text-stone-900 leading-tight">3 stages covered</div>
                  <div className="text-xs text-stone-500 font-normal leading-tight mt-0.5">Prelims, Mains, Interview</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/70 sm:bg-white/50 p-2.5 sm:p-3 rounded-xl border border-stone-200/70 shadow-2xs">
                <Clock className="w-5 h-5 text-[#133026] stroke-[2.2] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-bold text-stone-900 leading-tight">25-year PYQ window</div>
                  <div className="text-xs text-stone-500 font-normal leading-tight mt-0.5">{PYQ_RANGE}, topic-wise</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/70 sm:bg-white/50 p-2.5 sm:p-3 rounded-xl border border-stone-200/70 shadow-2xs">
                <BookOpenCheck className="w-5 h-5 text-[#133026] stroke-[2.2] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-bold text-stone-900 leading-tight">GS I-IV + CSAT mapping</div>
                  <div className="text-xs text-stone-500 font-normal leading-tight mt-0.5">Syllabus-linked practice</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
                className="flex items-start gap-2.5 bg-white/70 sm:bg-white/50 p-2.5 sm:p-3 rounded-xl border border-stone-200/70 shadow-2xs hover:border-[#133026]/40 hover:bg-white transition-all text-left cursor-pointer group/trust"
              >
                <ShieldCheck className="w-5 h-5 text-[#133026] stroke-[2.2] shrink-0 mt-0.5 group-hover/trust:text-[#F59E0B] transition-colors" />
                <div className="min-w-0">
                  <div className="text-[14px] sm:text-[15px] font-bold text-stone-900 leading-tight group-hover/trust:text-[#133026] transition-colors">Free diagnostic test</div>
                  <div className="text-xs text-stone-500 font-normal leading-tight mt-0.5">No credit card required</div>
                </div>
              </button>
            </div>

            {/* Signature Element 1: Live Prelims Countdown Widget */}
            <div className="mt-8 bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-[#133026]">
                    PRELIMS {EXAM_YEAR} LIVE COUNTDOWN
                  </span>
                </div>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {PRELIMS_DATE_LABEL}
                </span>
              </div>

              {/* Countdown Digits */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center mb-4">
                <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-xl py-3 px-1.5 flex flex-col items-center justify-center">
                  <div className="font-sans font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tighter">
                    {timeLeft.days}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    Days
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-xl py-3 px-1.5 flex flex-col items-center justify-center">
                  <div className="font-sans font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tighter">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    Hours
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 shadow-sm rounded-xl py-3 px-1.5 flex flex-col items-center justify-center">
                  <div className="font-sans font-extrabold text-3xl md:text-4xl text-slate-800 tracking-tighter">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    Mins
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 shadow-sm rounded-xl py-3 px-1.5 flex flex-col items-center justify-center">
                  <div className="font-sans font-extrabold text-3xl md:text-4xl text-orange-700 tracking-tighter">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mt-1">
                    Secs
                  </div>
                </div>
              </div>

              {/* Day-of-week Stoic Quote */}
              <div className="flex items-start gap-2.5 pt-3 border-t border-slate-100/90 text-slate-500">
                <Quote className="w-3.5 h-3.5 text-amber-500/70 shrink-0 mt-0.5" />
                <p className="font-sans italic text-sm text-slate-500 leading-relaxed">
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
            <div className="bg-white border border-slate-200/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
              
              {/* Premium Plan Toast Notification */}
              {toastMessage && (
                <div 
                  role="status"
                  aria-live="polite"
                  className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 md:absolute md:bottom-5 md:right-5 z-50 bg-[#133026] text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-xl shadow-2xl border border-emerald-700/80 flex items-center gap-2.5 animate-fadeIn backdrop-blur-md"
                >
                  <div className="w-5 h-5 rounded-full bg-[#F59E0B]/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </div>
                  <span className="tracking-tight font-sans">{toastMessage}</span>
                  <button 
                    type="button" 
                    onClick={() => setToastMessage(null)}
                    className="ml-2 text-white/50 hover:text-white transition-colors text-base leading-none cursor-pointer"
                    aria-label="Dismiss notification"
                  >
                    &times;
                  </button>
                </div>
              )}

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

              {/* Workspace Layout: Flex row structure with sidebar flex-col justify-between */}
              <div className="flex flex-col md:flex-row">
                {/* Navigation Sidebar: semantic <aside> with flex flex-col justify-between to anchor milestone card at bottom */}
                <aside 
                  className="w-full md:w-52 lg:w-56 shrink-0 bg-slate-50/70 border-r border-slate-100 p-3.5 sm:p-4.5 flex flex-col justify-between"
                  aria-label="Study Desk Navigation"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-500 tracking-wider px-2 block mb-3.5 uppercase font-sans">
                      STUDY DESK
                    </span>
                    <ul className="flex flex-col gap-4 sm:gap-4.5">
                      <li className="flex items-center gap-3 text-[14px] sm:text-[15px] font-bold bg-[#133026] text-white px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl shadow-xs transition-all duration-200 cursor-pointer whitespace-nowrap">
                        <LayoutDashboard className="w-5 h-5 text-[#F59E0B] shrink-0" />
                        <span className="tracking-tight">Daily Schedule</span>
                      </li>
                      <li 
                        onClick={handleInactiveNavClick}
                        className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium text-slate-700 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer group whitespace-nowrap"
                      >
                        <Calendar className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Prelims Revision</span>
                      </li>
                      <li 
                        onClick={handleInactiveNavClick}
                        className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium text-slate-700 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer group whitespace-nowrap"
                      >
                        <FileText className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Mains Writing</span>
                      </li>
                      <li 
                        onClick={handleInactiveNavClick}
                        className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium text-slate-700 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer group whitespace-nowrap"
                      >
                        <Newspaper className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">Daily Editorial</span>
                      </li>
                      <li 
                        onClick={handleInactiveNavClick}
                        className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium text-slate-700 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer group whitespace-nowrap"
                      >
                        <BookMarked className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">NCERT Library</span>
                      </li>
                      <li 
                        onClick={handleInactiveNavClick}
                        className="flex items-center gap-3 text-[14px] sm:text-[15px] font-medium text-slate-700 px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-xl hover:bg-slate-100 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer group whitespace-nowrap"
                      >
                        <Bot className="w-5 h-5 text-slate-500 group-hover:text-slate-700 transition-colors shrink-0" />
                        <span className="tracking-tight">AI Mentor</span>
                      </li>
                    </ul>
                  </div>

                  {/* Target Milestone Card: Anchored naturally at the bottom baseline with zero dead space below */}
                  <div className="mt-auto pt-6">
                    <div className="bg-white border border-slate-200/90 rounded-xl p-3.5 sm:p-4 shadow-2xs hover:shadow-xs transition-all cursor-pointer group">
                      <span className="text-[10px] font-bold text-slate-500 tracking-wider block mb-1 uppercase font-sans">
                        TARGET MILESTONE
                      </span>
                      <span className="text-xs sm:text-sm font-sans font-bold text-slate-800 block group-hover:text-[#133026] transition-colors tracking-tight">
                        Prelims {EXAM_YEAR} Target
                      </span>
                      <span className="text-[11px] text-slate-600 font-medium block mt-1">
                        {timeLeft.days} Days Remaining • Consistent
                      </span>
                    </div>
                  </div>
                </aside>

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
                          {currentSyllabusPercent}%
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
                          {displayTimeString}
                        </div>
                        <div className="text-xs text-stone-600 font-medium mt-1">This week</div>
                      </div>
                    </div>

                    {/* Today's Checklist */}
                    <div>
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
                        <span className="font-sans font-bold text-slate-800">Daily Priority Checklist</span>
                        <span className="text-[#133026] font-semibold text-xs bg-[#EAF1EB] px-2 py-0.5 rounded-full">
                          {completedCount} of {tasks.length} complete
                        </span>
                      </div>

                      {/* Dynamic Progress Bar */}
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-3">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>

                      <div className="space-y-2 mb-1">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                          >
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 active:scale-90 transition-transform shrink-0 ${
                              task.completed 
                                ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' 
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-sm font-semibold transition-all duration-300 ${
                                task.completed ? 'line-through text-slate-400 opacity-60' : 'text-slate-900'
                              }`}>
                                {task.title}
                              </div>
                              <div className={`text-xs mt-0.5 font-normal transition-all duration-300 ${
                                task.completed ? 'line-through text-slate-400 opacity-60' : 'text-slate-600'
                              }`}>
                                {task.subtitle}
                              </div>
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

                    {/* Mock Test Performance Graph */}
                    <div className="bg-white rounded-xl border border-slate-100 p-4 mt-4 shadow-sm">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-900">Mock test performance</span>
                        <span className="text-[10px] font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded">
                          GS I
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Last 6 full-length mocks</p>

                      {/* SVG Line Graph */}
                      <div className="mt-3 w-full relative">
                        <svg
                          className="w-full h-24 overflow-visible"
                          viewBox="0 0 300 90"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Mock test score progression graph"
                        >
                          <defs>
                            {/* Richer Gradient Fill fading from emerald to transparent */}
                            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                              <stop offset="50%" stopColor="#34d399" stopOpacity="0.18" />
                              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Subtle horizontal dashed grid lines & y-axis labels */}
                          <line x1="28" y1="15" x2="295" y2="15" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                          <text x="5" y="18" className="fill-slate-400 text-[9px] font-medium font-sans">150</text>

                          <line x1="28" y1="45" x2="295" y2="45" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                          <text x="5" y="48" className="fill-slate-400 text-[9px] font-medium font-sans">110</text>

                          <line x1="28" y1="75" x2="295" y2="75" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                          <text x="8" y="78" className="fill-slate-400 text-[9px] font-medium font-sans">70</text>

                          {/* Soft rich gradient fill under line */}
                          <path
                            d="M 38 67 L 88 58 L 138 49 L 188 39 L 238 30 L 288 20 L 288 75 L 38 75 Z"
                            fill="url(#greenGradient)"
                          />

                          {/* Upward trending line */}
                          <path
                            d="M 38 67 L 88 58 L 138 49 L 188 39 L 238 30 L 288 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-emerald-600"
                          />

                          {/* 6 Interactive data point nodes */}
                          {MOCK_DATA.map((pt, i) => {
                            const isLatest = i === MOCK_DATA.length - 1;
                            const isHovered = hoveredMockPoint?.label === pt.label;
                            return (
                              <g key={pt.label} className="group/node">
                                {/* Active Pulse on Current Progress (M6 circle) */}
                                {isLatest && (
                                  <g className="pointer-events-none">
                                    <circle
                                      cx={pt.x}
                                      cy={pt.y}
                                      r="9"
                                      className="fill-emerald-400/30 animate-ping"
                                      style={{ transformOrigin: `${pt.x}px ${pt.y}px`, animationDuration: '2.4s' }}
                                    />
                                    <circle
                                      cx={pt.x}
                                      cy={pt.y}
                                      r="6.5"
                                      className="fill-emerald-500/25 animate-pulse"
                                    />
                                  </g>
                                )}

                                {/* Hit area for smooth interaction */}
                                <circle
                                  cx={pt.x}
                                  cy={pt.y}
                                  r="14"
                                  fill="transparent"
                                  className="cursor-pointer"
                                  onMouseEnter={() => setHoveredMockPoint(pt)}
                                  onMouseLeave={() => setHoveredMockPoint(null)}
                                />

                                {/* Interactive Visual Node */}
                                <circle
                                  cx={pt.x}
                                  cy={pt.y}
                                  r={isHovered ? 5.5 : 3.5}
                                  fill={isHovered ? '#F59E0B' : 'white'}
                                  stroke={isHovered ? '#133026' : '#059669'}
                                  strokeWidth={isHovered ? 2.5 : 2}
                                  className="cursor-pointer transition-all duration-300 pointer-events-none hover:r-[6px] hover:fill-[#F59E0B] hover:stroke-[#133026]"
                                />
                              </g>
                            );
                          })}

                          {/* Floating Tooltip displaying exact mock score */}
                          {hoveredMockPoint && (
                            <g className="transition-all duration-200 pointer-events-none">
                              <rect
                                x={Math.min(Math.max(hoveredMockPoint.x - 22, 28), 248)}
                                y={hoveredMockPoint.y - 25}
                                width="44"
                                height="18"
                                rx="4"
                                fill="#133026"
                                className="drop-shadow-md"
                              />
                              <polygon
                                points={`
                                  ${hoveredMockPoint.x - 3.5},${hoveredMockPoint.y - 7} 
                                  ${hoveredMockPoint.x + 3.5},${hoveredMockPoint.y - 7} 
                                  ${hoveredMockPoint.x},${hoveredMockPoint.y - 3}
                                `}
                                fill="#133026"
                              />
                              <text
                                x={Math.min(Math.max(hoveredMockPoint.x - 22, 28), 248) + 22}
                                y={hoveredMockPoint.y - 15}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fill="#F59E0B"
                                className="text-[10px] font-sans font-bold tracking-tight"
                              >
                                {hoveredMockPoint.score} m
                              </text>
                            </g>
                          )}
                        </svg>

                        {/* X-axis labels M1 to M6 with synchronized hover */}
                        <div className="flex justify-between pl-8 pr-1 text-[10px] text-slate-400 font-medium mt-1">
                          {MOCK_DATA.map((pt) => {
                            const isHovered = hoveredMockPoint?.label === pt.label;
                            const isLatest = pt.label === 'M6';
                            return (
                              <span
                                key={pt.label}
                                className={`transition-all duration-200 cursor-pointer ${
                                  isHovered
                                    ? 'text-[#133026] font-bold scale-110'
                                    : isLatest
                                    ? 'text-emerald-700 font-bold'
                                    : 'hover:text-slate-700'
                                }`}
                                onMouseEnter={() => setHoveredMockPoint(pt)}
                                onMouseLeave={() => setHoveredMockPoint(null)}
                              >
                                {pt.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      {/* Footer trend text with active pulse indicator */}
                      <div className="text-xs font-semibold text-emerald-700 mt-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span>86 → 134 marks - steady, measurable progress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Action Banner */}
              <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50/40">
                <div className="w-full bg-gradient-to-r from-[#133026] to-[#1b4234] hover:from-[#16382c] hover:to-[#225342] border border-emerald-900/40 rounded-xl p-3 text-white flex items-center justify-between shadow-lg shadow-teal-900/20 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
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

        </div>
      </div>
    </section>
  );
}
