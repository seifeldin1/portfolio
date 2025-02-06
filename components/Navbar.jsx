// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar fixed top-0 w-full bg-[#2c3e50] p-6 flex justify-between items-center z-50">
      <div className="logo text-2xl font-bold text-[#f39c12]">
      <Link href="/#home" className="transition-transform duration-300  hover: sparkle">
        S.D
      </Link>
      </div>
      <ul className="nav-links flex gap-8">
        <li>
          <Link href="/#home" className="hover:text-[#f39c12]">Home</Link>
        </li>
        <li>
          <Link href="/#about" className="hover:text-[#f39c12]">About</Link>
        </li>
        <li>
          <Link href="/#skills" className="hover:text-[#f39c12]">Skills</Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:text-[#f39c12]">Projects</Link>
        </li>
        <li>
          <Link href="/#contact" className="hover:text-[#f39c12]">Contact</Link>
        </li>
        <li>
          <Link href="/experience" className="hover:text-[#f39c12]">
            Experience &amp; Education
          </Link>
        </li>
      </ul>
    </nav>
  );
}
