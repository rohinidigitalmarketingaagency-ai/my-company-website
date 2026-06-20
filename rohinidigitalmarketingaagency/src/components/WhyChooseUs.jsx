import React from 'react';
import { BarChart2, Eye, TrendingUp, Headphones } from 'lucide-react';

const reasons = [
  {
    Icon: BarChart2,
    title: 'Data-Backed Strategies',
    desc: 'Every decision we make is grounded in real analytics — no guesswork, no vanity metrics. We track what matters and optimize relentlessly.',
  },
  {
    Icon: Eye,
    title: 'Transparent Reporting',
    desc: 'You get clear, honest reports every month — performance dashboards, spend breakdowns, and plain-English insights you can act on immediately.',
  },
  {
    Icon: TrendingUp,
    title: 'ROI-Focused Execution',
    desc: 'We measure our success by your revenue growth. Our campaigns are built to generate tangible returns, not just impressions or clicks.',
  },
  {
    Icon: Headphones,
    title: 'Dedicated Account Support',
    desc: 'A dedicated strategist is always available. No ticketing systems, no call centers — just a direct line to the person managing your growth.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 md:py-28" style={{ background: '#f0f7ff' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <div className="section-label mb-5">WHY ROHINI DIGITAL</div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-6 leading-tight">
              We Don't Just Run Campaigns.
              <br />
              <span className="gradient-text">We Drive Real Results.</span>
            </h2>
            <p className="text-textSecondary text-lg leading-relaxed mb-8">
              While other agencies chase vanity metrics, we obsess over the numbers that actually move your business forward — revenue, profit, and sustainable growth.
            </p>

            {/* Inline stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                
              ].map((s, i) => (
                <div key={i} className="corp-card p-5">
                  <span className="block text-3xl font-extrabold gradient-text mb-1">{s.n}</span>
                  <span className="text-xs font-semibold text-textMuted uppercase tracking-wider">{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="flex flex-col gap-5">
            {reasons.map(({ Icon, title, desc }, i) => (
              <div key={i} className="corp-card group flex items-start gap-5 p-6">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}
                >
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary mb-1.5 group-hover:text-accent transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
