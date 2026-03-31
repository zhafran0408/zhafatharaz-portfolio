import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Project', href: '#project' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-20 py-8 flex justify-between items-center ${scrolled ? 'bg-[#080808]/80 backdrop-blur-xl py-5' : 'bg-transparent'}`}>
        <div className="z-[110]">
          <a href="#home" className="w-12 h-12 bg-[#8B5CF6] rounded-2xl flex items-center justify-center text-white font-black text-2xl italic shadow-[0_0_20px_rgba(139,92,246,0.4)]">Z</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="z-[110] flex flex-col gap-1.5 items-end">
          <div className={`h-[2px] transition-all duration-500 bg-white ${isOpen ? 'w-8 rotate-45 translate-y-[8px]' : 'w-8'}`}></div>
          <div className={`h-[2px] transition-all duration-500 bg-[#8B5CF6] ${isOpen ? 'opacity-0' : 'w-5'}`}></div>
          <div className={`h-[2px] transition-all duration-500 bg-white ${isOpen ? 'w-8 -rotate-45 -translate-y-[8px]' : 'w-8'}`}></div>
        </button>
      </nav>

      {/* AnimatePresence TANPA mode="wait" supaya backdrop & menu bisa jalan bareng */}
      <AnimatePresence>
        {isOpen && (
          <div key="mobile-menu-wrapper">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[80]"
            />
            
            {/* Menu Content */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
            >
              {menuItems.map((item, index) => (
                <a key={index} href={item.href} onClick={() => setIsOpen(false)} className="text-5xl font-black text-white hover:text-[#8B5CF6] my-4 uppercase tracking-tighter">
                  {item.name}
                </a>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
} 
