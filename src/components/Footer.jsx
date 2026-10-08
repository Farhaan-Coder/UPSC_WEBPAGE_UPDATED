import React, { useState } from 'react';
import { BookOpenCheck, Youtube, Linkedin, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';

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
      { name: 'Spaced Active Recall Cards', href: '#features' },
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
    <footer className="bg-[#133026] text-white border-t border-[#183C30] pt-16 pb-12" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid: Brand + 3 Nav Columns + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-10 lg:gap-x-12 mb-12">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 max-w-sm">
            <a href="#" className="flex items-center gap-2.5 mb-4 group" aria-label="UPSC ZONE AI Home">
              <div className="w-9 h-9 rounded-lg bg-[#EAF1EB]/10 flex items-center justify-center text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-stone-900 transition-colors duration-200">
                <BookOpenCheck className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-sans font-bold text-xl text-white group-hover:text-orange-400 transition-colors duration-200 tracking-tight">
                UPSC ZONE AI
              </span>
            </a>
            
            <p className="text-sm text-[#D7E5DB] leading-relaxed mb-6 font-normal">
              A calm, intelligent workspace engineered for UPSC Civil Services aspirants. Synchronize syllabus completion, previous-year trends, and daily answer evaluation.
            </p>

            {/* Social Media Buttons with accessible labels */}
            <div className="flex items-center gap-3 text-[#D7E5DB]">
              <a 
                href="#resources" 
                aria-label="Visit UPSC ZONE AI on YouTube for video walkthroughs" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-stone-900 transition-all duration-200 border border-white/10"
              >
                <Youtube className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#resources" 
                aria-label="Connect with UPSC ZONE AI on LinkedIn" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-stone-900 transition-all duration-200 border border-white/10"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="#resources" 
                aria-label="Follow UPSC ZONE AI on Instagram for daily infographics" 
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-stone-900 transition-all duration-200 border border-white/10"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 sm:gap-x-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-[#D7E5DB] hover:text-orange-400 transition-colors duration-200 font-normal inline-block"
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
            <h4 className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider mb-4">
              Daily Editorial Digest
            </h4>
            <p className="text-xs text-[#D7E5DB] leading-relaxed mb-3">
              Receive a 5-minute morning brief connecting current affairs to the static syllabus.
            </p>
            {newsletterSubscribed ? (
              <div className="bg-[#183C30] border border-[#2A6150] rounded-xl p-3 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed! Check your inbox tomorrow at 7:00 AM.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="aspirant@upsc.in"
                    required
                    aria-label="Email address for daily editorial digest"
                    className="w-full bg-white/10 border border-white/15 focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-stone-400 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F59E0B] hover:bg-amber-500 text-stone-900 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
                >
                  <span>Subscribe Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E5DB]/75 mb-4 font-normal">
          <div>
            © {new Date().getFullYear()} UPSC ZONE AI. Built for civil services aspirants.
          </div>
          <div className="flex items-center gap-6">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-orange-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Legal & Content Safety Disclaimer */}
        <p className="text-xs text-[#D7E5DB]/75 leading-relaxed font-normal text-center sm:text-left pt-2 border-t border-white/5">
          UPSC ZONE AI is an independent preparation platform and is not affiliated with or endorsed by the Union Public Service Commission or any government body.
        </p>

      </div>
    </footer>
  );
}
