"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition ${scrolled ? "backdrop-blur-md bg-black/40 border-b border-white/10" : "bg-transparent"}`}>
      <div className="section-left py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold tracking-wide text-xl"><span className="text-brand-400">Zion</span>XAI</Link>
        <nav className="hidden md:flex gap-7 text-white/80">
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#clients" className="hover:text-white">Clients</Link>
          <Link href="#work" className="hover:text-white">Work</Link>
          <Link href="#contact" className="hover:text-white">Contact</Link>
        </nav>
        {/* <Link href="#contact" className="btn hidden md:inline-flex">Talk to an expert</Link> */}
        {/* // in Navbar.tsx */}
<a href="/contact" className="btn hidden md:inline-flex">Talk to an expert</a>

      </div>
    </header>
    
  );
  
}
