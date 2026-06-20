import React from "react";
import founderImg from "@/assets/images/founder-removebg-preview.png";
import bgImg from "@/assets/images/WhatsApp Image 2026-06-20 at 2.59.33 PM.jpeg";

export function FounderSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[650px]"
    >
      {/* Left Image Section */}
      <div 
        className="flex items-center justify-center p-6 md:p-8 lg:p-12 overflow-hidden relative bg-cover bg-center min-h-[400px] lg:min-h-auto"
        style={{ backgroundImage: `linear-gradient(rgba(45, 74, 45, 0.45), rgba(45, 74, 45, 0.45)), url(${bgImg})` }}
      >
        <img
          src={founderImg}
          alt="Founder"
          className="w-full max-w-[380px] h-auto object-contain transition-all duration-500 hover:scale-105 relative z-10"
        />
      </div>

      {/* Right Content Section */}
      <div className="bg-[#1F3A2C] flex flex-col justify-center p-8 md:p-12 lg:px-[68px] lg:py-[72px]">
        <div className="font-oswald text-[11px] tracking-[0.2em] uppercase text-[#DBE465] mb-4">
          Founder & CEO
        </div>

        <h2 className="font-oswald text-[48px] md:text-[64px] lg:text-[82px] font-bold text-white uppercase leading-[0.92] mb-7">
          Akshit
          <br />
          Kohli
        </h2>

        <blockquote className="border-l-4 border-[#DBE465] pl-5 text-[14px] md:text-[15px] italic text-white/70 leading-loose max-w-[450px] mb-10">
          “We're rebuilding how Indian farmers connect with global buyers -
          with dignity, transparency, and technology.”
        </blockquote>

        <a
          href="#contact"
          className="bg-[#DBE465] text-[#1F3A2C] px-9 py-3.5 rounded-sm font-oswald text-[15px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:bg-[#d8e480] hover:-translate-y-1 w-fit"
        >
          Work With Us →
        </a>
      </div>
    </section>
  );
}