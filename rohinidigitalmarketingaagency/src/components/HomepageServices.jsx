import React from 'react';
import { Search, MousePointerClick, TrendingUp, Globe, FileText, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    Icon: Search,
    title: 'Technical SEO',
    desc: 'Site audits, Core Web Vitals, schema markup, and link-building strategies that push you to Page 1 and keep you there.',
    badge: 'Most Popular',
    page: 'service-seo',
  },
  {
    Icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising',
    desc: 'ROI-first Google Ads & Meta campaigns engineered to consistently deliver 4x+ returns on every rupee invested.',
    badge: null,
    page: 'service-ppc',
  },
  {
    Icon: TrendingUp,
    title: 'Funnel Optimisation',
    desc: 'From awareness to conversion — we design, test, and optimise high-converting sales funnels that work 24/7.',
    badge: null,
    page: 'service-funnel',
  },
  {
    Icon: Globe,
    title: 'Omnichannel Marketing',
    desc: 'A unified brand experience across email, social, search, and display — so your customers see you everywhere.',
    badge: null,
    page: 'service-omnichannel',
  },
  {
    Icon: FileText,
    title: 'Content Strategy',
    desc: 'Authority-building content, blog calendars, and SEO-optimised copy that attracts, educates, and converts.',
    badge: null,
    page: 'service-content',
  },
  {
    Icon: Users,
    title: 'Social Media Growth',
    desc: 'Strategic organic and paid social campaigns that build real communities, not just follower counts.',
    badge: null,
    page: 'service-social',
  },
];

export default function HomepageServices({ navigateTo }) {
  return (
    <section id="services-preview" className="w-full py-20 md:py-28 bg-pageBg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mx-auto mb-4">OUR SERVICES</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-4">
            High-Performance{' '}
            <span className="gradient-text">Marketing Solutions</span>
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto leading-relaxed">
            Every service we offer is built around one outcome — measurable growth for your business.
          </p>
        </div>

        {/* 6-card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map(({ Icon, title, desc, badge, page }, i) => (
            <div
              key={i}
              className="corp-card group relative p-7 overflow-hidden cursor-pointer"
              onClick={() => navigateTo(page)}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                style={{ background: 'linear-gradient(180deg, #0ea5e9, #14b8a6)' }}
              />

              {badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>
                  {badge}
                </span>
              )}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300"
                style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}
              >
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>

              <h3 className="text-lg font-bold text-textPrimary mb-2 group-hover:text-accent transition-colors duration-200">
                {title}
              </h3>
              <p className="text-textSecondary text-sm leading-relaxed mb-4">{desc}</p>

              {/* Learn more link */}
              <div className="flex items-center gap-1 text-xs font-bold text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Learn More <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accentHover transition-colors duration-200 group"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
