import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectData = [
  { 
    id: 1, 
    category: 'web', 
    title: 'E-Commerce Platform', 
    description: 'Platform belanja online modern dengan fitur real-time cart, payment gateway integration, dan dashboard admin yang responsif menggunakan React dan Node.js.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800',
    link: 'https://github.com/zhafaraz' 
  },
  { 
    id: 2, 
    category: 'web', 
    title: 'Management System', 
    description: 'Sistem manajemen data inventaris perusahaan yang membantu otomatisasi laporan bulanan dan pemantauan stok barang secara efisien.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    link: 'https://vercel.com/zhafaraz' 
  },
  {
      id: 2, 
    category: 'web', 
    title: 'Management System', 
    description: 'Sistem manajemen data inventaris perusahaan yang membantu otomatisasi laporan bulanan dan pemantauan stok barang secara efisien.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    link: 'https://vercel.com/zhafaraz' 
  },
  { 
    id: 3, 
    category: 'photo', 
    title: 'Urban Portrait Series', 
    description: 'Eksplorasi kontras antara manusia dan beton di hiruk pikuk Jakarta, menggunakan teknik low-key lighting.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800', 
    link: '#' 
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('web');
  // State untuk nyimpen ID project mana yang lagi dibuka penjelasannya
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = projectData.filter(item => item.category === filter);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="project" className="min-h-screen bg-[#F2F2F2] py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & FILTER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Selected <br /> <span className="italic text-gray-300 font-light">Works</span>
            </h2>
          </motion.div>

          <div className="flex gap-8 border-b border-black/5 pb-2">
            {['web', 'photo'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setExpandedId(null); }}
                className={`relative py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all
                  ${filter === cat ? 'text-black' : 'text-gray-400'}`}
              >
                {cat === 'web' ? 'IT & Web Design' : 'Photography'}
                {filter === cat && <motion.div layoutId="activeTab" className="absolute -bottom-[9px] left-0 w-full h-[3px] bg-black z-10" />}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className={`grid gap-12 ${filter === 'web' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-3'}`}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((item) => (
              <motion.div key={item.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="group">
                
                {/* CARD IMAGE */}
                <div className={`relative overflow-hidden bg-white border border-black/5 transition-all duration-700 group-hover:shadow-2xl ${item.category === 'web' ? 'aspect-[16/10]' : 'aspect-[3/4]'}`}>
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  
                  {/* Visit Overlay (Hanya IT) */}
                  {item.category === 'web' && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="px-6 py-2 border border-white text-white text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">Visit Project</span>
                    </a>
                  )}
                </div>

                {/* TITLE & TOGGLE BUTTON */}
                <div className="mt-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[8px] font-black uppercase text-gray-400 tracking-[0.2em] mb-1">{item.category}</p>
                      <h3 className="text-lg font-black uppercase tracking-tighter">{item.title}</h3>
                    </div>
                    
                    {/* TOMBOL PANAH / DETAIL */}
                    <button 
                      onClick={() => toggleExpand(item.id)}
                      className="w-10 h-10 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all rounded-full"
                    >
                      <motion.span
                        animate={{ rotate: expandedId === item.id ? 180 : 0 }}
                        className="text-xs"
                      >
                        ↓
                      </motion.span>
                    </button>
                  </div>

                  {/* DESCRIPTION AREA (ANIMASI SLIDE DOWN) */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="py-4 text-xs text-gray-500 leading-relaxed uppercase tracking-wider border-t border-black/5 mt-4">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="h-[1px] w-full bg-black/5 mt-2" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}



