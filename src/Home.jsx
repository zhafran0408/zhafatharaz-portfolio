import React, { useState, useEffect } from "react";
import portfolioImage from "./assets/profil.png";
import profileImage from "./assets/profil.png";

export default function Home() {
  const texts = ["Halo, Saya Zhafran Atha Razin Hadiny"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayedText(currentText.slice(0, displayedText.length - 1)),
        30
      );
    } else {
      timeout = setTimeout(
        () => setDisplayedText(currentText.slice(0, displayedText.length + 1)),
        60
      );
    }
    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToSocial = () => {
    const section = document.getElementById("socialmedia");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white text-gray-800 flex flex-col justify-center"
    >
     
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between max-w-6xl mx-auto px-6 py-20 md:py-28">
        
        <div className="hidden md:flex justify-center w-1/2">
          <img
            src={portfolioImage}
            alt="Foto Portfolio"
            className="rounded-full border-4 border-gray-800 shadow-xl w-80 h-80 object-cover"
          />
        </div>

        
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 h-[120px]">
            {displayedText}
            <span className="border-r-4 border-gray-900 animate-pulse ml-1"></span>
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Saya adalah seseorang yang senang belajar, mencoba hal-hal baru, dan
            menciptakan karya yang berarti. Dunia digital selalu menjadi tempat
            di mana ide-ide saya tumbuh dan berkembang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={handleScrollToProjects}
              className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md"
            >
              View Projects
            </button>
            <a
              href="#social"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("social");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-2 bg-gray-800 text-white px-6 py-3 rounded-xl transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Tentang Saya</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6 md:hidden ">
            <img
              src={profileImage}
              alt="Foto Profil"
              className="w-40 h-40 rounded-full border-4 border-gray-800 shadow-md object-cover"
            />
          </div>
          <p className="text-gray-600 leading-relaxed">
            Saya adalah seorang pelajar yang aktif dan terus mengembangkan diri
            melalui berbagai proyek teknologi serta kegiatan ekstrakurikuler.
            Saya memiliki ketertarikan pada
            <span className="font-semibold ">desain UI/UX</span>,
            <span className="font-semibold">pengembangan web</span>, dan
            <span className="font-semibold "> fotografi</span>. Selain itu, saya
            juga berupaya untuk membangun solusi digital yang bermanfaat bagi
            banyak orang sekaligus memperdalam kemampuan di bidang akademik.
          </p>
        </div>
      </div>
    </section>
  );
}
