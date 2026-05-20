import React, { useState } from 'react';
import { FiAward, FiLoader, FiZap, FiSearch, FiTarget } from 'react-icons/fi';

export default function Achievement() {
  const [clickedStatus, setClickedStatus] = useState({});

  const achievements = [
    {
      title: "Frontend Web Certification",
      institution: "Online Learning Platform",
      otwText: "SEARCHING // Melacak berkas digital di server pusat..."
    },
    {
      title: "JavaScript Logic Mastery",
      institution: "Online Learning Platform",
      otwText: "SCANNING // Memindai database nilai kelulusan..."
    },
    {
      title: "React Components Architecture",
      institution: "Independent Study (Pondok)",
      otwText: "RETRIEVING // Mencari lembar sertifikat di folder local..."
    }
  ];

  const handleCardClick = (index) => {
    setClickedStatus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section 
      id="achievement" 
      className="py-36 px-6 md:px-20 bg-[#080808] text-white relative overflow-hidden border-b border-white/5 font-sans"
    >
      {/* Efek Garis Lampu Ungu dan Grid Dot di Latar Belakang */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/5 via-[#8B5CF6]/20 to-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <div className="font-mono text-[9px] text-[#8B5CF6] tracking-[0.2em] uppercase mb-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 px-3 py-1 inline-flex items-center gap-2 select-none">
            <FiZap className="animate-pulse" /> [ LIVE_MODULE // ACQUISITIONS ]
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase m-0 leading-none">
            MY <br /><span className="text-[#8B5CF6]">ACHIEVEMENTS.</span>
          </h2>
        </div>

        {/* Grid Card Bertema Gelap & Potongan Asimetris Clip-Path */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const isClicked = clickedStatus[index];

            return (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                className="border border-white/10 bg-black p-8 cursor-pointer select-none relative group transition-all duration-300 hover:border-[#8B5CF6]/50 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[280px]"
                style={{ 
                  clipPath: "polygon(12% 0%, 100% 0%, 100% 88%, 88% 100%, 0% 100%, 0% 12%)" 
                }}
              >
                {/* Efek Garis Berdenyut di Atas Kartu */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(139,92,246,0.03)_50%,rgba(255,255,255,0))] bg-[size:100%_20px] animate-pulse pointer-events-none" />

                <div>
                  {/* Header Kartu: Baris Atas */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-[9px] text-gray-600 tracking-widest">
                      INDEX // 0{index + 1}
                    </span>
                    
                    {/* Wadah Ikon Lucu / Detektif / Pencari */}
                    <div className="w-8 h-8 rounded border border-white/10 flex items-center justify-center bg-white/[0.02] group-hover:border-[#8B5CF6]/50 group-hover:bg-[#8B5CF6]/10 transition-all duration-300">
                      {isClicked ? (
                        <FiLoader className="text-[#8B5CF6] text-sm animate-spin" />
                      ) : (
                        <FiSearch className="text-gray-400 group-hover:text-white text-sm animate-bounce" />
                      )}
                    </div>
                  </div>

                  {/* Informasi Utama */}
                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-2 m-0 group-hover:text-[#8B5CF6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[9px] text-gray-500 tracking-wider uppercase m-0">
                    {item.institution}
                  </p>
                </div>

                {/* Status Progress Cari Sertifikat */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <FiTarget className={`text-[10px] ${isClicked ? 'text-[#8B5CF6] animate-pulse' : 'text-gray-600'}`} />
                    <span className="font-mono text-[8px] text-gray-600 tracking-widest uppercase block">
                      TRACKING_STATUS
                    </span>
                  </div>
                  
                  <p className={`text-[10px] font-mono uppercase tracking-widest m-0 transition-all duration-300 min-h-[30px] ${
                    isClicked ? 'text-amber-400 font-bold' : 'text-gray-400 opacity-40 group-hover:opacity-70'
                  }`}>
                    {isClicked ? `⚠️ ${item.otwText}` : "/// TAP CARD TO INITIATE SEARCH"}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}