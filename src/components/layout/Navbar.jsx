import logo from "@/assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="w-full px-8 h-20 flex items-center justify-between">

        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Seesaw Foods"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-10">

          <div className="hidden md:flex items-center gap-8">

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

      </div>
    </nav>
  );
};

export default Navbar;