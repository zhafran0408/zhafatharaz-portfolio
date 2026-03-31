import React from 'react';
import { motion } from 'framer-motion';

export default function SocialMedia() {
  const socialLinks = [
    { name: 'Instagram', url: "https://instagram.com/zhafatharaz" },
    { name: 'Github', url: "https://github.com/zhafran0408" },
    { name: 'LinkedIn', url: "https://www.linkedin.com/in/zhafran-atha-razin-hadiny-93315b385/" }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-20 bg-[#080808] text-white relative overflow-hidden">
      
      {/* Glow Effect - Violet Glow di pojok biar estetik */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/30 to-transparent" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* --- LEFT: BOLD HIRE ME --- */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:flex-1"
        >
          {/* Teks Utama: Singkat, Padat, Jelas */}
          <h1 className="text-7xl md:text-[11vw] font-black tracking-[ -0.05em] uppercase leading-[0.8] mb-4">
            HIRE <br /> 
            <span className="text-[#8B5CF6] italic font-light drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">ME</span>
          </h1>
          
          <p className="text-[9px] md:text-xs font-bold text-gray-500 tracking-[0.4em] uppercase mb-12 max-w-[280px] leading-loose">
            Let's create the future together.
          </p>

          {/* Form Web3Forms yang Super Minimalis */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="w-full max-w-sm space-y-6"
          >
            <input type="hidden" name="access_key" value="3c384121-ffcc-4f1f-af8a-aa241321f4e9" />
            
            <div className="group flex flex-col gap-1 border-b border-white/10 focus-within:border-[#8B5CF6] transition-all duration-500">
              <input 
                type="email" 
                name="email" 
                placeholder="YOUR EMAIL*" 
                className="bg-transparent py-4 outline-none text-[10px] uppercase font-bold text-white placeholder:text-gray-800 tracking-widest"
                required 
              />
            </div>
            
            <div className="group flex flex-col gap-1 border-b border-white/10 focus-within:border-[#8B5CF6] transition-all duration-500">
              <textarea 
                name="message" 
                placeholder="TELL ME SOMETHING...*" 
                className="bg-transparent py-4 outline-none text-[10px] uppercase font-bold text-white placeholder:text-gray-800 h-14 resize-none tracking-widest"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="group text-[10px] font-black uppercase tracking-[0.6em] text-[#8B5CF6] hover:text-white transition-all text-left flex items-center gap-4 pt-4"
            >
              SEND MESSAGE <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </form>
        </motion.div>

        {/* --- RIGHT: SOCIAL LINKS --- */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-auto flex flex-col items-start md:items-end justify-end self-end mt-10 md:mt-0"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-700 mb-6 md:mb-10">Follow Me</span>
          <div className="flex flex-row md:flex-col flex-wrap gap-x-10 gap-y-4 md:gap-6">
            {socialLinks.map((soc) => (
              <a 
                key={soc.name}
                href={soc.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-xl md:text-5xl font-black uppercase tracking-tighter text-gray-600 hover:text-[#8B5CF6] transition-all duration-300 hover:italic"
              >
                {soc.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER LABEL */}
      <div className="mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 opacity-20 text-[7px] md:text-[9px] font-black tracking-[0.8em] uppercase">
        <p>© 2026 ZHAFRAN ATHA</p>
        <p className="hidden md:block">BASED IN INDONESIA</p>
      </div>
    </section>
  );
}
