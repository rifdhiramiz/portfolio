import { useState } from "react";
import logo from "../assets/RR_Logo.png"; // ✅ Import image from src/assets

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gold fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          {/* Show logo only on small/medium */}
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain block lg:hidden"
          />
          {/* Show name only on lg+ */}
          <h1 className="hidden lg:block text-2xl font-bold tracking-wide">
            Mohamed Ramiz Mohamed Rifdhi
          </h1>
        </div>

        {/* Desktop Menu (lg+) */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li><a href="#home" className="hover:text-white transition duration-300">Home</a></li>
          <li><a href="#about" className="hover:text-white transition duration-300">About</a></li>
          <li><a href="#work" className="hover:text-white transition duration-300">Work</a></li>
          <li><a href="#skills" className="hover:text-white transition duration-300">Skills</a></li>
          <li><a href="#services" className="hover:text-white transition duration-300">Services</a></li>
          <li><a href="#projects" className="hover:text-white transition duration-300">Projects</a></li>
          <li><a href="#qualifications" className="hover:text-white transition duration-300">Qualifications</a></li>
          <li><a href="#contact" className="hover:text-white transition duration-300">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Button (sm+md only) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (sm+md only) */}
      <div
        className={`lg:hidden bg-gradient-to-b from-black via-gray-900 to-gray-800 transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 text-center text-lg">
          <li><a href="#home" className="block hover:text-yellow-300 transition duration-300">Home</a></li>
          <li><a href="#about" className="block hover:text-yellow-300 transition duration-300">About</a></li>
          <li><a href="#work" className="block hover:text-yellow-300 transition duration-300">Work</a></li>
          <li><a href="#skills" className="block hover:text-yellow-300 transition duration-300">Skills</a></li>
          <li><a href="#services" className="block hover:text-yellow-300 transition duration-300">Services</a></li>
          <li><a href="#projects" className="block hover:text-yellow-300 transition duration-300">Projects</a></li>
          <li><a href="#qualifications" className="block hover:text-yellow-300 transition duration-300">Qualifications</a></li>
          <li><a href="#contact" className="block hover:text-yellow-300 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
