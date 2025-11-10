import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  const toggleMenu = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold text-gray-800">Zhafatharaz</h1>

        {/* Tombol Hamburger + Animasi */}
        <div className="relative w-8 h-8 md:hidden z-[60]">
          {/* Hamburger */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
            alt="menu"
            onClick={toggleMenu}
            className={`absolute inset-0 w-8 h-8 cursor-pointer transition-all duration-300 ${
              isOpen ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
            } ${animating && !isOpen ? "animate-spinClose" : ""}`}
          />

          {/* Close (X) */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="close"
            onClick={toggleMenu}
            className={`absolute inset-0 w-8 h-8 cursor-pointer transition-all duration-300 ${
              isOpen ? "opacity-100 scale-100 rotate-180" : "opacity-0 scale-75 -rotate-90"
            } ${animating && isOpen ? "animate-spinOpen" : ""}`}
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <li><button onClick={() => handleScroll("home")}>Home</button></li>
          <li><button onClick={() => handleScroll("projects")} >Projects</button></li>
          <li><button onClick={() => handleScroll("skills")} >Skills</button></li>
          <li><button onClick={() => handleScroll("social")}>Hubungi Saya</button></li>
        </ul>
      </div>

      {/* Overlay gelap */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden z-40`}
      ></div>

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-1/2 sm:w-1/2 flex flex-col items-center justify-center md:hidden z-50`}
      >
        <ul className="space-y-5 text-lg font-semibold text-gray-800 text-center">
          <li><button onClick={() => handleScroll("home")}>Home</button></li>
          <li><button onClick={() => handleScroll("projects")}>Projects</button></li>
          <li><button onClick={() => handleScroll("skills")}>Skills</button></li>
           <li><button onClick={() => handleScroll("social")}>Hubungi Saya</button></li>
        </ul>
      </div>
    </nav>
  );
}































