import React from "react";
import InstagramLogo from "./assets/instagram.png";
import instagram from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";
import whatsapp from "./assets/whatsapp.png";
import gmail from "./assets/gmail.png";
export default function SocialMedia() {
  const socials = [
    {
      name: "Instagram",
      img: instagram,
      link: "https://www.instagram.com/zhafatharaz/",
    },
    {
      name: "LinkedIn",
      img: linkedin,
      link: "https://www.linkedin.com/in/zhafran-atha-razin-hadiny-93315b385",
    },
    {
      name: "GitHub",
      img: github,
      link: "https://github.com/zhafran0408",
    },
    {
      name: "WhatsApp",
      img: whatsapp,
      link: "https://wa.me/0813 1721 7509",
    },
    {
      name: "Gmail",
      img: gmail,
      link: "mailto:zhafranatharazin@gmail.com",
    },
  ];

   return (
    <section
      id="social"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-white text-gray-800 py-20 px-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">
        Hubungi Saya
      </h2>

      <p className="text-gray-600 max-w-xl text-center mb-10 leading-relaxed">
        Yuk, ngobrol santai! 🚀  
        Bisa soal proyek bareng, ide kreatif, konten bareng, atau sekadar menyapa.  
        Klik aja yang di bawah ini insya Allah selalu connect!👌
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 transform hover:scale-110 transition-all duration-300"
          >
            <img
              src={social.img}
              alt={social.name}
              className="w-12 h-12 object-contain hover:opacity-80 transition"
            />
            <p className="text-sm font-medium">{social.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
