import React from 'react';
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
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDF9F1] text-slate-900 font-sans selection:bg-amber-200 selection:text-amber-950">
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <FeaturesGrid />
        <DashboardPreview />
        <DarkSection />
        <NextSteps />
        <StagesCovered />
        <Insights />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
