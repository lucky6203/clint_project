
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="w-full px-4 md:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Seesaw Foods"
            className="h-12 md:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">

          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-black font-bold hover:text-[#7ab648] transition"
            >
              About
            </a>

            <a
              href="#products"
              className="text-black font-bold hover:text-[#7ab648] transition"
            >
              Products
            </a>

            <a
              href="#logistics"
              className="text-black font-bold hover:text-[#7ab648] transition"
            >
              Logistics
            </a>

            <a
              href="#contact"
              className="text-black font-bold hover:text-[#7ab648] transition"
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-[#7ab648] hover:bg-[#689c3d] px-6 py-3 rounded-full text-white font-semibold transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-5">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-black"
          >
            About
          </a>

          <a
            href="#products"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-black"
          >
            Products
          </a>

          <a
            href="#logistics"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-black"
          >
            Logistics
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-semibold text-black"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#7ab648] text-center text-white py-3 rounded-full font-semibold"
          >
            Get In Touch
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

