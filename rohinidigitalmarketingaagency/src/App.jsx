import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import Navbar             from './components/Navbar';
import Footer             from './components/Footer';

// Homepage sections
import Slider             from './components/Slider';
import TrustBanner        from './components/TrustBanner';
import HomepageServices   from './components/HomepageServices';
import WhyChooseUs        from './components/WhyChooseUs';
import TestimonialsPreview from './components/TestimonialsPreview';
import HomepageCTA        from './components/HomepageCTA';

// Pages
import ServicesPage       from './pages/ServicesPage';
import ServiceDetailPage  from './pages/ServiceDetailPage';
import AboutPage          from './pages/AboutPage';
import TestimonialsPage   from './pages/TestimonialsPage';
import ContactPage        from './pages/ContactPage';
import FounderPage        from './pages/FounderPage';
import PrivacyPolicy      from './components/PrivacyPolicy';
import TermsOfService     from './components/TermsOfService';

/* ─── URL map: page-key → path ──────────────────────────────────────
   Components still call navigateTo('services') / navigateTo('contact')
   etc. — this map converts those keys into real URL paths, keeping all
   existing component code unchanged.                                  */
const PAGE_PATHS = {
  home:               '/',
  services:           '/services',
  'service-seo':      '/services/seo',
  'service-ppc':      '/services/ppc',
  'service-funnel':   '/services/funnel',
  'service-omnichannel': '/services/omnichannel',
  'service-content':  '/services/content',
  'service-social':   '/services/social',
  about:              '/about',
  testimonials:       '/testimonials',
  contact:            '/contact',
  founder:            '/founder',
  privacy:            '/privacy',
  terms:              '/terms',
};

/* ─── Top-level router wrapper ───────────────────────────────────── */
function AppRouter() {
  const navigate  = useNavigate();
  const location  = useLocation();

  /** Drop-in replacement for the old navigateTo(pageKey) calls.
   *  Pushes a new entry onto the History stack automatically. */
  const navigateTo = (pageKey) => {
    const path = PAGE_PATHS[pageKey] ?? `/${pageKey}`;
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derive which nav link is "active" from the real URL
  const currentPage = Object.entries(PAGE_PATHS)
    .find(([, path]) => path === location.pathname)?.[0] ?? 'home';

  return (
    <div className="bg-pageBg text-textPrimary min-h-screen">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />

      <Routes>
        {/* Home */}
        <Route path="/" element={
          <>
            <Slider            navigateTo={navigateTo} />
            <TrustBanner />
            <HomepageServices  navigateTo={navigateTo} />
            <WhyChooseUs />
            <TestimonialsPreview navigateTo={navigateTo} />
            <HomepageCTA       navigateTo={navigateTo} />
          </>
        } />

        {/* Services overview */}
        <Route path="/services" element={<ServicesPage navigateTo={navigateTo} />} />

        {/* Individual service detail pages */}
        <Route path="/services/:service" element={<ServiceDetailPage navigateTo={navigateTo} />} />

        {/* Top-level pages */}
        <Route path="/about"        element={<AboutPage        navigateTo={navigateTo} />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact"      element={<ContactPage />} />
        <Route path="/founder"      element={<FounderPage      navigateTo={navigateTo} />} />
        <Route path="/privacy"      element={<PrivacyPolicy    navigateTo={navigateTo} />} />
        <Route path="/terms"        element={<TermsOfService   navigateTo={navigateTo} />} />

        {/* 404 fallback → redirect home */}
        <Route path="*" element={
          <div className="pt-40 pb-32 text-center">
            <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
            <p className="text-textSecondary mb-8">Page not found.</p>
            <button onClick={() => navigateTo('home')}
              className="btn-shine px-8 py-3.5 rounded-full text-white font-bold"
              style={{ background: 'linear-gradient(135deg,#0ea5e9,#0284c7)' }}>
              Go Home
            </button>
          </div>
        } />
      </Routes>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default AppRouter;
