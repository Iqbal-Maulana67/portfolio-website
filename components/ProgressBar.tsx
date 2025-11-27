"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export default function ProgressBar({ loadingBar } : {loadingBar : any}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bar = document.querySelector("#prog-bar")

    gsap.to(bar, {
      width: `${loadingBar.width}%`,
      duration: 2,
      scrollTrigger:
      {
        trigger: bar,
      }
    })
  });

  return (
    <div className="w-full rounded-2xl bg-gray-700">
      <div
        className="rounded-2xl"
        style={{
          height: "5px",
          backgroundColor: `${loadingBar.hexColor}`,
          width: `0%`,
        }}
       id="prog-bar"></div>
    </div>
  );
}
