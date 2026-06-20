import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

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

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
await emailjs.sendForm(
  "service_nhq1n3p", // Service ID
  "template_6706ork", // Template ID
  form.current,
  "VFYoydkWMJCn8zekM" // Public Key
);

      alert("Message Sent Successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setLoading(false);
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