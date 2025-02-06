// pages/projects.js
import Navbar from "../../components/Navbar";
import Link from "next/link";

const projectData = [
  {
    title: "Palestine Donation Website",
    description: "Platform for humanitarian donations",
    githubLink: "https://github.com/seifeldin1/Palestine-Donation-FrontEnd",
    deployedLink: "https://seifeldin1.github.io/Palestine-Donation-FrontEnd/"
  },
  {
    title: "Gym Hub",
    description: "Fitness tracking application",
    githubLink: "https://github.com/seifeldin1/portfolio"
  },
  {
    title: "Portfolio",
    description: "My personal portfolio website",
    githubLink: "https://github.com/seifeldin1/portfolio"
  },
  {
    title: "Simple Express App",
    description: "A basic web application using Express.js",
    githubLink: "https://github.com/seifeldin1/Simple-Express-App", 
    deployedLink: null,
  },
  {
    title: "Weather App",
    description: "Application to check weather forecast",
    githubLink: "https://github.com/seifeldin1/Weather-App", 
    deployedLink: "https://seifeldin1.github.io/Weather-App/",

  },
  {
    title: "Drag Ronaldo",
    description: "A fun drag-and-drop game",
    githubLink: "https://github.com/seifeldin1/Drag-Ronaldo", 
    deployedLink: "https://seifeldin1.github.io/Drag-Ronaldo/",

  },
  {
    title: "Dynamic List Website",
    description: "Website with dynamically generated lists",
    githubLink: "https://github.com/seifeldin1/Dynamic-List", 
    deployedLink: "https://seifeldin1.github.io/Dynamic-List/",

  },
  {
    title: "Restaurant Menu",
    description: "Online restaurant menu application",
    githubLink: "https://github.com/seifeldin1/Restaurant-Menu-Sample", 
    deployedLink: "https://seifeldin1.github.io/Restaurant-Menu-Sample/",
  },
  {
    title: "Website Using Iframes",
    description: "Website incorporating content using iframes",
    githubLink: "https://github.com/seifeldin1/Iframes-Website", 
    deployedLink: "https://seifeldin1.github.io/Iframes-Website/",
  },
  {
    title: "Flowchart Simulator",
    description: "Application to simulate flowcharts",
  },
  {
    title: "List of Hospitals in Egypt",
    description: "Directory of hospitals in Egypt (verified accounts)",
    githubLink: "https://github.com/seifeldin1/Hospitals-In-Egypt-For-Verified-Accounts", 
    deployedLink: "https://seifeldin1.github.io/Hospitals-In-Egypt-For-Verified-Accounts/", 

  },
  {
    title: "Alien Invasion game",
    description: "A space shooter game",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="projects-page pt-24 px-4">
        <h2 className="text-3xl text-center mb-8">Projects</h2>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="project-card bg-[#34495e] p-6 rounded-lg hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex justify-end space-x-4">
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#000] text-[#e6e600] px-4 py-2 rounded transition-transform transform hover:scale-105 active:scale-95 hover:bg-[#e6e600] hover:text-[#000]"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                )}
                {project.deployedLink && (
                  <a 
                    href={project.deployedLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#000] text-[#e6e600] px-4 py-2 rounded transition-transform transform hover:scale-105 active:scale-95 hover:bg-[#e6e600] hover:text-[#000]"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i> View Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
       
      </main>
      <footer className="bg-[#2c3e50] text-center py-6 mt-12">
        <p>&copy; 2025 Seifeldin Sameh Dakroury. All rights reserved.</p>
      </footer>
    </div>
  );
}
