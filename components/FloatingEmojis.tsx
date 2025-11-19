"use client";

import { useEffect } from "react";

const icons = [
    "/icons/shapes/square.svg",
    "/icons/shapes/circle.svg",
    "/icons/shapes/rhombus.svg",
    "/icons/shapes/triangle.svg",
  ];

export default function FloatingEmojis() {
  useEffect(() => {
    const container = document.getElementById("svg-bg");

    const createIcon = () => {
      const svgCont = document.createElement("div");
      svgCont.className = "floating-svg";
      svgCont.style.left = Math.random() * 100 + "vw";
      svgCont.style.width = 30 + Math.random() * 40 + "px";
      svgCont.style.animationDuration = 5 + Math.random() * 5 + "s";
      container?.appendChild(svgCont);
      
      const img = document.createElement("img");
      img.src = icons[Math.floor(Math.random() * icons.length)];
      img.className = "rotating-svg";
      
      const spinDuration = 4 + Math.random() * 16;
      const spinDirection = Math.random() > 0.5 ? "normal" : "reverse";

      img.style.animation = `spin ${spinDuration}s linear ${spinDirection} infinite`;
      svgCont.appendChild(img);

      setTimeout(() => img.remove(), 16000);
    };

    const interval = setInterval(createIcon, 1500);
    return () => clearInterval(interval);
  }, []);

  return <div id="svg-bg" className="svg-wrapper"></div>;
}
