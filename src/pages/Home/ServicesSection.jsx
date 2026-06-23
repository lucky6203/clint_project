import React from "react";
import { SectionEyebrow } from "@/components/shared/SectionEyebrow";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesSection() {
  const services = [
    {
      icon: (
        <span className="font-oswald font-bold tracking-widest text-[28px] md:text-[36px] pt-1 md:pt-2 block">
          IN
        </span>
      ),
      title: (
        <>
          EXPORT
          <br />
          FACILITATION
        </>
      ),
      chip: "QUALITY · PACKING · CLEARANCE · SELLING",
      bg: "bg-brown",
    },
    {
      icon: "🌍",
      title: (
        <>
          GLOBAL
          <br />
          SOURCING
        </>
      ),
      chip: "APPLES · KIWI · ORANGES · EXOTIC",
      bg: "bg-green",
    },
    {
      icon: "🤝",
      title: (
        <>
          BUYER–SELLER
          <br />
          MATCHMAKING
        </>
      ),
      chip: "GCC · EU · SOUTHEAST ASIA · USA",
      bg: "bg-olive",
    },
    {
      icon: "❄️",
      title: (
        <>
          LOGISTICS &
          <br />
          COLD CHAIN
        </>
      ),
      chip: "AIR · ROAD · SEA · END-TO-END",
      bg: "bg-terracotta",
    },
  ];

  return (
    <section
      id="services"
      className="bg-forest py-16 px-6 md:py-20 md:px-16 lg:px-[72px]"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionEyebrow text="What We Do" color="text-lime" />

        <SectionHeading color="text-white">
          End-to-End{" "}
          <em className="text-lime not-italic">
            <br />
            Trade Solutions
          </em>
        </SectionHeading>

        {/* Services Grid */}
<div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
            {services.map((svc, i) => (
            <div
              key={i}
              className={`
                ${svc.bg}
                group
                p-5 md:p-10 lg:p-12
                flex flex-col justify-between
                min-h-[180px] md:min-h-[240px]
                rounded-xl
                cursor-pointer
                transition-all duration-500 ease-out
                hover:-translate-y-3
                hover:scale-[1.02]
                hover:shadow-2xl
                hover:brightness-110
                animate-fade-up
              `}
              style={{
                animationDelay: `${i * 150}ms`,
              }}
            >
              <div>
                <span className="text-[32px] md:text-[46px] block mb-3 md:mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {svc.icon}
                </span>

                <div className="font-oswald text-[22px] md:text-[32px] font-bold text-white uppercase tracking-wide mb-2 md:mb-3.5 leading-tight transition-all duration-300 group-hover:translate-x-2">
                  {svc.title}
                </div>
              </div>

              <div>
                <span className="inline-block mt-2 md:mt-4 bg-white/10 text-white/85 px-3 py-1 rounded-sm text-[9px] md:text-[10.5px] font-bold tracking-[0.1em] uppercase transition-all duration-300 group-hover:bg-white/20">
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