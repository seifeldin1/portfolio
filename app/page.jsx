import Image from "next/image";
import { Github, Briefcase, Folder, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-300">
        I am Seifeldin Sameh, passionate about web development.
      </p>
      <p className="text-lg text-gray-300">
        I have experience in building responsive and user-friendly web applications. I am a fullstack engineer.
      </p>
      <Image
        src="/images/profile.jpeg"
        alt="Profile Picture"
        width={200}
        height={200}
        className="rounded-full mt-6"
      />

      <div className="flex gap-6 mt-16">
        <div className="relative group">
          <a
            href="https://github.com/seifeldin1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-8 h-8 hover:text-gray-400 transition-colors" />
          </a>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            GitHub
          </div>
        </div>

        <div className="relative group">
          <Link href="/experience">
            <Briefcase className="w-8 h-8 hover:text-gray-400 transition-colors" />
          </Link>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Experience And Skills
          </div>
        </div>

        <div className="relative group">
          <Link href="/projects">
            <Folder className="w-8 h-8 hover:text-gray-400 transition-colors" />
          </Link>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Projects
          </div>
        </div>

        <div className="relative group">
          <a href="mailto:seif1442004@gmail.com">
            <Mail className="w-8 h-8 hover:text-gray-400 transition-colors" />
          </a>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Email
          </div>
        </div>
      </div>
    </div>
  );
}
