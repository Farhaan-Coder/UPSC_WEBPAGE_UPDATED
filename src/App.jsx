import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ValueStrip from './components/ValueStrip.jsx';
import FeaturesGrid from './components/FeaturesGrid.jsx';
import DashboardPreview from './components/DashboardPreview.jsx';
import DarkSection from './components/DarkSection.jsx';
import NextSteps from './components/NextSteps.jsx';
import StagesCovered from './components/StagesCovered.jsx';
import Insights from './components/Insights.jsx';
import Testimonials from './components/Testimonials.jsx';
import Pricing from './components/Pricing.jsx';
import FaqSection from './components/FaqSection.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';
import LoginModal from './components/LoginModal.jsx';
import BackToTop from './components/BackToTop.jsx';
import MobileStickyCta from './components/MobileStickyCta.jsx';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenAuth = (tab = 'login') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  return (
    <motion.div 
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-screen bg-[#FDF9F1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-950 pb-16 md:pb-0"
    >
      <Navbar 
        onOpenAuth={handleOpenAuth} 
        onMobileMenuToggle={setMobileMenuOpen}
      />
      <main className="bg-transparent">
        <Hero onOpenAuth={handleOpenAuth} />
        <ValueStrip />
        <FeaturesGrid onOpenLogin={() => handleOpenAuth('login')} />
        <DashboardPreview />
        <DarkSection />
        <NextSteps />
        <StagesCovered />
        <Insights />
        <Testimonials />
        <Pricing onOpenAuth={handleOpenAuth} />
        <FaqSection onOpenAuth={handleOpenAuth} />
        <CtaBanner onOpenAuth={handleOpenAuth} />
      </main>
      <Footer onOpenLogin={() => handleOpenAuth('login')} />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Mobile Sticky CTA Bar (< 768px) */}
      <MobileStickyCta
        onOpenSignup={() => handleOpenAuth('signup')}
        isModalOpen={authModalOpen}
        isMobileMenuOpen={mobileMenuOpen}
      />

      {/* Accessible Auth Modal */}
      <LoginModal
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialTab={authModalTab}
      />
    </motion.div>
  );
}
