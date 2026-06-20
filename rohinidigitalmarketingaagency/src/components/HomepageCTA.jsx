import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function HomepageCTA({ navigateTo }) {
  return (
    <section className="w-full py-20 md:py-28 relative overflow-hidden" style={{ background: '#0f2557' }}>
      {/* Background decorative orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'rgba(14,165,233,0.08)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'rgba(8,145,178,0.06)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="section-label mx-auto mb-6"
          style={{ color: '#0ea5e9', borderColor: 'rgba(14,165,233,0.3)', background: 'rgba(14,165,233,0.1)' }}>
          GET STARTED TODAY
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready to Scale Your{' '}
          <span className="gradient-text">Business?</span>
        </h2>

        <p className="text-blue-200/75 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Book a free growth audit. We'll analyze your current marketing, identify your biggest opportunities, and give you a clear roadmap.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigateTo('contact')}
            className="btn-shine group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 6px 28px rgba(14,165,233,0.40)' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 10px 40px rgba(14,165,233,0.60)')}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 6px 28px rgba(14,165,233,0.40)')}
          >
            <Calendar className="w-4 h-4" />
            Book Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Explore Services
          </button>
        </div>

        {/* Trust signals below CTA */}
        <p className="mt-8 text-blue-300/50 text-xs font-medium tracking-wide">
          No contracts · No setup fees · Results guaranteed or we work for free
        </p>
      </div>
    </section>
  );
}
