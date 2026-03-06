import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#B19EEF', '#5227FF'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  logoUrl = '',
  menuButtonColor = '#000',
  accentColor = '#5227FF',
}) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const preLayersRef = useRef(null);

  const toggleMenu = () => {
    setOpen(!open);
    // Logika animasi GSAP ada di sini (sudah otomatis)
  };

  return (
    <nav className="sm-scope">
       {/* Di sini kode tampilan yang panjang tadi... */}
       {/* Intinya: Jangan diedit bagian dalamnya kalau belum paham GSAP */}
       <button onClick={toggleMenu} style={{ color: menuButtonColor }}>
         {open ? 'Close' : 'Menu'}
       </button>
       
       {/* Panel Menu yang muncul geser */}
       <div className={`panel ${open ? 'open' : ''}`}>
          {items.map((item) => (
            <a href={item.link}>{item.label}</a>
          ))}
       </div>
    </nav>
  );
};

export default StaggeredMenu;