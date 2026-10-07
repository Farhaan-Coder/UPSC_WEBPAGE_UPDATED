import React from 'react';
import { Layers, Youtube, Linkedin, Instagram } from 'lucide-react';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Features & Modules', href: '#features' },
      { name: 'AI Mains Answer Lab', href: '#ai-tools' },
      { name: 'Preparation Dashboard', href: '#preparation' },
      { name: 'Diagnostic Mock Test', href: '#get-started' },
    ],
  },
  {
    title: 'Preparation',
    links: [
      { name: 'Prelims GS & CSAT Drills', href: '#stages' },
      { name: 'Mains GS I-IV & Essay', href: '#stages' },
      { name: 'The Hindu & IE Daily Briefs', href: '#resources' },
      { name: '25-Year Topic-wise PYQs', href: '#resources' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'UPSC CSE Syllabus Breakdown', href: '#' },
      { name: 'Topper Answer Copy Archive', href: '#' },
      { name: 'Laxmikanth & Spectrum Notes', href: '#' },
      { name: 'Aspirant Support & FAQs', href: '#' },
    ],
  },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'Responsible AI & Pedagogy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#133026] text-white border-t border-[#183C30] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 max-w-sm">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#F59E0B]">
                <Layers className="w-4.5 h-4.5" />
              </div>
              <span className="font-serif font-bold text-lg text-white tracking-tight">
                SANKALP IAS
              </span>
              <span className="bg-white/10 border border-white/10 text-[#F59E0B] text-[10px] font-semibold px-2 py-0.5 rounded">
                AI CO-PILOT
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-[#D7E5DB] leading-relaxed mb-6 font-normal">
              Elite UPSC preparation accessible from any study desk. Master the CSE syllabus with data-driven clarity, spaced active recall, and AI answer evaluation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3.5 text-[#D7E5DB]">
              <a href="#" aria-label="YouTube" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F59E0B] hover:text-stone-900 transition-all duration-200 border border-white/10">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F59E0B] hover:text-stone-900 transition-all duration-200 border border-white/10">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F59E0B] hover:text-stone-900 transition-all duration-200 border border-white/10">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-[13px] text-[#D7E5DB] hover:text-[#F59E0B] transition-colors duration-200 font-normal"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E5DB]/70 mb-4 font-normal">
          <div>© {new Date().getFullYear()} SANKALP IAS AI. All rights reserved. Dedicated to Civil Services Aspirants across India.</div>
          <div className="flex items-center gap-6">
            {legalLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10.5px] text-[#D7E5DB]/60 leading-relaxed font-normal">
          SANKALP IAS is an independent preparation platform and is not affiliated with, authorized, or endorsed by the Union Public Service Commission (UPSC), Department of Personnel and Training (DoPT), or any Government of India agency.
        </p>

      </div>
    </footer>
  );
}
