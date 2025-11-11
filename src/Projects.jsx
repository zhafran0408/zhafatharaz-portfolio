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
      desc: "Platform edukasi digital dengan tampilan interaktif dan informatif. Website ini masih dalam tahap pengembangan.",
      img: eduverseImg,
      link: "https://fawwazrn.github.io/EDUVERSE/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-50 text-gray-800"
    >
      {/* Wave divider dari atas */}
      <div className="absolute -top-1 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 md:h-32"
        >
          <path
            fill="#f3f4f6"
            d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,186.7C672,181,768,203,864,186.7C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160V0H0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
          My Projects
        </h2>
        <p className="text-gray-600 mb-14 text-lg">
          Beberapa proyek yang telah saya kembangkan di bidang pendidikan dan teknologi,
          dirancang untuk memberikan pengalaman digital yang modern dan bermanfaat.
        </p>

        {/* Grid project cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl shadow-md p-6 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-5">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition"
              >
                Lihat Website
              </a>
            </div>
          ))}
        </div>
      </div>

         <div className="border-t border-gray-300 w-4/5 mx-auto my-12"></div>
    </section>
  );
}

