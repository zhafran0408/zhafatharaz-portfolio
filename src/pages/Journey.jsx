import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiCamera, FiLayout, FiCode, FiZap } from 'react-icons/fi';

export default function Journey() {
  const timelineData = [
    {
      index: "01",
      year: "2024 - 2025",
      icon: <FiMonitor />,
      title: "The Awakening",
      subtitle: "Santri & Laptop",
      location: "ISLAMIC BOARDING SCHOOL",
      desc: "Pertama kali berinteraksi intens dengan laptop di pondok pesantren. Awalnya terasa asing dan membingungkan, namun momen ini justru menjadi gerbang utama pembuka rasa penasaran saya terhadap dunia digital."
    },
    {
      index: "02",
      year: "2024 - 2025",
      icon: <FiCamera />,
      title: "Visual Instinct",
      subtitle: "Photography Era",
      location: "CREATIVE LENS",
      desc: "Menemukan ketertarikan kuat di bidang fotografi dan videografi. Mengeksplorasi estetika visual, komposisi objek lewat lensa kamera, dan teknik editing dasar yang mengasah insting kreatif saya."
    },
    {
      index: "03",
      year: "2024 - 2025",
      icon: <FiLayout />,
      title: "UI/UX Spark",
      subtitle: "Figma Validation",
      location: "FIGMA LAB",
      desc: "Titik balik sebelum terjun ke coding. Hasil eksekusi UI design saya di Figma mendapatkan banyak pujian karena dinilai sangat bagus dan berkarakter. Validasi ini memicu ambisi saya untuk menghidupkannya menjadi kode nyata."
    },
    {
      index: "04",
      year: "2024 - 2025",
      icon: <FiCode />,
      title: "First Lines",
      subtitle: "Web Core Basics",
      location: "FRONT-END POUNDATION",
      desc: "Selesai mendalami Figma, petualangan coding dimulai. Konsisten mempelajari pondasi dasar web development, menyusun struktur dengan HTML, mendesain gaya dengan CSS, dan memberikan logika interaktif lewat JavaScript."
    },
    {
      index: "05",
      year: "2025 - 2026",
      icon: <FiZap />,
      title: "Next Gen Stack",
      subtitle: "React & Tailwind",
      location: "MODERN WEB DEV",
      desc: "Evolusi teknologi. Naik level ke ekosistem Tailwind CSS dan React JS untuk merancang website yang responsif dan ultra-kece. Memantapkan visi menguasai 3 pilar: Front-End Developer, UI/UX Designer, dan Media Producer."
    }
  ];

  return (
    <div className="w-full bg-[#080808] text-white py-36 px-6 md:px-12 lg:px-20 border-b border-white/5 relative overflow-hidden font-sans">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="border-b border-white/10 pb-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4 font-mono text-[10px] text-[#8B5CF6] tracking-[0.4em] uppercase">
              <span className="w-1.5 h-1.5 bg-[#8B5CF6] animate-pulse" />
              SYSTEM_CHRONICLE // DATA_LOGS
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none m-0">
              MY JOURNEY<span className="text-[#8B5CF6] drop-shadow-[0_0_15px_#8B5CF6]">.</span>
            </h2>
          </div>
          <div className="font-mono text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#8B5CF6] pl-4 md:pl-0 md:pr-4 py-1">
            <p className="text-[10px] text-gray-500 tracking-widest uppercase m-0">// OBJECTIVE_CORE</p>
            <p className="text-xs text-white font-bold mt-1 tracking-wider m-0">FRONTEND / UIUX / MULTIMEDIA</p>
          </div>
        </div>

        {/* --- MAIN TIMELINE TRACK --- */}
        {/* Di layar besar (lg:) dia otomatis sejajar horizontal ke kanan, di mobile tetap vertikal ke bawah */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-6 items-stretch w-full overflow-x-visible">
          
          {/* LAYAR DESKTOP ONLY: JALUR PIPA HORIZONTAL DI BELAKANG CARD */}
          <div className="absolute top-8 left-0 right-0 h-[2px] bg-white/5 hidden lg:block z-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-[#8B5CF6]/30 via-white/5 to-transparent" />
          </div>

          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 relative z-10 flex flex-col group min-w-0"
            >
              
              {/* LAYAR DESKTOP ONLY: INDIKATOR NODE STAGE */}
              <div className="hidden lg:flex items-center justify-center w-5 h-5 bg-[#080808] border-2 border-gray-700 rounded-none rotate-45 mb-10 mx-auto group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6] group-hover:shadow-[0_0_12px_#8B5CF6] transition-all duration-300 pointer-events-none" />

              {/* THE BRUTALIST INTERACTIVE CARD */}
              <div className="border border-white/10 bg-[#0c0c0c] p-6 md:p-8 flex-1 flex flex-col justify-between relative overflow-hidden transition-all duration-500 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#0f0c1b]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                
                {/* BACKGROUND WATERMARK INDEX */}
                <div className="absolute -top-4 -right-2 font-mono text-7xl font-black text-white/[0.02] group-hover:text-[#8B5CF6]/[0.05] tracking-tighter transition-all duration-500 select-none pointer-events-none">
                  {item.index}
                </div>

                {/* CARD CONTENT HEADER */}
                <div>
                  <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                    <div className="text-lg p-2.5 bg-white/[0.03] border border-white/10 text-gray-400 group-hover:text-white group-hover:bg-[#8B5CF6] group-hover:border-[#8B5CF6] transition-all duration-300">
                      {item.icon}
                    </div>
                    <span className="font-mono text-[10px] text-[#8B5CF6] font-bold bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 px-2.5 py-0.5 tracking-wider">
                      {item.year}
                    </span>
                  </div>

                  {/* TITLE BLOCKS */}
                  <div className="space-y-1 mb-4">
                    <span className="font-mono text-[9px] text-gray-500 block uppercase tracking-widest">
                      // {item.location}
                    </span>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white m-0">
                      {item.title}
                    </h3>
                    <h4 className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wide m-0 italic">
                      {item.subtitle}
                    </h4>
                  </div>

                  {/* DESKRIPSI UTAMA CERITA LU */}
                  <p className="text-xs font-mono text-gray-400 leading-relaxed uppercase tracking-wide m-0 pt-2 border-t border-white/[0.03] group-hover:text-gray-200 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>

                {/* CARD MICRO FOOTER */}
                <div className="mt-8 pt-4 border-t border-white/[0.03] flex justify-between items-center font-mono text-[8px] tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors">
                  <span>STAGE_#{item.index}</span>
                  <span className="text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">&gt;&gt;&gt;</span>
                </div>

                {/* LASER LINE ACCENT ON HOVER */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#8B5CF6] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_#8B5CF6]" />
              </div>

            </motion.div>
          ))}
        </div>

        {/* --- TRACK TERMINAL FOOTER --- */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[9px] text-gray-500 tracking-[0.3em] uppercase flex items-center gap-3 m-0">
            <span className="w-1.5 h-1.5 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            All system logs successfully integrated to cluster
          </div>
          <div className="font-mono text-[9px] text-gray-600 tracking-widest uppercase m-0">
            [ ATH_TERMINAL_CHRONO_V3 ]
          </div>
        </div>

      </div>
    </div>
  );
}