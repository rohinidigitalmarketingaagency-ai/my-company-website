import React from 'react';
import { Target, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Stats() {
  const features = [
    {
      icon: <Target className="w-5 h-5 text-secondaryAccent" />,
      title: "Data-Backed Strategy",
      desc: "No guessing. We base all campaigns on hard quantitative analytics and competitor mapping."
    },
    {
      icon: <Zap className="w-5 h-5 text-primaryAccent" />,
      title: "Fast Iterations",
      desc: "Our high-speed creative production allows us to run up to 10 A/B variations a week."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      title: "100% Transparency",
      desc: "No hidden dashboards or inflated metrics. Real-time access to all ad managers and funnels."
    }
  ];

  const metrics = [
    { value: "185%", label: "Average Traffic Increase" },
    { value: "$12.4M", label: "Client Revenue Generated" },
    { value: "4.8x", label: "Average Campaign ROAS" },
    { value: "98%", label: "Client Satisfaction Rate" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-primaryAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Why Choose Us */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="text-sm font-bold tracking-widest text-secondaryAccent uppercase">Why Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-tight">
              We Don't Just Execute.<br />
              We Partner For <span className="gradient-text">Domination</span>.
            </h2>
            <p className="text-textSecondary leading-relaxed">
              Most digital agencies deliver vanity reports full of impressions and impressions. We focus exclusively on what actually grows your bottom line: real customers, scalable acquisition, and compounding ROI.
            </p>

            {/* Feature List */}
            <div className="space-y-6 pt-4">
              {features.map((item, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl glass-panel border-black/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-bold text-textPrimary mb-1">{item.title}</h4>
                    <p className="text-textSecondary text-sm max-w-md">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Statistics Board */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-8 rounded-3xl border border-black/5 relative overflow-hidden group hover:border-black/10 transition-colors"
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primaryAccent/5 to-secondaryAccent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <span className="text-4xl md:text-5xl font-black text-textPrimary block tracking-tight group-hover:scale-105 transition-transform duration-300">
                    <span className="gradient-text">{metric.value}</span>
                  </span>
                  
                  <span className="text-xs md:text-sm font-medium text-textSecondary uppercase tracking-widest block mt-3">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Call to action badge */}
            <div className="mt-8 glass-panel p-6 rounded-3xl border border-black/5 flex items-center justify-between text-left">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-tr from-primaryAccent/10 to-secondaryAccent/10 w-10 h-10 rounded-full flex items-center justify-center border border-black/5">
                  <Users className="w-5 h-5 text-textPrimary" />
                </div>
                <div>
                  <span className="text-xs text-textSecondary uppercase tracking-wider block">Scale Guarantee</span>
                  <span className="text-sm font-semibold text-textPrimary">Guaranteed growth benchmarks or we work for free.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
