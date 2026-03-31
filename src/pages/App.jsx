import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import SocialMedia from './SocialMedia';

export default function App() {
  return (
    <div className="relative bg-[#F2F2F2] overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
         
          <About />
        </section>

        <section id="project">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <SocialMedia />
        </section>
      </main>

      <footer className="py-10 text-center text-[10px] font-bold tracking-widest uppercase opacity-30">
        © 2026 ZHAFATHARAZ*
      </footer>
    </div>
  );
}


