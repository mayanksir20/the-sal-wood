import React, { useState } from "react";
0
 
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-[10px] bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex navbar items-center space-x-12">
          <h1 className="Salwoodlogo">
            <img
              src="/src/assets/Images/the-sal-wood-logo.png"
              alt="Logo"
              className="h-30 w-auto mx-auto"
            />
          </h1>

          {/* Menu (Large Screen) */}
          <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                Service
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Reservation Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-brandYellow text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
            Reservation
          </button>
        </div>
        {/* <div className="hidden lg:block">
  <button className=" text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition">
    Reservation
  </button>
</div> */}


        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 focus:outline-none"
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <div
        className={`lg:hidden bg-white shadow-md px-4 py-4 space-y-4 transform transition-all duration-300 ease-in-out
        ${
          open
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-4 max-h-0 overflow-hidden"
        }`}
      >
        <a href="#home" className="block text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#about" className="block text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#services" className="block text-gray-700 hover:text-blue-600">
          Service
        </a>
        <a href="#faq" className="block text-gray-700 hover:text-blue-600">
          FAQ
        </a>
        <a href="#contact" className="block text-gray-700 hover:text-blue-600">
          Contact
        </a>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Reservation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
