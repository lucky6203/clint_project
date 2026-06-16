import React from 'react';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function ServicesSection() {
  return (
    <section id="services" className="bg-forest py-16 px-6 md:py-20 md:px-16 lg:px-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="What We Do" color="text-lime" />
        <SectionHeading color="text-white">End-to-End <em className="text-lime not-italic"> <br/>Trade Solutions</em></SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3px]">
          {[
            { icon: <span className="font-oswald font-bold tracking-widest text-[36px] pt-2 block">IN</span>, title: <>EXPORT<br/>FACILITATION</>, chip: 'QUALITY · PACKING · CLEARANCE · SELLING', bg: 'bg-brown' },
            { icon: '🌍', title: <>GLOBAL<br/>SOURCING</>, chip: 'APPLES · KIWI · ORANGES · EXOTIC', bg: 'bg-green' },
            { icon: '🤝', title: <>BUYER–SELLER<br/>MATCHMAKING</>, chip: 'GCC · EU · SOUTHEAST ASIA · USA', bg: 'bg-olive' },
            { icon: '❄️', title: <>LOGISTICS &<br/>COLD CHAIN</>, chip: 'AIR · ROAD · SEA · END-TO-END', bg: 'bg-terracotta' }
          ].map((svc, i) => (
            <div key={i} className={`${svc.bg} p-8 md:p-[52px] transition-all hover:brightness-110 cursor-default flex flex-col justify-between min-h-[300px]`}>
              <div>
                <span className="text-[46px] block mb-6">{svc.icon}</span>
                <div className="font-oswald text-[clamp(28px,3vw,36px)] font-bold text-white uppercase tracking-wide mb-3.5 leading-tight">
                  {svc.title}
                </div>
              </div>
              <div>
                <span className="inline-block mt-4.5 bg-white/10 text-white/85 px-3.5 py-1.5 rounded-sm text-[10.5px] font-bold tracking-[0.1em] uppercase">
                  {svc.chip}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
