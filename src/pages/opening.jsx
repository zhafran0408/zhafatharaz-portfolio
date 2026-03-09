import React, { useEffect, useState } from "react";

export default function Opening({ onFinish }) {
  const brandingText = "Zhafatharaz"; // Dihilangkan spasi di awal/akhir untuk kontrol presisi
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Logika Mengetik
    if (displayedText.length < brandingText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(brandingText.slice(0, displayedText.length + 1));
      }, 120); // Sedikit lebih cepat agar tidak membosankan
      return () => clearTimeout(timer);
    } 
    
    // Logika Selesai & Slide Out
    else {
      const timer = setTimeout(() => {
        setSlideUp(true);
        setTimeout(() => {
          onFinish();
        }, 1000); // Beri waktu animasi slide-up selesai
      }, 1200); // Jeda setelah selesai mengetik sebelum menghilang
      return () => clearTimeout(timer);
    }
  }, [displayedText, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white overflow-hidden">
      <div
        className={`
          flex flex-col items-center transition-all duration-1000 ease-in-out
          ${slideUp ? "-translate-y-12 opacity-0 blur-lg" : "translate-y-0 opacity-100 blur-0"}
        `}
      >
        <h1 className="relative flex items-center text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-gray-900 uppercase">
          {displayedText}
          
          {/* Efek Kursor Berkedip */}
          {!slideUp && (
            <span className="ml-1 inline-block h-8 w-1 sm:h-12 md:h-16 bg-blue-600 animate-pulse" />
          )}
        </h1>
        
        {/* Dekorasi Garis Halus (Opsional) */}
        <div 
          className={`h-[2px] bg-gray-200 transition-all duration-1000 delay-300
          ${displayedText.length === brandingText.length ? "w-full" : "w-0"}`} 
        />
      </div>
    </div>
  );
}


























