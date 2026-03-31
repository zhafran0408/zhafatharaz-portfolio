import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- 1. IMPORT AREA ---
import HtmlIcon from "../assets/icons/html.svg";
import CssIcon from "../assets/icons/css.svg";
import JsIcon from "../assets/icons/js.svg";
import ReactIcon from "../assets/icons/react.svg";
import TailwindIcon from "../assets/icons/tailwind.svg";
import FigmaIcon from "../assets/icons/figma.svg";
import AdobeIcon from "../assets/icons/adobe-lightroom.svg";
import CapcutIcon from "../assets/icons/capcut-icon.svg";
import CanvaIcon from "../assets/icons/canva-icon.svg";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("now");
  const [activeIndex, setActiveIndex] = useState(null);

  // --- 2. DATA SKILL TERPISAH (BAHASA PROFESIONAL) ---
  const skillCategories = {
    now: {
      label: "Using Now",
      header: "Alur Kerja Utama",
      description: "Skill utama yang sedang saya gunakan dan kembangkan secara konsisten untuk meningkatkan kualitas hasil kerja.",
      skills: [
        { name: "HTML5", icon: HtmlIcon },
        { name: "CSS3", icon: CssIcon },
        { name: "JavaScript", icon: JsIcon },
        { name: "React JS", icon: ReactIcon },
        { name: "Tailwind", icon: TailwindIcon },
        { name: "Figma", icon: FigmaIcon },
      ]
    },
    other: {
      label: "Other Tools",
      header: "Media Kreatif",
      
      description: "Perangkat pendukung untuk kebutuhan visual yang terus saya eksplor dan kembangkan untuk memperluas kreativitas.",
      skills: [
        { name: "Adobe LR", icon: AdobeIcon },
        { name: "Capcut", icon: CapcutIcon },
        { name: "Canva", icon: CanvaIcon },
      ]
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-20 bg-[#080808] overflow-hidden min-h-screen flex flex-col justify-center font-sans relative">
      
      {/* Dekorasi Latar Belakang - Hanya Visual */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[15vw] font-black leading-none uppercase tracking-tighter">Stack</h1>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* JUDUL RINGKAS: "My Stack" atau "The Stack" */}
            <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8] text-white">
              The <br />
              <span className="italic text-[#8B5CF6] font-black drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                Skills.
              </span>
            </h2>
            
            {/* --- TAB NAVIGATION (LEBIH CLEAN) --- */}
            <div className="flex gap-10 mt-14 border-b border-white/5">
              {Object.keys(skillCategories).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setActiveIndex(null);
                  }}
                  className={`pb-4 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] transition-all relative ${
                    activeCategory === key ? "text-[#8B5CF6]" : "text-gray-600 hover:text-gray-400"
                  }`}
                >
                  {skillCategories[key].label}
                  {activeCategory === key && (
                    <motion.div layoutId="activeTabGlow" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
                  )}
                </button>
              ))}
            </div>

            {/* Sub-Header & Deskripsi */}
            <div className="mt-8 space-y-3 max-w-xl">
              <h4 className="text-gray-100 font-black uppercase tracking-widest text-lg md:text-xl">
                {skillCategories[activeCategory].header}
              </h4>
              <p className="text-gray-400 text-xs md:text-base leading-relaxed font-medium italic border-l-2 border-[#8B5CF6]/30 pl-4">
                {skillCategories[activeCategory].description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- GRID SKILLS (ANIMASI HALUS) --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          <AnimatePresence mode="wait">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className={`relative border p-8 md:p-10 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer select-none rounded-sm min-h-[140px] md:min-h-[180px] ${
                    isActive ? "border-[#8B5CF6] bg-[#0A0A0A] -translate-y-2 shadow-[0_10px_40px_rgba(139,92,246,0.1)]" : "border-white/5 bg-transparent"
                  }`}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 transition-all duration-500">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className={`w-full h-full object-contain transition-all duration-500 ${
                        isActive ? "grayscale-0 scale-110" : "grayscale opacity-30"
                      }`}
                    />
                  </div>

                  <h3 className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-center leading-none ${
                    isActive ? "text-[#8B5CF6]" : "text-gray-600 group-hover:text-gray-300"
                  }`}>
                    {skill.name}
                  </h3>

                  {isActive && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 bg-[#8B5CF6]/5 blur-2xl -z-10"
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* --- FOOTER SKILLS (SOPAN) --- */}
        <div className="mt-20 border-t border-white/5 pt-8 flex justify-between items-center">
          <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest italic">
            Continuous Improvement of Skill Set
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse shadow-[0_0_10px_#8B5CF6]"></div>
            <div className="w-2 h-2 bg-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
