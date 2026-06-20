import React from 'react';
import { Search, MousePointerClick, TrendingUp, Globe, FileText, Users, Check, ArrowRight } from 'lucide-react';

const services = [
  {
    Icon: Search,
    title: 'Technical SEO',
    color: '#0ea5e9',
    page: 'service-seo',
    features: ['Full site audit & crawl analysis', 'Core Web Vitals optimization', 'Schema markup & structured data', 'Authority link-building campaigns', 'Local SEO & Google My Business'],
    outcome: 'Good page rankings within 90 days',
  },
  {
    Icon: MousePointerClick,
    title: 'Pay-Per-Click (PPC)',
    color: '#0891b2',
    page: 'service-ppc',
    features: ['Google Search & Display Ads', 'Meta (Facebook & Instagram) Ads', 'Conversion tracking setup', 'A/B ad creative testing', 'Weekly bid optimization'],
    outcome: 'Average ?x ROAS delivered',
  },
  {
    Icon: TrendingUp,
    title: 'Filming and editing',
    color: '#0ea5e9',
    page: 'service-funnel',
    features: ['High-converting social & short-form reels', 'Professional color grading & audio mixing', 'Dynamic motion graphics & animation', 'Multi-platform aspect ratio delivery', 'Full-scale commercial video production'],
    outcome: 'Increase in conversion rate',
  },
  {
    Icon: Globe,
    title: 'Paid ads',
    color: '#0891b2',
    page: 'service-omnichannel',
    features: ['Meta (Facebook & Instagram) Ads', 'Conversion tracking setup', 'Weekly bid optimization', 'A/B ad creative testing', 'Google Search & Display Ads'],
    outcome: 'Maximum Bottom-Line ROI',
  },
  {
    Icon: FileText,
    title: 'Content Strategy',
    color: '#0ea5e9',
    page: 'service-content',
    features: ['SEO content calendars', 'Long-form blog & article writing', 'Keyword research & clustering', 'Case study & whitepaper creation', 'Video script & production briefs'],
    outcome: 'Driving High Intent Conversion',
  },
  {
    Icon: Users,
    title: 'Social Media Growth',
    color: '#0891b2',
    page: 'service-social',
    features: ['Account strategy & branding', 'Content creation & scheduling', 'Community management', 'Influencer partnerships', 'Social paid amplification'],
    outcome: 'MAXIMIZING CAMPAIGN EFFICIENCY',
  },
];

export default function ServicesPage({ navigateTo }) {
  return (
    <div className="pt-20 bg-pageBg min-h-screen">
      {/* Hero */}
      <div className="py-16 md:py-24 text-center" style={{ background: '#f0f7ff' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="section-label mx-auto mb-4">OUR SERVICES</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-5">
            Full-Stack <span className="gradient-text">Digital Marketing</span>
          </h1>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">
            Every service is designed around one goal — measurable revenue growth for your business. No fluff, no vanity metrics.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, title, color, features, outcome, page }, i) => (
            <div key={i} className="corp-card group p-7 flex flex-col cursor-pointer" onClick={() => navigateTo(page)}>
              <div className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${color}14`, border: `1px solid ${color}22` }}>
                <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-accent transition-colors">{title}</h3>
              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-textSecondary">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4 border-t border-borderClr">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">✦ {outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-16 text-center" style={{ background: '#0f2557' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200/70 mb-8">Book your free growth audit and get a custom strategy for your business.</p>
          <button onClick={() => navigateTo('contact')}
            className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 20px rgba(14,165,233,0.40)' }}>
            Contact us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
