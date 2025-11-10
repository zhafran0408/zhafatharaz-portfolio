import React from "react";
import bluecalcImg from "./assets/bluecalc.png";
import cekgulakuImg from "./assets/cekgulaku.png";
import eduverseImg from "./assets/eduverse.png";

export default function Projects() {
  const projects = [
    {
      title: "BlueCalc",
      desc: "Kalkulator modern dengan desain biru minimalis dan fitur dark mode.",
      img: bluecalcImg,
      link: "https://calculator-phi-lilac-99.vercel.app/",
    },
    {
      title: "CekGulaKu",
      desc: "Website cek risiko diabetes yang membantu pengguna menjaga kesehatan dan dibuat sederhana.",
      img: cekgulakuImg,
      link: "https://cekgulaku.vercel.app/",
    },
    {
      title: "Eduverse",
      desc: "Platform edukasi digital dengan tampilan interaktif dan informatif dan website ini belum selesai.",
      img: eduverseImg,
      link: "https://fawwazrn.github.io/EDUVERSE/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">My Projects</h2>
        <p className="text-gray-600  text-center mb-10">
          Beberapa proyek yang telah saya buat dalam bidang pendidikan dan teknologi.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white"
            >
              {/* Gambar di atas title */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl text-gray-800 font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                Lihat Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
