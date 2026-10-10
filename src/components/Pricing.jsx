import React from 'react';
import { ArrowRight, Check, Lock } from 'lucide-react';

export default function Pricing({ onOpenAuth }) {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '₹0',
      period: 'forever',
      tagline: 'Build your first study routine.',
      badge: null,
      highlighted: false,
      buttonText: 'Start Free',
      buttonStyle: 'outline',
      featuresHeader: 'A confident place to begin',
      features: [
        '3 mock tests per month',
        'Daily current affairs briefs',
        '100 topic-wise PYQs',
        'Basic subject insights',
        'Diagnostic test + starter plan',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹499',
      period: '/ month',
      tagline: 'Your complete Prelims workspace.',
      badge: 'MOST POPULAR',
      highlighted: true,
      buttonText: 'Choose Pro',
      buttonStyle: 'solid-orange',
      featuresHeader: 'Everything in Free, plus',
      features: [
        'Unlimited AI mock tests',
        'Full PYQ bank + brief archives',
        'Smart Notes + revision tools',
        'Detailed subject analytics',
        'Adaptive daily study planner',
      ],
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹999',
      period: '/ month',
      tagline: 'Go deeper, from Prelims to Mains.',
      badge: null,
      highlighted: false,
      buttonText: 'Choose Premium',
      buttonStyle: 'outline',
      featuresHeader: 'Everything in Pro, plus',
      features: [
        'Mains answer-writing workspace',
        'AI-assisted answer feedback',
        'Weekly revision packs',
        'Long-term preparation roadmap',
        'Priority learner support',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-24 scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block text-emerald-800 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            INVEST IN YOUR PREPARATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Choose your pace. We'll bring the tools.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Start free, then choose the depth of support that fits your preparation.
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 tracking-wide bg-slate-100/70 px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
              <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0 stroke-[2.2]" />
              <span>Transparent pricing • No hidden fees • Billed monthly in INR</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Tiers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto pt-4">
          {plans.map((plan) => {
            const isHighlight = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#133026] text-white p-7 sm:p-8 md:-translate-y-4 shadow-xl md:shadow-2xl border-2 border-amber-400/40 relative order-first md:order-none'
                    : 'bg-white text-slate-900 p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Card Top Content */}
                <div>
                  {/* Header Row: Title & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${isHighlight ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    {plan.badge && (
                      <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 text-[11px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-xs">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                      isHighlight ? 'text-white' : 'text-slate-900'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-medium ${
                      isHighlight ? 'text-stone-300' : 'text-slate-500'
                    }`}>
                      {plan.period}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isHighlight ? 'text-stone-300' : 'text-slate-600'
                  }`}>
                    {plan.tagline}
                  </p>

                  {/* Action Button */}
                  <div className="mb-8">
                    {plan.buttonStyle === 'solid-orange' ? (
                      <button
                        type="button"
                        onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-950 font-bold text-sm py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98] group"
                      >
                        <span>{plan.buttonText}</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.4] transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onOpenAuth ? onOpenAuth('signup') : null}
                        className="w-full inline-flex items-center justify-center text-center font-bold text-sm text-slate-800 bg-stone-50/50 hover:bg-stone-100 border border-slate-300/90 hover:border-slate-400 py-3 px-5 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98]"
                      >
                        {plan.buttonText}
                      </button>
                    )}
                  </div>

                  {/* Divider line */}
                  <div className={`pt-6 border-t ${
                    isHighlight ? 'border-emerald-800/60' : 'border-slate-100'
                  }`}>
                    <p className={`text-xs font-bold tracking-wider uppercase mb-4 ${
                      isHighlight ? 'text-amber-400' : 'text-slate-500'
                    }`}>
                      {plan.featuresHeader}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className={`rounded-full p-0.5 mt-0.5 shrink-0 ${
                            isHighlight ? 'text-[#F59E0B]' : 'text-emerald-700'
                          }`}>
                            <Check className="w-4 h-4 stroke-[2.8]" />
                          </span>
                          <span className={`text-sm leading-snug ${
                            isHighlight ? 'text-stone-200' : 'text-slate-700'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Legal Disclaimer at Bottom */}
        <p className="text-center text-xs text-stone-500 max-w-2xl mx-auto mt-12 leading-relaxed">
          Sample plans and inclusions for illustration. AI supports your learning; it does not guarantee exam outcomes.
        </p>

      </div>
    </section>
  );
}
