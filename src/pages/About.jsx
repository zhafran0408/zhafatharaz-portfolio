import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      index: "01",
      title: "Web Development",
      desc: "Membangun sistem web yang responsif dan fungsional dengan fokus pada performa serta skalabilitas kode.",
    },
    {
      index: "02",
      title: "UI/UX Design",
      desc: "Merancang antarmuka pengguna yang intuitif dengan pendekatan visual yang bersih, modern, dan sistemis.",
    },
    {
      index: "03",
      title: "Media Creative",
      desc: "Produksi konten visual dan digital branding untuk memperkuat identitas sebuah produk di platform digital.",
    },
  ];

  // Varian animasi container utama (Stagger effect)
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Judul utama reveal dari bawah ke atas
  const titleVariants = {
    hidden: { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  // Animasi deskripsi teks
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  // Animasi grid card (Sederhana, presisi, berurutan)
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-[#080808] py-36 px-6 md:px-20 text-white relative overflow-hidden border-b border-white/5 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* GRID ACCENT LINE INDICATION */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.01] pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-2/4 w-[1px] h-full bg-white/[0.01] pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.01] pointer-events-none hidden md:block" />

      {/* WATERMARK BACKGROUND TEXT */}
      <div className="absolute top-12 right-12 opacity-[0.01] pointer-events-none select-none font-mono text-right hidden sm:block">
        <p className="text-xs tracking-[0.5em] uppercase m-0">SYS_OVERVIEW</p>
        <p className="text-[12vw] font-black leading-none m-0">02</p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER BLOCK --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20 mb-28">
          <div className="w-full md:w-1/3">
            <motion.h2 
              className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-none"
              variants={titleVariants}
            >
              About<span className="text-[#8B5CF6] drop-shadow-[0_0_10px_#8B5CF6]">.</span>
            </motion.h2>
          </div>
          
          <div className="w-full md:w-2/3 md:pt-4">
            <motion.div variants={textVariants} className="max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-wide text-gray-200">
                Hi, Saya <span className="text-[#8B5CF6]">Zhafran Atha Razin Hadiny</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium tracking-wide">
                Seorang Developer dan Designer yang mendedikasikan diri untuk menjembatani kode pemrograman berkinerja tinggi dengan estetika visual fungsional. Saya berfokus menciptakan produk digital yang intuitif, clean, dan berdampak nyata.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- CORE SKILLS BOXED GRID (Brutalist Architecture Layout) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/5 mt-16 bg-[#0c0c0c]/30">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.02)" }}
              className="p-8 md:p-10 border-r border-b border-white/5 relative flex flex-col justify-between group transition-colors duration-300 min-h-[260px]"
            >
              {/* Top Accent Lines */}
              <div className="flex justify-between items-center mb-10">
                <span className="font-mono text-xs text-gray-700 group-hover:text-[#8B5CF6] transition-colors duration-300">
                  // {item.index}
                </span>
                <div className="w-1.5 h-1.5 bg-gray-800 group-hover:bg-[#8B5CF6] group-hover:shadow-[0_0_8px_#8B5CF6] transition-all rounded-none" />
              </div>

              {/* Teks Konten */}
              <div>
                <h4 className="text-lg font-black uppercase tracking-wider text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-500 group-hover:text-gray-400 transition-colors duration-300 text-xs md:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative corner line hover effect */}
              <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#8B5CF6] transition-all duration-300 group-hover:w-12 shadow-[0_0_8px_#8B5CF6]" />
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER OVERLAY --- */}
        <motion.div 
          className="mt-28 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 opacity-20 text-[8px] font-mono tracking-[0.4em]"
          variants={textVariants}
        >
          <span>ZHAFRAN ATHA RAZIN HADINY</span>
          <div className="flex items-center gap-4">
             <div className="w-10 h-[1px] bg-white" />
             <span>CAPABILITIES INDEX // 2026</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

