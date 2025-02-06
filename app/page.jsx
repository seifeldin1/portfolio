// pages/index.js
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import "../styles/global.css";
import { 
  SiC, SiCplusplus, SiGo, SiTypescript, SiJavascript, SiDotnet, 
  SiNextdotjs, SiNodedotjs, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiMongodb, 
  SiMysql, SiGithub, SiPostman 
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const skills = [
    { icon: <SiC size={40} />, name: "C" },
    { icon: <SiCplusplus size={40} />, name: "C++" },
    { icon: <TbBrandCSharp size={40} />, name: "C#" },
    { icon: <SiGo size={40} />, name: "Go" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <SiDotnet size={40} />, name: ".NET" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiNodedotjs size={40} />, name: "Node.js" },
    { icon: <SiReact size={40} />, name: "React" },
    { icon: <SiHtml5 size={40} />, name: "HTML" },
    { icon: <SiCss3 size={40} />, name: "CSS" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <SiMysql size={40} />, name: "MySQL" },
    { icon: <SiGithub size={40} />, name: "GitHub" },
    { icon: <SiPostman size={40} />, name: "Postman" },
  ];
  const repeatedSkills = [...skills];

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header 
        id="home" 
        className="hero pt-20 pb-8 text-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))"
        }}
      >
        <div className="hero-content mb-12 mt-12 px-4">
          <Image
            src="/images/profile.jpeg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-[#f39c12] mx-auto transition-transform duration-300 hover:scale-105 sparkle"
          />
          <h1 className="text-2xl sm:text-4xl font-bold mt-4 text-[#f39c12]">
            Seifeldin Sameh
          </h1>
          <p className="text-lg sm:text-xl mt-2 text-[#f39c12]">Fullstack Developer</p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 text-center px-4">
        <h2 className="text-2xl sm:text-3xl mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base">
          I am Seifeldin Sameh, passionate about web development. I have experience in building responsive and user-friendly web applications. I am a fullstack engineer with skills ranging from front-end to back-end development.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills py-12 sm:py-28 bg-[#2c3e50] text-center px-4">
        <h2 className="text-2xl sm:text-3xl mb-6">Technical Skills</h2>
        <div className="skills-container flex flex-wrap justify-center gap-4 sm:gap-6">
          {repeatedSkills.map((skill, index) => (
            <div key={index} className="skill-card bg-[#34495e] p-3 sm:p-4 rounded-lg w-24 sm:w-32 flex flex-col items-center hover:-translate-y-1 transition-transform">
              {skill.icon}
              <p className="mt-1 text-xs sm:text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section Preview */}
      <section id="projects" className="projects py-12 sm:py-28 mb-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl mb-6">Featured Projects</h2>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mx-auto max-w-6xl">
          <div className="project-card bg-[#34495e] p-4 sm:p-6 rounded-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xl sm:text-2xl font-bold">Palestine Donation Website</h3>
            <p className="mt-1 text-sm">Platform for humanitarian donations</p>
          </div>
          <div className="project-card bg-[#34495e] p-4 sm:p-6 rounded-lg hover:-translate-y-1 transition-transform">
            <h3 className="text-xl sm:text-2xl font-bold">Gym Hub</h3>
            <p className="mt-1 text-sm">Fitness tracking application</p>
          </div>
        </div>
        <Link
          href="/projects"
          className="btn inline-block mt-6 bg-[#f39c12] text-white px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-[#e67e22] transition-colors"
        >
          View All Projects
        </Link>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-12 sm:py-24 mb-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl mb-6">Get in Touch</h2>
        <div className="contact-info max-w-xl mx-auto text-sm sm:text-base">
          <p className="mb-4">
            <i className="fas fa-envelope mr-2"></i> seif1442004@gmail.com
          </p>
          <div className="social-links flex justify-center gap-4">
            <a
              href="https://github.com/seifeldin1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-[#f39c12] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/seif-dakroury-155747267/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-[#f39c12] transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c3e50] text-center py-4 sm:py-6">
        <p className="text-xs sm:text-sm">&copy; 2025 Seifeldin Sameh Dakroury. All rights reserved.</p>
      </footer>
    </div>
  );
}
