import React from 'react';
import { Target, Heart, Zap, ArrowRight } from 'lucide-react';

const values = [
  { Icon: Target,  title: 'Results First',     desc: 'We measure everything that matters. Every strategy, every campaign, and every creative decision is tied to a clear business outcome.' },
  { Icon: Heart,   title: 'Client-Obsessed',   desc: 'Your growth is our obsession. We work as an extension of your team, not just a vendor — deeply invested in your long-term success.' },
  { Icon: Zap,     title: 'Always Innovating', desc: 'Digital marketing evolves fast. We stay ahead of algorithm changes, platform updates, and industry shifts so you never fall behind.' },
];

export default function AboutPage({ navigateTo }) {
  return (
    <div className="pt-20 bg-pageBg min-h-screen">
      {/* Hero */}
      <div className="py-16 md:py-24" style={{ background: '#f0f7ff' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">ABOUT US</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-5 leading-tight">
              We Are Rohini<br />
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              Founded in 2016, Rohini Digital Marketing Aagency is a performance-first digital marketing firm helping B2B and D2C brands across India and the globe achieve compounding, measurable growth.
            </p>
            <p className="text-textSecondary leading-relaxed mb-8">
              We've managed over ₹50 Crore in ad spend, generated $12.4M in attributable revenue for our clients, and built a reputation for radical transparency and genuine partnership.
            </p>
            <button onClick={() => navigateTo('contact')}
              className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 18px rgba(14,165,233,0.35)' }}>
              Work With Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['94%', 'Client Satisfaction'], ['2+', 'Years of Excellence']].map(([n, l], i) => (
              <div key={i} className="corp-card p-6 text-center">
                <span className="block text-4xl font-extrabold gradient-text mb-1">{n}</span>
                <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <div className="section-label mx-auto mb-4">OUR MISSION</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-textPrimary mb-6">
          Democratizing <span className="gradient-text">Enterprise-Level Marketing</span>
        </h2>
        <p className="text-textSecondary text-lg leading-relaxed">
          We believe every business — regardless of size — deserves access to the same sophisticated marketing strategies used by Fortune 500 companies. Our mission is to deliver enterprise-grade results with the personal attention of a boutique firm.
        </p>
      </div>

      {/* Values */}
      <div className="py-16 md:py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="section-label mx-auto text-center mb-10">OUR VALUES</div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map(({ Icon, title, desc }, i) => (
              <div key={i} className="corp-card group p-8">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300"
                  style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors">{title}</h3>
                <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
