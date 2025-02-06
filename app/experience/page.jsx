// pages/experience.js
"use client"
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/skills.module.css"; // Ensure this path is correct

export default function Experience() {
  const [showEBECertificate, setShowEBECertificate] = useState(false);
  const [showIEEE_FullStackCertificate, setShowIEEE_FullStackCertificate] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="experience-education-page pt-24 px-4">
        <section className="experience mb-12">
          <h2 className="text-3xl mb-4">Experience</h2>
          <div className={`p-4 bg-gray-700 rounded-lg ${styles.animateFadeInUp}`} style={{ animationDelay: "0s" }}>
            <h4 className="text-xl font-bold">Software Engineering Intern</h4>
            <p className="text-sm text-gray-300">
              Company EBE (The Egyptian Bureau For Engineering), Summer 2023
            </p>
            <p className="mt-2">
              I used Go, Gin, Gorm, JWT authentication, bcrypt, and MySQL database. <br />
              - Implemented sign up and login pages for a web shortener. <br />
              - Created middleware for session validation. <br />
              - Managed user sessions with tokens and cookies. <br />
              - Developed a TODO app (CRUD).
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded"
              onClick={() => setShowEBECertificate(!showEBECertificate)}
            >
              {showEBECertificate ? "Hide Certificate" : "View Certificate"}
            </button>
            {showEBECertificate && (
              <div className="mt-4">
                <img
                  src="/images/EBE_Intenship1.png"
                  alt="Certificate"
                  className="w-80 rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </section>

        <section className="education mb-12">
          <h2 className="text-3xl mb-4">Education &amp; Courses</h2>
          <div className={`p-4 bg-gray-700 rounded-lg mb-4 ${styles.animateFadeInUp}`} style={{ animationDelay: "0.4s" }}>
            <h4 className="text-xl font-bold">
              B.Sc in Communication and Computer Engineering at Cairo University
            </h4>
            <p className="text-sm text-gray-300">2022 - 2027</p>
            <p className="mt-2">
              Majoring Computer Engineering Field
            </p>
            <p className="mt-2">
              Specialized in software development, algorithms, and data structures.
            </p>
          </div>
          <div className={`p-4 bg-gray-700 mb-4 rounded-lg ${styles.animateFadeInUp}`} style={{ animationDelay: "0.6s" }}>
            <h4 className="text-xl font-bold">Full-Stack Web Development Course</h4>
            <p className="text-sm text-gray-300">IEEE CUSB, Spring 2024</p>
            <p className="mt-2">
              Completed an intensive course covering modern web development including React, Node.js, and database management.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded"
              onClick={() => setShowIEEE_FullStackCertificate(!showIEEE_FullStackCertificate)}
            >
              {showIEEE_FullStackCertificate ? "Hide Certificate" : "View Certificate"}
            </button>
            {showIEEE_FullStackCertificate && (
              <div className="mt-4">
                <img
                  src="/images/FullStack_IEEE.png"
                  alt="Certificate"
                  className="w-80 rounded-lg shadow-lg"
                />
              </div>
            )}
          </div>
        </section>
       
      </main>
      <footer className="bg-[#2c3e50] text-center py-6 mt-12">
        <p>&copy; 2025 Seifeldin Sameh Dakroury. All rights reserved.</p>
      </footer>
    </div>
  );
}
