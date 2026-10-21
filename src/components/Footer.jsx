import React, { useState } from 'react';
import { Youtube, Linkedin, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Core Features', href: '#features' },
      { name: 'AI Answer Writing Lab', href: '#ai-tools' },
      { name: 'Interactive Study Desk', href: '#preparation' },
      { name: 'Prelims Readiness Drill', href: '#get-started' },
    ],
  },
  {
    title: 'Exam Stages',
    links: [
      { name: 'Prelims GS & CSAT', href: '#stages' },
      { name: 'Mains GS I-IV & Essay', href: '#stages' },
      { name: 'Optional Papers', href: '#stages' },
      { name: 'Personality Test (Interview)', href: '#stages' },
    ],
  },
  {
    title: 'Study Modules',
    links: [
      { name: 'Daily Editorial Takeaways', href: '#resources' },
      { name: '25-Year Topic-Wise PYQs', href: '#resources' },
      { name: 'Notes & Flashcards', href: '#features' },
      { name: 'Frequently Asked Questions', href: '#faq' },
    ],
  },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#faq' },
  { name: 'Terms of Service', href: '#faq' },
  { name: 'Pedagogy & AI Ethics', href: '#faq' },
];

export default function Footer({ onOpenLogin }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer 
      className="bg-[#FCFBF8] bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem] text-slate-700 border-t border-slate-200 pt-16 pb-12 relative overflow-hidden" 
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Grid: Brand + 3 Nav Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-10 lg:gap-x-12 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 max-w-sm">
            <a href="#" className="flex items-center gap-3 mb-4 group focus:outline-none focus:ring-2 focus:ring-[#133026] rounded-xl p-0.5 inline-flex" aria-label="UPSC ZONE AI Home">
              <img 
                src="/assets/upsc-logo.png" 
                alt="UPSC Ashoka Emblem and Chakra Logo" 
                className="w-10 h-10 object-contain shrink-0 group-hover:scale-105 transition-transform duration-200"
              />
              <span className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-emerald-800 transition-colors duration-200 tracking-tight">
                UPSC ZONE AI
              </span>
            </a>
            
            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              A calm, intelligent workspace engineered for UPSC Civil Services aspirants. Synchronize syllabus completion, previous-year trends, and daily answer evaluation.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center gap-3 text-slate-600">
              <a 
                href="#resources" 
                aria-label="Visit UPSC ZONE AI on YouTube for video walkthroughs" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 border border-slate-200 shadow-2xs hover:border-orange-500 cursor-pointer"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#resources" 
                aria-label="Connect with UPSC ZONE AI on LinkedIn" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 border border-slate-200 shadow-2xs hover:border-orange-500 cursor-pointer"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#resources" 
                aria-label="Follow UPSC ZONE AI on Instagram for daily infographics" 
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-200 border border-slate-200 shadow-2xs hover:border-orange-500 cursor-pointer"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 sm:gap-x-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-emerald-700 transition-colors duration-200 font-normal inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4">
              Daily Editorial Digest
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Receive a 5-minute morning brief connecting current affairs to the static syllabus.
            </p>
            {newsletterSubscribed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subscribed! Check your inbox tomorrow at 7:00 AM.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    aria-label="Email address for daily editorial digest"
                    className="w-full bg-white border border-slate-300 focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] hover:from-[#F59E0B] hover:to-[#D97706] text-stone-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <span>Subscribe Free</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-slate-200 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 mb-4 font-normal">
          <div>
            © {new Date().getFullYear()} UPSC ZONE AI. Built for civil services aspirants.
          </div>
          <div className="flex items-center gap-6">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-emerald-700 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Legal & Content Safety Disclaimer */}
        <p className="text-xs text-slate-500 leading-relaxed font-normal text-center sm:text-left pt-3 border-t border-slate-200">
          UPSC ZONE AI is an independent preparation platform and is not affiliated with or endorsed by the Union Public Service Commission or any government body.
        </p>

      </div>
    </footer>
  );
}
