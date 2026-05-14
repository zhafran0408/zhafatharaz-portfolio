import React from 'react';
import { motion } from 'framer-motion';

export default function SocialMedia() {
  const socialLinks = [
    { name: 'Instagram', url: "https://instagram.com/zhafatharaz" },
    { name: 'Github', url: "https://github.com/zhafran0408" },
    { name: 'LinkedIn', url: "https://www.linkedin.com/in/zhafran-atha-razin-hadiny-93315b385/" }
  ];

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-20 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Glow Effect - Violet Glow biar estetik */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        
        {/* --- LEFT: BOLD HIRE ME --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full md:flex-1 text-center md:text-left"
        >
          <h1 className="text-7xl md:text-[11vw] font-black tracking-[-0.05em] uppercase leading-[0.8] mb-6">
            HIRE <br /> 
            <span className="text-[#8B5CF6] italic font-light drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">ME</span>
          </h1>
          
          <p className="text-[10px] md:text-xs font-bold text-gray-500 tracking-[0.4em] uppercase max-w-xs mx-auto md:mx-0 leading-loose">
            Available for freelance and full-time positions. Let's build something iconic.
          </p>
        </motion.div>

        {/* --- RIGHT: SOCIAL LINKS --- */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-auto flex flex-col items-center md:items-end justify-center"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-700 mb-8 md:mb-12">Connect With Me</span>
          <div className="flex flex-col items-center md:items-end gap-6 md:gap-8">
            {socialLinks.map((soc) => (
              <a 
                key={soc.name}
                href={soc.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-gray-600 hover:text-[#8B5CF6] transition-all duration-300 hover:italic relative group"
              >
                {soc.name}
                <span className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 text-[#8B5CF6] text-2xl md:text-4xl">→</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER LABEL */}
      <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[8px] md:text-[10px] font-black tracking-[0.6em] uppercase">
        <p>© 2026 ZHAFRAN ATHA</p>
        <div className="flex gap-8">
          <p>BUILT WITH REACT</p>
          <p className="hidden md:block">BASED IN INDONESIA</p>
        </div>
      </div>
    </section>
  );
}
