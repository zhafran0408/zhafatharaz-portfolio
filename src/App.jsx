import React, { useState } from "react";
import Opening from "./opening";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";

export default function App() {
  const [openingDone, setOpeningDone] = useState(false);

  if (!openingDone) {
    return <Opening onFinish={() => setOpeningDone(true)} />;
  }

  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <SocialMedia />
    </>
  );
}

