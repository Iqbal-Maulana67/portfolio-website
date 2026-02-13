"use client"

import { useEffect, useState } from "react"

interface TypingGradientTextProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delay?: number
  className?: string
}

export default function TypingGradientText({
  texts,
  speed = 80,
  deleteSpeed = 50,
  delay = 1200,
  className = "",
}: TypingGradientTextProps) {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    const current = texts[textIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      // TYPING
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1))
          setCharIndex((i) => i + 1)
        }, speed)
      } else {
        // selesai ngetik → tunggu → mulai delete
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, delay)
      }
    } else {
      // DELETING
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1))
          setCharIndex((i) => i - 1)
        }, deleteSpeed)
      } else {
        // selesai hapus → next word
        setIsDeleting(false)
        setTextIndex((i) => (i + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, delay])

  return (
    <span
      className={`
        bg-gradient-to-r 
        from-blue-500 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        font-bold
        ${className}
      `}
    >
      {displayed}
      <span className="animate-pulse ml-1"></span>
    </span>
  )
}
