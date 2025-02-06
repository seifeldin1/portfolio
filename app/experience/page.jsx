// pages/experience.js
"use client";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/skills.module.css"; // for scrolling header animations

export default function Experience() {
  const [showEBECertificate, setShowEBECertificate] = useState(false);
  const [showIEEE_FullStackCertificate, setShowIEEE_FullStackCertificate] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800">
      <Navbar />
      <main className="pt-24 px-4">
        <section className="experience mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4 text-white">Experience</h2>
          <article className={`p-4 bg-gray-700 rounded-lg ${styles.animateFadeInUp}`} style={{ animationDelay: "0s" }}>
            <h4 className="text-lg sm:text-xl font-bold text-white">Software Engineering Intern</h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Company EBE (The Egyptian Bureau For Engineering), Summer 2023
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              I used Go, Gin, Gorm, JWT authentication, bcrypt, and MySQL database. <br />
              - Implemented sign up and login pages for a web shortener. <br />
              - Created middleware for session validation. <br />
              - Managed user sessions with tokens and cookies. <br />
              - Developed a TODO app (CRUD).
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded text-xs sm:text-sm"
              onClick={() => setShowEBECertificate(!showEBECertificate)}
            >
              {showEBECertificate ? "Hide Certificate" : "View Certificate"}
            </button>
            {showEBECertificate && (
              <div className="mt-4">
                <img
                  src="/images/EBE_Intenship1.png"
                  alt="EBE Internship Certificate"
                  className="w-64 sm:w-80 rounded-lg shadow-lg"
                />
              </div>
            )}
          </article>
        </section>

        <section className="education mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4 text-white">Education &amp; Courses</h2>
          <article className={`p-4 bg-gray-700 rounded-lg mb-4 ${styles.animateFadeInUp}`} style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              B.Sc in Communication and Computer Engineering at Cairo University
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">2022 - 2027</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Majoring in Computer Engineering. Specialized in software development, algorithms, and data structures.
            </p>
          </article>
          <article className={`p-4 bg-gray-700 rounded-lg ${styles.animateFadeInUp}`} style={{ animationDelay: "0.6s" }}>
            <h4 className="text-lg sm:text-xl font-bold text-white">Full-Stack Web Development Course</h4>
            <p className="text-xs sm:text-sm text-gray-300">IEEE CUSB, Spring 2024</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-300">
              Completed an intensive course covering modern web development including React, Node.js, and database management.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded text-xs sm:text-sm"
              onClick={() => setShowIEEE_FullStackCertificate(!showIEEE_FullStackCertificate)}
            >
              {showIEEE_FullStackCertificate ? "Hide Certificate" : "View Certificate"}
            </button>
            {showIEEE_FullStackCertificate && (
              <div className="mt-4">
                <img
                  src="/images/FullStack_IEEE.png"
                  alt="Full-Stack Course Certificate"
                  className="w-64 sm:w-80 rounded-lg shadow-lg"
                />
              </div>
            )}
          </article>
        </section>
      </main>
      <footer className="bg-[#2c3e50] text-center py-4 sm:py-6 mt-8">
        <p className="text-xs sm:text-sm text-white">&copy; 2025 Seifeldin Sameh Dakroury. All rights reserved.</p>
      </footer>
    </div>
  );
}
