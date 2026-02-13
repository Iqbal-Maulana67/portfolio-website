"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypingText({
  text,
  speed = 60,
  className = "",
}: TypingTextProps) {
  const [displayed, updateDisplay] = useState("");

  let animID: any;

  useEffect(() => {
    updateDisplay(text.charAt(0));
    animID = setInterval(typeLetter, speed);
    return () => {
      updateDisplay("");
      clearInterval(animID);
    };
  }, [text, speed]);

  const typeLetter = () => {
    updateDisplay((prevText) => {
      if (text.length <= prevText.length) clearInterval(animID);
      return prevText.concat(text.charAt(prevText.length));
    });
  };

  return (
    <span
      className={`
        ${className}
      `}
    >
      {displayed}
    </span>
  );
}
