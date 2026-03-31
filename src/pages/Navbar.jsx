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
         
          scrolled ? 'bg-[#080808]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'
        }`}
      >
        {/* Logo Box */}
        <div className="flex items-center gap-3 z-[110]">
      
          <div className="w-8 h-8 bg-[#0066FF] flex items-center justify-center text-white font-black text-[10px] italic shadow-[0_0_15px_#0066FF]">
            ZH
          </div>
          <span className={`font-black text-xs uppercase tracking-[0.2em] hidden sm:block transition-colors duration-500 ${
            scrolled ? 'text-white' : 'text-black' 
          }`}>
            Zhafatharaz
          </span>
        </div>

      
        <div className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                scrolled ? 'text-gray-400 hover:text-[#0066FF]' : 'text-gray-500 hover:text-black'
              }`}
            >
              {item.name}
             
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#0066FF] transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#0066FF]"></span>
            </a>
          ))}
        </div>

        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col gap-1.5 items-end"
        >
       
          <div className={`h-[2px] transition-all duration-300 ${isOpen ? 'bg-white w-8 rotate-45 translate-y-[8px]' : (scrolled ? 'bg-white w-8' : 'bg-black w-8')}`}></div>
          <div className={`h-[2px] transition-all duration-300 ${isOpen ? 'opacity-0' : (scrolled ? 'bg-white w-5' : 'bg-black w-5')}`}></div>
          <div className={`h-[2px] transition-all duration-300 ${isOpen ? 'bg-white w-8 -rotate-45 -translate-y-[8px]' : (scrolled ? 'bg-white w-8' : 'bg-black w-8')}`}></div>
        </button>
      </nav>

   
      <div className={`fixed top-0 right-0 h-full w-[75%] bg-[#0A0A0A] z-[90] shadow-2xl flex flex-col pt-32 px-10 gap-8 transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {menuItems.map((item) => (
          <a 
            key={item.name}
            href={item.href} 
            onClick={() => setIsOpen(false)}
            className="text-2xl font-black uppercase tracking-widest text-white border-b border-white/5 pb-4 hover:text-[#0066FF] transition-colors"
          >
            {item.name}
          </a>
        ))}
      
        <p className="mt-auto mb-10 text-[8px] text-gray-600 uppercase tracking-[0.5em]">
          Zhafatharaz • 2026
        </p>
      </div>

     
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] md:hidden"
        />
      )}
    </>
  );
}
