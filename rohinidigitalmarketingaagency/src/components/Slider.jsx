import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    label: 'Growth Strategy',
    headline: 'Accelerate Your Business\nand Build It Into a Brand.',
    sub: 'We craft data-driven digital strategies that transform your online presence into a powerful, scalable revenue engine.',
    cta: 'Start Growing Today',
    img: '/slides/slide1.png',
    overlay: 'linear-gradient(135deg, rgba(6,12,26,0.72) 0%, rgba(15,37,87,0.60) 100%)',
    leftGrad: 'rgba(6,12,26,0.55)',
  },
  {
    id: 2,
    label: 'SEO & Search Dominance',
    headline: 'Rank Higher. Get Found.\nOwn Your Market.',
    sub: 'Our technical SEO and content strategies push your brand to the top of Google, capturing high-intent traffic that converts.',
    cta: 'Boost My Rankings',
    img: '/slides/slide2.png',
    overlay: 'linear-gradient(135deg, rgba(6,12,26,0.70) 0%, rgba(8,26,53,0.62) 100%)',
    leftGrad: 'rgba(6,12,26,0.55)',
  },
  {
    id: 3,
    label: 'PPC & Paid Performance',
    headline: 'Drive Maximum ROI\nfrom Every Ad Rupee.',
    sub: 'We engineer high-performance Google & Meta campaigns delivering consistent 4.8x ROAS — turning ad spend into measurable profit.',
    cta: 'Maximize My ROAS',
    img: '/slides/slide3.png',
    overlay: 'linear-gradient(135deg, rgba(6,12,26,0.72) 0%, rgba(15,37,87,0.58) 100%)',
    leftGrad: 'rgba(6,12,26,0.55)',
  },
  {
    id: 4,
    label: 'Brand Identity',
    headline: 'Build a Brand People\nTrust, Remember & Choose.',
    sub: 'From logo design to complete brand guidelines — we create cohesive visual identities that command authority in your market.',
    cta: 'Build My Brand',
    img: '/slides/slide4.png',
    overlay: 'linear-gradient(135deg, rgba(6,12,26,0.70) 0%, rgba(12,30,70,0.60) 100%)',
    leftGrad: 'rgba(6,12,26,0.55)',
  },
];

export default function Slider({ navigateTo }) {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const total = slides.length;

  const goTo = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setAnimDir(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((index + total) % total);
      setIsAnimating(false);
    }, 420);
  }, [isAnimating, total]);

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5500);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const reset = () => { clearInterval(timerRef.current); timerRef.current = setInterval(next, 5500); };
  const handlePrev = () => { prev(); reset(); };
  const handleNext = () => { next(); reset(); };
  const handleDot = (i) => { goTo(i, i > current ? 'next' : 'prev'); reset(); };

  const slide = slides[current];

  return (
    <section id="slider" className="relative w-full pt-16 md:pt-[62px]">
      <div className="relative w-full overflow-hidden" style={{ height: 'clamp(520px, 88vh, 800px)' }}>

        {/* Background image */}
        <img
          key={`img-${current}`}
          src={slide.img}
          alt={slide.label}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark navy gradient overlay — makes text pop */}
        <div className="absolute inset-0" style={{ background: slide.overlay }} />

        {/* Stronger left-side gradient for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${slide.leftGrad} 0%, ${slide.leftGrad}99 35%, transparent 70%)`,
          }}
        />

        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="slider-orb absolute top-10 right-[12%] w-80 h-80 rounded-full blur-3xl"
            style={{ background: 'rgba(14,165,233,0.08)' }} />
          <div className="slider-orb-2 absolute bottom-8 right-[35%] w-52 h-52 rounded-full blur-2xl"
            style={{ background: 'rgba(8,145,178,0.07)' }} />
        </div>

        {/* Slide Content */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
          <div className={`max-w-2xl ${isAnimating ? `slide-exit-${animDir}` : 'slide-enter'}`}>

            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-accent">
                {slide.label}
              </span>
            </div>

            {/* Headline — white, bold, corporate */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-5 tracking-tight"
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>
              {slide.headline.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {i === 1
                    ? <span className="gradient-text">{line}</span>
                    : <span>{line}</span>
                  }
                  {i < slide.headline.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg text-blue-100/85 max-w-xl leading-relaxed mb-8 font-light">
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigateTo('contact')}
                className="btn-shine group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 24px rgba(14,165,233,0.40)' }}
              >
                {slide.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute top-6 right-20 md:right-24 z-20 hidden md:flex items-center gap-2 text-white/50 text-xs font-mono">
          <span className="text-white/90 font-bold text-sm">{String(current + 1).padStart(2, '0')}</span>
          <span className="w-8 h-px bg-white/30" />
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Chevrons */}
        <button onClick={handlePrev} aria-label="Previous"
          className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={handleNext} aria-label="Next"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {slides.map((_, i) => (
            <button key={i} onClick={() => handleDot(i)} aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-400"
              style={{ width: i === current ? '28px' : '8px', height: '8px',
                backgroundColor: i === current ? '#0ea5e9' : 'rgba(255,255,255,0.4)' }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <div key={current} className="h-full slider-progress-bar"
            style={{ background: 'linear-gradient(90deg, #0ea5e9, #14b8a6)' }} />
        </div>
      </div>

      {/* ── Overlapping Feature Bar ─────────────────────────────────── */}
      <div className="relative z-30 px-4 md:px-8 lg:px-12 xl:px-0 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden"
          style={{ transform: 'translateY(-44px)', boxShadow: '0 20px 60px rgba(15,37,87,0.12), 0 4px 20px rgba(0,0,0,0.08)' }}>
          {[
            { icon: '🛡️', title: 'Exceptional Results', desc: 'Premium execution across every campaign.' },
            { icon: '⏱️', title: 'Delivery on Time', desc: 'Every milestone met with precision.' },
            { icon: '⚡', title: 'Fast ROI', desc: 'Measurable growth within 30 days.' },
            { icon: '📈', title: 'Proven Growth', desc: 'Data-backed strategies that compound.' },
          ].map((f, i, arr) => (
            <div key={i}
              className={`feature-card group relative flex items-start gap-4 p-5 md:p-6 bg-white cursor-default ${
                i < arr.length - 1 ? 'border-r border-borderClr' : ''
              } ${i < 2 ? 'border-b border-borderClr lg:border-b-0' : ''}`}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none"
                style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.04), rgba(8,145,178,0.03))' }} />
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg
                group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}>
                {f.icon}
              </div>
              <div className="relative min-w-0">
                <h3 className="font-bold text-sm text-textPrimary mb-0.5 group-hover:text-accent transition-colors duration-200">{f.title}</h3>
                <p className="text-xs text-textMuted leading-relaxed">{f.desc}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: 'linear-gradient(90deg, #0ea5e9, #14b8a6)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
