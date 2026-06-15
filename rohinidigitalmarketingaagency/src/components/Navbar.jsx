import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Zap } from 'lucide-react';
import logo from './logo.png';

export default function Navbar({ navigateTo, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', anchor: 'services' },
    { name: 'About', anchor: 'about' },
    { name: 'Testimonials', anchor: 'testimonials' },
    { name: 'Contact', anchor: 'about-founder' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        mounted ? 'nav-slide-down' : 'opacity-0 -translate-y-full'
      } ${
        scrolled
          ? 'nav-scrolled py-2'
          : 'nav-top py-3'
      }`}
    >
      {/* Animated gradient accent line at top */}
      <div className="nav-accent-bar" />

      {/* Subtle animated shimmer overlay */}
      <div className="nav-shimmer-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
          className="flex items-center group logo-hover-glow"
        >
          <img
            src={logo}
            alt="Rohini Digital Marketing Aagency"
            className="h-12 md:h-14 w-auto object-contain mix-blend-multiply transition-all duration-500 group-hover:scale-[1.06] group-hover:drop-shadow-md"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={`#${link.anchor}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link.anchor);
                navigateTo('home', link.anchor);
              }}
              className={`nav-link-item group px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                activeLink === link.anchor
                  ? 'text-primaryAccent'
                  : 'text-textSecondary hover:text-primaryAccent'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Hover background pill */}
              <span className="nav-link-bg absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative z-10">{link.name}</span>
              {/* Animated underline */}
              <span
                className={`absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-primaryAccent to-secondaryAccent transform transition-all duration-300 ${
                  activeLink === link.anchor
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Live badge */}
          <span className="live-badge hidden lg:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full">
            <span className="live-dot w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Accepting Clients
          </span>

          {/* Glowing CTA button */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('connect');
            }}
            className="cta-button group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white overflow-hidden"
          >
            {/* Animated gradient background */}
            <span className="cta-bg absolute inset-0 rounded-full" />
            {/* Pulse ring */}
            <span className="cta-pulse-ring absolute inset-0 rounded-full" />
            <span className="relative z-10 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Grow My Business
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`mobile-menu-btn p-2 rounded-xl transition-all duration-300 ${
              isOpen ? 'rotate-90 text-primaryAccent bg-primaryAccent/10' : 'text-textSecondary hover:text-primaryAccent hover:bg-primaryAccent/5'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full left-0 mobile-menu-panel transition-all duration-400 ease-out ${
          isOpen ? 'top-full opacity-100 visible mobile-menu-open' : '-top-2 opacity-0 invisible'
        }`}
      >
        {/* Animated background gradient */}
        <div className="mobile-menu-bg" />
        <div className="relative z-10 flex flex-col px-6 py-5 space-y-1">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={`#${link.anchor}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                navigateTo('home', link.anchor);
              }}
              className="mobile-nav-link group flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base text-textSecondary hover:text-primaryAccent transition-all duration-200"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primaryAccent" />
            </a>
          ))}

          <div className="pt-3 border-t border-black/5">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                navigateTo('connect');
              }}
              className="cta-button-mobile flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm relative overflow-hidden"
            >
              <span className="cta-bg absolute inset-0 rounded-xl" />
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-4 h-4 fill-current" />
                Grow My Business
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
