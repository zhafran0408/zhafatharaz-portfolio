import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHome, 
  FiUser, 
  FiFolder, 
  FiCpu, 
  FiAward, 
  FiActivity, 
  FiMail, 
  FiGithub, 
  FiInstagram, 
  FiLinkedin 
} from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Efek merubah background navbar saat di-scroll ke bawah
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DAFTAR NAVIGASI UTAMA ---
  const menuItems = [
    { name: 'Home', href: '#home', icon: <FiHome /> },
    { name: 'About', href: '#about', icon: <FiUser /> },
    { name: 'Projects', href: '#projects', icon: <FiFolder /> },
    { name: 'Skills', href: '#skills', icon: <FiCpu /> },
    { name: 'Achievement', href: '#achievement', icon: <FiAward /> },
    { name: 'Journey', href: '#journey', icon: <FiActivity /> },
    { name: 'Contact', href: '#contact', icon: <FiMail /> },
  ];

  // Variasi Animasi Framer Motion untuk Mobile Menu Overlay
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { x: 15, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-20 flex justify-between items-center ${
          scrolled || isOpen 
            ? 'bg-[#080808]/90 backdrop-blur-md py-3 md:py-4 border-b border-white/5' 
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
      >
        {/* --- LOGO GEOMETRIS ASIMETRIS "Z" --- */}
        <div className="z-[110]">
          <a 
            href="#home" 
            className="w-10 h-10 md:w-11 md:h-11 bg-[#8B5CF6] text-white font-black text-lg md:text-xl italic flex items-center justify-center relative shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300 group"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%, 0% 20%)"
            }}
          >
            <span className="absolute top-1 left-2 text-[6px] md:text-[7px] opacity-40 not-italic tracking-tighter font-mono">04</span>
            <span className="relative z-10 mr-0.5">Z</span>
            <span className="absolute bottom-1 right-2 text-[6px] md:text-[7px] opacity-40 not-italic tracking-tighter font-mono">08</span>
          </a>
        </div>

        {/* --- DESKTOP NAVIGATION (Horizontal) --- */}
        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors relative py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8B5CF6] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#8B5CF6]" />
            </a>
          ))}
        </nav>

        {/* --- HAMBURGER BUTTON (Mobile Only) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="z-[110] flex flex-col gap-1.5 items-end md:hidden p-2 group"
        >
          <div className={`h-[2px] bg-white transition-all duration-500 ${isOpen ? 'w-7 -rotate-45 translate-y-[8px]' : 'w-7 group-hover:w-5'}`}></div>
          <div className={`h-[2px] bg-[#8B5CF6] transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-4'}`}></div>
          <div className={`h-[2px] bg-white transition-all duration-500 ${isOpen ? 'w-7 rotate-45 -translate-y-[8px]' : 'w-7 group-hover:w-5'}`}></div>
        </button>
      </header>

      {/* --- MOBILE OVERLAY MENU (Skala Rapi & Tidak Meluber) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#080808] z-[90] flex flex-col justify-between md:hidden p-6 pt-24 pb-4"
          >
            {/* Area Menu Tengah */}
            <div className="flex flex-col justify-center items-end w-full max-w-sm ml-auto my-auto gap-5">
              
              <motion.nav 
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-end w-full"
              >
                {menuItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="my-1 w-full flex justify-end">
                    <a 
                      href={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className="text-xl font-black text-gray-400 hover:text-[#8B5CF6] transition-all uppercase tracking-tight hover:italic py-0.5 flex items-center gap-3 text-right justify-end group"
                    >
                      {/* Penomoran Monospace Samping */}
                      <span className="text-[9px] opacity-0 group-hover:opacity-100 transition-all tracking-widest text-gray-600 font-mono">0{index + 1}</span>
                      
                      {/* Judul Menu */}
                      <span>{item.name}</span>
                      
                      {/* Wadah Ikon Asimetris Poligon */}
                      <span 
                        className="w-8 h-8 bg-white/[0.02] text-gray-500 border border-white/10 text-base flex items-center justify-center transition-all duration-300 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-105"
                        style={{
                          clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)"
                        }}
                      >
                        {item.icon}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Info Tambahan & Tautan Sosial Media */}
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col items-end gap-3 border-t border-white/5 pt-4 w-full text-right"
              >
                <div>
                  <p className="text-[7px] font-bold text-gray-600 uppercase tracking-[0.4em] mb-0.5">Project Directory</p>
                  <p className="text-[9px] font-black text-white uppercase tracking-widest italic">Atha / 2026 Edition</p>
                </div>
                <div className="flex gap-4 text-lg text-gray-500">
                  <a href="https://github.com/zhafran0408" target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors"><FiGithub /></a>
                  <a href="https://instagram.com/zhafatharaz" target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors"><FiInstagram /></a>
                  <a href="https://www.linkedin.com/in/zhafran-atha-razin-hadiny-93315b385/" target="_blank" rel="noreferrer" className="hover:text-[#8B5CF6] transition-colors"><FiLinkedin /></a>
                </div>
              </motion.div>

            </div>

            {/* Label Footer Overlay */}
            <div className="w-full text-right opacity-10 text-[6px] font-black tracking-[0.5em] text-white">
              TERMINAL-v2.0 // NAVIGATION
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </> 
  );
}
