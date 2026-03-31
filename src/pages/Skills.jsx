import React, { useState } from "react";
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

const mySkills = [
  { name: "HTML5", icon: HtmlIcon },
  { name: "CSS3", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "React JS", icon: ReactIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Adobe LR", icon: AdobeIcon },
  { name: "Capcut", icon: CapcutIcon },
  { name: "Canva", icon: CanvaIcon },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-6 md:px-20 bg-[#080808] overflow-hidden" // HITAM PEKAT
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">
              Technical <br />{" "}
              <span className="italic text-[#0066FF] font-light">
                Expertise
              </span>{" "}
             
            </h2>
            <p className="mt-6 text-xs md:text-base text-gray-400 max-w-xl font-medium border-l-2 border-[#0066FF] pl-4">
              Alat yang saya gunakan untuk berkarya.{" "}
              <span className="text-white italic font-bold">
                Belajar adalah proses tanpa akhir bagi saya.
              </span>
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-8">
          {mySkills.map((skill, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(isActive ? null : index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                animate={{
                  backgroundColor: isActive ? "#000000" : "transparent",
                  borderColor: isActive
                    ? "#0066FF"
                    : "rgba(255, 255, 255, 0.1)",
                  y: isActive ? -10 : 0,
                }}
                className="relative border-2 p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer select-none touch-manipulation min-h-[140px] md:min-h-[180px] rounded-sm"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 transition-all duration-500">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      isActive
                        ? "grayscale-0 scale-110 blur-0"
                        : "grayscale opacity-30 blur-[0.5px]"
                    }`}
                  />
                </div>

                <h3
                  className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 text-center leading-none ${
                    isActive ? "text-[#0066FF]" : "text-gray-600"
                  }`}
                >
                  {skill.name}
                </h3>

                <span
                  className={`absolute top-4 right-4 text-[8px] font-mono transition-colors duration-300 ${
                    isActive ? "text-[#0066FF]/50" : "text-white/5"
                  }`}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="glow"
                    className="absolute inset-0 bg-[#0066FF]/5 blur-xl -z-10"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex justify-between items-center">
          <p className="text-[9px] font-bold text-gray-700 uppercase tracking-widest italic">
            Always a of the craft
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-[#0066FF] rounded-full animate-pulse shadow-[0_0_10px_#0066FF]"></div>
            <div className="w-2 h-2 bg-white/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
