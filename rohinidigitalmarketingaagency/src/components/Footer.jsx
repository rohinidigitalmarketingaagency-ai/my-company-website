import React from 'react';
import { Mail, Phone } from 'lucide-react';
import logo from './logo.png';

const links = {
  Services: ['Technical SEO', 'Pay-Per-Click', 'Filming and editing', 'Paid ads', 'Content Strategy', 'Social Media Growth'],
  Company:  ['About Us', 'Meet the Founder', 'Testimonials', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

const pageMap = {
  'About Us': 'about', 'Meet the Founder': 'founder', 'Testimonials': 'testimonials',
  'Contact': 'contact', 'Privacy Policy': 'privacy', 'Terms of Service': 'terms',
  'Technical SEO': 'services', 'Pay-Per-Click': 'services', 'Funnel Optimization': 'services',
  'Omnichannel Marketing': 'services', 'Content Strategy': 'services', 'Social Media Growth': 'services',
};

export default function Footer({ navigateTo }) {
  return (
    <footer style={{ background: '#0a1628' }}>
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="inline-block mb-5 group">
              <div className="rounded-xl overflow-hidden transition-all duration-300 group-hover:opacity-90"
                style={{ display: 'inline-block', padding: '3px 8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.10)' }}>
                <img src={logo} alt="Rohini Digital Marketing Agency"
                  className="h-12 w-auto object-contain block" />
              </div>
            </a>
            <p className="text-blue-200/60 text-sm leading-relaxed max-w-sm mb-6">
              Performance-first digital marketing agency helping brands achieve compounding, measurable growth. Data-backed. Transparent. Results-guaranteed.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">

              {/* Instagram */}
              <a href="https://www.instagram.com/rohini_digital_marketing?igsh=aDVpYjJqZzB4azB2" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-200/50 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(225,48,108,0.20)'; e.currentTarget.style.borderColor = 'rgba(225,48,108,0.40)'; e.currentTarget.style.color = '#e1306c'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = ''; }}
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCXT3el6TrGoR0Jn05N6cFcA" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-200/50 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,0,0,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,0,0,0.35)'; e.currentTarget.style.color = '#ff0000'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = ''; }}
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/share/18qErcHVd9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-blue-200/50 hover:text-white transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(24,119,242,0.20)'; e.currentTarget.style.borderColor = 'rgba(24,119,242,0.40)'; e.currentTarget.style.color = '#1877f2'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = ''; }}
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

            </div>
            <div className="flex flex-col gap-2">
              {[{Icon: Mail, val: 'rohinidigitalmarketingaagency@gmail.com'}, {Icon: Phone, val: '+91 9305270378'}].map(({Icon, val}, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-blue-200/60">
                  <Icon className="w-4 h-4 text-accent/70 flex-shrink-0" />
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigateTo(pageMap[item] || 'home')}
                      className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-blue-200/40 text-xs">
            © {new Date().getFullYear()} Rohini Digital Marketing Aagency. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <button key={item}
                onClick={() => navigateTo(pageMap[item])}
                className="text-xs text-blue-200/40 hover:text-blue-200/80 transition-colors duration-200">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
