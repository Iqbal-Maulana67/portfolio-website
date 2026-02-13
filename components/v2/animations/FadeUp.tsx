"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeUpProps {
  children: React.ReactNode;
  delay: number;
}

const FadeUp = ({ children, delay = 0 }: FadeUpProps) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top",
            once: true, // animate once
            markers: true,
          },
        },
      );
    });

    return () => ctx.revert(); // cleanup for React strict mode
  }, []);

  return <div ref={el}>{children}</div>;
};

export default FadeUp;
