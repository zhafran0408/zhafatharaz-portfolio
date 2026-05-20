import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

export default function SocialMedia() {
  const socialLinks = [
    { name: 'Instagram', url: "https://instagram.com/zhafatharaz", handle: "@zhafatharaz" },
    { name: 'Github', url: "https://github.com/zhafran0408", handle: "zhafran0408" },
    { name: 'LinkedIn', url: "https://www.linkedin.com/in/zhafran-atha-razin-hadiny-93315b385/", handle: "Zhafran Atha" }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-36 px-6 md:px-20 bg-[#080808] text-white relative overflow-hidden border-b border-white/5 font-sans"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Garis Gradasi Top Border & Background Grid */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/5 via-[#8B5CF6]/20 to-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16 relative z-10">
        
        {/* --- BAGIAN KIRI: TEKS UTAMA (BERSIH & MINIMALIS) --- */}
        <div className="w-full md:flex-1 relative">
          <h1 className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 m-0 select-none">
            HIRE <br /> <span className="text-[#8B5CF6]">ME.</span>
          </h1>
          <p className="text-xs font-mono text-gray-500 tracking-wider uppercase max-w-sm leading-relaxed border-l border-white/10 pl-4 m-0">
            Terbuka untuk kolaborasi proyek kreatif. Mari bangun visual dan arsitektur sistem digital yang ikonis bersama Zhafran.
          </p>
        </div>

        {/* --- BAGIAN KANAN: TOMBOL SOSIAL MEDIA --- */}
        <div className="w-full md:w-auto flex flex-col items-start md:items-end justify-center relative">
          <div className="flex flex-col items-start md:items-end w-full space-y-2">
            {socialLinks.map((soc) => (
              <a 
                key={soc.name} 
                href={soc.url} 
                target="_blank" 
                rel="noreferrer" 
                className="w-full md:w-auto py-4 border-b border-white/5 md:border-b-0 flex justify-between items-center md:justify-end gap-12 group transition-all duration-300 m-0 no-underline"
              >
                {/* Username Sosial Media */}
                <span className="font-mono text-[9px] text-gray-700 order-1 md:order-none group-hover:text-[#8B5CF6]/70 transition-colors uppercase tracking-widest hidden sm:block">
                  {soc.handle}
                </span>
                {/* Nama Layanan Sosmed */}
                <div className="flex items-center gap-3 order-none md:order-1">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-gray-500 group-hover:text-white transition-all duration-300 group-hover:italic m-0">
                    {soc.name}
                  </h3>
                  <FiArrowUpRight className="text-xl md:text-2xl text-gray-700 group-hover:text-[#8B5CF6] transition-all duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-gray-600 relative z-20">
        <a href="#home" className="text-gray-400 font-bold m-0 hover:text-white transition-colors no-underline">
          © 2026 ZHAFRAN ATHA
        </a>
        <p className="m-0">VITE // STANDALONE_STABLE</p>
      </div>
    </motion.section>
  );
}