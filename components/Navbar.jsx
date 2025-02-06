// components/Navbar.js
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu when a link is clicked.
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar fixed top-0 w-full bg-[#2c3e50] p-6 flex items-center justify-between z-50">
      <div className="logo text-2xl font-bold text-[#f39c12]">S.S</div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
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
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#f39c12] focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#2c3e50] flex flex-col items-center py-4 space-y-4 md:hidden">
          <Link href="/#home" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            Home
          </Link>
          <Link href="/#about" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            About
          </Link>
          <Link href="/#skills" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            Skills
          </Link>
          <Link href="/#projects" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            Projects
          </Link>
          <Link href="/#contact" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            Contact
          </Link>
          <Link href="/experience" onClick={handleLinkClick} className="transition-transform duration-300 hover:text-[#f39c12] hover:scale-105">
            Experience &amp; Education
          </Link>
        </div>
      )}
    </nav>
  );
}
