import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from './OpeningScreen';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Achievement from './Achievement';
import Journey from './Journey';
import SocialMedia from './SocialMedia';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative bg-[#080808] overflow-x-hidden text-white min-h-screen font-sans selection:bg-[#8B5CF6]/30 selection:text-white">
      <AnimatePresence mode="wait">
        {isLoading && (
          <OpeningScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="w-full min-h-screen flex flex-col justify-between relative z-10">
          <Navbar />
          
          <main className="w-full flex-grow">
            <section id="home">
              <Home />
            </section>

            <section id="about">
              <About />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="achievement">
              <Achievement />
            </section>

            <section id="journey">
              <Journey />
            </section>

            <section id="contact">
              <SocialMedia />
            </section>
          </main>
        </div>
      )}
    </div>
  );
}


