import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Arjun Mehta',    title: 'CEO, TechNova Solutions',   initials: 'AM', color: '#0ea5e9', rating: 5,
    quote: 'Rohini Digital completely transformed our online presence. Within 90 days, organic traffic tripled and cost-per-lead dropped 58%. Transparent, data-driven, and genuinely invested in our growth.' },
  { name: 'Priya Sharma',   title: 'Founder, LuxeCommerce',     initials: 'PS', color: '#0891b2', rating: 5,
    quote: 'The PPC campaigns delivered a 5.2x ROAS in the first month. No fluff — just results. I finally have a partner who understands business, not just marketing.' },
  { name: 'Vikram Singh',   title: 'Director, InfraBuild India', initials: 'VS', color: '#0ea5e9', rating: 5,
    quote: 'Their SEO team took us from page 6 to position 2 for our core keywords in under 4 months. The reporting is crystal clear and the team is always proactive.' },
  { name: 'Deepa Nair',     title: 'CMO, HealthFirst Clinics',   initials: 'DN', color: '#0891b2', rating: 5,
    quote: 'We\'ve worked with 4 agencies before. Rohini Digital is the first one to actually understand healthcare marketing compliance and still deliver incredible results.' },
  { name: 'Rahul Kapoor',   title: 'Founder, CloudStack SaaS',  initials: 'RK', color: '#0ea5e9', rating: 5,
    quote: 'Our email funnel went from 8% to 34% conversion rate after their optimization. The attention to detail is unmatched. They treat our budget like it\'s their own.' },
  { name: 'Sunita Reddy',   title: 'Owner, Reddy\'s Organics',  initials: 'SR', color: '#0891b2', rating: 5,
    quote: 'Social media was a complete mystery to us. In 60 days they built us a community of 18,000 engaged followers and turned that into real sales. Outstanding.' },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20 bg-pageBg min-h-screen">
      <div className="py-16 md:py-24 text-center" style={{ background: '#f0f7ff' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="section-label mx-auto mb-4">CLIENT STORIES</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-4">
            Real Results. <span className="gradient-text">Real Clients.</span>
          </h1>
          <p className="text-textSecondary text-lg">Over 120 brands have scaled with us. Here's what they say.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="corp-card group p-7 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[14px]"
                style={{ background: `linear-gradient(90deg, ${t.color}, #14b8a6)` }} />
              <div className="flex gap-1 mb-4 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-textSecondary text-sm leading-relaxed italic flex-1 mb-5">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-borderClr">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0"
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
      </div>
    </div>
  );
}
