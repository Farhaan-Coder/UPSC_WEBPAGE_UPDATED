import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  CheckSquare, 
  Check, 
  ArrowRight, 
  Target,
  ArrowUpRight, 
  RotateCw,
  Bell,
  Layers,
  LayoutDashboard, 
  Calendar, 
  FileText, 
  Clock, 
  Award, 
  BarChart3, 
  CheckCircle2, 
  AlertCircle, 
  Briefcase, 
  GraduationCap,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EXAM_YEAR } from '../config/exam.js';
import { PYQ_RANGE, PYQ_TOTAL, pyqThemes } from '../data/pyqSample.js';
import { SectionReveal, WordReveal } from './motion/MotionUtils.jsx';
import EvaluationRubricFeedback from './EvaluationRubricFeedback.jsx';

const tabsConfig = [
  {
    id: 0,
    title: 'Daily Study Plan',
    subtitle: 'Spaced revision and study pacing',
    icon: Calendar,
  },
  {
    id: 1,
    title: 'PYQ Insights',
    subtitle: '25-year topic trends and heatmaps',
    icon: BarChart3,
  },
  {
    id: 2,
    title: 'AI Answer Feedback',
    subtitle: 'Structure, keywords and rubric score',
    icon: Award,
  },
];

const initialDailyTasks = [
  {
    id: 1,
    title: 'Polity: Parliamentary Committees & Legislative Procedures',
    sub: 'GS II • Standard Reference • Active Recall Drill',
    time: '45 min',
  },
  {
    id: 2,
    title: 'Environment: Biosphere Reserves & Ramsar Wetlands (2014-2024)',
    sub: 'Prelims GS I • 25 MCQs Elimination Practice',
    time: '35 min',
  },
  {
    id: 3,
    title: 'Governance & Economy: Fiscal Federalism & Tax Devolutions',
    sub: 'GS III • National Editorial Synthesis + 5 flashcards',
    time: '30 min',
  },
];

const baseSyllabusProgress = [
  { name: 'Indian Polity & Governance', base: 82, isCoral: false },
  { name: 'Modern Indian History', base: 68, isCoral: false },
  { name: 'Geography & Environment', base: 56, isCoral: false },
  { name: 'Economy & Inclusive Growth', base: 44, isCoral: true },
];

const getTrendBadgeClass = (trend) => {
  switch (trend) {
    case '+3% YoY':
      return 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20';
    case 'High Weight':
      return 'bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/20';
    case 'Stable':
      return 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20';
    case 'Moderate':
      return 'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-500/20';
    case 'Application-based':
      return 'bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-600/20';
    case 'Rising':
      return 'bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20';
    default:
      return 'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-500/20';
  }
};

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [studyHours, setStudyHours] = useState(6.0);
  const [studyMode, setStudyMode] = useState('fulltime'); // 'working' or 'fulltime'
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showStreakToast, setShowStreakToast] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Interconnected dynamic calculation: studyHours slider drives progress benchmarks proportionally
  const syllabusProgress = useMemo(() => {
    return baseSyllabusProgress.map((item) => {
      const delta = (studyHours - 6.0) * 3.5;
      const percentage = Math.min(98, Math.max(20, Math.round(item.base + delta)));
      return {
        ...item,
        percentage,
      };
    });
  }, [studyHours]);

  // Overall GS coverage ring scales reactively with study hours
  const overallCoverage = useMemo(() => {
    const delta = (studyHours - 6.0) * 3.5;
    return Math.min(96, Math.max(35, Math.round(68 + delta)));
  }, [studyHours]);

  const fullPromptText = "Sample insight: short 15-minute elimination drills help build speed and accuracy. Try one today.";

  // Subtle typing animation in AI advice
  useEffect(() => {
    setTypingIndex(0);
    const interval = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev < fullPromptText.length) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 28);
    return () => clearInterval(interval);
  }, [activeTab]);

  const toggleTask = (id) => {
    setCompletedTasks((prev) => {
      const next = prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id];
      if (next.length === 3 && prev.length < 3) {
        setShowStreakToast(true);
      }
      return next;
    });
  };

  useEffect(() => {
    if (showStreakToast) {
      const timer = setTimeout(() => setShowStreakToast(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [showStreakToast]);

  const handleModeChange = (mode) => {
    setStudyMode(mode);
    if (mode === 'working') {
      setStudyHours(3.5);
    } else {
      setStudyHours(7.5);
    }
  };

  const completedCount = completedTasks.length;

  // Real-time calculation based on study hours slider
  const staticHours = (studyHours * 0.45).toFixed(1);
  const currentAffairsHours = (studyHours * 0.25).toFixed(1);
  const pyqHours = (studyHours * 0.20).toFixed(1);
  const mcqCount = Math.round(studyHours * 7);
  const flashcardsMin = Math.round(studyHours * 0.10 * 60);

  return (
    <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 bg-transparent border-b border-stone-200/60" id="preparation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionReveal>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 block">
              DISCIPLINED PREPARATION, OPTIMIZED FOR YOUR DESK
            </span>
            <WordReveal
              text="Everything you study today, in one command center."
              as="h2"
              className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            />
            <p className="text-slate-600 text-[17px] leading-relaxed max-w-2xl mx-auto mt-5">
              Eliminate scattered notes, chaotic tabs, and syllabus anxiety. Synchronize syllabus completion, 25-year PYQs, and daily AI answer reviews into a serene daily rhythm.
            </p>
          </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Nav Tabs & Plan Your Day Slider */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Clickable Tabs with clean typography without truncation */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-3 shadow-xs space-y-2">
              <div className="px-3 py-1.5 text-xs text-stone-500 font-medium">
                <span>SELECT WORKSPACE VIEW</span>
              </div>

              {tabsConfig.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-300 flex items-start gap-3.5 cursor-pointer relative overflow-hidden ${
                      isActive 
                        ? 'bg-[#133026] text-white shadow-md' 
                        : 'bg-stone-50/70 hover:bg-stone-100 text-stone-700'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F59E0B]" />
                    )}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-white/10 text-[#F59E0B]' : 'bg-white text-stone-600 border border-stone-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-sm sm:text-[15px] font-sans font-bold tracking-tight ${
                        isActive ? 'text-white' : 'text-stone-900'
                      }`}>
                        {tab.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${
                        isActive ? 'text-[#D7E5DB]' : 'text-stone-600'
                      }`}>
                        {tab.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Signature Element 2: Interactive "Plan Your Day" Study Hours Slider */}
            <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#133026]" />
                  <h3 className="font-sans font-bold text-sm text-[#133026] tracking-tight">
                    Plan Your Study Day
                  </h3>
                </div>
                <span className="text-xs font-extrabold text-[#133026] bg-[#EAF1EB] px-2.5 py-1 rounded-full border border-green-200">
                  {studyHours} Hours / Day
                </span>
              </div>

              {/* Mode Toggle */}
              <div className="grid grid-cols-2 gap-2 mb-4 bg-stone-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => handleModeChange('working')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    studyMode === 'working'
                      ? 'bg-white text-[#133026] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Working Professional</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleModeChange('fulltime')}
                  className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    studyMode === 'fulltime'
                      ? 'bg-white text-[#133026] shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Full-Time Aspirant</span>
                </button>
              </div>

              {/* Interactive Range Slider */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-stone-500 mb-1.5 font-medium">
                  <span>1 Hour (Light revision)</span>
                  <span>8 Hours (Intensive marathon)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="0.5"
                  value={studyHours}
                  onChange={(e) => {
                    const val = parseFloat(e.target.value);
                    setStudyHours(val);
                    if (val <= 4) setStudyMode('working');
                    else setStudyMode('fulltime');
                  }}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#133026]"
                  aria-label="Daily study hours slider"
                />
              </div>

              {/* Animated Stacked Visual Bar */}
              <div className="h-3.5 rounded-full overflow-hidden flex bg-stone-100 mb-4 shadow-inner">
                <div 
                  className="bg-[#133026] transition-all duration-300"
                  style={{ width: `${(staticHours / studyHours) * 100}%` }}
                  title={`Static Core: ${staticHours}h`}
                />
                <div 
                  className="bg-[#F59E0B] transition-all duration-300"
                  style={{ width: `${(currentAffairsHours / studyHours) * 100}%` }}
                  title={`Current Affairs: ${currentAffairsHours}h`}
                />
                <div 
                  className="bg-emerald-600 transition-all duration-300"
                  style={{ width: `${(pyqHours / studyHours) * 100}%` }}
                  title={`PYQ Drill: ${pyqHours}h`}
                />
                <div 
                  className="bg-stone-400 transition-all duration-300"
                  style={{ width: `${((studyHours - staticHours - currentAffairsHours - pyqHours) / studyHours) * 100}%` }}
                  title={`Spaced Revision: ${flashcardsMin}m`}
                />
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="font-medium text-xs">Core GS Textbooks</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{staticHours} hrs</div>
                  <div className="text-xs text-stone-500">Target: 2 Standard Chapters</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="font-medium text-xs">Editorials & Current</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{currentAffairsHours} hrs</div>
                  <div className="text-xs text-stone-500">2 National Papers Digest</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="font-medium text-xs">PYQ Practice</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{pyqHours} hrs</div>
                  <div className="text-xs text-stone-500">{mcqCount} MCQs + Elimination</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="font-medium text-xs">Spaced Revision</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{flashcardsMin} mins</div>
                  <div className="text-xs text-stone-500">Active Recall Deck</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Mockup */}
          <div className="lg:col-span-7 relative">
            
            {/* Ambient Backing Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-700/10 via-amber-500/10 to-emerald-600/10 rounded-3xl blur-2xl pointer-events-none -z-10" />

            {/* Main Interactive Screen Container */}
            <div className="bg-white border border-slate-100/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300">
              
              {/* Top Screen App Bar */}
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <div className="flex items-center gap-2.5">
                  <img 
                    src="/assets/upsc-logo.png" 
                    alt="UPSC Ashoka Emblem and Chakra Logo" 
                    className="w-7 h-7 object-contain shrink-0"
                  />
                  <span className="font-sans font-bold text-sm text-[#133026] tracking-tight">UPSC ZONE AI</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/60 shadow-2xs">
                    <span>Interactive Study Desk • Sample Model</span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#133026] text-[#F59E0B] font-bold text-xs flex items-center justify-center">
                    AS
                  </div>
                </div>
              </div>

              {/* TAB 1: DAILY STUDY PLAN VIEW */}
              {activeTab === 0 && (
                <div className="p-5 sm:p-6 space-y-5 animate-fadeIn">
                  
                  {/* Top Welcome & Circular Progress Ring */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-emerald-50/40 via-stone-50/50 to-slate-50 border border-slate-200/80">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#133026]">DAY 42 OF 365</span>
                        <span className="font-sans text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                          <span>Focus: Environment Wetlands</span>
                        </span>
                      </div>
                      <h4 className="font-sans text-base sm:text-lg font-bold text-slate-900 mt-1 tracking-tight">
                        Today's Targeted Syllabus Focus
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 mt-0.5">
                        Planned session: {studyHours} hours • Paced to complete GS II revision
                      </p>
                    </div>

                    {/* Circular Progress Ring with Smooth SVG Draw */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            stroke="#E2E8F0"
                            strokeWidth="7"
                            fill="transparent"
                          />
                          <motion.circle
                            cx="40"
                            cy="40"
                            r="34"
                            stroke="#133026"
                            strokeWidth="7"
                            strokeDasharray={213.6}
                            initial={shouldReduceMotion ? { strokeDashoffset: 213.6 * (1 - overallCoverage / 100) } : { strokeDashoffset: 213.6 }}
                            animate={{ strokeDashoffset: 213.6 * (1 - overallCoverage / 100) }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            strokeLinecap="round"
                            fill="transparent"
                          />
                        </svg>
                        <span className="absolute font-sans font-extrabold text-xs text-slate-900 transition-all duration-300 tabular-nums">
                          {overallCoverage}%
                        </span>
                      </div>
                      <div className="text-left font-sans">
                        <div className="text-xs font-bold text-slate-900">GS Coverage</div>
                        <div className="text-xs text-slate-500 tabular-nums">{overallCoverage}% of {EXAM_YEAR} Core</div>
                      </div>
                    </div>
                  </div>

                  {/* Priority Checklist */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-sans text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Today's Action Items
                      </span>
                      <span className="font-sans text-xs font-semibold text-[#133026] bg-[#EAF1EB] px-2.5 py-0.5 rounded-full border border-green-200/60">
                        {completedTasks.length} of 3 tasks checked
                      </span>
                    </div>

                    <div className="space-y-2">
                      {initialDailyTasks.map((task) => {
                        const isCompleted = completedTasks.includes(task.id);
                        return (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className={`group p-3 sm:p-3.5 rounded-xl border transition-all duration-300 cursor-pointer active:scale-[0.98] flex items-center justify-between gap-3 ${
                              isCompleted
                                ? 'bg-slate-50 border-slate-200/70 opacity-70'
                                : 'bg-white border-slate-200/80 shadow-2xs hover:border-slate-300 hover:bg-slate-50/60 hover:-translate-y-0.5'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-300 shrink-0 group-hover:ring-2 group-hover:ring-slate-200 ${
                                isCompleted 
                                  ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' 
                                  : 'border-slate-300 bg-white group-hover:border-slate-400'
                              }`}>
                                {isCompleted && (
                                  <svg className="w-3.5 h-3.5 stroke-white" viewBox="0 0 24 24" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <motion.path
                                      d="M20 6L9 17L4 12"
                                      initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                  </svg>
                                )}
                              </div>
                              <div className="min-w-0">
                                <div className={`font-sans text-sm font-semibold relative inline-block transition-colors duration-300 ${
                                  isCompleted ? 'text-slate-400' : 'text-slate-900'
                                }`}>
                                  {task.title}
                                  <motion.span
                                    className="absolute left-0 top-1/2 h-[1.5px] bg-slate-400"
                                    initial={false}
                                    animate={{ width: isCompleted ? '100%' : '0%' }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  />
                                </div>
                                <div className={`font-sans text-xs sm:text-sm mt-0.5 relative inline-block transition-colors duration-300 ${
                                  isCompleted ? 'text-slate-400 opacity-80' : 'text-slate-500'
                                }`}>
                                  {task.sub}
                                  <motion.span
                                    className="absolute left-0 top-1/2 h-[1px] bg-slate-400"
                                    initial={false}
                                    animate={{ width: isCompleted ? '100%' : '0%' }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                  />
                                </div>
                              </div>
                            </div>
                            <span className={`font-sans text-xs font-medium shrink-0 transition-all duration-300 ${
                              isCompleted ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              {task.time}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Syllabus Bars Breakdown with smooth animated fill */}
                  <div className="bg-slate-50/60 border border-slate-200/70 rounded-xl p-4">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-3 font-sans">
                      <span>Subject Completion Benchmarks</span>
                      <span className="text-slate-500 font-normal">Target: 85% pacing</span>
                    </div>
                    <div className="space-y-3">
                      {syllabusProgress.map((item, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs mb-1.5 font-sans">
                            <span className="font-medium text-slate-700">{item.name}</span>
                            <span className="font-bold text-[#133026] tabular-nums transition-all duration-300">{item.percentage}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${
                                item.isCoral ? 'bg-[#F59E0B]' : 'bg-[#133026]'
                              }`}
                              initial={shouldReduceMotion ? { width: `${item.percentage}%` } : { width: '0%' }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Next Recommended Step with Typing Animation */}
                  <div className="p-3.5 rounded-xl bg-[#133026] text-white flex items-start gap-3">
                    <Target className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div className="min-w-0 text-xs">
                      <div className="font-bold text-[#F59E0B] text-xs uppercase tracking-wider mb-0.5">
                        AI Mentor Recommended Step
                      </div>
                      <p className="text-stone-200 leading-relaxed font-normal">
                        {fullPromptText.slice(0, typingIndex)}
                        <span className="inline-block w-1.5 h-3 bg-[#F59E0B] ml-0.5 animate-pulse" />
                      </p>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: PYQ INSIGHTS VIEW (Unified with pyqThemes from pyqSample.js) */}
              {activeTab === 1 && (
                <div className="p-5 sm:p-6 space-y-5 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 border-b border-slate-200">
                    <div>
                      <h4 className="font-sans text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        25-Year UPSC CSE Prelims Topic Recurrence Heatmap ({PYQ_RANGE})
                      </h4>
                      <p className="font-sans text-xs text-slate-600 mt-0.5">
                        Historical topic distribution across 2,500 questions ({PYQ_RANGE}) mapped by syllabus micro-themes.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-full border border-emerald-200/80 shadow-2xs">
                        <span>GS Paper I Analysis</span>
                      </span>
                    </div>
                  </div>

                  {/* Recurrence Heatmap Table: horizontally scrollable on mobile */}
                  <div>
                    <div className="sm:hidden text-[11px] text-stone-500 font-medium mb-1.5 flex items-center justify-between">
                      <span>← Swipe table horizontally →</span>
                      <span className="text-[10px] text-stone-400">6 themes</span>
                    </div>
                    <div className="relative w-full overflow-x-auto rounded-xl border border-slate-200/80 bg-white">
                      <table className="w-full text-left font-sans min-w-[560px]">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/60">
                          <th className="align-middle text-xs font-bold tracking-wider text-slate-400 uppercase py-3.5 px-4 w-[22%] min-w-[110px] whitespace-nowrap">
                            THEME
                          </th>
                          <th className="align-middle text-xs font-bold tracking-wider text-slate-400 uppercase py-3.5 px-4 w-[22%] min-w-[140px] whitespace-nowrap">
                            AVG SHARE
                          </th>
                          <th className="align-middle text-xs font-bold tracking-wider text-slate-400 uppercase py-3.5 px-4 w-[20%] whitespace-nowrap">
                            TREND
                          </th>
                          <th className="align-middle text-xs font-bold tracking-wider text-slate-400 uppercase py-3.5 px-4 w-[36%]">
                            HIGH-YIELD MICRO-TOPICS
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {pyqThemes.map((row, idx) => (
                          <tr 
                            key={idx} 
                            className="hover:bg-slate-50/80 transition-colors duration-200 cursor-pointer group"
                          >
                            <td className="align-middle py-3.5 px-4 font-semibold text-slate-900 text-xs sm:text-sm whitespace-nowrap group-hover:text-emerald-900 transition-colors">
                              {row.shortName || row.name}
                            </td>
                            <td className="align-middle py-3.5 px-4 whitespace-nowrap">
                              <div className="flex items-baseline justify-between max-w-[130px] mb-1.5">
                                <span className="font-bold text-[#133026] text-xs sm:text-sm tabular-nums">
                                  {row.weight}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium tabular-nums">
                                  {row.count} Qs
                                </span>
                              </div>
                              <div className="w-full max-w-[130px] bg-slate-100 rounded-full h-1.5 overflow-hidden">
                                <div 
                                  className="h-full bg-emerald-600 rounded-full transition-all duration-500 group-hover:bg-emerald-500" 
                                  style={{ width: `${row.share || Math.round((row.count / 2500) * 100)}%` }}
                                />
                              </div>
                            </td>
                            <td className="align-middle py-3.5 px-4 whitespace-nowrap">
                              <span className={`px-2.5 py-1 rounded-md text-xs font-medium inline-flex items-center gap-1 ${getTrendBadgeClass(row.trend)}`}>
                                {row.trend}
                              </span>
                            </td>
                            <td className="align-middle py-3.5 px-4 text-slate-600 text-xs sm:text-sm leading-relaxed">
                              {row.highYield}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                  {/* High Yield Drill Action Card */}
                  <div className="p-4 rounded-xl bg-[#133026] border border-emerald-900/50 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                    <div>
                      <div className="font-sans text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider">
                        HIGH-YIELD ELIMINATION DRILL
                      </div>
                      <div className="font-sans text-sm sm:text-base font-bold text-white mt-0.5 tracking-tight">
                        Practice 25 Most Repeated Polity Articles & Schedules
                      </div>
                      <div className="font-sans text-xs text-emerald-200/90 mt-0.5">
                        High-yield question bank • Adaptive distractor elimination mode
                      </div>
                    </div>
                    <button 
                      type="button"
                      className="bg-[#F59E0B] hover:bg-orange-400 hover:shadow-lg hover:-translate-y-0.5 text-stone-950 font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 cursor-pointer shrink-0 self-start sm:self-auto"
                    >
                      Launch Drill →
                    </button>
                  </div>
                </div>
              )}

              {/* TAB 3: AI ANSWER FEEDBACK VIEW (Honest rubric labels) */}
              {activeTab === 2 && (
                <EvaluationRubricFeedback embedded={true} />
              )}

              {/* Bottom Workspace Status Bar */}
              <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Aligned with the latest UPSC CSE syllabus</span>
                </div>
                <span className="font-semibold text-[#133026]">Command Center Active</span>
              </div>

            </div>

          </div>

        </div>

        {/* Consolidated Compact Feature Highlights */}
        <div className="mt-6 pt-6 border-t border-stone-200/60">
          <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#133026] stroke-[2.5] shrink-0" />
              <span className="font-sans text-sm text-slate-700 font-medium">
                Personalized for working aspirants & full-time students
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#133026] stroke-[2.5] shrink-0" />
              <span className="font-sans text-sm text-slate-700 font-medium">
                Prelims MCQs + Mains Answer Writing in one view
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#133026] stroke-[2.5] shrink-0" />
              <span className="font-sans text-sm text-slate-700 font-medium">
                Spaced repetition engine engineered for long-term syllabus retention
              </span>
            </div>
          </div>

          <div className="text-[13px] text-slate-500 mt-3 text-center w-full">
            Built around the UPSC CSE syllabus structure
          </div>
        </div>
      </SectionReveal>

      {/* Streak +1 Toast */}
      <AnimatePresence>
        {showStreakToast && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="fixed bottom-20 md:bottom-24 right-5 sm:right-8 z-50 bg-[#133026] text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/60 flex items-center gap-3"
          >
            <span className="text-xl">🔥</span>
            <div>
              <div className="font-bold text-sm text-[#FBBF24]">Great job, streak +1</div>
              <div className="text-xs text-stone-300">All 3 daily action items complete!</div>
            </div>
            <button
              type="button"
              onClick={() => setShowStreakToast(false)}
              className="ml-2 text-stone-400 hover:text-white text-xs p-1 cursor-pointer"
              aria-label="Dismiss toast"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </section>
  );
}
