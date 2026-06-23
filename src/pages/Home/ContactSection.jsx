import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { appConfig } from "@/config/app";

export function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      text: "Mumbai, India",
      link: "https://maps.google.com/?q=Mumbai, India",
    },
    {
      icon: <MdEmail />,
      text: "contact@seesawfoods.in",
      link: "mailto:contact@seesawfoods.in",
    },
    {
      icon: <FaInstagram />,
      text: "@seesaw_foods",
      link: "https://instagram.com/seesaw_foods",
    },
    // {
    //   icon: <FaWhatsapp />,
    //   text: "+91 99307 77555",
    //   link: `https://wa.me/${appConfig.whatsappNumber}?text=${encodeURIComponent(appConfig.whatsappMessage)}`,
    // },
  ];


  const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_gi0i9qq",
      "template_6706ork",
      form.current,
      "VFYoydkWMJCn8zekM"
    );

    // Google Ads Conversion Tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17834778567/27Y6CKDprcMcEMe_pLhC",
        value: 1.0,
        currency: "INR",
      });
    }

    alert("Message Sent Successfully!");
    form.current.reset();
  } catch (error) {
    console.error("Email Error:", error);
    alert("Failed to send message.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact"
      className="grid grid-cols-1 lg:grid-cols-2"
    >
      {/* Left Side */}
      <div className="bg-[#B66A50] flex flex-col justify-between p-8 md:p-16 lg:px-[64px] lg:py-[72px] min-h-[650px]">
        <h2 className="font-oswald text-[clamp(48px,7vw,92px)] font-bold text-white uppercase leading-[0.92]">
          Let's
          <br />
          Build
          <br />
          Together.
        </h2>

        <div className="flex flex-col gap-6 mt-12">
          {contactInfo.map((row, index) => (
            <a
              key={index}
              href={row.link}
              target={row.link.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-[#DBE465] transition-all duration-300 group w-fit"
            >
              <span className="text-2xl text-[#DBE465] group-hover:scale-110 transition-transform duration-300">
                {row.icon}
              </span>

              <span className="text-lg font-medium">
                {row.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[#1F3A2C] p-8 md:p-16 lg:px-[64px] lg:py-[72px] flex flex-col justify-center min-h-[650px]">
        <h3 className="font-oswald text-[18px] font-bold text-[#DBE465] uppercase tracking-[0.12em] mb-8">
          Send a Message
        </h3>

        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30"
            />
          </div>

          <select
            name="role"
            defaultValue=""
            className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] mb-4"
          >
            <option value="" disabled>
              I am a...
            </option>
            <option className="bg-[#1F3A2C]">Buyer / Importer</option>
            <option className="bg-[#1F3A2C]">Exporter / Farmer</option>
            <option className="bg-[#1F3A2C]">Logistics Partner</option>
            <option className="bg-[#1F3A2C]">Investor</option>
            <option className="bg-[#1F3A2C]">Other</option>
          </select>

          <textarea
            name="message"
            required
            placeholder="Your Message..."
            className="bg-transparent border-b border-white/20 text-white py-3 w-full outline-none focus:border-[#DBE465] placeholder:text-white/30 min-h-[120px] mb-6"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#DBE465] text-[#1F3A2C] px-10 py-4 rounded-lg font-bold uppercase hover:bg-[#d0db54] transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send "}
          </button>
        </form>
      </div>
    </section>
  );
}