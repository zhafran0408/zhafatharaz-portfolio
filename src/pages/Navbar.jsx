import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu Items (Pastikan href ini sama dengan ID di section kamu)
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#project' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-20 py-6 flex justify-between items-center ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
        }`}
      >
        {/* Logo Box */}
        <div className="flex items-center gap-3 z-[110]">
          <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-black text-[10px] italic">
            ZH
          </div>
          <span className="font-black text-xs uppercase tracking-[0.2em] hidden sm:block">
            Zhafatharaz
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col gap-1.5 items-end"
        >
          <div className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></div>
          <div className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`}></div>
          <div className={`h-[2px] bg-black transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-8'}`}></div>
        </button>
      </nav>

      {/* Mobile Sidebar (Kanan) */}
      <div className={`fixed top-0 right-0 h-full w-[75%] bg-white z-[90] shadow-2xl flex flex-col pt-32 px-10 gap-8 transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-black border-b border-gray-100 pb-2"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Background Overlay Mobile */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] md:hidden"
        />
      )}
    </>
  );
}
