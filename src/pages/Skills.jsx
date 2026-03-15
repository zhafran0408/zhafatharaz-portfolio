import React, { useState } from 'react'; // Tambahkan useState
import { motion } from 'framer-motion';

// --- 1. IMPORT AREA ---
import HtmlIcon from '../assets/icons/html.svg';
import CssIcon from '../assets/icons/css.svg';
import JsIcon from '../assets/icons/js.svg';
import ReactIcon from '../assets/icons/react.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import FigmaIcon from '../assets/icons/figma.svg';
import AdobeIcon from '../assets/icons/adobe-lightroom.svg';
import CapcutIcon from '../assets/icons/capcut-icon.svg';
import CanvaIcon from '../assets/icons/canva-icon.svg';

const mySkills = [
  { name: "HTML5", icon: HtmlIcon },
  { name: "CSS3", icon: CssIcon },
  { name: "JavaScript", icon: JsIcon },
  { name: "React JS", icon: ReactIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Adobe CC", icon: AdobeIcon },
  { name: "Capcut", icon: CapcutIcon },
  { name: "Canva", icon: CanvaIcon },
];

export default function Skills() {
  // State untuk melacak card mana yang lagi di-klik (khusus mobile)
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="skills" className="py-16 md:py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TITLE & SUBTITLE */}
        <div className="mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.8]"
          >
            Technical <br /> <span className="italic text-gray-300 font-light">Expertise</span>
          </motion.h2>
          <p className="mt-6 text-xs md:text-base text-gray-500 max-w-xl font-medium">
            Alat yang saya gunakan untuk berkarya. <span className="text-black italic font-bold">Belajar adalah proses tanpa akhir bagi saya.</span>
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-8">
          {mySkills.map((skill, index) => {
            // Cek apakah card ini lagi aktif (di-hover atau di-tap)
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)} // Untuk Desktop
                onMouseLeave={() => setActiveIndex(null)}  // Untuk Desktop
                onClick={() => setActiveIndex(isActive ? null : index)} // Untuk Mobile (Tap)
                
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                
                animate={{
                  backgroundColor: isActive ? "#000000" : "#F9F9F9",
                  y: isActive ? -10 : 0
                }}
                
                className="relative border border-black/5 p-6 md:p-10 flex flex-col items-center justify-center transition-colors duration-300 cursor-pointer select-none touch-manipulation min-h-[140px] md:min-h-[180px]"
              >
                {/* ICON */}
                <div className="w-10 h-10 md:w-14 md:h-14 mb-4 md:mb-6 transition-all duration-500">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-full h-full object-contain transition-all duration-500 ${isActive ? 'grayscale-0 scale-110' : 'grayscale'}`}
                  />
                </div>

                {/* TEXT NAME */}
                <h3 className={`text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-colors duration-300 text-center leading-none ${isActive ? 'text-white' : 'text-gray-400'}`}>
                  {skill.name}
                </h3>
                
                {/* NOMOR URUT */}
                <span className={`absolute top-4 right-4 text-[8px] font-mono transition-colors duration-300 ${isActive ? 'text-white/30' : 'text-gray-300'}`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-16 border-t border-black/5 pt-8 flex justify-between items-center">
            <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest italic">Always a student of the craft</p>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}