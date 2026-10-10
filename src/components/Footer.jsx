import React, { useState } from 'react';
import { BookOpenCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenLogin }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#FDFBF7] border-t border-slate-200 py-12 text-slate-700" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand + 3 Link Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-8 lg:gap-x-10 mb-12">
          
          {/* Brand Column (lg:col-span-4) */}
          <div className="lg:col-span-4 max-w-sm">
            <a 
              href="#" 
              className="inline-flex items-center gap-2.5 mb-4 group focus:outline-none focus:ring-2 focus:ring-[#133026] rounded-xl p-0.5" 
              aria-label="UPSC ZONE AI Homepage"
            >
              <div className="w-8 h-8 rounded-xl bg-[#133026] flex items-center justify-center text-[#F59E0B] shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
                <BookOpenCheck className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="font-sans font-extrabold text-xl tracking-tight text-slate-900 whitespace-nowrap">
                UPSC ZONE <span className="text-xs bg-[#133026] text-white px-1.5 py-0.5 rounded font-bold uppercase ml-0.5 tracking-wider">AI</span>
              </span>
            </a>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              A clearer path through UPSC preparation. Powered by AI.
            </p>

            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Sparkles className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>Learn with purpose.</span>
            </div>
          </div>

          {/* 3 Link Columns (lg:col-span-5) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6 sm:gap-8">
            {/* Platform Column */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Platform
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#features" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Mock Tests
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Plans
                  </a>
                </li>
                <li>
                  <a href="#ai-tools" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Smart Notes
                  </a>
                </li>
                <li>
                  <a href="#preparation" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Study Planner
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Resources
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#resources" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Current Affairs
                  </a>
                </li>
                <li>
                  <a href="#resources" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    PYQs
                  </a>
                </li>
                <li>
                  <a href="#resources" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Study Guides
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Help Centre
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a href="#faq" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200">
                    Terms
                  </a>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => onOpenLogin ? onOpenLogin() : null}
                    className="text-sm text-slate-500 hover:text-emerald-700 transition-colors duration-200 text-left cursor-pointer"
                  >
                    Aspirant Login
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-bold text-slate-900 mb-1">
              A little clarity in your inbox.
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-3">
              Study tips, useful updates and revision prompts.
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subscribed! Check your inbox for upcoming updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div>
                  <label htmlFor="newsletter-email" className="block text-[11px] font-bold text-slate-700 mb-1">
                    Email address
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      aria-label="Email address for revision updates"
                      className="w-full bg-white border border-slate-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs"
                    />
                    <button
                      type="submit"
                      className="bg-[#133026] hover:bg-[#0B1E19] text-white font-bold text-xs px-4 py-2 rounded-xl transition-all duration-200 shrink-0 shadow-xs cursor-pointer active:scale-95"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Disclaimer */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 UPSC ZONE AI
          </div>
          <div className="sm:pr-14">
            Not affiliated with any government body
          </div>
        </div>

      </div>
    </footer>
  );
}
