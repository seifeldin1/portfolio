// components/Navbar.js
"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when a link is clicked.
  const handleLinkClick = () => setIsOpen(false);

  // Optional: Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar fixed top-0 w-full bg-[#2c3e50] p-4 md:p-6 flex items-center justify-between z-50">
      <div className="logo text-xl md:text-2xl font-bold text-[#f39c12]">
        <Link href="/" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 sparkle">
            S.D
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 md:gap-8 text-sm md:text-base">
        <Link href="/#home" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          Home
        </Link>
        <Link href="/#about" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          About
        </Link>
        <Link href="/#skills" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          Skills
        </Link>
        <Link href="/#projects" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          Projects
        </Link>
        <Link href="/#contact" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          Contact
        </Link>
        <Link href="/experience" className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
          Experience &amp; Education
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#f39c12] focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-16 left-0 w-full bg-[#2c3e50] flex flex-col items-center py-4 space-y-3 md:hidden">
          <Link href="/#home" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            Home
          </Link>
          <Link href="/#about" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            About
          </Link>
          <Link href="/#skills" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            Skills
          </Link>
          <Link href="/#projects" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            Projects
          </Link>
          <Link href="/#contact" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            Contact
          </Link>
          <Link href="/experience" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105 text-base">
            Experience &amp; Education
          </Link>
        </div>
      )}
    </nav>
  );
}
