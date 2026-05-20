// src/data.js
export const sections = [
  { id: "home", title: "Home" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "journey", title: "Journey" }, // <-- TAMBAHIN INI BIAR MUNCUL DI NAVBAR LU
  { id: "socialmedia", title: "Social Media" },
];

export const handleScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};









