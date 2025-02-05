"use client";
import {React , useState} from "react";
import { Button } from "@mui/material";
import {
  SiTypescript,
  SiReact,
  SiGo,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiC,
  SiDotnet,
  SiCplusplus

} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import styles from "../../styles/skills.module.css"; // Import CSS

const skills = [
    { icon: <SiGo size={40} />, name: "Go" },
    { icon: <SiTypescript size={40} />, name: "TypeScript" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <TbBrandCSharp size={40} />, name: "C#" },
    { icon: <SiCplusplus size={40} />, name: "C++" },
    { icon: <SiC size={40} />, name: "C" },
    { icon: <SiDotnet size={40} />, name: ".NET" },
    { icon: <SiNextdotjs size={40} />, name: "Next.js" },
    { icon: <SiNodedotjs size={40} />, name: "Node.js" },
    { icon: <SiReact size={40} />, name: "React" },
    { icon: <SiHtml5 size={40} />, name: "HTML" },
    { icon: <SiCss3 size={40} />, name: "CSS" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
    { icon: <SiMongodb size={40} />, name: "Mongo DB" },
    { icon: <SiMysql size={40} />, name: "Mysql" },
    { icon: <SiGithub size={40} />, name: "Github" },
    { icon: <SiPostman size={40} />, name: "Postman" },

];

const repeatedSkills = [...skills]; // Duplicate for seamless looping

const Experience = () => {
    const [showEBECertificate, setShowEBECertificate] = useState(false);
    const [showIEEE_FullStackCertificate, setShowIEEE_FullStackCertificate] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-800">
      {/* Rotating Icons Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800 p-4 shadow z-50 overflow-hidden">
        <div className={styles["scroll-container"]}>
          <div className={styles["scroll-content"]}>
            {repeatedSkills.map((skill, index) => (
              <div key={index} className="flex items-center justify-center">
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 px-4 bg-gray-800">
        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>

          {/* Work Experience & Internships */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Work Experience & Internships
            </h3>
            <div className="space-y-4">
              {/* Example Work Experience Item */}
              <div
                className={`p-4 bg-gray-700 rounded-lg opacity-0 ${styles.animateFadeInUp}`}
                style={{ animationDelay: "0s" }}
              >
                <h4 className="text-xl font-bold">
                  Software Engineering Intern
                </h4>
                <p className="text-sm text-gray-300">
                  Company EBE (The Egyptian Bureau For Engineering), Summer 2023
                </p>
                <p className="mt-2">
                    I used go language, gin, gorm, jwt authentication, bcrypt, mySQL database <br></br>
                    -Implemented a sign up and log in pages for the web shortener website. <br></br>
                  	-Implemented the middleware for validation of user session in the web shortener website. <br></br>
                  	-I was responsible for keeping the user session by using tokens and cookies in the web shortener website.<br></br>
                  	-Did a small TODO app (CRUD App) <br></br>

                </p>
                <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4"
                    onClick={() => setShowEBECertificate(!showCertificate)}
                >
                    {showEBECertificate ? "Hide Certificate" : "View Certificate"}
                </Button>

                {/* Display certificate if state is true */}
                {showEBECertificate && (
                    <div className="mt-4">
                    <img
                        src='/images/EBE_Intenship1.png' 
                        alt="Certificate"
                        className="w-80 rounded-lg shadow-lg"
                    />
                    </div>
                )}
              </div>

              
              {/* Add more work/internship items as needed */}
            </div>
          </div>

          {/* Education & Courses Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Education & Courses
            </h3>
            <div className="space-y-4">
              {/* Example Education Item */}
              <div
                className={`p-4 bg-gray-700 rounded-lg opacity-0 ${styles.animateFadeInUp}`}
                style={{ animationDelay: "0.4s" }}
              >
                <h4 className="text-xl font-bold">
                  B.SC in Communaction and Computer Engineering at Faculty Of Engineering
                </h4>
                <p className="text-sm text-gray-300">
                  Cairo University, 2022 - 2027
                </p>
                <p className="mt-2">
                  Specialized in software development, algorithms, and data
                  structures. 
                </p>
              </div>

              
              <div
                className={`p-4 bg-gray-700 rounded-lg opacity-0 ${styles.animateFadeInUp}`}
                style={{ animationDelay: "0.6s" }}
              >
                <h4 className="text-xl font-bold">
                  Full-Stack Web Development Course
                </h4>
                <p className="text-sm text-gray-300">
                  IEEE CUSB, Spring 2024
                </p>
                <p className="mt-2">
                  Completed an intensive course covering modern web development
                  including React, Node.js, and database management.
                </p>
                <Button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4"
                    onClick={() => setShowIEEE_FullStackCertificate(!showCertificate)}
                >
                    {showIEEE_FullStackCertificate ? "Hide Certificate" : "View Certificate"}
                </Button>

                {/* Display certificate if state is true */}
                {showIEEE_FullStackCertificate && (
                    <div className="mt-4">
                    <img
                        src='/images/FullStack_IEEE.png' 
                        alt="Certificate"
                        className="w-80 rounded-lg shadow-lg"
                    />
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Experience;