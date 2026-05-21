import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import logo from './logo.png';

export default function Footer({ navigateTo }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="border-t border-black/5 bg-darkBg pt-20 pb-10 relative overflow-hidden">
      <div className="absolute left-1/3 bottom-0 w-[300px] h-[300px] bg-primaryAccent/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Grid: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-black/5">
          
          {/* Logo & Description */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigateTo('home'); }} 
              className="flex items-center gap-3 group"
            >
              {/* Cropped Lotus Graphic Icon */}
              <div className="w-16 h-12 overflow-hidden flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Rohini Lotus Icon" 
                  className="h-full w-auto max-w-none object-cover object-left mix-blend-multiply contrast-[1.1] brightness-[1.02]" 
                />
              </div>
              {/* Native HTML Text Company Name */}
              <div className="flex flex-col text-left">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight leading-none group-hover:text-primaryAccent transition-colors">
                  ROHINI
                </span>
                <span className="text-[10px] font-bold text-primaryAccent tracking-wider uppercase mt-0.5 group-hover:text-secondaryAccent transition-colors">
                  Digital Marketing Aagency
                </span>
              </div>
            </a>
            <p className="text-textSecondary text-sm max-w-sm leading-relaxed">
              We design, build, and optimize hyper-growth digital acquisition funnels. Helping brands dominate their industries through high-conversion SEO, PPC advertising, and custom sales funnels.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl glass-panel border-black/5 flex items-center justify-center text-textSecondary hover:text-primaryAccent transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass-panel border-black/5 flex items-center justify-center text-textSecondary hover:text-primaryAccent transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass-panel border-black/5 flex items-center justify-center text-textSecondary hover:text-primaryAccent transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.858.507 9.388.507 9.388.507s7.53 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sejal_yavdav?igsh=MTZ6NDlmMWd4OTluaQ%3D%3D&utm_source=qr" className="w-9 h-9 rounded-xl glass-panel border-black/5 flex items-center justify-center text-textSecondary hover:text-primaryAccent transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.75 1.25a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-xl glass-panel border-black/5 flex items-center justify-center text-textSecondary hover:text-primaryAccent transition-colors" aria-label="Gmail">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6.5v11A1.5 1.5 0 0 0 3.5 19H6V9.25L12 13.5l6-4.25V19h2.5A1.5 1.5 0 0 0 22 17.5v-11A1.5 1.5 0 0 0 20.5 5H19l-7 5-7-5H3.5A1.5 1.5 0 0 0 2 6.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sub Navigation Links */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-4">Agency</h4>
              <ul className="space-y-3 text-sm text-textSecondary">
                <li><a href="#services" onClick={(e) => { e.preventDefault(); navigateTo('home', 'services'); }} className="hover:text-primaryAccent transition-colors">Services</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('home', 'about-founder'); }} className="hover:text-primaryAccent transition-colors">About Us</a></li>
                <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); navigateTo('home', 'testimonials'); }} className="hover:text-primaryAccent transition-colors">Success Stories</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('connect'); }} className="hover:text-primaryAccent transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-textSecondary">
                <li><a href="#" className="hover:text-primaryAccent transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primaryAccent transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-primaryAccent transition-colors">ROI Calculator</a></li>
                <li><a href="#" className="hover:text-primaryAccent transition-colors">Playbooks</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription */}
          <div className="lg:col-span-4 text-left space-y-6">
            <h4 className="text-xs font-bold text-textPrimary uppercase tracking-widest">Get Industry Playbooks</h4>
            <p className="text-textSecondary text-sm max-w-sm">
              We send out weekly, highly detailed growth hacks, conversion A/B test results, and SEO strategies. No fluff, ever.
            </p>
            
            {subscribed ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 p-4 rounded-xl text-xs font-medium">
                Awesome! Check your inbox for our latest scaling playbooks.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/[0.02] border border-black/10 focus:border-primaryAccent rounded-xl px-4 py-3 text-textPrimary placeholder-black/30 text-xs outline-none transition-all flex-1"
                />
                <button
                  type="submit"
                  className="p-3 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-xl flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-textSecondary gap-4 text-left">
          <span>&copy; {new Date().getFullYear()} Rohini Digital Marketing Aagency. All rights reserved.</span>
          <div className="flex space-x-6">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }} className="hover:text-primaryAccent transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('terms'); }} className="hover:text-primaryAccent transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
