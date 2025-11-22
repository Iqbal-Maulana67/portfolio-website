"use client";

import { useEffect } from "react";

const jobDesk = [
  "Backend Developer",
  "Fullstack Developer",
  "Discord Bot Developer",
  "Telegram Bot Developer",
];

export default function JobShow() {
  useEffect(() => {
    const container = document.getElementById("job-span-container");
    const span = document.createElement("span");
    span.className = "job-text";
    container?.appendChild(span);

    let j = 0;
    const speed = 3000;

    function animateChange() {
      // fade + slide old text out
      span.classList.remove("show");
      span.classList.add("hide");

      setTimeout(() => {
        // change text while hidden
        span.innerHTML = jobDesk[j];

        // fade + slide new text in
        span.classList.remove("hide");
        span.classList.add("show");

        j = (j + 1) % jobDesk.length;

        setTimeout(animateChange, speed);
      }, 400); // matches CSS transition time
    }

    // Start animation
    animateChange();
  }, []);

  return (
    <div id="job-span-container" className="mt-4 text-lg opacity-80"></div>
  );
}
