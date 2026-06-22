import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('intro'); // intro -> scanning

  useEffect(() => {
    // Fase 1: Pengenalan Z-04 (Teks ngetik manual) selama 2.5 detik
    const introTimer = setTimeout(() => {
      setPhase('scanning');
    }, 2500);

    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'scanning') return;

    // Fase 2: Scanning Loading ala Game
    const loadingInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }

        let chunk = 0;
        if (oldProgress < 40) {
          chunk = Math.floor(Math.random() * 20) + 15;
        } else if (oldProgress >= 40 && oldProgress < 75) {
          chunk = Math.floor(Math.random() * 8) + 3;
        } else {
          chunk = Math.floor(Math.random() * 30) + 15;
        }

        return Math.min(oldProgress + chunk, 100);
      });
    }, 90);

    return () => clearInterval(loadingInterval);
  }, [phase, onComplete]);

  // Variasi animasi untuk teks ketik
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-[#050505] z-[999] flex flex-col items-center justify-center font-mono text-white p-6 select-none"
      exit={{ 
        y: "-100vh", 
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <AnimatePresence mode="wait">
        {phase === 'intro' ? (
          /* --- FASE 1: PENGENALAN Z-04 --- */
          <motion.div
            key="intro-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center text-center max-w-sm gap-2"
          >
            <motion.p variants={textVariants} className="text-[#8B5CF6] text-[10px] tracking-[0.4em] uppercase font-bold">
              [ ACCESS GRANTED ]
            </motion.p>
            <motion.h1 variants={textVariants} className="text-xl font-black tracking-[0.2em] uppercase my-2">
              HELLO. I AM Z-04.
            </motion.h1>
            <motion.p variants={textVariants} className="text-gray-500 text-[10px] tracking-widest leading-relaxed uppercase">
              Kreator saya (Zhafran) bergerak di bidang Photo, Video, UI/UX, dan Frontend Coding.
            </motion.p>
          </motion.div>
        ) : (
          /* --- FASE 2: SCANNING UTAMA --- */
          <motion.div
            key="scanning-core"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-8 relative z-10"
          >
            {/* Mata Inti Avatar Robot Menyalakan Energi */}
            <motion.div 
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 0 30px rgba(139,92,246,0.2)", 
                  "0 0 50px rgba(139,92,246,0.5)", 
                  "0 0 30px rgba(139,92,246,0.2)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 rounded-full border-2 border-[#8B5CF6] flex items-center justify-center bg-black"
            >
              <div className="w-3 h-3 bg-[#8B5CF6] rounded-full shadow-[0_0_15px_#8B5CF6] animate-pulse" />
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <div className="text-[10px] tracking-[0.5em] text-gray-400 uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-ping" />
                SCANNING SYSTEM... <span className="text-white font-bold">{progress}%</span>
              </div>
              
              <div className="w-28 h-[2px] bg-white/5 border border-white/10 rounded-full overflow-hidden relative">
                <div 
                  className="absolute top-0 bottom-0 left-0 bg-[#8B5CF6] shadow-[0_0_12px_#8B5CF6] transition-all duration-150 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
