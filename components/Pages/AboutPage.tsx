"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const line = document.querySelector(".about-line");
    const header = document.querySelector("#about-header");
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(line, {
      left: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: document.getElementById("about-header"),
        start: "-50% top",
        end: "50% bottom",
      },
    });

    gsap.to(header, {
      transform: "translateY(0)",
      opacity: 1,
      duration: 0.5,
      scrollTrigger: {
        trigger: header,
        start: "100px top",
        end: "50% bottom",
      },
    });
  });

  return (
    <div id="aboutSection" className="{poppins.className} p-5">
      <div className="w-fit">
        <h2 className="text-2xl" id="about-header">
          About Me
        </h2>
        <div className="about-line"></div>
      </div>
      <div className="mt-5">
        <span className="text-justify">
          I’m a backend/full-stack developer who thrives on solving problems
          through clean architecture, automation, and well-designed APIs. I’ve
          developed and deployed multiple production-ready systems — including
          bots, dashboards, and web platforms — and I’m comfortable taking
          ownership of a feature from concept to delivery. I work fast,
          communicate well, and always prioritize code quality and long-term
          maintainability. I’m continuously learning, improving, and pushing
          myself to become the kind of developer people can depend on.
        </span>
      </div>
    </div>
  );
}
