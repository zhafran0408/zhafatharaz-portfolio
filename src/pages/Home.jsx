import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import Typewriter from 'typewriter-effect'; 
import Profil from "../assets/profil.webp";

export default function Home() {
  const photoRef = useRef(null);

  // Spring Animation untuk efek Tilt 3D
  const springX = useSpring(0, { stiffness: 150, damping: 20 });
  const springY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMove = (e) => {
    if (!photoRef.current) return;
    
    const rect = photoRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    springX.set((-y / (rect.height / 2)) * 15);
    springY.set((x / (rect.width / 2)) * 15);
  };

  const handleEnd = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <section id="home" className="min-h-screen bg-[#080808] flex items-center justify-center py-20 px-6 md:px-20 relative overflow-hidden text-white font-sans">
      
      {/* BACKGROUND TEXT - ZHAF */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none">ZHAF</h1>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* --- LEFT: TEXT --- */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs font-black tracking-[0.5em] text-[#8B5CF6] uppercase mb-6"
            >
              Portfolio 2026
            </motion.span>

            {/* MAIN NAME TYPOGRAPHY */}
            <div className="mb-8">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-[15vw] md:text-[8vw] lg:text-[7.5rem] font-black tracking-tighter leading-[0.8] uppercase"
              >
                ZHAFRAN <br /> ATHA<span className="text-[#8B5CF6]">.</span>
              </motion.h1>

              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-2xl lg:text-3xl font-bold tracking-[0.4em] text-gray-500 uppercase mt-4 block"
              >
                Razin <span className="italic text-[#8B5CF6]">Hadiny</span>
              </motion.h2>
            </div>

            {/* TYPEWRITER */}
            <div className="h-12 text-gray-400 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
              <Typewriter
                options={{
                  strings: ['Web Development', 'UI/UX Design', 'Media Creative'],
                  autoStart: true, 
                  loop: true, 
                  delay: 50,
                  wrapperClassName: "text-white italic",
                }}
              />
            </div>

            {/* CTA BUTTON */}
            <motion.a 
              href="#project"
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                backgroundColor: "#8B5CF6", 
                color: "#fff", 
                boxShadow: "0 0 30px rgba(139,92,246,0.4)" 
              }}
              className="mt-10 px-8 py-4 border border-[#8B5CF6] text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300"
            >
              View Projects
            </motion.a>
          </div>

          {/* --- RIGHT: INTERACTIVE PHOTO --- */}
          <div className="w-full md:w-2/5 flex justify-center order-1 md:order-2">
            <motion.div
              ref={photoRef}
              onMouseMove={handleMove}
              onMouseLeave={handleEnd}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              
              style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
              
              whileHover="active"
              whileTap="active"
              className="relative w-full max-w-[300px] md:max-w-[400px] aspect-[4/5] bg-[#0A0A0A] overflow-hidden rounded-sm border border-white/5 group shadow-2xl cursor-grab active:cursor-grabbing"
            >
              {/* Overlay Frame */}
              <motion.div 
                variants={{ active: { inset: "8px", borderColor: "rgba(139, 92, 246, 0.6)" } }}
                className="absolute inset-4 border border-[#8B5CF6]/20 z-10 transition-all duration-500 pointer-events-none" 
              />

              {/* FOTO UTAMA */}
              <motion.img
                src={Profil}
                variants={{
                  active: { grayscale: 0, brightness: 1, scale: 1.1 }
                }}
                initial={{ grayscale: 1, brightness: 0.3 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-white/10 group-hover:border-[#8B5CF6] transition-all" />
              <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/10 group-hover:border-[#8B5CF6] transition-all" />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator Line */}
      <div className="absolute bottom-0 hidden md:block w-[1px] h-24 bg-gradient-to-b from-[#8B5CF6] to-transparent shadow-[0_0_10px_#8B5CF6]" />
    </section>
  );
}
