import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 text-white">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-purple-600">MyPortfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="flex flex-col items-center bg-white shadow-md md:hidden pb-4">
          <li><a href="#home" className="py-2 hover:text-indigo-600" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" className="py-2 hover:text-indigo-600" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" className="py-2 hover:text-indigo-600" onClick={() => setOpen(false)}>Contact</a></li>
          <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>

        </ul>
      )}
    </nav>
  );
}

export default Navbar;
