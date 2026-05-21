import React from 'react';
import { GraduationCap, Phone, ShieldCheck, Mail, ArrowUpRight, Award } from 'lucide-react';
import founderImg from '../assets/founder.jpg';

export default function Founder() {
  return (
    <section id="about-founder" className="py-24 relative overflow-hidden bg-darkBg">
      {/* Visual background accents to create premium feel */}
      <div className="absolute left-10 top-1/3 w-[350px] h-[350px] bg-primaryAccent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute right-10 bottom-10 w-[300px] h-[300px] bg-secondaryAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Styled Portrait with effects */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-primaryAccent via-pink-500 to-secondaryAccent rounded-[36px] blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative w-full max-w-[360px] md:max-w-[380px] aspect-[3/4] bg-white p-3 rounded-[32px] border border-black/5 shadow-2xl flex flex-col justify-between overflow-hidden">
                <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                  <img 
                    src={founderImg} 
                    alt="Rohini Yadav - Founder" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Subtle dark gradient overlay at bottom of photo for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0"></div>
                  
                  {/* Founder floating label inside photo */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                    <span className="text-xs font-black tracking-widest text-primaryAccent uppercase">FOUNDER</span>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 glass-panel p-4 rounded-2xl border border-black/5 shadow-xl hidden md:flex items-center space-x-3 max-w-[200px]">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-textSecondary uppercase tracking-widest block font-bold">Verified Profile</span>
                  <span className="text-xs font-bold text-textPrimary">Rohini Yadav</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Credentials */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-black tracking-widest text-primaryAccent uppercase bg-primaryAccent/10 px-3 py-1.5 rounded-full">
                Meet The Founder
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary tracking-tight leading-tight pt-1">
                Rohini Yadav
              </h2>
              <p className="text-md md:text-lg font-bold text-secondaryAccent leading-none -mt-2">
                Founder & Lead Growth Architect
              </p>
            </div>

            {/* CSE Qualification Card */}
            <div className="glass-panel p-5 rounded-2xl border border-black/5 flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-tr from-primaryAccent/10 to-secondaryAccent/10 rounded-xl border border-black/5">
                <GraduationCap className="w-6 h-6 text-primaryAccent" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black text-textSecondary uppercase tracking-widest block">Technical Edge</span>
                <p className="text-sm font-bold text-textPrimary">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-xs text-textSecondary leading-relaxed">
                  Leveraging rigorous technical systems, backend automation, and analytical engineering to build high-performance marketing machines.
                </p>
              </div>
            </div>

            {/* Profile Bio */}
            <div className="space-y-4 text-textSecondary text-sm md:text-base leading-relaxed">
              <p>
                With a strong academic background in Computer Science and Engineering, Rohini is a rare breed of digital marketing strategist. Instead of relying on creative guesswork or vanity metrics, she treats acquisition funnels like complex software architectures—data-backed, quantitatively tested, and built for high-throughput scaling.
              </p>
              <p>
                She founded <strong className="text-textPrimary font-bold">Rohini Digital Marketing Agency</strong> to bridge the gap between hard software engineering and hyper-growth client acquisition. Her unique approach has enabled clients to build ultra-stable, high-converting digital infrastructures that systematically generate predictable, compounding revenues.
              </p>
            </div>

            {/* Direct Line Details */}
            <div className="pt-2 border-t border-black/5 space-y-4">
              <span className="text-xs font-bold text-textPrimary uppercase tracking-widest block">Connect Directly With Rohini</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="tel:+917607716206" 
                  className="flex items-center space-x-3 p-4 rounded-xl bg-black/[0.02] border border-black/5 hover:border-primaryAccent/20 hover:bg-primaryAccent/5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-primaryAccent/10 flex items-center justify-center group-hover:bg-primaryAccent/20 transition-colors">
                    <Phone className="w-4 h-4 text-primaryAccent" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] text-textSecondary uppercase tracking-wider block font-semibold">Primary Contact</span>
                    <span className="text-xs font-bold text-textPrimary block">+91 7607 716 206</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-primaryAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
                </a>

                <a 
                  href="tel:+919305270378" 
                  className="flex items-center space-x-3 p-4 rounded-xl bg-black/[0.02] border border-black/5 hover:border-secondaryAccent/20 hover:bg-secondaryAccent/5 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondaryAccent/10 flex items-center justify-center group-hover:bg-secondaryAccent/20 transition-colors">
                    <Phone className="w-4 h-4 text-secondaryAccent" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] text-textSecondary uppercase tracking-wider block font-semibold">Secondary Line</span>
                    <span className="text-xs font-bold text-textPrimary block">+91 93052 70378</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-textSecondary group-hover:text-secondaryAccent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ml-auto" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
