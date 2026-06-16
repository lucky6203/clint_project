import React from 'react';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function PurposeSection() {
  return (
    <section id="purpose" className="bg-cream py-16 px-6 md:py-20 md:px-16 lg:px-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="Our Purpose" />
        <SectionHeading>Sustainable <em className="text-brown not-italic">Agriculture</em></SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {[
            { icon: '🌱', label: 'Go Organic', bg: 'bg-green' },
            { icon: '💧', label: 'Conserve Water', bg: 'bg-olive' },
            { icon: '👨‍🌾', label: 'Empower Farmers', bg: 'bg-terracotta' },
            { icon: '💰', label: 'maximize Income', bg: 'bg-brown', mdSpan: true },
            { icon: '♻️', label: 'Reduce Wastage', bg: 'bg-green', mdSpan: true },
          ].map((pc, i) => (
            <div key={i} className={`${pc.bg} ${pc.mdSpan ? 'md:col-span-1 lg:col-span-1' : ''} px-7 py-10 pb-9 transition-all hover:-translate-y-2 hover:brightness-110 cursor-default`}>
              <span className="text-[40px] block mb-5">{pc.icon}</span>
              <div className="font-oswald text-[14px] font-semibold tracking-[0.1em] uppercase text-white leading-snug">
                {pc.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
