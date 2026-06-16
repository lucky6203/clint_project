import React from "react";
import founderImg from "@/assets/images/founder-removebg-preview.png";

export function FounderSection() {
  return (
    <section
      id="founder"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[540px] bg-[#1F3A2C]"
    >
      {/* Left Image */}
     <div className="flex items-center justify-center p-8 lg:p-12 bg-[#2d4a2d]">
  <div className="w-full max-w-md h-[550px] rounded-3xl overflow-hidden ">

    <img
      src={founderImg}
      alt="Founder"
      className="w-full h-full object-cover hover:scale-105 transition duration-500"
    />

  </div>
</div>

      {/* Right Content */}
      <div className="p-8 md:p-16 lg:py-[72px] lg:px-[68px] flex flex-col justify-center">
        <div className="font-oswald text-[10.5px] tracking-[0.2em] uppercase text-[#DBE465] mb-4">
          Founder & Managing Director
        </div>

        <h2 className="font-oswald text-[clamp(48px,6.5vw,82px)] font-bold text-white uppercase leading-[0.92] mb-7">
          Akshit
          <br />
          Kohli
        </h2>

        <blockquote className="border-l-4 border-[#DBE465] pl-5 text-[14px] italic text-white/70 leading-loose max-w-[430px] mb-10">
          “We're rebuilding how Indian farmers connect with
          global buyers — with dignity, transparency, and
          technology.”
        </blockquote>

        <a
          href="#contact"
          className="bg-[#DBE465] text-[#1F3A2C] px-9 py-3.5 rounded-sm font-oswald text-[15px] font-semibold tracking-[0.08em] uppercase transition hover:bg-[#d8e480] hover:-translate-y-0.5 w-fit"
        >
          Work With Us →
        </a>
      </div>
    </section>
  );
}