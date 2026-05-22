import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import DashboardWidget from './components/DashboardWidget';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page, anchor = null) => {
    setCurrentPage(page);
    if (page === 'home') {
      if (anchor) {
        // Map common aliases to their respective IDs
        let targetId = anchor;
        if (anchor === 'contact' || anchor === 'founder') {
          targetId = 'about-founder';
        } else if (anchor === 'about') {
          targetId = 'hero';
        }
        
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (page === 'connect' || page === 'privacy' || page === 'terms') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-darkBg text-textPrimary min-h-screen selection:bg-primaryAccent/15 selection:text-primaryAccent relative">
      {/* Background visual effects */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>
      
      {/* Structural layout */}
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero navigateTo={navigateTo} />
          <Services />
          <DashboardWidget />
          <Stats />
          <Founder />
          <Testimonials />
        </>
      ) : currentPage === 'connect' ? (
        <Connect navigateTo={navigateTo} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy navigateTo={navigateTo} />
      ) : currentPage === 'terms' ? (
        <TermsOfService navigateTo={navigateTo} />
      ) : null}
      
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;
