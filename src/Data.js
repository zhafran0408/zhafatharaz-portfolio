// src/data.js
export const sections = [
  { id: "home", title: "Home" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "socialmedia", title: "Social Media" },
];

export const handleScrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};









