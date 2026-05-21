import React, { useState } from 'react';
import { Send, ArrowLeft, Sparkles, Phone, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function Connect({ navigateTo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-slate-50">
      {/* Background glowing effects to match the design system */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primaryAccent/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/3"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-secondaryAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Sleek top navigation / back button */}
        <div className="flex justify-start mb-8">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white border border-black/5 hover:border-black/10 hover:shadow-sm text-textSecondary hover:text-textPrimary font-semibold transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-sm">Back to Home</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Callouts & Information */}
          <div className="lg:col-span-5 text-left space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-black tracking-widest text-primaryAccent uppercase bg-primaryAccent/10 px-3 py-1.5 rounded-full">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-tight pt-1">
                Let's Scale <br />
                Your Brand.
              </h1>
              <p className="text-textSecondary text-base md:text-lg leading-relaxed pt-1">
                Connect directly with our team to launch your customized customer acquisition system. We will get back to you within 12 hours.
              </p>
            </div>

            {/* Visual Value Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3 text-textPrimary/80">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-emerald-500" />
                </div>
                <div>
                  <span className="text-sm font-bold text-textPrimary block">Direct Human Interaction</span>
                  <span className="text-xs text-textSecondary block mt-0.5">No automated bots. You will speak directly with our engineering and growth leads.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-textPrimary/80">
                <div className="w-5 h-5 rounded-full bg-primaryAccent/10 flex items-center justify-center border border-primaryAccent/20 shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3 text-primaryAccent" />
                </div>
                <div>
                  <span className="text-sm font-bold text-textPrimary block">Data-Driven Blueprint</span>
                  <span className="text-xs text-textSecondary block mt-0.5">We analyze your competitors, traffic sources, and current funnels before we jump on a call.</span>
                </div>
              </div>
            </div>

            {/* Direct Dial Options */}
            <div className="flex flex-col space-y-4 p-6 rounded-3xl bg-white border border-black/5 shadow-sm text-left w-full">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-primaryAccent/10 flex items-center justify-center border border-black/5">
                  <Phone className="w-4 h-4 text-primaryAccent" />
                </div>
                <div>
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest block font-bold">Urgent Inquiry?</span>
                  <span className="text-sm font-extrabold text-textPrimary">Talk Directly With Us</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a 
                  href="tel:+917607716206" 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-black/5 hover:border-primaryAccent/20 hover:shadow-sm hover:scale-[1.01] transition-all group"
                >
                  <div className="text-left">
                    <span className="text-[9px] text-textSecondary uppercase tracking-wider block font-semibold">Primary Line</span>
                    <span className="text-xs font-bold text-textPrimary block mt-0.5">+91 7607 716 206</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-primaryAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a 
                  href="tel:+919305270378" 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-black/5 hover:border-secondaryAccent/20 hover:shadow-sm hover:scale-[1.01] transition-all group"
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

          {/* Right Column: Premium Connect Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-10 rounded-[32px] border border-black/5 shadow-xl bg-white relative">
              
              {isSubmitted ? (
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-5 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Sparkles className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-textPrimary">Message Sent Successfully!</h3>
                    <p className="text-textSecondary text-sm max-w-sm mx-auto">
                      Thank you for connecting. Our growth architect is already reviewing your info and will contact you via Gmail/Phone shortly.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full justify-center">
                    <button
                      onClick={() => navigateTo('home')}
                      className="px-6 py-3 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
                    >
                      Return to Homepage
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl border border-black/5 hover:bg-black/[0.02] text-textSecondary font-semibold transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-widest">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/[0.01] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Gmail / Business Email Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-widest">Gmail / Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/[0.01] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Phone / Contact Info */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-widest">Contact Info (Phone Number)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 76077 16206"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/[0.01] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col space-y-2 text-left">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-widest">How Can We Help You?</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell us about your brand, current challenges, or marketing goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/[0.01] border border-black/10 focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent rounded-xl px-4 py-3.5 text-textPrimary placeholder-black/30 text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-gradient-to-r from-primaryAccent to-secondaryAccent text-white font-bold rounded-xl shadow-xl shadow-primaryAccent/20 hover:shadow-secondaryAccent/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 transition-all duration-200"
                  >
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Connection Request'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
