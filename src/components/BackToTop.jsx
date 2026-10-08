import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#133026] text-white hover:bg-[#183C30] shadow-xl hover:shadow-2xl border border-emerald-800 transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-[#F59E0B]" />
    </button>
  );
}
