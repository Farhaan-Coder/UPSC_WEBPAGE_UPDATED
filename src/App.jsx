import React, { useState } from 'react';
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
import FaqSection from './components/FaqSection.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';
import LoginModal from './components/LoginModal.jsx';
import BackToTop from './components/BackToTop.jsx';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login');

  const handleOpenAuth = (tab = 'login') => {
    setAuthModalTab(tab);
    setAuthModalOpen(true);
  };

  const handleCloseAuth = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDF9F1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      <Navbar onOpenAuth={handleOpenAuth} />
      <main className="bg-transparent">
        <Hero onOpenAuth={handleOpenAuth} />
        <ValueStrip />
        <FeaturesGrid />
        <DashboardPreview />
        <DarkSection />
        <NextSteps />
        <StagesCovered />
        <Insights />
        <Testimonials />
        <FaqSection />
        <CtaBanner onOpenAuth={handleOpenAuth} />
      </main>
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Accessible Auth Modal */}
      <LoginModal
        isOpen={authModalOpen}
        onClose={handleCloseAuth}
        initialTab={authModalTab}
      />
    </div>
  );
}
