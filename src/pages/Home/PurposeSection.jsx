import React from 'react';
import { SectionEyebrow } from '@/components/shared/SectionEyebrow';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function PurposeSection() {
  const purposeCards = [
    { icon: '🌱', label: 'Go Organic', bg: 'bg-green' },
    { icon: '💧', label: 'Conserve Water', bg: 'bg-olive' },
    { icon: '👨‍🌾', label: 'Empower Farmers', bg: 'bg-terracotta' },
    { icon: '💰', label: 'Maximize Income', bg: 'bg-brown' },
    { icon: '♻️', label: 'Reduce Wastage', bg: 'bg-green' },
  ];

  return (
    <section
      id="purpose"
      className="bg-cream py-16 px-6 md:py-20 md:px-16 lg:px-[72px]"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="Our Purpose" />

        <SectionHeading>
          Sustainable{' '}
          <em className="text-brown not-italic">
            Agriculture
          </em>
        </SectionHeading>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {purposeCards.map((card, index) => (
            <div
              key={index}
              className={`
                ${card.bg}
                group
                min-h-[140px]
                md:min-h-[160px]
                rounded-2xl
                px-4
                py-5
                flex
                flex-col
                items-center
                justify-center
                text-center
                cursor-pointer
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-3
                hover:scale-105
                hover:shadow-2xl
                hover:brightness-110
              `}
            >
              <span
                className="
                  text-[32px]
                  md:text-[40px]
                  mb-3
                  transition-transform
                  duration-500
                  group-hover:scale-125
                  group-hover:rotate-12
                "
              >
                {card.icon}
              </span>

              <h3
                className="
                  font-oswald
                  text-[12px]
                  md:text-[14px]
                  font-semibold
                  tracking-[0.1em]
                  uppercase
                  text-white
                  leading-snug
                "
              >
                {card.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}