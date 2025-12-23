import React, { useEffect, useState } from "react";

export default function Opening({ onFinish }) {
  const brandingText = " Zhafatharaz ";
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    if (letterIndex < brandingText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + brandingText[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setSlideUp(true);
        setTimeout(() => {
          onFinish();
        }, 800);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [letterIndex, displayedText]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-4 sm:p-8 md:p-12 overflow-hidden">
      <h1
        className={`
          break-words
          text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 text-center
          transition-all duration-700 ease-out
          ${slideUp ? "-translate-y-20 opacity-0" : "translate-y-0 opacity-100"}
        `}
      >
        {displayedText}
      </h1>
    </div>
  );
}


























