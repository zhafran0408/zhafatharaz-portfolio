import React, { useState } from "react";
import Opening from "./opening";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
// 1. Import menu barunya (pastikan path filenya benar)
import StaggeredMenu from "./components/StaggeredMenu"; 

export default function App() {
  const [openingDone, setOpeningDone] = useState(false);

  // 2. Siapkan data untuk menu navigasinya
  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'Projects', link: '#projects' },
    { label: 'Skills', link: '#skills' },
    { label: 'Contact', link: '#social' }
  ];

  const socialLinks = [
    { label: 'Instagram', link: 'https://instagram.com/zhafatharaz' },
    { label: 'GitHub', link: 'https://github.com/zhafatharaz' }
  ];

  if (!openingDone) {
    return <Opening onFinish={() => setOpeningDone(true)} />;
  }

  return (
    <>
      {/* 3. Ganti <Navbar /> lama dengan StaggeredMenu */}
      <StaggeredMenu 
        items={menuItems}
        socialItems={socialLinks}
        position="right"
        accentColor="#5227FF"
        colors={['#B19EEF', '#5227FF']} // Warna transisi panel
        isFixed={true} 
      />

      
      <div id="home"><Home /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="social"><SocialMedia /></div>
    </>
  );
}

