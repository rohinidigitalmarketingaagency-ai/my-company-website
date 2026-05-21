import React from 'react';
import { ArrowUpRight, Play, CheckCircle } from 'lucide-react';

export default function Hero({ navigateTo }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primaryAccent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondaryAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Copywriting */}  
        <div className="lg:col-span-7 flex flex-col items-start space-y-8 text-left">

          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondaryAccent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondaryAccent"></span>
            </span>
            <span className="text-xs font-semibold text-textPrimary uppercase tracking-widest">
              Top Rated Digital Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-textPrimary">
            We Architect <br />
            <span className="gradient-text font-black">Hyper-Growth</span> <br />
            For Bold Brands.
          </h1>

          {/* Paragraph */}
          <p className="text-textSecondary text-lg md:text-xl max-w-xl font-normal leading-relaxed">
            Stop wasting budgets on outdated methods. We deploy data-driven strategies, cutting-edge SEO, and hyper-targeted advertising campaigns that double your customer acquisition speed.
          </p>

          {/* Key Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
            {[
              "ROI-Focused Campaigns",
              "Automated Conversion Funnels",
              "Full-Funnel Web Analytics",
              "Omnichannel Marketing Automation"
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2 text-textSecondary">
                <CheckCircle className="w-5 h-5 text-secondaryAccent shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('connect');
              }}
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-2xl shadow-xl shadow-primaryAccent/20 hover:shadow-secondaryAccent/30 hover:scale-[1.03] transition-all duration-300"
            >
              <span>Connect with us</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home', 'services');
              }}
              className="flex items-center justify-center space-x-2 px-8 py-4 glass-panel hover:bg-black/[0.03] text-textPrimary font-semibold rounded-2xl border border-black/5 hover:border-black/10 transition-all duration-300"
            >
              <Play className="w-4 h-4 fill-textPrimary text-textPrimary" />
              <span>Explore Services</span>
            </a>
          </div>

        </div>

        {/* Right Column: Interactive/Visual Graphic (CSS Mockup Dashboard) */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-[480px] glass-panel rounded-3xl p-6 pb-5 border-black/5 shadow-xl flex flex-col justify-between overflow-hidden group">

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

            {/* Simulated window header */}
            <div className="flex justify-between items-center border-b border-black/5 pb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <span className="text-xs text-textSecondary font-mono">analytics.rohinidigital.com</span>
            </div>

            {/* Dashboard metrics preview */}
            <div className="flex-1 pt-5 pb-0 flex flex-col justify-between space-y-4">

              {/* Row 1: Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/[0.02] p-4 rounded-2xl border border-black/[0.03]">
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold block">Monthly Traffic</span>
                  <span className="text-2xl font-bold text-textPrimary mt-1 block">428,940</span>
                  <span className="text-[10px] text-emerald-600 font-medium block mt-1">+18.4% vs last month</span>
                </div>
                <div className="bg-black/[0.02] p-4 rounded-2xl border border-black/[0.03]">
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold block">Conversion Rate</span>
                  <span className="text-2xl font-bold text-textPrimary mt-1 block">4.82%</span>
                  <span className="text-[10px] text-emerald-600 font-medium block mt-1">+2.1% higher average</span>
                </div>
              </div>

              {/* Row 2: Live conversion notification */}
              <div className="bg-black/[0.02] p-4 rounded-2xl border border-black/[0.03] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest font-semibold block">Active Campaigns</span>
                  <div className="flex space-x-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 self-center"></span>
                    <span className="text-sm font-semibold text-textPrimary">Google Ads - Search</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-textSecondary block">Daily ROAS</span>
                  <span className="text-md font-bold text-primaryAccent">4.8x ROI</span>
                </div>
              </div>

              {/* Row 3: Graphic Visual Chart (styled using Tailwind CSS) */}
              <div className="h-16 w-full flex items-end space-x-2 pt-2">
                <div className="bg-primaryAccent/20 h-6 w-full rounded-md animate-pulse"></div>
                <div className="bg-primaryAccent/30 h-10 w-full rounded-md"></div>
                <div className="bg-primaryAccent/50 h-8 w-full rounded-md"></div>
                <div className="bg-secondaryAccent/60 h-14 w-full rounded-md"></div>
                <div className="bg-primaryAccent/70 h-11 w-full rounded-md"></div>
                <div className="bg-secondaryAccent h-16 w-full rounded-md"></div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
