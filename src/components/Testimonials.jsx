import React from 'react';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "“I wasted months drowning in 15 different Telegram channels and endless topper PDFs. Sankalp's daily checklist gave me the confidence of knowing I completed Laxmikanth and 10 years of PYQs systematically.”",
    initial: 'A',
    name: 'Ananya Sharma',
    role: 'Full-Time Aspirant • Delhi (Old Rajinder Nagar)',
    tag: 'Clarity over scattered Telegram PDFs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    quote: "“Balancing a 9-to-6 tech job while preparing for CSE felt overwhelming. The 2-hour daily study sprint and instant Mains answer feedback made my limited study window twice as productive.”",
    initial: 'R',
    name: 'Rahul Verma',
    role: 'Working Professional • Bengaluru',
    tag: 'Disciplined 3-hour evening routine',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    quote: "“In my first attempt, I missed the Prelims cutoff by 4 marks due to panic in CSAT and negative marking traps. The option elimination diagnostics showed me exactly where I fell into trick questions.”",
    initial: 'P',
    name: 'Priya Mukhopadhyay',
    role: 'Returning Aspirant • Rank Improver',
    tag: 'Fixed negative marking & CSAT panic',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-[#FDF9F1] border-b border-stone-200/60" id="testimonials">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-9">
          <span className="text-xs font-semibold text-[#133026] tracking-wider block mb-2 uppercase">
            ASPIRANT STORIES & DISCIPLINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-[#133026] tracking-tight leading-tight mb-2">
            Different journeys. One shared pursuit of clarity.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal">
            From Old Rajinder Nagar study halls to late-night desks across India, see how serious aspirants build unshakeable discipline.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200/80 rounded-2xl p-7 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-stone-300 cursor-pointer group"
            >
              <div>
                {/* 5 Stars Rating matching academic reference */}
                <div className="flex items-center gap-1 mb-4 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                </div>

                <p className="text-xs sm:text-[13.5px] text-stone-700 leading-relaxed mb-6 font-normal">
                  {item.quote}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-stone-100 flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-100 border border-stone-200 shrink-0">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span class="flex items-center justify-center w-full h-full text-[#133026] font-bold text-xs">${item.initial}</span>`;
                      }}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-sans font-bold text-[#133026] tracking-tight">{item.name}</div>
                    <div className="text-[11px] text-stone-500 font-normal">{item.role}</div>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-[#133026] bg-[#EAF1EB] px-3 py-1 rounded-md inline-block border border-[#133026]/10">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
