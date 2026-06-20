import React from 'react';

const stats = [
];

export default function TrustBanner() {
  return (
    <section className="w-full py-12" style={{ background: '#0f2557' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <span
                className="text-4xl md:text-5xl font-extrabold mb-1 gradient-text"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                {s.value}
              </span>
              <span className="text-sm font-medium text-blue-200/70 leading-snug max-w-[140px]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
