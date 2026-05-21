import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Working with Rohini Digital transformed our entire business funnel. In less than 90 days, our organic lead rate increased by 240% and our customer acquisition cost (CAC) dropped by 45%.",
      author: "Sarah Jenkins",
      role: "VP of Growth, FinTech SaaS",
      initials: "SJ"
    },
    {
      text: "Their team's conversion optimization is stellar. They redesigned our landing pages and reworked the ad creatives, pushing our conversion rates from an average 1.5% up to a steady 5.2%.",
      author: "Marcus Vance",
      role: "CEO, Elevate Apparel Co.",
      initials: "MV"
    },
    {
      text: "An absolute game-changer. The automated email flows they engineered are generating an extra $40,000/month on complete autopilot. The investment paid for itself in less than a month.",
      author: "Elena Rostova",
      role: "Founder, Bloom Skincare",
      initials: "ER"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-darkBg/50 relative border-t border-black/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.02),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-sm font-bold tracking-widest text-primaryAccent uppercase">Social Proof</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-textPrimary tracking-tight">
            Loved By <span className="gradient-text">Hyper-Scale Brands</span>
          </h2>
          <p className="text-textSecondary text-md md:text-lg leading-relaxed">
            See how we've helped direct-to-consumer startups, SaaS companies, and digital creators scale their customer acquisition infrastructure.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-black/5 relative flex flex-col justify-between group hover:border-black/10 transition-colors duration-300"
            >
              {/* Quote icon overlay */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-black/[0.03] pointer-events-none" />

              {/* Review Text */}
              <div className="space-y-4 mb-8">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondaryAccent text-secondaryAccent" />
                  ))}
                </div>
                <p className="text-textPrimary/90 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Profile Details */}
              <div className="flex items-center space-x-4 border-t border-black/5 pt-6">
                {/* Fallback image / Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primaryAccent to-secondaryAccent flex items-center justify-center font-bold text-white text-xs">
                  {review.initials}
                </div>
                <div>
                  <span className="text-sm font-bold text-textPrimary block">{review.author}</span>
                  <span className="text-xs text-textSecondary block">{review.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
