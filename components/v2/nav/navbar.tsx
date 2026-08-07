'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Project' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isTopBarCollapsed, setTopbarCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50 
        
      `}
    >
      <div
        className={`flex justify-between items-center px-5 md:px-10 py-2 transition-all duration-300 ${
          scrolled
            ? 'bg-gray-900/30 backdrop-blur-md shadow-lg py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <Link href="/" className="text-lg font-bold">
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
        <div className="items-center gap-1 flex md:hidden">
          <div
            className="px-2 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-cyan-500 hover:to-purple-600 text-white text-sm font-medium transition"
            onClick={() => {
              setTopbarCollapsed(!isTopBarCollapsed);
            }}
          >
            {isTopBarCollapsed ? <X></X> : <Menu></Menu>}
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-gray-900/30 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isTopBarCollapsed
            ? 'max-h-96 opacity-100 py-2'
            : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col">
          {navItems.map((item, index) => (
            <div
              key={item.href}
              style={{ transitionDelay: `${index * 50}ms` }}
              className={`py-4 border-t border-t-white text-sm font-medium transition-all duration-300 ease-out ${
                isTopBarCollapsed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-4'
              }`}
            >
              <Link
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-white/80 transition"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
