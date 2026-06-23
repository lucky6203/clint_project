import React from "react";
import founderImg from "@/assets/images/ceo.jpeg";

export function FounderSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 items-stretch"
    >
      {/* Left Image Section */}
      <div className="h-full">
        <img
          src={founderImg}
          alt="Founder"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex flex-col justify-center bg-[#1F3A2C] px-8 py-12 md:px-12 md:py-16 lg:px-[68px] lg:py-[72px]">
        <div className="mb-4 font-oswald text-[11px] uppercase tracking-[0.2em] text-[#DBE465]">
          Founder & CEO
        </div>

        <h2 className="mb-7 font-oswald text-[48px] font-bold uppercase leading-[0.92] text-white md:text-[64px] lg:text-[82px]">
          Akshit
          <br />
          Kohli
        </h2>

        <blockquote className="mb-10 max-w-[500px] border-l-4 border-[#DBE465] pl-5 text-[14px] italic leading-loose text-white/70 md:text-[15px]">
          “We're rebuilding how Indian farmers connect with global buyers -
          with dignity, transparency, and technology.”
        </blockquote>

        <a
          href="#contact"
          className="w-fit rounded-sm bg-[#DBE465] px-9 py-3.5 font-oswald text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1F3A2C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8e480]"
        >
          Work With Us →
        </a>
      </div>
    </section>
  );
}