import React from "react";
import { motion } from "framer-motion";

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
  const codingSkills = [
    { name: "HTML5", icon: HtmlIcon, spec: "Structure" },
    { name: "CSS3", icon: CssIcon, spec: "Style" },
    { name: "JavaScript", icon: JsIcon, spec: "Logic" },
    { name: "React JS", icon: ReactIcon, spec: "Framework" },
    { name: "Tailwind", icon: TailwindIcon, spec: "Utility" },
  ];

  const creativeSkills = [
    { name: "Figma", icon: FigmaIcon, type: "UI/UX & Asset" },
    { name: "Adobe LR", icon: AdobeIcon, type: "Color Grading" },
    { name: "Capcut", icon: CapcutIcon, type: "Motion Video" },
    { name: "Canva", icon: CanvaIcon, type: "Fast Concept" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-36 px-6 md:px-20 bg-[#080808] overflow-hidden min-h-screen flex flex-col justify-center font-sans relative border-b border-white/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* WATERMARK BACKGROUND DECORATION */}
      <div className="absolute top-12 right-12 opacity-[0.01] pointer-events-none select-none font-mono text-right hidden md:block">
        <p className="text-xs tracking-[0.5em] uppercase m-0">
          ENGINE_SPEC // CORE
        </p>
        <p className="text-[12vw] font-black leading-none m-0">04</p>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* --- SECTION HEADER (MURNI SKILLS) --- */}
        <div className="mb-28">
          <h2 className="text-7xl md:text-8xl font-black tracking-tight uppercase leading-none text-white">
            Skills
            <span className="text-[#8B5CF6] drop-shadow-[0_0_10px_#8B5CF6]">
              .
            </span>
          </h2>
          <p className="text-xs font-mono text-gray-600 mt-4 tracking-widest uppercase block">
            [ Core Stack & Creative Automation Matrix ]
          </p>
        </div>

        {/* --- CATEGORY 1: ENGINEERING STACK (CODING) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-3">
            <span className="font-mono text-[10px] text-[#8B5CF6] font-bold tracking-[0.3em] uppercase">
              01 // ENGINEERING STACKS
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-t border-l border-white/5">
            {codingSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.02)" }}
                className="border-r border-b border-white/5 p-8 md:p-10 flex flex-col items-center justify-between relative group cursor-pointer min-h-[160px] md:min-h-[200px]"
              >
                <div className="w-full flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[8px] text-gray-600 font-bold">
                    [{skill.spec}]
                  </span>
                  <div className="w-1 h-1 bg-gray-700 group-hover:bg-[#8B5CF6] transition-colors" />
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 my-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                </div>

                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B5CF6] transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#8B5CF6]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- CATEGORY 2: CREATIVE PRODUCTION (DESIGN & VIDEO) --- */}
        <div>
          <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-3">
            <span className="font-mono text-[10px] text-[#8B5CF6] font-bold tracking-[0.3em] uppercase">
              02 // CREATIVE PRODUCTION
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/5 to-transparent" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 border-t border-l border-white/5">
            {creativeSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.02)" }}
                className="border-r border-b border-white/5 p-8 md:p-10 flex flex-col items-center justify-between relative group cursor-pointer min-h-[160px] md:min-h-[200px]"
              >
                <div className="w-full flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[8px] text-gray-600 font-bold">
                    //{skill.type}
                  </span>
                  <div className="w-1 h-1 bg-gray-700 group-hover:bg-[#8B5CF6] transition-colors" />
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 my-4">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                  />
                </div>

                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#8B5CF6] transition-all duration-500 group-hover:w-full shadow-[0_0_8px_#8B5CF6]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- SECTION FOOTER --- */}
        <div className="mt-32 pt-8 border-t border-white/5 flex justify-between items-center font-mono text-[8px] tracking-[0.4em] opacity-20">
          <p className="uppercase">AUTOMATION & INTEGRATION VERIFIED</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-white" />
            <span>PORTFOLIO CORE // 2026</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
