import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Seesaw Foods"
            className="w-full h-20 object-contain p-1"
          />
        </div>

        {/* Copyright + Developer */}
        <div className="text-center">
          <p className="text-black/50 text-sm">
            © 2026 Seesaw Foods. All Rights Reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-black/60 hover:text-[#7ab648] transition"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-black/60 hover:text-[#7ab648] transition"
          >
            Terms
          </a>

          <a
            href="#contact"
            className="text-black/60 hover:text-[#7ab648] transition"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}