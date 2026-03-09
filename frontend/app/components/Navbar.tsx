"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/a-propos", label: "À PROPOS" },
    { href: "/membres", label: "MEMBRES" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Raleway:wght@400;500;600;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* BOUTON DON FLOTTANT POUR PC (Visible uniquement quand on scroll) */}
      <div
        className={`hidden md:flex fixed right-4 lg:right-8 z-60 transition-all duration-500 ${
          scrolled ? "top-4 opacity-100" : "-top-20 opacity-0"
        }`}
      >
        <Link
          href="/don"
          className="px-6 py-2 bg-[#f5c842] text-[#0d1b4b] text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#ffd94d] shadow-[0_0_15px_rgba(245,200,66,0.3)] transition-all duration-300 active:scale-95"
        >
          DON
        </Link>
      </div>

      {/* BARRE DE NAVIGATION PRINCIPALE */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-raleway ${
          scrolled
            ? "bg-[#0d1b4b]/95 backdrop-blur-md shadow-2xl py-2 md:-translate-y-full" // Disparaît sur PC (md:-translate-y-full)
            : "bg-[#0d1b4b] py-3 md:py-4 translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
              <Image
                  src="/cross.svg"
                  alt="Logo"
                  height={40} 
                  width={40}  
                  className="w-full h-full object-cover p-1"
                />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-cinzel text-white text-xs sm:text-sm font-bold tracking-widest uppercase">
                Amour de Dieu
              </span>
            </div>
          </Link>

          {/* Desktop Links (Visibles quand non-scrollé) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/80 hover:text-white text-[10px] lg:text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#f5c842] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* DON Button initial (intégré à la barre) */}
            <Link
              href="/don"
              className="ml-2 px-4 lg:px-6 py-1.5 lg:py-2 bg-[#f5c842] text-[#0d1b4b] text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#ffd94d] hover:shadow-[0_0_20px_rgba(245,200,66,0.4)] transition-all duration-300 active:scale-95"
            >
              DON
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
              }`}
            />
          </button>
        </div>

        {/* ========================================= */}
        {/* BOUTON DON MOBILE FIXÉ SOUS LA BARRE      */}
        {/* ========================================= */}
        <div
          className={`md:hidden absolute top-full left-0 w-full flex justify-end px-4 py-2 transition-all duration-300 ${
            menuOpen ? "opacity-0 invisible" : "opacity-100 visible"
          }`}
        >
           <Link
              href="/don"
              className="my-2 px-4 py-2 bg-[#f5c842] text-[#0d1b4b] text-[15px] font-bold tracking-[0.2em] uppercase rounded-full
               hover:bg-[#ffd94d] hover:shadow-[0_0_20px_rgba(245,200,66,0.4)] transition-all duration-300 active:scale-95"
            >
              DON
            </Link>
        </div>

        {/* Mobile menu (Dropdown) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 absolute w-full left-0 top-full ${
            menuOpen ? "max-h-96 opacity-100 shadow-xl" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-5 border-t border-white/10 bg-[#0d1b4b]/95 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-sm font-semibold tracking-[0.15em] uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/don"
              onClick={() => setMenuOpen(false)}
              className="self-start mt-2 px-8 py-3 bg-[#f5c842] text-[#0d1b4b] text-xs font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#ffd94d] transition-all duration-200"
            >
              Faire un don
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}