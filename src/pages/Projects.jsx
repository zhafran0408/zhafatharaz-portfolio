import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMPORT GAMBAR ---
// Pastikan path image ini benar sesuai struktur folder kamu
import DynamicImg from '../assets/image/dynamic-profile-card.png';

const projectData = [
  { 
    id: 1, 
    title: 'Instant Identity', 
    category: 'Web Development',
    img: DynamicImg, 
    description: 'Aplikasi pembuat kartu identitas digital dengan fitur edit real-time dan avatar otomatis. Memanfaatkan DiceBear API untuk menghasilkan visual yang unik dan modern.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://instant-identity.vercel.app' 
  },
  // Tambahkan project lainnya di sini dengan format yang sama
];

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3, 
        delayChildren: 0.2 
      }
    }
  };

  const titleVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="project" 
      className="min-h-screen bg-[#080808] py-32 px-6 md:px-20 overflow-hidden text-white relative font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      
      {/* BACKGROUND DECOR - Text 'Work' Besar di Belakang */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.02, x: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 pointer-events-none select-none"
      >
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none text-white">Work</h1>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-24 overflow-hidden">
          <motion.div variants={titleVariants}>
            <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8]">
              Projects<span className="text-[#8B5CF6]">.</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 h-[2px] bg-[#8B5CF6] shadow-[0_0_15px_#8B5CF6]" 
            />
          </motion.div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {projectData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group flex flex-col"
            >
              {/* IMAGE CARD - Rounded dikit (2xl) */}
              <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 aspect-[16/10] rounded-2xl group shadow-2xl">
                <motion.img 
                  src={item.img} 
                  alt={item.title} 
                  initial={{ filter: "grayscale(100%) blur(10px)", scale: 1.2 }}
                  whileInView={{ filter: "grayscale(100%) blur(0px)", scale: 1 }}
                  whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                  transition={{ duration: 1.2 }}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700"
                />

                {/* OVERLAY VISIT */}
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute inset-0 bg-[#8B5CF6]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-2px z-20"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-6 py-2 bg-[#8B5CF6] rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_#8B5CF6] text-white"
                  >
                    View Live
                  </motion.div>
                </a>
              </div>

              {/* INFO SECTION */}
              <div className="mt-8 space-y-4 px-2">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B5CF6]"
                    >
                      {item.category}
                    </motion.span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-300">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* BUTTON TOGGLE DESC */}
                  <button 
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="p-2 border border-white/10 rounded-full hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-all"
                  >
                    <motion.div animate={{ rotate: expandedId === item.id ? 180 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
                      <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 12L7.14645 12.3536L7.5 12.7071L7.85355 12.3536L7.5 12ZM7.5 3V12M7.5 12L3.5 8M7.5 12L11.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </button>
                </div>

                {/* ACCORDION DESKRIPSI */}
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed italic border-l-2 border-[#8B5CF6]/30 pl-4 mb-6">
                        "{item.description}"
                      </p>
                      <div className="flex flex-wrap gap-2 pb-2">
                        {item.tech.map((tag) => (
                          <span key={tag} className="text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BOTTOM LINE ANIMATION */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1 }}
                  style={{ originX: 0 }}
                  className={`h-[1px] w-full ${expandedId === item.id ? 'bg-[#8B5CF6] shadow-[0_0_15px_#8B5CF6]' : 'bg-white/5'}`} 
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER AKSEN */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Work Archive</span>
          <div className="w-12 h-[1px] bg-white"></div>
        </motion.div>

      </div>
    </motion.section>
  );
}



