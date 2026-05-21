import React from 'react';
import { Search, Megaphone, Share2, Compass, Layers, Mail, Globe, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-primaryAccent" />,
      title: "Social Media Marketing",
      desc: "To help brands grow organically across platforms like Instagram, Facebook, LinkedIn, and YouTube by combining strategic content planning with automation tools.",
      features: ["Content Strategy", "Influencer Collaborations", "Paid Social Campaigns"],
      color: "from-purple-500/20 to-purple-600/5",
      borderColor: "hover:border-purple-500/40"
    },
    {
      icon: <Megaphone className="w-6 h-6 text-secondaryAccent" />,
      title: "Paid Ads (PPC)",
      desc: "Turn clicks into active customers using targeted, profitable Google & Meta ad campaigns tailored for maximum ROAS.",
      features: ["Google Search & Display", "Retargeting Flows", "Creative Testing"],
      color: "from-cyan-500/20 to-cyan-600/5",
      borderColor: "hover:border-cyan-500/40"
    },
    {
      icon: <Share2 className="w-6 h-6 text-pink-500" />,
      title: "Website",
      desc: "We design, develop, and manage modern websites that showcase your brand, engage visitors, and drive conversions.",
      features: ["Custom Design & Development", "Performance Optimization", "Content Management & Updates"],
      color: "from-pink-500/20 to-pink-600/5",
      borderColor: "hover:border-pink-500/40"
    },
    {
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      title: "Social media Handling",
      desc: "We manage your social media accounts end‑to‑end, ensuring consistent branding, timely posts, and active audience engagement.",
      features: ["Account Management", "Content Posting & Scheduling", "Engagement & Monitoring"],
      color: "from-amber-500/20 to-amber-600/5",
      borderColor: "hover:border-amber-500/40"
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      title: "Seo Services",
      desc: "We optimize your website to rank higher on search engines, attract qualified traffic, and convert visitors into customers.",
      features: ["On‑Page Optimization", "Technical SEO", "Link Building & Authority Growth"],
      color: "from-emerald-500/20 to-emerald-600/5",
      borderColor: "hover:border-emerald-500/40"
    },
    {
      icon: <Mail className="w-6 h-6 text-indigo-500" />,
      title: "Content Creation & Advisory",
      desc: "We craft compelling content and provide expert guidance to ensure your brand voice is consistent, engaging, and impactful.",
      features: ["Content Development", "Brand Voice Advisory", "Performance Insights"],
      color: "from-indigo-500/20 to-indigo-600/5",
      borderColor: "hover:border-indigo-500/40"
    }
  ];

  return (
    <section id="services" className="py-24 bg-darkBg/50 relative border-y border-black/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-bold tracking-widest text-primaryAccent uppercase">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary tracking-tight">
            High-Performance <span className="gradient-text">Marketing Solutions</span>
          </h2>
          <p className="text-textSecondary text-md md:text-lg leading-relaxed">
            We don't do generic marketing. We architect high-converting digital infrastructures that transform online traffic into highly-scalable, recurring revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-3xl border border-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100/50 ${service.borderColor} group`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-6 border border-black/5 shadow-sm`}>
                {service.icon}
              </div>

              {/* Service Details */}
              <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primaryAccent transition-colors duration-200">
                {service.title}
              </h3>

              <p className="text-textSecondary text-sm leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2 border-t border-black/5 pt-4 mb-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="text-xs text-textPrimary/80 flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondaryAccent"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More link */}
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-textSecondary hover:text-primaryAccent transition-colors gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
