import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Profil from "../assets/profil.webp";

export default function About() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // REF & STATE UNTUK ANIMASI KURSOR GOKIL
  const photoRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Menggunakan spring biar gerakannya halus (Soft Magnetic)
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();

    // Menghitung posisi kursor relatif terhadap tengah gambar
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Menghitung derajat rotasi (Maksimal 10 derajat)
    const rotationX = (-y / (rect.height / 2)) * 10;
    const rotationY = (x / (rect.width / 2)) * 10;

    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  const handleMouseLeave = () => {
    // Reset posisi saat kursor pergi
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
      className="min-h-screen bg-white py-24 px-6 md:px-20 relative overflow-hidden"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10"
          >
            Sekilas <br /> <span className="italic text-gray-300">Profil</span>
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="max-w-md text-gray-600 text-sm md:text-base leading-relaxed font-medium text-justify md:text-left"
          >
            Saya{" "}
            <span className="text-black font-bold">
              Zhafran Atha Razin Hadiny
            </span>
            , seorang Frontend Developer yang antusias dalam menggabungkan
            fungsionalitas kode dengan estetika visual.
            <br />
            <br />
            Dengan latar belakang di bidang{" "}
            <span className="italic">Creative Media</span>, saya selalu berusaha
            membawa sentuhan artistik ke dalam setiap baris kode yang saya
            tulis.
          </motion.p>
        </div>

        {/* --- SPOT FOTO DENGAN ANIMASI GOKIL --- */}
        <motion.div
          ref={photoRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            y: yImage,
            rotateX: springX, // Efek 3D ngetilt ke atas/bawah
            rotateY: springY, // Efek 3D ngetilt ke kiri/kanan
            transformPerspective: 1000, // Jarak pandang 3D
          }}
          className="relative w-full md:w-[350px] aspect-[3/4] bg-gray-100 overflow-hidden grayscale border-[12px] border-white shadow-2xl transition-all duration-300 ease-out 
                     hover:grayscale-0 hover:border-[16px] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-[1.03]"
        >
          <motion.img
            src={Profil}
            alt="Zhafran Atha Razin Hadiny"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.15 }} // Gambar di dalam membesar dikit pas hover
            transition={{ duration: 0.6 }}
          />
          {/* Overlay tipis dipertahankan */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none hover:opacity-0 transition-opacity duration-500"></div>
        </motion.div>
      </div>

      {/* Grid Skill */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 border-t border-black pt-16 relative z-10 bg-white"
      >
        {/* Pilar 1 */}
        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-black mb-6"
          />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
            Web Development
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed tracking-wide">
            Menggunakan <b>React.js</b> dan <b>Tailwind CSS</b> untuk membangun
            situs web yang responsif.
          </p>
        </motion.div>
        {/* Pilar 2 */}
        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-[2px] bg-black mb-6"
          />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
            UI/UX Design
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed tracking-wide">
            Implementasi desain menggunakan <b>Figma</b> untuk merancang{" "}
            <i>user flow</i> dan wireframe.
          </p>
        </motion.div>
        {/* Pilar 3 */}
        <motion.div variants={fadeInUp}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2rem" }}
            transition={{ duration: 1, delay: 0.9 }}
            className="h-[2px] bg-black mb-6"
          />
          <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">
            Creative Media
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed tracking-wide">
            Eksplorasi dalam bidang <b>Fotografi</b> dan <b>Editing</b> untuk
            komposisi visual yang menarik.
          </p>
        </motion.div>
      </motion.div>

      {/* Signature Running Text - FIXED VERSION */}
      <div className="mt-28 relative h-[15vw] flex items-center overflow-visible z-0">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-[15vw] font-black tracking-tighter whitespace-nowrap opacity-[0.05] pointer-events-none select-none absolute left-0"
        >
          ZHAFATHARAZ — ZHAFATHARAZ — ZHAFATHARAZ — ZHAFATHARAZ —
        </motion.h1>
      </div>
    </section>
  );
}
