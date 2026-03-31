import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Profil from "../assets/profil.webp";

export default function About() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const photoRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotationX = (-y / (rect.height / 2)) * 10;
    const rotationY = (x / (rect.width / 2)) * 10;
    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-[#080808] py-24 px-6 md:px-20 relative overflow-hidden text-white"
    >
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12 relative z-10">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10"
          >
            Sekilas <br /> <span className="italic text-[#0066FF]">Profil</span>
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-medium text-justify md:text-left"
          >
            Saya{" "}
            <span className="text-white font-bold">Zhafran Atha Razin Hadiny</span>, seorang Frontend Developer yang antusias dalam menggabungkan fungsionalitas kode dengan estetika visual.
            <br />
            <br />
            Dengan latar belakang di bidang{" "}
            <span className="italic text-[#0066FF]">Creative Media</span>, saya selalu berusaha membawa sentuhan artistik ke dalam setiap baris kode yang saya tulis.
          </motion.p>
        </div>

       
        <div className="flex-1 w-full flex justify-center md:justify-end relative">
          <motion.div
            ref={photoRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              y: yImage,
              rotateX: springX,
              rotateY: springY,
              transformPerspective: 1000,
            }}
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full sm:w-[320px] md:w-[350px] aspect-[3/4] bg-[#111] overflow-hidden rounded-sm group shadow-2xl"
          >
            <div className="absolute inset-0 border-[16px] border-[#0A0A0A] z-10 pointer-events-none transition-all duration-300 group-hover:border-[#000]/50" />
            <div className="absolute inset-4 border border-[#0066FF]/20 z-20 pointer-events-none group-hover:border-[#0066FF] transition-all duration-500 shadow-[0_0_15px_rgba(0,102,255,0)] group-hover:shadow-[0_0_30px_rgba(0,102,255,0.8)]" />

            <motion.img
              src={Profil}
              alt="Profil"
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              style={{ filter: 'grayscale(100%) brightness(80%)' }}
              whileHover={{ filter: 'grayscale(0%) brightness(100%)' }} 
            />
            
            <div className="absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 border-white/30 z-25 group-hover:border-[#0066FF]" />
            <div className="absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 border-white/30 z-25 group-hover:border-[#0066FF]" />
          </motion.div>
        </div>
      </div>

      {/* 2. GRID SKILLS */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 border-t border-white/10 pt-16 relative z-10"
      >
        <motion.div variants={fadeInUp}>
          <div className="h-[2px] w-8 bg-[#0066FF] mb-6 shadow-[0_0_10px_#0066FF]" />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Web Development</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Menggunakan <b className="text-white">React.js</b> dan <b className="text-white">Tailwind CSS</b> untuk membangun situs web responsif.
          </p>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <div className="h-[2px] w-8 bg-[#0066FF] mb-6 shadow-[0_0_10px_#0066FF]" />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">UI/UX Design</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Implementasi desain menggunakan <b className="text-white">Figma</b> untuk merancang user flow dan wireframe.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className="h-[2px] w-8 bg-[#0066FF] mb-6 shadow-[0_0_10px_#0066FF]" />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Creative Media</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Eksplorasi dalam bidang <b className="text-white">Fotografi</b> dan <b className="text-white">Editing</b> untuk visual menarik.
          </p>
        </motion.div>
      </motion.div>

<div className="mt-32 relative h-[15vw] flex items-center overflow-hidden pointer-events-none">
  <motion.div
    animate={{ x: ["0%", "-50%"] }}
    transition={{ 
      duration: 30, 
      repeat: Infinity, 
      ease: "linear" 
    }}
    className="flex whitespace-nowrap"
  >
    <h1 
      className="text-[18vw] font-black tracking-tighter uppercase select-none pr-20 text-transparent"
      style={{ 
        WebkitTextStroke: '1px rgba(50, 100, 255, 0.15)',
        letterSpacing: '-0.05em' 
      }}
    >
      ZHAFATHARAZ <span style={{ WebkitTextStroke: '1px rgba(50, 100, 255, 0.05)' }}>—</span> ZHAFATHARAZ <span style={{ WebkitTextStroke: '1px rgba(50, 100, 255, 0.05)' }}>—</span>
    </h1>
    
    <h1 
      className="text-[18vw] font-black tracking-tighter uppercase select-none pr-20 text-transparent"
      style={{ 
        WebkitTextStroke: '1px rgba(50, 100, 255, 0.15)',
        letterSpacing: '-0.05em'
      }}
    >
      ZHAFATHARAZ <span style={{ WebkitTextStroke: '1px rgba(50, 100, 255, 0.05)' }}>—</span> ZHAFATHARAZ <span style={{ WebkitTextStroke: '1px rgba(50, 100, 255, 0.05)' }}>—</span>
    </h1>
  </motion.div>
</div>
    </section>
  );
}
