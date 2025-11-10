import React from "react";

import htmlLogo from "./assets/html.svg";
import cssLogo from "./assets/css.svg";
import jsLogo from "./assets/js.svg";
import tailwindLogo from "./assets/tailwind.svg";
import reactLogo from "./assets/react.svg";
import cameraLogo from "./assets/camera.svg";
import figmaLogo from "./assets/figma.svg";
import uiuxLogo from "./assets/ui-ux.png";
import lightroomLogo from "./assets/adobe-lightroom.svg";
import capcutLogo from "./assets/capcut.svg";
import canvaLogo from "./assets/canva.svg";

export default function MySkills() {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JavaScript", img: jsLogo },
    { name: "Tailwind CSS", img: tailwindLogo },
    { name: "React", img: reactLogo },
    { name: "Photography", img: cameraLogo },
    { name: "Figma", img: figmaLogo },
    { name: "UI/UX", img: uiuxLogo },
    { name: "Lightroom", img: lightroomLogo },
    { name: "CapCut", img: capcutLogo },
    { name: "Canva", img: canvaLogo },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-white text-gray-800 py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Skills & Tools</h2>
        <p className="text-gray-600 mb-12 text-lg">
          keahlian yang saya kuasai dan masih terus di asah
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center bg-gray-100 hover:bg-gray-200overflow-hidden  hover:scale-105 transition-transform duration-300  rounded-xl p-4 shadow-md "
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-3"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
