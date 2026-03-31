import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    {
      title: "Web Development",
      desc: "Membangun sistem web yang responsif dan fungsional dengan fokus pada performa serta skalabilitas kode.",
    },
    {
      title: "UI/UX Design",
      desc: "Merancang antarmuka pengguna yang intuitif dengan pendekatan visual yang bersih dan modern.",
    },
    {
      title: "Media Creative",
      desc: "Produksi konten visual dan digital branding untuk memperkuat identitas sebuah brand di platform digital.",
    },
  ];

  // Varian animasi untuk section utama
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Elemen anak muncul bergantian
      },
    },
  };

  // Varian animasi untuk teks judul 'About.'
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      clipPath: "inset(100% 0% 0% 0%)" // Terpotong dari bawah
    },
    visible: { 
      opacity: 1, 
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)", // Terbuka penuh
      transition: { 
        duration: 1, 
        ease: [0.22, 1, 0.36, 1] // Ease out quint yang halus
      }
    },
  };

  // Varian animasi untuk paragraf intro
  const introVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  // Varian animasi untuk kartu skill
  const skillVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "backOut" } // Sedikit efek membal
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen bg-[#080808] py-32 px-6 md:px-20 text-white relative overflow-hidden font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Muncul saat 30% section terlihat
      variants={sectionVariants}
    >
      
      {/* BACKGROUND TEXT - Tipis Banget, Animasi Parallax Sederhana */}
      <motion.div 
        className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none"
        style={{ y: "-10%" }}
        whileInView={{ y: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none">About</h1>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: DIRECT INTRO */}
        <div className="mb-20">
          <motion.h2 
            className="text-7xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] origin-bottom"
            variants={titleVariants}
          >
            About<span className="text-[#8B5CF6]">.</span>
          </motion.h2>
          
          {/* INTRO NAME */}
          <motion.div 
            className="mt-12 max-w-3xl"
            variants={introVariants}
          >
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Saya <span className="text-[#8B5CF6]">Zhafran Atha Razin Hadiny</span>.
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium border-l-4 border-[#8B5CF6] pl-6 overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="block"
              >
                Seorang Developer dan Designer yang berfokus pada integrasi antara teknologi web, estetika visual, dan pengalaman pengguna yang efisien.
              </motion.span>
            </p>
          </motion.div>
        </div>

        {/* GRID SKILLS: SIMPLE CAPSULE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{ scale: 1.05, translateY: -10 }} // Animasi hover tambahan
              className="group cursor-pointer"
            >
              <div className="inline-block px-6 py-2 rounded-full border border-white/10 text-white/40 font-black uppercase tracking-widest text-[10px] mb-6 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-500">
                {item.title}
              </div>
              <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER: MOOD */}
        <motion.div 
          className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Zhafran Atha Razin Hadiny</span>
          <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-white"></div>
             <span className="text-[9px] font-bold uppercase tracking-[0.5em]">Portfolio 2026</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

