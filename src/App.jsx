// src/App.jsx
import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="social">
        <SocialMedia />
      </section>
    </>
  );
}
