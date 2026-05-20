import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import ikon minimalis: FiChevronDown untuk accordion, FiArrowUpRight untuk link
import { FiChevronDown, FiArrowUpRight } from "react-icons/fi";

// --- IMPORT GAMBAR ---
import DynamicImg from "../assets/image/dynamic-profile-card.png";
import TaddaburImg from "../assets/image/tadabbur.png";
import SkillifyImg from "../assets/image/skillify.png";
import WeatherImg from "../assets/image/skypulse.png";
import DevspeekImg from "../assets/image/devspeek.png";

const projectData = [
  {
    id: 1,
    index: "01",
    title: "Instant Identity",
    category: "Web Development // System",
    img: DynamicImg,
    description:
      "Aplikasi pembuat kartu identitas digital dengan fitur edit real-time dan avatar otomatis. Memanfaatkan DiceBear API untuk menghasilkan visual yang unik dan modern.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "https://instant-identity.vercel.app",
  },
  {
    id: 2,
    index: "02",
    title: "Taddabur Digital",
    category: "Religious & Education",
    img: TaddaburImg,
    description:
      "Platform Al-Quran digital interaktif yang dirancang untuk memudahkan pengguna dalam membaca dan memahami ayat suci dengan antarmuka yang bersih dan bebas iklan.",
    tech: ["React.js", "Tailwind CSS", "API Integration"],
    link: "https://taddabur-digital.vercel.app/",
  },
  {
    id: 3,
    index: "03",
    title: "Skillify Learning",
    category: "E-Learning Platform",
    img: SkillifyImg,
    description:
      "Sistem manajemen pembelajaran (LMS) modern yang berfokus pada pengalaman pengguna dalam mengakses kursus online, tracking progres, dan manajemen materi.",
    tech: ["React.js", "Tailwind CSS"],
    link: "https://skillify-learning.vercel.app",
  },
  {
    id: 4,
    index: "04",
    title: "Skypulse Weather App",
    category: "Utility Tools // API",
    img: WeatherImg,
    description:
      "Aplikasi pemantau cuaca real-time yang menyajikan data akurat berdasarkan lokasi pengguna, lengkap dengan visualisasi kondisi atmosfer yang dinamis.",
    tech: ["React.js", "Tailwind CSS", "OpenWeather API"],
    link: "https://weather-app-chi-two-19.vercel.app",
  },
  {
    id: 5,
    index: "05",
    title: "DevSpeek",
    category: "Web Application // Collab",
    img: DevspeekImg,
    description: "Proyek kolaborasi tim yang dibangun dengan React.js dan Tailwind CSS untuk menciptakan aplikasi web yang dinamis serta responsif, dengan manajemen kode berbasis Git dan dideploy melalui Netlify.",
    tech: ["React.js", "Tailwind CSS", "Git", "Netlify"],
    link: "https://devspeek.netlify.app/#glossary",
  },
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const titleVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="project"
      className="min-h-screen bg-[#080808] py-36 px-6 md:px-20 overflow-hidden text-white relative font-sans border-b border-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVariants}
    >
      {/* BACKGROUND TEXT WATERMARK */}
      <div className="absolute top-12 left-12 opacity-[0.01] pointer-events-none select-none font-mono hidden md:block">
        <p className="text-xs tracking-[0.5em] uppercase m-0">PROD_INDEX // PRODUCTION</p>
        <p className="text-[12vw] font-black leading-none m-0">03</p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-28 overflow-hidden">
          <motion.div variants={titleVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase leading-none">
                Projects<span className="text-[#8B5CF6] drop-shadow-[0_0_10px_#8B5CF6]">.</span>
              </h2>
              <p className="text-xs font-mono text-gray-600 mt-4 tracking-widest uppercase block">[ Selected Works & Application Archetypes ]</p>
            </div>
            <div className="w-24 h-[1px] bg-white/20 hidden md:block mb-2" />
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {projectData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group flex flex-col w-full"
            >
              {/* IMAGE HOVER FRAME COMPONENT */}
              <div 
                className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[16/10] rounded-none group shadow-2xl"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 92%, 95% 100%, 0 100%)"
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />

                <motion.img
                  src={item.img}
                  alt={item.title}
                  initial={{ filter: "grayscale(100%) contrast(1.1)", scale: 1 }}
                  whileHover={{ 
                    filter: "grayscale(0%) contrast(1)", 
                    scale: 1.04,
                    opacity: 0.9 
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover opacity-30 transition-all duration-500 z-10 relative"
                />

                {/* OVERLAY LINK ACTION */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6 z-20 backdrop-blur-[2px]"
                >
                  <span className="px-5 py-2.5 bg-white text-black text-[9px] font-black uppercase tracking-widest hover:bg-[#8B5CF6] hover:text-white transition-colors duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex items-center gap-2">
                    Launch Live System <FiArrowUpRight className="text-xs" />
                  </span>
                </a>
              </div>

              {/* CORE METADATA CONTENT SECTION */}
              <div className="mt-6 space-y-4 px-1">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-gray-600 group-hover:text-[#8B5CF6] transition-colors">// {item.index}</span>
                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* FIX: SEKARANG MENGGUNAKAN INDIKATOR TANDA PANAH (CHEVRON DOWN) */}
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className={`mt-1 p-2.5 border transition-all rounded-none bg-[#0c0c0c] flex items-center justify-center text-sm ${
                      expandedId === item.id 
                        ? "border-[#8B5CF6] text-[#8B5CF6] shadow-[0_0_10px_rgba(139,92,246,0.3)]" 
                        : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 250, damping: 20 }}
                      className="flex items-center justify-center"
                    >
                      {/* Tanda panah minimalis dari Lucide Icons */}
                      <FiChevronDown size={16} />
                    </motion.div>
                  </button>
                </div>

                {/* ACCORDION DRAWER ARCHITECTURE */}
                <AnimatePresence initial={false}>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 border-l border-[#8B5CF6]/40 pl-4 space-y-4">
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-medium tracking-wide">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {item.tech.map((tag) => (
                            <span
                              key={tag}
                              className="text-[8px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/5 px-2.5 py-1 text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* SOLID BASELINE SEPARATOR */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{ originX: 0 }}
                  className={`h-[1px] w-full transition-colors duration-500 ${
                    expandedId === item.id ? "bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" : "bg-white/5"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM METRIC ARCHIVE FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ delay: 0.5 }}
          className="mt-40 pt-8 border-t border-white/5 flex justify-between items-center text-[8px] font-mono tracking-[0.4em]"
        >
          <span>PRODUCTION PIPELINE ARCHIVE</span>
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white" />
            <span>DEPLOYMENT STACK VERIFIED // 2026</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
