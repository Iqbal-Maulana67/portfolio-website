"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let mm = gsap.matchMedia();
    let locoScroll: any;

    async function initLoco() {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;


      mm.add("(min-width: 768px)", () => {
        gsap.registerPlugin(ScrollTrigger);

        const el = document.querySelector<HTMLElement>("#scroll-container");
        if (!el) return;

        locoScroll = new LocomotiveScroll({
          el,
          
        });

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(el, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          pinType: el.style.transform ? "transform" : "fixed",
        });

        let pinWrap = document.querySelector<HTMLElement>(".pin-wrap");
        if (!pinWrap) return;

        gsap.to(".pin-wrap", {
          x: () => -(pinWrap.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: "#sectionPin",
            scroller: "#scroll-container",
            pin: true,
            scrub: true,
            start: "top top",
            end: () => "+=" + (pinWrap.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
            onUpdate(self) {
              console.log("Updating:", self.progress);
            },
          },
        });

        gsap.to(".project-header", {
          x: -50,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".project-header",
            // scrub: true,
            toggleActions: "play reverse play none",
          },
        });

        ScrollTrigger.addEventListener("refresh", () => {
          locoScroll.update();
          console.log("Loco updated");
        });
        ScrollTrigger.refresh();
      });
    }

    initLoco();

    return () => {
      if (locoScroll) locoScroll.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="scroll-container" data-scroll-container>
      {children}
    </div>
  );
}
