import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logo from './logo.png';

export default function Navbar({ navigateTo, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
        ? 'bg-slate-100/95 backdrop-blur-md py-3 shadow-md shadow-slate-200/20 border-slate-200/80'
        : 'bg-slate-50/90 backdrop-blur-md py-4 border-slate-200/40 shadow-sm shadow-slate-200/10'
      }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
          className="flex items-center gap-3 group"
        >
          {/* Cropped Lotus Graphic Icon */}
          <div className="w-14 h-10 md:w-16 md:h-12 overflow-hidden flex-shrink-0">
            <img
              src={logo}
              alt="Rohini Lotus Icon"
              className="h-full w-auto max-w-none object-cover object-left mix-blend-multiply contrast-[1.1] brightness-[1.02]"
            />
          </div>
          {/* Native HTML Text Company Name */}
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-base md:text-lg text-slate-900 tracking-tight leading-none group-hover:text-primaryAccent transition-colors">
              ROHINI
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-primaryAccent tracking-wider uppercase mt-0.5 group-hover:text-secondaryAccent transition-colors">
              Digital Marketing Aagency
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.anchor}`}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home', link.anchor);
              }}
              className="text-textSecondary hover:text-primaryAccent transition-colors duration-200 font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('connect');
            }}
            className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-primaryAccent to-secondaryAccent text-white focus:ring-4 focus:outline-none focus:ring-purple-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white text-textPrimary rounded-full group-hover:bg-opacity-0 group-hover:text-white">
              <span className="flex items-center gap-2">
                Grow My Business <ArrowRight className="w-4 h-4" />
              </span>
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-textSecondary hover:text-textPrimary transition-colors p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full left-0 glass-nav transition-all duration-300 ease-in-out border-b border-black/5 ${isOpen ? 'top-full opacity-100 visible py-6' : '-top-[400px] opacity-0 invisible py-0'
        }`}>
        <div className="flex flex-col items-center space-y-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.anchor}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                navigateTo('home', link.anchor);
              }}
              className="text-textSecondary hover:text-primaryAccent transition-colors duration-200 font-medium text-lg w-full text-center py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);
              navigateTo('connect');
            }}
            className="w-full text-center py-3 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-xl shadow-lg shadow-primaryAccent/20 hover:scale-[1.02] transition-transform duration-200"
          >
            Grow My Business
          </a>
        </div>
      </div>
    </nav>
  );
}
