import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import logo from './logo.png';

const navLinks = [
  { name: 'Services',     page: 'services' },
  { name: 'About',        page: 'about' },
  { name: 'Testimonials', page: 'testimonials' },
  { name: 'Founder',      page: 'founder' },
  { name: 'Contact',      page: 'contact' },
];

export default function Navbar({ navigateTo, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();  // real URL path

  // Active detection: match nav link paths against current URL
  const isActive = (page) => {
    const pathMap = { services: '/services', about: '/about', testimonials: '/testimonials', founder: '/founder', contact: '/contact' };
    return location.pathname === pathMap[page] ||
           (page === 'services' && location.pathname.startsWith('/services'));
  };

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page) => {
    navigateTo(page);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${mounted ? 'nav-slide-down' : 'opacity-0 -translate-y-full'} ${
        scrolled ? 'shadow-2xl' : 'shadow-lg'
      }`}
      style={{
        background: scrolled
          ? 'rgba(15, 37, 87, 0.98)'
          : 'rgba(15, 37, 87, 0.95)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Animated blue bottom accent bar */}
      <div className="nav-accent-bar" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-3">

        {/* Logo — gold on dark navbar with a subtle warm container */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); go('home'); }}
          className="flex items-center group flex-shrink-0"
        >
          <div
            className="rounded-xl overflow-hidden transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.03]"
            style={{ padding: '3px 8px', background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <img
              src={logo}
              alt="Rohini Digital Marketing Agency"
              className="h-10 md:h-11 w-auto object-contain block"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => go(link.page)}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group ${
                isActive(link.page)
                  ? 'text-white bg-white/10'
                  : 'text-blue-100/80 hover:text-white hover:bg-white/8'
              }`}
            >
              {link.name}
              {/* Active underline */}
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                  isActive(link.page) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right side: badge + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 border border-emerald-500/25 bg-emerald-900/20 px-3 py-1.5 rounded-full">
            <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Accepting Clients
          </span>
          <button
            onClick={() => go('contact')}
            className="btn-shine relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              boxShadow: '0 4px 18px rgba(14,165,233,0.35)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 28px rgba(14,165,233,0.55)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(14,165,233,0.35)')}
          >
            <span className="cta-pulse-ring absolute inset-0 rounded-full" />
            <span className="relative z-10 flex items-center gap-2">
              Contact us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-xl transition-all duration-300 text-blue-100 hover:text-white hover:bg-white/10 ${isOpen ? 'rotate-90 text-white' : ''}`}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute w-full left-0 border-t border-white/10 transition-all duration-350 ease-out ${
          isOpen ? 'top-full opacity-100 visible' : 'top-[95%] opacity-0 invisible pointer-events-none'
        }`}
        style={{ background: 'rgba(13, 26, 53, 0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex flex-col px-6 py-5 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => go(link.page)}
              className="text-left px-4 py-3 rounded-xl text-blue-100 hover:text-white hover:bg-white/10 font-semibold text-base transition-all duration-200"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-3 mt-1 border-t border-white/10">
            <button
              onClick={() => go('contact')}
              className="w-full py-3.5 rounded-xl text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' }}
            >
              Conntact us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
