
import React from "react";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Mumbai, India",
    },
    {
      icon: <MdEmail />,
      text: "contact@seesawfoods.in",
    },
    {
      icon: <FaInstagram />,
      text: "@seesaw_foods",
    },
  ];

  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]"
    >
      {/* Left Side */}
      <div className="bg-[#B66A50] p-8 md:p-16 lg:py-[72px] lg:px-[64px] flex flex-col justify-between lg:min-h-[600px]">

        <h2 className="font-oswald text-[clamp(48px,7.5vw,92px)] font-bold text-white uppercase leading-[0.92]">
          Let's
          <br />
          Build
          <br />
          Together.
        </h2>

        <div className="flex flex-col gap-6 mt-12">

          {contactInfo.map((row, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-white"
            >
              <span className="text-2xl text-[#DBE465]">
                {row.icon}
              </span>

              <span className="text-lg font-medium">
                {row.text}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Right Side Form */}
      <div className="bg-[#1F3A2C] p-8 md:p-16 lg:py-[72px] lg:px-[64px]">

        <h3 className="font-oswald text-[18px] font-bold text-[#DBE465] uppercase tracking-[0.12em] mb-8">
          Send a Message
        </h3>

        <form onSubmit={(e) => e.preventDefault()}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

            <input
              type="text"
              placeholder="Company"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

          </div>

          <select
            defaultValue=""
            className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] mb-4"
          >
            <option value="" disabled>
              I am a...
            </option>

            <option className="bg-[#1F3A2C]">
              Buyer / Importer
            </option>

            <option className="bg-[#1F3A2C]">
              Farmer / Grower
            </option>

            <option className="bg-[#1F3A2C]">
              Logistics Partner
            </option>

            <option className="bg-[#1F3A2C]">
              Investor
            </option>

            <option className="bg-[#1F3A2C]">
              Other
            </option>
          </select>

          <textarea
            placeholder="Your Message..."
            className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30 min-h-[120px] mb-6"
          />

          <button
            type="submit"
            className="bg-[#DBE465] text-[#1F3A2C] px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#d0db54] transition-all duration-300"
          >
            Send
          </button>

        </form>

      </div>
    </section>
  );
}

