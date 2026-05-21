import React, { useState } from 'react';
import { Shield, Sparkles, Send, CheckCircle2, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: 'under-5k'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mimic API submission
    setTimeout(() => {
      setFormData({ name: '', email: '', website: '', budget: 'under-5k' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[500px] bg-secondaryAccent/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Offer / Copywriting */}
          <div className="lg:col-span-6 text-left space-y-8">
            <span className="text-sm font-bold tracking-widest text-primaryAccent uppercase">Limited Offer</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-tight">
              Claim Your Free <br />
              <span className="gradient-text font-black">$1,000 Growth Audit</span>
            </h2>
            <p className="text-textSecondary text-md md:text-lg leading-relaxed">
              We will personally audit your website's speed, current search rankings, and active advertising campaigns, then show you exactly where you're leaving money on the table. No obligation.
            </p>

            {/* List of deliverables from the audit */}
            <div className="space-y-4 pt-2">
              {[
                "Comprehensive site speed & SEO speed bottlenecks report",
                "Full spying audit on your top 3 competitor ad spend & copy",
                "30-minute high-impact strategy breakdown call with our lead architect"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-textPrimary/80">
                  <CheckCircle2 className="w-5 h-5 text-secondaryAccent shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Guarantee Badge */}
            <div className="inline-flex items-center space-x-3 p-4 rounded-2xl bg-black/[0.02] border border-black/5">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="text-xs text-textSecondary font-semibold">
                Your data is 100% confidential. We never share your marketing strategy.
              </span>
            </div>

            {/* Direct Line / Contact Details */}
            <div className="flex flex-col space-y-4 p-6 rounded-3xl bg-black/[0.02] border border-black/5 text-left w-full">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-primaryAccent/10 flex items-center justify-center border border-black/5">
                  <Phone className="w-4 h-4 text-primaryAccent" />
                </div>
                <div>
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest block font-bold">Have Questions?</span>
                  <span className="text-sm font-extrabold text-textPrimary">Talk Directly With Our Team</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a 
                  href="tel:+917607716206" 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-black/5 hover:border-primaryAccent/20 hover:shadow-sm hover:scale-[1.01] transition-all group"
                >
                  <div className="text-left">
                    <span className="text-[9px] text-textSecondary uppercase tracking-wider block font-semibold">Primary Line</span>
                    <span className="text-xs font-bold text-textPrimary block mt-0.5">+91 7607 716 206</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-primaryAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a 
                  href="tel:+919305270378" 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-black/5 hover:border-secondaryAccent/20 hover:shadow-sm hover:scale-[1.01] transition-all group"
                >
                  <div className="text-left">
                    <span className="text-[9px] text-textSecondary uppercase tracking-wider block font-semibold">Secondary Line</span>
                    <span className="text-xs font-bold text-textPrimary block mt-0.5">+91 93052 70378</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-secondaryAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Lead Acquisition Form */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 shadow-xl relative">

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Sparkles className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-textPrimary">Audit Requested!</h3>
                  <p className="text-textSecondary text-sm max-w-sm">
                    Thank you! Our lead marketing architect will analyze your site and reach out to you within the next 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-secondaryAccent hover:underline"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-semibold text-textSecondary uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/[0.02] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-semibold text-textSecondary uppercase tracking-widest">Business Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/[0.02] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Website Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-semibold text-textSecondary uppercase tracking-widest">Website URL</label>
                    <input
                      type="url"
                      required
                      placeholder="https://company.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-black/[0.02] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-semibold text-textSecondary uppercase tracking-widest">Monthly Marketing Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-black/[0.02] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary text-sm outline-none transition-all appearance-none cursor-pointer"
                      style={{ colorScheme: 'light' }}
                    >
                      <option value="under-5k">Under $5,000 / mo</option>
                      <option value="5k-20k">$5,000 - $20,000 / mo</option>
                      <option value="20k-50k">$20,000 - $50,000 / mo</option>
                      <option value="50k-plus">$50,000+ / mo</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-xl shadow-xl shadow-primaryAccent/20 hover:shadow-secondaryAccent/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    <span>Secure My Free Audit</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
