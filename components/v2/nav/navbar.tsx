"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const navItems = [
  { href: "/v2", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? "bg-gray-900/30 backdrop-blur-md shadow-lg py-2" 
          : "bg-transparent py-4"}
      `}
    >
      <div className="flex justify-between items-center px-10">
        <Link href="/home" className="text-lg font-bold">
          IM.FIEKRI
        </Link>

        <div className="items-center gap-1 hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/resume"
            className="ml-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white text-sm font-medium transition"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
