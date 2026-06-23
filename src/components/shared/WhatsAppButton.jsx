import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { appConfig } from "@/config/app";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const number = 919819890393;
  const message = "Welcome to seesaw Foodies! How can we help you ?";
  const waLink = `https://wa.me/${number}?text=${message}`;

  return (
    <div
      className="fixed bottom-6 right-6 z-[999] flex items-center gap-3 select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip text bubble */}
      <div
        className={`bg-[#1F3A2C] text-[#FAFAFA] text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-[#DBE465]/20 transition-all duration-300 transform ${
          hovered
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-4 scale-95 pointer-events-none"
        }`}
      >
        Chat with us
      </div>

      {/* Button link */}
<a
  href={waLink}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17834778567/27Y6CKDprcMcEMe_pLhC",
        value: 1.0,
        currency: "INR",
      });
    }
  }}
  className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95 animate-whatsapp-pulse cursor-pointer"
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp className="text-3xl" />
</a>
    </div>
  );
}
