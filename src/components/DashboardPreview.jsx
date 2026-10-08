import React, { useState } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  CheckSquare, 
  Flame, 
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
  Newspaper,
  PenTool,
  Bot,
  TrendingUp,
} from 'lucide-react';

const sidebarNav = [
  { name: 'Daily Command Center', icon: LayoutDashboard, active: true },
  { name: 'My Study Plan (GS I-IV)', icon: Calendar },
  { name: 'Prelims & CSAT Mocks', icon: FileText },
  { name: '25-Yr PYQ Bank', icon: Clock },
  { name: 'The Hindu & IE Briefs', icon: Newspaper },
  { name: 'Laxmikanth & NCERT Notes', icon: PenTool },
  { name: 'AI Mains Answer Evaluator', icon: Bot },
  { name: 'AIR Rank & Weak Areas', icon: TrendingUp },
];

const metrics = [
  {
    label: 'GS Syllabus coverage',
    value: '68%',
    footer: 'Laxmikanth & Spectrum completed',
    icon: BookOpen,
  },
  {
    label: 'Last Prelims mock score',
    value: '118 / 200',
    footer: 'Cutoff cleared by +16 marks (AIR 240)',
    icon: CheckSquare,
  },
  {
    label: 'Active study streak',
    value: '14 days',
    footer: 'Consistent 7.5 hrs/day discipline',
    icon: Flame,
  },
];

const initialFocusTasks = [
  {
    id: 1,
    title: 'Laxmikanth: Basic Structure & Judicial Review',
    sub: 'GS II • Indian Polity • Active Recall & Notes',
    time: '45 min',
    completed: true,
  },
  {
    id: 2,
    title: 'PYQs: National Parks & Ramsar Sites (2014-2024)',
    sub: 'Prelims GS I • Shankar IAS • 25 MCQs practice',
    time: '35 min',
    completed: false,
  },
  {
    id: 3,
    title: 'The Hindu Editorial: DPDP Act & Privacy Rights',
    sub: 'GS III • Governance • 1 editorial brief + 5 flashcards',
    time: '25 min',
    completed: false,
  },
];

const syllabusProgress = [
  { name: 'Indian Polity & Governance', percentage: 82, isCoral: false },
  { name: 'Modern Indian History (Spectrum)', percentage: 68, isCoral: false },
  { name: 'Geography & Mapping', percentage: 56, isCoral: false },
  { name: 'Environment & Ecology', percentage: 42, isCoral: true },
];

export default function DashboardPreview() {
  const [tasks, setTasks] = useState(initialFocusTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <section className="py-20 lg:py-24 bg-[#FDF9F1] border-b border-stone-200/60" id="preparation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
            DISCIPLINED PREPARATION, OPTIMIZED FOR YOUR DESK
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] leading-tight mb-3">
            An ambitious goal. A daily strategic roadmap.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            Eliminate scattered resources and indecision. Your GS syllabus, previous-year questions, and daily answer writing synchronized in a single command center.
          </p>
        </div>

        {/* Interactive Dashboard Container with Ambient Glow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Faint Radial Gradient Glow */}
          <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-teal-700/10 via-amber-500/10 to-emerald-600/10 rounded-3xl blur-3xl pointer-events-none -z-10" />

          {/* Main Floating Dashboard Card */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-2xl shadow-teal-900/10 hover:shadow-teal-900/15 transition-all duration-300 overflow-hidden" id="dashboard-demo">
            
            {/* Top Bar */}
            <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 shadow-sm flex items-center justify-between gap-2 md:gap-4 bg-white/95 backdrop-blur-md">
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-8 h-8 rounded-lg bg-[#133026] hover:bg-[#183C30] hover:scale-105 active:scale-95 flex items-center justify-center text-[#F59E0B] shadow-2xs transition-all duration-200 cursor-pointer">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="font-serif font-bold text-sm text-[#133026] tracking-tight">SANKALP IAS</span>
              </div>

              <div className="flex-1 max-w-md hidden md:flex items-center gap-2.5 bg-slate-50 hover:bg-white border border-slate-200/80 rounded-xl px-3.5 py-2 text-xs text-slate-600 focus-within:ring-2 focus-within:ring-teal-700 focus-within:bg-white focus-within:shadow-md transition-all duration-300 cursor-text group">
                <Search className="w-3.5 h-3.5 text-slate-400 group-focus-within:text-teal-700 transition-colors shrink-0" />
                <input
                  type="text"
                  placeholder="Search Article 21, Kesavananda Bharati, or Budget 2025..."
                  className="w-full bg-transparent border-none p-0 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="bg-[#EAF1EB] border border-green-200 hover:border-green-400 hover:bg-green-50 text-[#133026] text-xs font-semibold px-3 py-1.5 rounded-full shadow-2xs hover:shadow-xs transition-colors cursor-pointer whitespace-nowrap">
                  Target: CSE 2026 (AIR &lt; 50)
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 hover:scale-105 active:scale-95 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-[#133026] cursor-pointer transition-all duration-200 shadow-2xs">
                  <Bell className="w-3.5 h-3.5" />
                </div>
                <div className="w-8 h-8 rounded-full bg-[#133026] hover:bg-[#183C30] hover:scale-105 active:scale-95 text-white font-bold text-xs flex items-center justify-center shadow-xs cursor-pointer transition-all duration-200 ring-2 ring-[#EAF1EB]">
                  AS
                </div>
              </div>
            </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">
            
            {/* Sidebar */}
            <div className="lg:col-span-4 bg-slate-50/70 border-r border-slate-100 p-4 sm:p-5 flex flex-col justify-start">
              <div>
                <span className="text-[11px] font-bold text-slate-400 tracking-wider px-2 block mb-4 uppercase font-sans">
                  PREPARATION ROADMAP
                </span>
                <nav className="space-y-3">
                  {sidebarNav.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        className={`flex items-center gap-3.5 text-sm sm:text-[15px] px-3.5 py-3 sm:py-3.5 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                          item.active 
                            ? 'bg-[#133026] text-white font-semibold shadow-xs' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-[#133026]'
                        }`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 ${item.active ? 'text-[#F59E0B]' : 'text-slate-400'}`} />
                        <span className="tracking-tight">{item.name}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Workspace Area */}
            <div className="lg:col-span-8 p-5 sm:p-7 bg-white flex flex-col justify-between">
              <div>
                {/* Workspace Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#133026]">
                      Welcome back, Ananya. Ready for Day 42?
                    </h3>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">
                      Target: Complete GS II Module • 2h 30m planned study session today.
                    </p>
                  </div>
                  <button className="self-start sm:self-auto inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-slate-600" />
                    <span>Adjust daily hours</span>
                  </button>
                </div>

                {/* Metrics Cards (Hierarchy & Accent Colors) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mb-6">
                  {metrics.map((m, idx) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 shadow-sm rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-500 font-medium group-hover:text-slate-700 transition-colors">
                            {m.label}
                          </span>
                          <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-200/80 group-hover:bg-[#EAF1EB] group-hover:text-[#133026] flex items-center justify-center text-slate-600 transition-colors">
                            <Icon className="w-4 h-4 group-hover:scale-105 transition-transform" />
                          </div>
                        </div>
                        <div className="font-sans font-bold tracking-tight text-2xl sm:text-3xl text-slate-800 my-1.5 transition-colors whitespace-nowrap flex flex-row items-baseline">
                          {m.value}
                        </div>
                        <div className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                          {m.footer}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Focus for Today vs Syllabus Coverage */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                  
                  {/* Today's Focus Tasks */}
                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif font-bold text-[#133026] uppercase tracking-wider">
                        Today's Study Checklist
                      </span>
                      <span className="text-[10px] font-bold text-[#133026] bg-[#EAF1EB] px-2.5 py-0.5 rounded-full border border-[#133026]/10">
                        {completedCount} / 3 complete
                      </span>
                    </div>

                    <div className="space-y-2">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                            task.completed 
                              ? 'bg-slate-50/70 border-slate-200 text-slate-400' 
                              : 'bg-white hover:bg-slate-100 border-slate-200/70 hover:border-slate-300 shadow-2xs hover:shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center border transition-colors ${
                              task.completed ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div className="truncate">
                              <div className={`text-xs font-semibold truncate ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                {task.title}
                              </div>
                              <div className="text-[10px] text-slate-500 font-normal">{task.sub}</div>
                            </div>
                          </div>
                          <span className="text-xs text-slate-400 font-normal shrink-0 ml-2">{task.time}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-slate-400 text-[11px]">Strict 2-hour window recommended.</span>
                      <a href="#" className="font-semibold text-[#133026] hover:text-[#F59E0B] hover:underline transition-colors duration-200 cursor-pointer">
                        Open Timer →
                      </a>
                    </div>
                  </div>

                  {/* Syllabus Coverage & Recommendation */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="bg-slate-50 hover:bg-white border border-slate-200/60 hover:border-slate-300 rounded-xl p-4 transition-all duration-200 shadow-2xs hover:shadow-xs">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-serif font-bold text-[#133026]">Syllabus Coverage</span>
                        <a href="#" className="text-[11px] font-semibold text-[#133026] hover:text-[#F59E0B] hover:underline inline-flex items-center transition-colors duration-200 cursor-pointer">
                          View all <ArrowUpRight className="w-3 h-3 ml-0.5" />
                        </a>
                      </div>

                      {/* Subject Progress */}
                      <div className="space-y-3">
                        {syllabusProgress.map((item, idx) => (
                          <div key={idx} className="group/bar cursor-pointer">
                            <div className="flex items-center justify-between text-[11px] mb-1">
                              <span className="font-medium text-slate-800 group-hover/bar:text-[#133026] transition-colors">{item.name}</span>
                              <span className="font-bold text-[#133026]">{item.percentage}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${item.isCoral ? 'bg-[#F59E0B]' : 'bg-[#133026]'}`}
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Action Cards Grid - Perfectly Aligned Single Row with Equal Heights */}
          <div className="p-5 sm:p-7 border-t border-slate-100 bg-slate-50/40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              {/* 1. Active Recall Queue */}
              <div className="h-full flex flex-col justify-between bg-[#EAF1EB]/70 hover:bg-[#EAF1EB] border border-slate-200/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer group shadow-2xs">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#133026]">
                    <div className="w-7 h-7 rounded-lg bg-white/80 border border-[#133026]/10 flex items-center justify-center shrink-0 shadow-2xs">
                      <RotateCw className="w-4 h-4 text-[#133026] group-hover:rotate-45 transition-transform duration-300" />
                    </div>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#133026]">Active Recall Queue</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    14 spaced-revision flashcards on <strong className="font-semibold text-slate-800">Fundamental Rights & Writs</strong> due today.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#133026]/10 flex items-center justify-between text-xs font-bold text-[#133026] group-hover:text-[#F59E0B] transition-colors">
                  <span>Start 10-min revision</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* 2. Mains Question of the Day (Center Dark Focal Point) */}
              <div className="h-full flex flex-col justify-between bg-[#133026] hover:bg-[#183C30] border border-[#1e483a] rounded-2xl p-5 sm:p-6 shadow-lg shadow-teal-900/30 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-900/50 cursor-pointer group text-white">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Sparkles className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B] group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                    <span className="text-[10px] font-bold text-[#F59E0B] tracking-wider uppercase">MAINS QUESTION OF THE DAY • GS II</span>
                  </div>
                  <h4 className="text-xs sm:text-[13px] font-medium leading-snug line-clamp-2 text-white mb-2">
                    Critically examine the role of the Finance Commission in balancing cooperative and competitive federalism in India.
                  </h4>
                  <p className="text-[10.5px] text-[#D7E5DB] font-normal leading-relaxed mb-4">
                    250 words • 15 marks • Instant evaluation against topper copies
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#F59E0B] group-hover:text-amber-300 transition-colors">
                  <span>Submit Answer for AI Review</span>
                  <ArrowRight className="w-4 h-4 text-[#F59E0B] transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

              {/* 3. AI Next Best Step */}
              <div className="h-full flex flex-col justify-between bg-[#EAF1EB]/70 hover:bg-[#EAF1EB] border border-slate-200/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer group shadow-2xs">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#133026]">
                    <div className="w-7 h-7 rounded-lg bg-white/80 border border-[#133026]/10 flex items-center justify-center shrink-0 shadow-2xs">
                      <Sparkles className="w-4 h-4 text-[#133026] fill-[#133026] group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h4 className="text-sm sm:text-base font-serif font-bold text-[#133026]">AI Next Best Step</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                    Environment PYQs show low recall on Wildlife Protection Act amendments. Revise Schedule 1-4 species.
                  </p>
                </div>
                <div className="pt-3 border-t border-[#133026]/10 flex items-center justify-between text-xs font-bold text-[#133026] group-hover:text-[#F59E0B] transition-colors">
                  <span>Start 15-min MCQ drill</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-12 mb-3">
          <div className="flex items-center gap-2.5">
            <Check className="w-4.5 h-4.5 text-[#133026] stroke-[2.5] shrink-0" />
            <span className="font-sans font-medium text-[15px] sm:text-base text-slate-800 tracking-tight">
              Personalized for working aspirants & full-time students
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4.5 h-4.5 text-[#133026] stroke-[2.5] shrink-0" />
            <span className="font-sans font-medium text-[15px] sm:text-base text-slate-800 tracking-tight">
              Prelims MCQs + Mains Answer Writing in one view
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Check className="w-4.5 h-4.5 text-[#133026] stroke-[2.5] shrink-0" />
            <span className="font-sans font-medium text-[15px] sm:text-base text-slate-800 tracking-tight">
              Spaced repetition engine engineered for long-term syllabus retention
            </span>
          </div>
        </div>

        <div className="text-sm text-slate-500 mt-2 text-center font-normal">
          Curated with real UPSC CSE trends, topper notes & verified syllabus mappings.
        </div>

      </div>
    </section>
  );
}
