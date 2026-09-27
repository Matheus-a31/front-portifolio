"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md py-4 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="nav-logo text-xl font-extrabold tracking-tight text-slate-800 hover:opacity-80 transition-opacity duration-150"
        >
          Matheus<span className="text-blue-600">.</span>
        </Link>

        <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/" className="nav-link animated-underline hover:text-blue-600 transition-colors duration-200">
            Sobre mim
          </a>
          <a href="/projetos" className="nav-link animated-underline hover:text-blue-600 transition-colors duration-200">
            Projetos
          </a>
        </div>
      </div>
    </nav>
  );
}