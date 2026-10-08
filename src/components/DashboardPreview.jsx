import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  CheckSquare, 
  Check, 
  ArrowRight, 
  Sparkles, 
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
import { EXAM_YEAR } from '../config/exam.js';
import { PYQ_RANGE, PYQ_TOTAL, pyqThemes } from '../data/pyqSample.js';

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
    completed: true,
  },
  {
    id: 2,
    title: 'Environment: Biosphere Reserves & Ramsar Wetlands (2014-2024)',
    sub: 'Prelims GS I • 25 MCQs Elimination Practice',
    time: '35 min',
    completed: false,
  },
  {
    id: 3,
    title: 'Governance & Economy: Fiscal Federalism & Tax Devolutions',
    sub: 'GS III • National Editorial Synthesis + 5 flashcards',
    time: '30 min',
    completed: false,
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
      return 'bg-green-50 border border-green-200 text-green-700';
    case 'High Weight':
      return 'bg-orange-50 border border-orange-200 text-orange-700';
    case 'Stable':
      return 'bg-blue-50 border border-blue-200 text-blue-700';
    case 'Moderate':
      return 'bg-slate-100 border border-slate-200 text-slate-600';
    case 'Application-based':
      return 'bg-purple-50 border border-purple-200 text-purple-700';
    case 'Rising':
      return 'bg-emerald-50 border border-emerald-200 text-emerald-700';
    default:
      return 'bg-slate-100 border border-slate-200 text-slate-600';
  }
};

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [studyHours, setStudyHours] = useState(6.0);
  const [studyMode, setStudyMode] = useState('fulltime'); // 'working' or 'fulltime'
  const [tasks, setTasks] = useState(initialDailyTasks);
  const [typingIndex, setTypingIndex] = useState(0);

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

  const fullPromptText = "Based on your last 3 mock diagnostics, prioritize Environment National Parks & Schedule species. Your accuracy improves +24% when solving elimination drills in 15-minute bursts.";

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
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleModeChange = (mode) => {
    setStudyMode(mode);
    if (mode === 'working') {
      setStudyHours(3.5);
    } else {
      setStudyHours(7.5);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;

  // Real-time calculation based on study hours slider
  const staticHours = (studyHours * 0.45).toFixed(1);
  const currentAffairsHours = (studyHours * 0.25).toFixed(1);
  const pyqHours = (studyHours * 0.20).toFixed(1);
  const mcqCount = Math.round(studyHours * 7);
  const flashcardsMin = Math.round(studyHours * 0.10 * 60);

  return (
    <section className="pt-8 sm:pt-12 pb-8 sm:pb-10 bg-transparent border-b border-stone-200/60" id="preparation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 block">
            DISCIPLINED PREPARATION, OPTIMIZED FOR YOUR DESK
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Everything you study today, in one command center.
          </h2>
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
                    <span className="w-2 h-2 rounded-full bg-[#133026]" />
                    <span className="font-medium text-xs">Core GS Textbooks</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{staticHours} hrs</div>
                  <div className="text-xs text-stone-500">Target: 2 Standard Chapters</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                    <span className="font-medium text-xs">Editorials & Current</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{currentAffairsHours} hrs</div>
                  <div className="text-xs text-stone-500">2 National Papers Digest</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="font-medium text-xs">PYQ Practice</span>
                  </div>
                  <div className="font-bold text-stone-900 text-sm">{pyqHours} hrs</div>
                  <div className="text-xs text-stone-500">{mcqCount} MCQs + Elimination</div>
                </div>

                <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200/60">
                  <div className="flex items-center gap-1.5 text-stone-600 mb-0.5">
                    <span className="w-2 h-2 rounded-full bg-stone-400" />
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
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300">
              
              {/* Top Screen App Bar */}
              <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#133026] flex items-center justify-center text-[#F59E0B]">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-bold text-sm text-[#133026] tracking-tight">UPSC ZONE AI</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="text-stone-500 font-medium text-xs hidden sm:inline">
                    • Sample data for demonstration
                  </span>
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

                    {/* Circular Progress Ring */}
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
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            stroke="#133026"
                            strokeWidth="7"
                            strokeDasharray={213.6}
                            strokeDashoffset={213.6 * (1 - overallCoverage / 100)}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-500 ease-out"
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
                        {completedCount} of 3 tasks checked
                      </span>
                    </div>

                    <div className="space-y-2">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`group p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 hover:bg-slate-50 hover:shadow-sm hover:-translate-y-0.5 ${
                            task.completed
                              ? 'bg-slate-50/70 border-slate-200/70 opacity-75'
                              : 'bg-white border-slate-200/80 shadow-2xs hover:border-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all duration-200 shrink-0 group-hover:ring-2 group-hover:ring-slate-200 ${
                              task.completed 
                                ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' 
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {task.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <div className="min-w-0">
                              <div className={`font-sans text-sm font-semibold truncate transition-colors ${
                                task.completed ? 'line-through text-slate-400' : 'text-slate-900'
                              }`}>
                                {task.title}
                              </div>
                              <div className="font-sans text-sm text-slate-500 mt-0.5 truncate">
                                {task.sub}
                              </div>
                            </div>
                          </div>
                          <span className="font-sans text-xs font-medium text-slate-500 shrink-0">
                            {task.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Syllabus Bars Breakdown */}
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
                            <div
                              className={`h-full rounded-full transition-all duration-500 ease-out ${
                                item.isCoral ? 'bg-[#F59E0B]' : 'bg-[#133026]'
                              }`}
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Next Best Step with Typing Animation */}
                  <div className="p-3.5 rounded-xl bg-[#133026] text-white flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <div className="min-w-0 text-xs">
                      <div className="font-bold text-[#F59E0B] text-xs uppercase tracking-wider mb-0.5">
                        AI Mentor Next Best Step
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
                        Analyzing 2,500 sample questions ({PYQ_RANGE}) categorized by syllabus micro-themes.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <span className="font-sans text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        Sample trends
                      </span>
                      <span className="font-sans text-xs text-slate-500 font-medium hidden sm:inline">
                        • Illustrative sample data
                      </span>
                    </div>
                  </div>

                  {/* Recurrence Heatmap Table: table-fixed with aggressive truncation and perfect vertical/horizontal alignment */}
                  <div className="w-full max-sm:overflow-x-auto overflow-hidden">
                    <table className="w-full table-fixed text-left font-sans">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="align-middle text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider pb-3 px-2 sm:px-3 w-[24%]">Theme</th>
                          <th className="align-middle text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider pb-3 px-2 sm:px-3 w-[18%]">Avg Share</th>
                          <th className="align-middle text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider pb-3 pl-2 sm:pl-3 pr-4 sm:pr-5 w-[26%]">Sample Trend</th>
                          <th className="align-middle text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider pb-3 pl-2 sm:pl-3 pr-2 sm:pr-3 w-[32%]">High-Yield Micro-Topics</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {pyqThemes.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors cursor-default">
                            <td className="align-middle py-3 sm:py-3.5 px-2 sm:px-3 font-semibold text-slate-900 text-xs sm:text-sm truncate" title={row.name}>
                              {row.name}
                            </td>
                            <td className="align-middle py-3 sm:py-3.5 px-2 sm:px-3 font-bold text-[#133026] text-xs sm:text-sm whitespace-nowrap">
                              {row.weight} <span className="font-normal text-slate-500 text-[11px] sm:text-xs">({row.count} Qs)</span>
                            </td>
                            <td className="align-middle py-3 sm:py-3.5 pl-2 sm:pl-3 pr-4 sm:pr-5 whitespace-nowrap">
                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium inline-flex items-center ${getTrendBadgeClass(row.trend)}`}>
                                {row.trend}
                              </span>
                            </td>
                            <td className="align-middle py-3 sm:py-3.5 pl-2 sm:pl-3 pr-2 sm:pr-3 text-slate-500 text-xs sm:text-sm truncate min-w-0 max-w-[120px] sm:max-w-[170px] md:max-w-[210px]" title={row.highYield}>
                              {row.highYield}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                        Sample drill: 25 most repeated Polity articles and schedules
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
                <div className="p-5 sm:p-6 space-y-4 animate-fadeIn">
                  <div className="flex items-start sm:items-center justify-between gap-3 pb-3.5 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-bold text-[#F59E0B] bg-[#133026] px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                        GS II MAINS EVALUATION
                      </span>
                      <h4 className="font-sans text-lg font-semibold text-slate-800 leading-snug mt-1.5">
                        Question: "Evaluate the role of the Finance Commission in balancing fiscal federalism."
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">6.5 / 10</div>
                      <div className="text-xs font-semibold text-emerald-700">Sample score</div>
                    </div>
                  </div>

                  {/* Rubric Breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-center">
                    <div className="p-3 bg-slate-50/50 border border-slate-100 shadow-sm rounded-xl">
                      <div className="font-sans font-medium text-slate-500 text-xs">Introduction</div>
                      <div className="font-sans font-bold text-slate-800 text-base mt-0.5">1.5 / 2.0</div>
                      <div className="font-sans text-xs text-emerald-700 font-medium mt-0.5">Clear Article citation</div>
                    </div>
                    <div className="p-3 bg-slate-50/50 border border-slate-100 shadow-sm rounded-xl">
                      <div className="font-sans font-medium text-slate-500 text-xs">Core Body Arguments</div>
                      <div className="font-sans font-bold text-slate-800 text-base mt-0.5">3.5 / 5.0</div>
                      <div className="font-sans text-xs text-amber-700 font-medium mt-0.5">Good cooperative points</div>
                    </div>
                    <div className="p-3 bg-slate-50/50 border border-slate-100 shadow-sm rounded-xl">
                      <div className="font-sans font-medium text-slate-500 text-xs">Way Forward</div>
                      <div className="font-sans font-bold text-slate-800 text-base mt-0.5">1.5 / 3.0</div>
                      <div className="font-sans text-xs text-rose-600 font-medium mt-0.5">Needs institutional reform</div>
                    </div>
                  </div>

                  {/* Commonly Used Keywords Tag Cloud */}
                  <div>
                    <div className="text-xs font-bold text-slate-700 mb-2 flex items-center justify-between">
                      <span className="font-sans">Keywords to Integrate (Rubric standard):</span>
                      <span className="text-xs text-slate-400 font-normal">Commonly used keywords</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Article 280 Mandate (Included)</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>Vertical Devolution 41% (Included)</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white border border-dashed border-slate-300 text-slate-500 px-3 py-1.5 rounded-md text-sm font-medium">
                        <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2.5]" />
                        <span>Missing: Horizontal Equity Criteria</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 bg-white border border-dashed border-slate-300 text-slate-500 px-3 py-1.5 rounded-md text-sm font-medium">
                        <Plus className="w-3.5 h-3.5 text-slate-400 shrink-0 stroke-[2.5]" />
                        <span>Missing: Cess & Surcharge Erosion</span>
                      </span>
                    </div>
                  </div>

                  {/* Mentor-Style Evaluator Feedback Box */}
                  <div className="bg-slate-50 border-l-4 border-slate-800 p-4 rounded-r-lg">
                    <div className="font-sans font-semibold text-xs uppercase tracking-wider text-slate-800 mb-1 flex items-center gap-1.5">
                      <span>AI Evaluator Feedback (Sample for Demonstration):</span>
                    </div>
                    <p className="font-sans italic text-slate-600 leading-relaxed text-[15px]">
                      "Strong contextual opening with balanced arguments. To jump from 6.5 to 8.0, incorporate a simple 3-tier flowchart illustrating statutory grants under Article 275 versus tax sharing."
                    </p>
                  </div>
                </div>
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

      </div>
    </section>
  );
}
