import React from 'react';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "“I wasted months drowning in dozens of unorganized channels and conflicting PDFs. UPSC ZONE AI's structured daily schedule gave me the calm confidence of finishing core Polity modules and 10 years of PYQs systematically.”",
    initial: 'AS',
    name: 'Ananya S.',
    role: 'Full-Time Aspirant • 2nd Attempt',
    bg: 'bg-emerald-800 text-emerald-100',
    tag: 'Structured daily execution',
  },
  {
    id: 2,
    quote: "“Balancing a 9-to-6 professional job while preparing for CSE felt impossible. The 2-hour daily study sprint and instant rubric feedback on Mains answer writing made my limited study window twice as productive.”",
    initial: 'RV',
    name: 'Rahul V.',
    role: 'Working Professional • 1st Attempt',
    bg: 'bg-amber-700 text-amber-100',
    tag: 'Disciplined 3-hour evening plan',
  },
  {
    id: 3,
    quote: "“In my previous attempt, I struggled with option elimination traps and negative marking. The diagnostic tests highlighted my blind spots in Environment and CSAT comprehension before test day.”",
    initial: 'PM',
    name: 'Priya M.',
    role: 'Returning Aspirant • Prelims Cleared',
    bg: 'bg-teal-800 text-teal-100',
    tag: 'Mastered option elimination',
  },
];

export default function Testimonials() {
  return (
    <section className="pt-12 md:pt-16 pb-8 md:pb-10 bg-[#FDF9F1] border-b border-stone-200/60 scroll-mt-20 font-sans" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-9 max-w-2xl">
          <span className="text-xs font-bold text-[#133026] tracking-wider block mb-2 uppercase font-sans">
            ASPIRANT STORIES & DISCIPLINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-slate-900 tracking-tight leading-tight mb-2">
            Different journeys. One shared pursuit of clarity.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            From dedicated home libraries to late-night study desks across India, see how serious aspirants build unshakeable consistency.
          </p>
        </div>

        {/* Testimonials: Horizontally Scrollable Carousel on Mobile, 3-Col Grid on Desktop */}
        <div className="flex overflow-x-auto pb-4 pt-1 snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 lg:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-0 snap-center bg-white border border-slate-100 rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-default group"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="font-sans text-[15px] text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5 mb-3.5">
                  {/* Clean Initials Avatar Circle (No internet stock photos) */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-xs shrink-0 ${item.bg}`}>
                    {item.initial}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-slate-900 text-sm">{item.name}</div>
                    <div className="text-xs text-slate-500 font-normal">{item.role}</div>
                  </div>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-medium text-slate-700">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Sample Reviews Caption */}
        <p className="text-sm text-slate-400 font-medium text-center mt-6">
          Sample reviews for design purposes. Based on typical preparation workflows of UPSC CSE candidates.
        </p>

      </div>
    </section>
  );
}
