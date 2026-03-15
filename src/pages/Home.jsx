import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect'; // Import library-nya

export default function Home() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const childVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="home" className="min-h-screen bg-[#F2F2F2] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Dekorasi Garis Halus */}
      <div className="absolute inset-0 hidden md:flex justify-between px-20 pointer-events-none">
        <div className="w-[1px] h-full bg-black/[0.03]"></div>
        <div className="w-[1px] h-full bg-black/[0.03]"></div>
      </div>

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="text-center z-10 w-full flex flex-col items-center"
      >
        <motion.div variants={childVars} className="mb-2">
          <span className="text-[9px] md:text-xs font-bold tracking-[0.4em] md:tracking-[0.8em] text-gray-400 uppercase">
            Welcome to the official
          </span>
        </motion.div>

        <motion.div variants={childVars} className="mb-4 md:mb-6">
          <h2 className="text-lg md:text-4xl font-light tracking-[0.2em] md:tracking-[0.4em] uppercase text-black/80">
            Portfolio <span className="font-black italic text-black text-xl md:text-4xl">Of</span>
          </h2>
        </motion.div>

        <motion.div variants={childVars} className="relative inline-block w-full max-w-[95vw] md:max-w-full">
          <h1 className="text-[14vw] md:text-[9vw] lg:text-9xl font-black tracking-tighter leading-[0.9] md:leading-none uppercase">
            ZHAFATHA<br className="md:hidden" />RAZ
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
            className="h-[4px] md:h-[6px] bg-black mt-4 mx-auto max-w-[60%] md:max-w-full"
          />
        </motion.div>

        {/* --- ANIMASI TYPING DI SINI --- */}
        <motion.div 
          variants={childVars}
          className="mt-12 md:mt-16 flex flex-col items-center gap-8"
        >
          <div className="h-12 md:h-16 text-gray-500 text-[10px] md:text-sm font-medium tracking-[0.2em] uppercase leading-loose">
            <Typewriter
              options={{
                strings: [
                  'Developing Clean Code (IT)',
                  'Designing Interfaces (UI/UX)',
                  'Capturing Moments (Creative Media)'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                wrapperClassName: "text-black font-bold italic", // Biar teks typing-nya beda sendiri
              }}
            />
            <p className="mt-2 text-gray-400">Crafting Digital Excellence</p>
          </div>
          
          <motion.a 
            href="#project"
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] md:bg-transparent md:text-black md:border md:border-black md:hover:bg-black md:hover:text-white transition-all shadow-xl md:shadow-none"
          >
            Explore Project
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Watermark Mobile */}
      <div className="absolute bottom-6 left-6 md:hidden">
        <span className="text-[8px] font-black tracking-[0.3em] uppercase opacity-20">
          ZARH • 2026
        </span>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-black opacity-30"></div>
      </motion.div>
    </section>
  );
}
