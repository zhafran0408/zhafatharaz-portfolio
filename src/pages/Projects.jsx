import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. IMPORT GAMBAR (Pastikan file .png ini ada di folder tersebut) ---
import DynamicImg from '../assets/image/dynamic-profile-card.png';

// --- 2. DATA PROJECTS ---
const projectData = [
  { 
    id: 1, 
    category: 'web', 
    title: 'Instant-identity', 
    img: DynamicImg, // Memanggil variabel import di atas
    description: 'Dynamic Profile Card adalah aplikasi pembuat kartu identitas digital dengan fitur edit real-time dan avatar otomatis. Dibangun menggunakan React.js, Tailwind CSS, dan DiceBear API dengan desain modern dan responsif.',
    link: 'https://instant-identity.vercel.app' // Pastikan pakai https://
  },
  // Lo bisa nambahin data project lain di sini nanti
];

export default function Projects() {
  const [filter, setFilter] = useState('web');
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projectData.filter(item => item.category === filter);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="project" className="min-h-screen bg-[#080808] py-24 px-6 md:px-20 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & FILTER NAVIGATION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Selected <br /> <span className="italic text-[#0066FF] font-light">Works</span>
            </h2>
          </motion.div>

          <div className="flex gap-8 border-b border-white/10 pb-2 w-full md:w-auto overflow-x-auto">
            {['web', 'photo'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setExpandedId(null);
                }}
                className={`relative py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap
                  ${filter === cat ? 'text-[#0066FF]' : 'text-gray-500 hover:text-white'}`}
              >
                {cat === 'web' ? 'IT & Web Design' : 'Photography'}
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab" 
                    className="absolute -bottom-[9px] left-0 w-full h-[3px] bg-[#0066FF] z-10 shadow-[0_0_10px_#0066FF]" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div 
          layout 
          className={`grid gap-12 ${
            filter === 'web' 
            ? 'grid-cols-1 md:grid-cols-2' 
            : 'grid-cols-2 md:grid-cols-3' 
          }`}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => toggleExpand(item.id)} // Klik card untuk expand deskripsi
              >
                {/* CARD IMAGE CONTAINER */}
                <div 
                  className={`relative overflow-hidden bg-[#111] border border-white/5 shadow-sm transition-all duration-700 group-hover:border-[#0066FF]/50
                    ${item.category === 'web' ? 'aspect-[16/10]' : 'aspect-[3/4] md:aspect-[4/5]'}`}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />

                  {/* OVERLAY LINK VERCEL */}
                  {item.category === 'web' && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer"
                      // STOP PROPAGATION AGAR KLIK LINK TIDAK MENUTUP CARD
                      onClick={(e) => e.stopPropagation()} 
                      className="absolute inset-0 bg-[#0066FF]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-white backdrop-blur-[2px] z-20"
                    >
                      <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_#0066FF]">
                        <svg width="20" height="20" viewBox="0 0 15 15" fill="none"><path d="M3.64645 11.3536C3.45118 11.5488 3.45118 11.8654 3.64645 12.0607C3.84171 12.2559 4.15829 12.2559 4.35355 12.0607L3.64645 11.3536ZM11.5 4C11.5 3.72386 11.2761 3.5 11 3.5L6.5 3.5C6.22386 3.5 6 3.72386 6 4C6 4.27614 6.22386 4.5 6.5 4.5L10.5 4.5L10.5 8.5C10.5 8.77614 10.7239 9 11 9C11.2761 9 11.5 8.77614 11.5 8.5L11.5 4ZM4.35355 12.0607L11.3536 5.06066L10.6464 4.35355L3.64645 11.3536L4.35355 12.0607Z" fill="currentColor"></path></svg>
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-[0.3em]">Visit Website</span>
                    </a>
                  )}
                </div>

                {/* INFO & TOGGLE DETAIL */}
                <div className="mt-6 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[#0066FF] mb-2 block">
                        {item.category === 'web' ? 'Live Deployment' : 'Portrait Photography'}
                      </span>
                      <h3 className="text-lg font-black uppercase tracking-tighter leading-none group-hover:text-[#0066FF] transition-all">
                        {item.title}
                      </h3>
                    </div>
                    
                    <button 
                      className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all rounded-full"
                    >
                      <motion.span
                        animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                        className="text-[10px]"
                      >
                        ↓
                      </motion.span>
                    </button>
                  </div>

                  {/* AREA DESKRIPSI (Accordion) */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-5 pb-2 text-[11px] text-gray-400 leading-relaxed uppercase tracking-wider font-medium">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={`h-[1px] w-full mt-4 transition-all duration-500 ${expandedId === item.id ? 'bg-[#0066FF] shadow-[0_0_10px_#0066FF]' : 'bg-white/5 group-hover:bg-white/20'}`} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM LABEL */}
        <div className="mt-32 flex justify-center">
          <p className="text-[9px] font-bold tracking-[0.5em] text-gray-700 uppercase italic">
            Visualizing the future • 2026
          </p>
        </div>
      </div>
    </section>
  );
}



