import React from 'react';
import { ArrowRight, GraduationCap, Award, Briefcase, BookOpen } from 'lucide-react';

/* ─── Qualifications data ─────────────────────────────────────────── */
const qualifications = [
  {
    Icon: GraduationCap,
    category: 'TECHNICAL EDGE',
    title: 'B.Tech in Computer Science & Engineering',
    desc: 'Leveraging rigorous technical systems, backend automation, and analytical engineering to build high-performance marketing machines.',
    color: '#0ea5e9',
  },
  {
    Icon: Award,
    category: 'CERTIFICATION',
    title: 'Google Ads & Analytics Certified Professional',
    desc: 'Certified by Google in Search Ads, Display Ads, Shopping Ads, and Google Analytics 4 — ensuring campaigns are always grounded in platform best practices.',
    color: '#0284c7',
  },
  {
    Icon: Briefcase,
    category: 'INDUSTRY EXPERIENCE',
    title: '2+ Years in Performance Marketing',
    desc: 'Hands-on experience scaling D2C brands, SaaS platforms, and B2B enterprises across India, the US, and the UAE — managing ₹50Cr+ in ad spend.',
    color: '#0891b2',
  },
  {
    Icon: BookOpen,
    category: 'SPECIALISATION',
    title: 'Growth Systems & Revenue Architecture',
    desc: 'Trained in funnel engineering, CRO methodology, and data attribution modelling — turning marketing spend into predictable, compounding revenue.',
    color: '#0ea5e9',
  },
];

export default function FounderPage({ navigateTo }) {
  return (
    <div className="pt-20 bg-pageBg min-h-screen">

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className="py-16 md:py-24" style={{ background: '#f0f7ff' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* Bio text */}
          <div>
            <div className="section-label mb-4">MEET THE FOUNDER</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-2 leading-tight">
              Rohini Yadav
            </h1>
            <p className="font-bold text-lg mb-1" style={{ color: '#0ea5e9' }}>
              Founder &amp; Lead Growth Architect
            </p>
            <p className="text-textMuted text-sm mb-6 font-medium">B.Tech · CSE · Google Certified · 2+ Years</p>

            <p className="text-textSecondary leading-relaxed mb-4">
              With a strong academic background in Computer Science and Engineering, Rohini is a rare breed of digital marketing strategist. Instead of relying on creative guesswork or vanity metrics, she treats acquisition funnels like complex software architectures — data-backed, quantitatively tested, and built for high-throughput scaling.
            </p>
            <p className="text-textSecondary leading-relaxed mb-8">
              She founded <strong className="text-textPrimary">Rohini Digital Marketing Aagency</strong> to bridge the gap between hard software engineering and hyper-growth client acquisition. Her unique approach has enabled clients to build ultra-stable, high-converting digital infrastructures that systematically generate predictable, compounding revenues.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => navigateTo('contact')}
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 18px rgba(14,165,233,0.35)' }}
              >
                Work With Rohini <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/rohini_digital_marketing" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: '#f0f7ff', border: '1px solid #e2e8f0', color: '#94a3b8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(225,48,108,0.10)'; e.currentTarget.style.borderColor = '#e1306c'; e.currentTarget.style.color = '#e1306c'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#94a3b8'; }}
                  aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@rohinidigitalmarketing" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: '#f0f7ff', border: '1px solid #e2e8f0', color: '#94a3b8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,0,0,0.08)'; e.currentTarget.style.borderColor = '#ff0000'; e.currentTarget.style.color = '#ff0000'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#94a3b8'; }}
                  aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/rohinidigitalmarketing" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: '#f0f7ff', border: '1px solid #e2e8f0', color: '#94a3b8' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(24,119,242,0.08)'; e.currentTarget.style.borderColor = '#1877f2'; e.currentTarget.style.color = '#1877f2'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#f0f7ff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#94a3b8'; }}
                  aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 24px 64px rgba(14,165,233,0.25)' }}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl font-extrabold text-white/30">RY</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 corp-card px-5 py-3 rounded-xl text-center"
                style={{ boxShadow: '0 8px 32px rgba(15,37,87,0.15)' }}>
                <span className="block text-3xl font-extrabold gradient-text">2+</span>
                <span className="text-xs text-textMuted font-semibold">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Qualifications ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary mb-1">
            Founder &amp; Lead Growth Architect
          </h2>
          <div className="h-1 w-16 rounded-full mt-3" style={{ background: 'linear-gradient(90deg,#0ea5e9,#14b8a6)' }} />
        </div>

        <div className="flex flex-col gap-5">
          {qualifications.map(({ Icon, category, title, desc, color }, i) => (
            <div key={i} className="corp-card group flex items-start gap-5 p-6">
              {/* Icon box */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${color}12`, border: `1px solid ${color}28` }}>
                <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
              </div>

              {/* Text */}
              <div className="min-w-0">
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-textMuted block mb-1">
                  {category}
                </span>
                <h3 className="font-bold text-base mb-1.5 group-hover:text-accent transition-colors duration-200"
                  style={{ color: '#0ea5e9' }}>
                  {title}
                </h3>
                <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Quick Stats ─────────────────────────────────────────────── */}
      <div className="py-16" style={{ background: '#f0f7ff' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: '120+', l: 'Brands Scaled' },
              { n: '₹50Cr+', l: 'Ad Spend Managed' },
              { n: '$12.4M', l: 'Revenue Generated' },
            ].map(({ n, l }, i) => (
              <div key={i} className="corp-card p-8 text-center">
                <span className="block text-4xl font-extrabold gradient-text mb-2">{n}</span>
                <span className="text-sm font-semibold text-textMuted uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
