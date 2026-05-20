import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import Typewriter from 'typewriter-effect'; 
import Profil from "../assets/profil.webp";

export default function Home() {
  const photoRef = useRef(null);

  // Spring Animation untuk efek Tilt 3D yang responsif dan halus
  const springX = useSpring(0, { stiffness: 120, damping: 25 });
  const springY = useSpring(0, { stiffness: 120, damping: 25 });

  const handleMove = (e) => {
    if (!photoRef.current) return;
    
    const rect = photoRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;

    // Menghitung rotasi berdasarkan koordinat kursor
    springX.set((-y / (rect.height / 2)) * 12);
    springY.set((x / (rect.width / 2)) * 12);
  };

  const handleEnd = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <section id="home" className="min-h-screen bg-[#080808] flex items-center justify-center pt-32 pb-20 px-6 md:px-20 relative overflow-hidden text-white font-sans">
      
      {/* GRID BACKGROUND ACCENT (Ciri Khas Brutalist Tech) */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* RACHET BACKGROUND TEXT */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none z-0">
        <h1 className="text-[30vw] font-black uppercase tracking-tighter leading-none font-mono">ATHA</h1>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* --- KIRI: TYPOGRAPHY SECTIONS (Grid 7 Kolom) --- */}
          <div className="w-full md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            
            {/* Status Batch */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse shadow-[0_0_10px_#8B5CF6]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Status: Available For Work // 2026
              </span>
            </motion.div>

            {/* MAIN NAME DISPLAY */}
            <div className="mb-6 relative">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[12vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[6.5rem] font-black tracking-tight leading-[0.85] uppercase"
              >
                ZHAFRAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">ATHA</span>
                <span className="text-[#8B5CF6] drop-shadow-[0_0_15px_#8B5CF6]">.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-[10px] md:text-xs font-mono text-gray-600 mt-3 tracking-widest uppercase block"
              >
                [ Razin Hadiny — Creative Engineering System ]
              </motion.p>
            </div>

            {/* TYPEWRITER WRAPPER */}
            <div className="h-8 text-gray-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase font-mono mt-2">
              <Typewriter
                options={{
                  strings: ['// Web Development', '// UI/UX System Design', '// Media Interaction'],
                  autoStart: true, 
                  loop: true, 
                  delay: 40,
                  wrapperClassName: "text-[#8B5CF6] italic font-black",
                }}
              />
            </div>

            {/* DESCRIPTION SHORT SUMMARY */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 text-xs md:text-sm max-w-md leading-relaxed mt-4 font-medium tracking-wide"
            >
              Membangun produk digital dengan performa tinggi, arsitektur kode yang bersih, serta pendekatan visual asimetris yang berani.
            </motion.p>

            {/* CTA BUTTON WITH MATCHING CHIPPED LAYOUT */}
            <motion.a 
              href="#project"
              whileTap={{ scale: 0.98 }}
              whileHover={{ 
                boxShadow: "0 0 30px rgba(139,92,246,0.5)",
                backgroundColor: "#8B5CF6",
                color: "#fff"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 px-8 py-4 border border-[#8B5CF6] text-[#8B5CF6] text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 relative"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0% 30%)"
              }}
            >
              Explore Projects
            </motion.a>
          </div>

          {/* --- KANAN: INTERACTIVE HERO IMAGE (Grid 5 Kolom) --- */}
          <div className="w-full md:col-span-5 flex justify-center order-1 md:order-2">
            <motion.div
              ref={photoRef}
              onMouseMove={handleMove}
              onMouseLeave={handleEnd}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
              
              style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
              
              whileHover="active"
              whileTap="active"
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[4/5] bg-[#0E0E0E] overflow-hidden group shadow-[0_30px_60px_rgba(0,0,0,0.8)] cursor-grab active:cursor-grabbing border border-white/5"
              style={{
                clipPath: "polygon(0 0, 88% 0, 100% 10%, 100% 100%, 12% 100%, 0 90%)"
              }}
            >
              {/* Dynamic Inner Overlay Frame */}
              <motion.div 
                variants={{ active: { inset: "10px", borderColor: "rgba(139, 92, 246, 0.7)" } }}
                className="absolute inset-5 border border-white/10 z-20 transition-all duration-500 pointer-events-none" 
                style={{
                  clipPath: "polygon(0 0, 88% 0, 100% 10%, 100% 100%, 12% 100%, 0 90%)"
                }}
              />

              {/* FOTO UTAMA PROFIL */}
              <motion.img
                src={Profil}
                variants={{
                  active: { grayscale: 0, scale: 1.05, filter: "brightness(1)" }
                }}
                initial={{ grayscale: 1, filter: "brightness(0.5)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full object-cover pointer-events-none z-10 relative"
                alt="Zhafran Atha Razin Hadiny"
              />

              {/* Technical Grid Accent Overlay */}
              <div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-10 transition-opacity z-20 pointer-events-none bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Corner Tech Accents */}
              <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-[#8B5CF6] transition-colors z-20" />
              <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-[#8B5CF6] transition-colors z-20" />
              
              {/* Laser Scanline Grid System */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1.5s] ease-in-out pointer-events-none z-20" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* FOOTER SCROLL INDICATOR SYSTEM */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-[8px] font-mono tracking-[0.4em] text-gray-600 uppercase">Scroll Down</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#8B5CF6] to-transparent shadow-[0_0_8px_#8B5CF6]" />
      </div>
    </section>
  );
}
