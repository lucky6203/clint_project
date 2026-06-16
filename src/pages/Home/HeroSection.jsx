import React from 'react';
import AnimatedCounter from "@/components/shared/AnimatedCounter";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-[55%_45%] bg-[#2d4a2d] overflow-hidden">
      {/* LEFT */}
      <div className="flex flex-col justify-center py-[100px] px-6 lg:py-[80px] lg:px-[64px] lg:pl-[72px]">

        <h1 className="font-oswald text-[clamp(60px,8vw,110px)] font-bold text-white leading-[0.85] uppercase tracking-wide mb-8">
          Indian<br />Harvests<br />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-[#dbe465] -skew-x-6 -z-10 translate-y-[15%] h-[90%] w-[105%] -left-[2.5%]"></span>
            <span className="text-lime relative z-10 px-1">To The</span>
          </span>
          <br />World.
        </h1>
        <p className="text-[14px] leading-relaxed text-white/70 max-w-[420px] mb-12">
          Trusted sourcing partner for premium Indian fruits & vegetables — verified growers, global buyers, zero surprises.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="#services" className="bg-[#dbe465] text-[#2d4a2d] px-8 py-3.5 rounded-sm font-bold text-[13px] tracking-[0.1em] uppercase transition hover:bg-white hover:-translate-y-0.5 inline-block">
            Our Services
          </a>
          <a href="#contact" className="text-white/80 border border-white/30 px-8 py-3.5 rounded-sm font-bold text-[13px] tracking-[0.1em] uppercase transition hover:bg-white/10 hover:text-white inline-block">
            Partner With Us
          </a>
        </div>
      </div>

      {/* RIGHT */}
<div className="grid grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 bg-[#4a6338] border-t border-white/10 lg:border-t-0">
  <AnimatedCounter
    target={1}
    suffix="K+"
    label="Indian Growers"
  />

  <AnimatedCounter
    target={60}
    suffix="%"
    label="Farmer Coverage"
  />

  <AnimatedCounter
    target={50}
    suffix="+"
    label="Micro Clusters"
  />

  <AnimatedCounter
    target={15}
    suffix="+"
    label="Collection Centres"
  />

  <AnimatedCounter
    target={4}
    suffix="+"
    label="Shipping Lines"
  />

  <AnimatedCounter
    target="GCC / South East Asia"
    label="Primary Market"
  />

</div>
    </section>
  );
}
