import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Rohini Digital completely transformed our online presence. Within 90 days, our organic traffic tripled and our cost-per-lead dropped by 58%. The team is transparent, data-driven, and genuinely invested in our growth.",
    name: 'Vinay kumar',
    title: 'founder of RB classes',
    rating: 5,
    initials: 'AM',
    color: '#0ea5e9',
  },
  {
    quote: "The PPC campaigns they managed delivered a 5.2x ROAS in the first month. No fluff, no excuses — just results. I finally feel like I have a marketing partner who understands business, not just marketing.",
    name: 'Priya Sharma',
    title: 'Founder, LuxeCommerce',
    rating: 5,
    initials: 'PS',
    color: '#0891b2',
  },
];

export default function TestimonialsPreview({ navigateTo }) {
  return (
    <section className="w-full py-20 md:py-28 bg-pageBg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="text-center mb-12">
          <div className="section-label mx-auto mb-4">CLIENT RESULTS</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-textPrimary">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, i) => (
            <div key={i} className="corp-card group p-8 relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[14px]"
                style={{ background: `linear-gradient(90deg, ${t.color}, #14b8a6)` }} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-textSecondary leading-relaxed mb-6 italic text-sm md:text-base">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #0284c7)` }}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-textPrimary text-sm">{t.name}</div>
                  <div className="text-textMuted text-xs">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigateTo('testimonials')}
            className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accentHover transition-colors duration-200 group"
          >
            Read All Client Stories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
