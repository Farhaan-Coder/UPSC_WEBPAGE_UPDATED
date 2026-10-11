import React from 'react';
import { 
  ClipboardCheck, 
  Newspaper, 
  PenLine, 
  RotateCcw, 
  BarChart3, 
  CalendarCheck 
} from 'lucide-react';
import EliminationDrill from './EliminationDrill.jsx';

export default function FeaturesGrid({ onOpenLogin }) {
  const features = [
    {
      icon: ClipboardCheck,
      overline: 'PRELIMS & CSAT',
      title: 'Targeted AI Mock Tests',
      description: 'Adaptive sectional and full-length test series with real-time negative marking diagnostics, speed benchmarks, and option elimination simulation.',
      meta: 'Negative Marking Guard',
      linkText: 'Explore mocks',
      href: '#sample-drill',
    },
    {
      icon: Newspaper,
      overline: 'DAILY BRIEF',
      title: 'Daily Editorial & GS Mapping',
      description: '10-minute morning brief distilling national editorials into high-yield syllabus points mapped directly across GS Papers I, II, and III.',
      meta: 'Curated Daily • 7:00 AM',
      linkText: 'Read brief',
      href: '#resources',
    },
    {
      icon: PenLine,
      overline: 'RETENTION ENGINE',
      title: 'Smart Notes & Revision Cards',
      description: 'Transform exhaustive NCERT and standard references into revision-friendly bullet notes and active recall summaries before exam day.',
      meta: 'Micro-Topic Summaries',
      linkText: 'Browse notes',
      href: '#pricing',
    },
    {
      icon: RotateCcw,
      overline: '25-YEAR ARCHIVE',
      title: 'Topic-Wise PYQ Intelligence',
      description: 'Deconstruct 25 years of UPSC Prelims and Mains questions categorized by micro-theme, with distractor breakdown and recurring pattern insights.',
      meta: 'Prelims & Mains Mapped',
      linkText: 'Explore PYQs',
      href: '#resources',
    },
    {
      icon: BarChart3,
      overline: 'PERFORMANCE RADAR',
      title: 'Detailed Subject Analytics',
      description: 'Pinpoint exact syllabus blind spots, subject accuracy rates, time spent per question, and historical elimination success ratios.',
      meta: 'Granular Score Insights',
      linkText: 'View metrics',
      href: '#preparation',
    },
    {
      icon: CalendarCheck,
      overline: 'ADAPTIVE SCHEDULE',
      title: 'Adaptive Daily Study Planner',
      description: 'Dynamic preparation roadmap that recalibrates your revision frequency and target hours automatically based on your mock test performance.',
      meta: 'Personalized CSE Roadmap',
      linkText: 'Build plan',
      href: '#preparation',
    },
  ];

  return (
    <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-transparent border-b border-stone-200/60 scroll-mt-20" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold text-[#133026] tracking-wider block mb-2 uppercase">
              STRATEGIC PREPARATION TOOLKIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#133026] leading-tight">
              One unified platform. Master Prelims, Mains, and the Interview.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-normal max-w-sm md:text-right leading-relaxed">
            Move beyond scattered materials into a calm preparation ecosystem engineered to maximize your score per study hour.
          </p>
        </div>

        {/* 6-Card Feature Grid (3 Columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top-left icon inside soft tinted square */}
                  <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-lg w-fit mb-4">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Overline categorical tag */}
                  <div className="text-[10px] font-bold tracking-widest uppercase text-slate-500 bg-slate-100 px-2 py-1 rounded w-fit mb-3">
                    {feature.overline}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Footer Section */}
                <div>
                  {/* Divider */}
                  <div className="border-t border-slate-100 my-4" />

                  {/* Card Footer: Meta-text on left, thematic link on right */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {feature.meta}
                    </span>
                    <a
                      href={feature.href}
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-2 py-1 rounded transition-colors duration-150 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{feature.linkText}</span>
                      <span className="text-[11px]">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Option Elimination Preview */}
        <div className="mt-12 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded inline-block mb-1.5">
                INTERACTIVE PREVIEW
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Option Elimination & Negative Marks Simulator
              </h3>
              <p className="text-sm text-slate-600 mt-0.5">
                Practice structured distractor elimination with live confidence and chance calculation.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenLogin ? onOpenLogin() : null}
              className="text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-2 rounded-xl transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
            >
              Unlock Full Drill Bank →
            </button>
          </div>
          <EliminationDrill />
        </div>

      </div>
    </section>
  );
}
