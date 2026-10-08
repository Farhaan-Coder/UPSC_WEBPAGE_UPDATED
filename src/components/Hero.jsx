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
  ChevronRight
} from 'lucide-react';

const initialTasks = [
  {
    id: 1,
    title: 'Polity: Laxmikanth Fundamental Rights Chapter Revision',
    subtitle: 'GS II • Target: 45 Mins • 15 PYQs',
    completed: true,
  },
  {
    id: 2,
    title: 'Environment: Shankar IAS Biodiversity PYQ Analysis',
    subtitle: 'Prelims Focus • 20 Questions Elimination Drill',
    completed: false,
  },
  {
    id: 3,
    title: 'The Hindu & Indian Express Editorial Synthesis',
    subtitle: 'Daily Current Affairs • Spaced Flashcards Recall',
    completed: false,
  },
];

export default function Hero() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-[#FDF9F1] bg-grid-pattern overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-[#EAF1EB] border border-[#133026]/15 text-[#133026] text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#133026] fill-[#133026]" />
              <span>DELHI'S PREMIER COACHING PEDAGOGY, AT YOUR DESK.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-serif font-bold text-[#133026] leading-[1.16] tracking-tight mb-5">
              Bring Delhi's Top UPSC Expertise to Your Desk.<br />
              <span className="text-[#133026] mt-1 inline-block">
                Crack the Exam with Data-Driven Insights.
              </span>
            </h1>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-8 max-w-lg font-normal">
              Eliminate syllabus overwhelm. Transform foundational textbooks, daily national editorials, and previous-year questions into a high-yield, structured daily study schedule.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-6">
              <a
                href="#get-started"
                className="group relative inline-flex items-center gap-2.5 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-900 font-bold text-sm px-6 py-3.5 rounded-xl shadow-[0_4px_16px_rgba(245,158,11,0.28)] hover:shadow-[0_8px_28px_rgba(245,158,11,0.42)] border border-amber-300/60 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] overflow-hidden"
              >
                {/* Sleek light reflection sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
                <span className="relative tracking-tight">Start Free Preparation</span>
                <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#dashboard-demo"
                className="group inline-flex items-center gap-2.5 bg-white/95 hover:bg-white text-stone-800 hover:text-[#133026] font-semibold text-sm px-5 py-3.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(19,48,38,0.1)] border border-stone-200/90 hover:border-stone-300 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <span className="tracking-tight">Explore Live Dashboard</span>
                <span className="w-5 h-5 rounded-full bg-stone-100 group-hover:bg-[#133026] flex items-center justify-center transition-colors duration-300">
                  <Play className="w-2.5 h-2.5 fill-stone-700 group-hover:fill-[#F59E0B] text-stone-700 group-hover:text-[#F59E0B] ml-0.5 transition-colors duration-300" />
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-1.5 text-stone-800">
                <Check className="w-4 h-4 text-[#133026] stroke-[2.8]" />
                <span>Zero Fee to Start</span>
              </div>
              <span className="text-stone-300">•</span>
              <div className="flex items-center gap-1.5 text-stone-800">
                <Check className="w-4 h-4 text-[#133026] stroke-[2.8]" />
                <span>Strictly UPSC CSE Syllabus</span>
              </div>
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="lg:col-span-7">
            {/* Meta Tag */}
            <div className="flex items-center justify-between text-xs font-semibold text-stone-500 mb-3 px-2">
              <span className="tracking-wider text-[#133026]/70 uppercase font-sans">LESS GUESSWORK. MORE DIRECTION.</span>
              <span className="text-stone-400 font-medium text-[11px]">• Sample workspace</span>
            </div>

            {/* Dashboard Container */}
            <div className="bg-white border border-slate-200/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              
              {/* Top Navigation */}
              <div className="px-4 sm:px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white/95">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#133026] flex items-center justify-center text-[#F59E0B] shadow-2xs hover:scale-105 active:scale-95 transition-all cursor-pointer">
                    <BookOpenCheck className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-bold text-sm text-[#133026] tracking-tight">UPSC ZONE</span>
                  <span className="bg-[#EAF1EB] text-[#133026] border border-green-200/80 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs">CSE 2026</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 hover:scale-105 active:scale-95 border border-slate-200/80 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all duration-200 cursor-pointer shadow-2xs">
                    <Bell className="w-3.5 h-3.5" />
                  </div>
                  {/* User Profile */}
                  <div className="flex items-center gap-2 pl-1.5 border-l border-slate-200 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=90&h=90&q=80" 
                      alt="Ananya Sharma"
                      className="w-7 h-7 rounded-full object-cover ring-2 ring-slate-200"
                    />
                    <span className="text-xs font-bold text-slate-800 hidden sm:inline">Ananya S.</span>
                  </div>
                </div>
              </div>

              {/* Workspace Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
                {/* Navigation Sidebar */}
                <div className="md:col-span-4 bg-slate-50/60 border-r border-slate-100 p-3.5 sm:p-4 flex flex-col justify-between">
                  <div>
                    <span className="text-[9.5px] font-bold text-slate-400 tracking-wider px-2 block mb-2.5 uppercase font-sans">
                      STUDY DESK
                    </span>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2.5 text-xs font-bold bg-[#133026] hover:bg-[#183C30] text-white px-3 py-2 rounded-lg shadow-xs transition-colors cursor-pointer">
                        <LayoutDashboard className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Daily Schedule</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <span>Prelims Revision</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
                        <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <span>Mains Writing</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
                        <Newspaper className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <span>Daily Editorial</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
                        <BookMarked className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <span>NCERT Library</span>
                      </li>
                      <li className="flex items-center gap-2.5 text-xs font-medium text-slate-600 px-3 py-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
                        <Bot className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
                        <span>AIR Mentor AI</span>
                      </li>
                    </ul>
                  </div>

                  {/* Target Milestone */}
                  <div className="bg-[#EAF1EB] border border-[#133026]/10 rounded-xl p-3 mt-4 hover:bg-[#E2EBE3] transition-colors cursor-pointer group">
                    <span className="text-[8.5px] font-bold text-[#133026] tracking-wider block mb-0.5 uppercase">TARGET MILESTONE</span>
                    <span className="text-xs font-sans font-bold text-[#133026] block group-hover:text-emerald-950 transition-colors">Prelims 2026 Target</span>
                    <span className="text-[10px] text-slate-600 font-medium block">246 Days Remaining • Consistent Progress</span>
                  </div>
                </div>

                {/* Main Workspace */}
                <div className="md:col-span-8 p-4 sm:p-5 flex flex-col justify-between bg-white">
                  <div>
                    {/* Welcome Header */}
                    <div className="mb-4">
                      <h3 className="text-base sm:text-lg font-sans font-bold tracking-tight text-slate-900">
                        Welcome back, Ananya
                      </h3>
                      <p className="text-[11.5px] text-slate-500 font-normal mt-0.5">
                        Consistency drives top ranks. Here is your strategic plan for today.
                      </p>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
                      <div className="border border-slate-200/80 rounded-xl p-3 sm:p-3.5 bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs">
                        <div className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors">
                          68%
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">GS Syllabus Complete</div>
                      </div>
                      <div className="border border-slate-200/80 rounded-xl p-3 sm:p-3.5 bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs">
                        <div className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors">
                          118 / 200
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">GS I Mock Score</div>
                      </div>
                      <div className="border border-slate-200/80 rounded-xl p-3 sm:p-3.5 bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer group shadow-2xs">
                        <div className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-slate-800 group-hover:text-[#133026] transition-colors">
                          6h 15m
                        </div>
                        <div className="text-[10px] text-slate-500 font-medium mt-0.5">Self Study This Week</div>
                      </div>
                    </div>

                    {/* Today's Checklist */}
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-sans font-bold text-slate-800">Daily Priority Checklist</span>
                        <span className="text-slate-400 text-[10.5px] font-medium">{completedCount} of 3 complete</span>
                      </div>

                      <div className="space-y-2 mb-4">
                        {tasks.map((task) => (
                          <div
                            key={task.id}
                            onClick={() => toggleTask(task.id)}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                          >
                            <div className={`w-4.5 h-4.5 rounded-md flex items-center justify-center border transition-all duration-200 shrink-0 ${
                              task.completed 
                                ? 'bg-[#133026] border-[#133026] text-white shadow-2xs' 
                                : 'border-slate-300 bg-white group-hover:border-slate-400'
                            }`}>
                              {task.completed && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`text-xs font-semibold truncate transition-colors ${task.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                                {task.title}
                              </div>
                              <div className="text-[10px] text-slate-500 font-normal">{task.subtitle}</div>
                            </div>
                            {task.completed ? (
                              <Check className="w-3.5 h-3.5 text-[#133026] stroke-[2.5] shrink-0" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-600 transition-all duration-200 shrink-0" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Focus Recommendation Action Banner */}
                  <div className="relative overflow-hidden bg-gradient-to-r from-[#133026] to-[#1c4537] hover:from-[#16382c] hover:to-[#225342] border border-emerald-950/20 rounded-xl p-3 sm:p-3.5 text-white flex items-center justify-between shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    {/* Subtle radial inner glow */}
                    <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="flex items-center gap-2.5 relative z-10 min-w-0">
                      <Sparkles className="w-4 h-4 text-[#F59E0B] shrink-0 fill-[#F59E0B] group-hover:rotate-12 transition-transform duration-300" />
                      <div className="truncate">
                        <div className="text-[11.5px] font-semibold leading-tight text-white truncate">Accelerate focus on Environment PYQs.</div>
                        <div className="text-[10px] text-[#D7E5DB] mt-0.5 font-normal truncate">Recent mock test diagnosis recommends a 15-minute targeted revision drill.</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B] shrink-0 relative z-10 group-hover:translate-x-1 transition-transform duration-200 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Flow Caption */}
            <div className="flex items-center justify-center gap-2.5 text-xs text-stone-500 mt-4 font-medium">
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
