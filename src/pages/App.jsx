import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Achievement from './Achievement';
import Journey from './Journey';
import SocialMedia from './SocialMedia';

export default function App() {
  return (
    <div className="relative bg-[#F2F2F2] overflow-x-hidden text-black min-h-screen">
      {/* Komponen Navigasi Global */}
      <Navbar />
      
      <main>
        {/* Seksi Utama / Jumbotron */}
        <section id="home">
          <Home />
        </section>

        {/* Seksi Tentang Saya */}
        <section id="about">
          <About />
        </section>

        {/* Seksi Galeri Proyek */}
        <section id="projects">
          <Projects />
        </section>

        {/* Seksi Keahlian Teknis */}
        <section id="skills">
          <Skills />
        </section>

        {/* Seksi Sertifikasi & Pencapaian Interaktif */}
        <section id="achievement">
          <Achievement />
        </section>

        {/* Seksi Pengalaman / Linimasa Perjalanan */}
        <section id="journey">
          <Journey />
        </section>

        {/* Seksi Sosial Media / Kontak */}
        <section id="contact">
          <SocialMedia />
        </section>
      </main>
    </div>
  );
}


