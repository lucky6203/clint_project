import React from 'react';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function LogisticsSection() {
  return (
    <section id="logistics" className="bg-brown py-16 px-6 md:py-20 md:px-16 lg:px-[72px]">
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="Global Reach" color="text-white/40" />
        <SectionHeading color="text-white">Logistics <em className="text-lime not-italic">Capabilities</em></SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-[52px] items-start">
          <div className="flex flex-col gap-[3px]">
            {[
              { icon: '✈️', mode: 'Air Freight', dest: 'India → Middle East · USA · EU' },
              { icon: '🚚', mode: 'Road (GCC) - through our partners ', dest: 'Dubai → Saudi  · Qatar · Oman' },
              { icon: '🚢', mode: 'Sea Freight', dest: 'India → Middle East · EU · Southeast Asia · USA' }
            ].map(route => (
              <div key={route.mode} className="flex flex-col sm:flex-row items-center sm:text-left text-center gap-4 sm:gap-6 p-7 sm:px-9 bg-black/20 transition-colors hover:bg-black/35">
                <span className="text-[32px] shrink-0">{route.icon}</span>
                <div>
                  <div className="font-oswald text-[11px] font-bold tracking-[0.13em] text-white/40 uppercase mb-1">{route.mode}</div>
                  <div className="font-oswald text-[19px] font-bold text-white">{route.dest}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <div className="font-oswald text-[10px] tracking-[0.22em] uppercase text-white/40 mb-4">Shipping partners - Direct / Indirect</div>
            <div className="flex flex-col gap-2.5">
              {['Maersk', 'CMA CGM', 'Hapag-Lloyd'].map(partner => (
                <div key={partner} className="bg-white/10 text-white px-6 py-4 font-oswald text-[18px] font-semibold tracking-wide border-l-4 border-lime transition-colors hover:bg-white/20 cursor-default">
                  {partner === 'Hapag-Lloyd' ? <>Hapag-Lloyd</> : partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
