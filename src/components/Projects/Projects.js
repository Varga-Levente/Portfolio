import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";

function Projects() {
  const projects = [
    {
      title: "Cinema React/Java Spring APP",
      description: "A cinema website where you can purchase movie tickets and pre-order snacks and drinks. Offers a seamless experience with seat selection and refreshment ordering.",
      tags: ["React", "Java Spring", "MySQL"],
      ghLink: "https://github.com/Varga-Levente/Szoftverfejlesztes-mernokoknek",
      demoLink: "",
      gradient: "from-[#00d4ff] to-[#7c3aed]",
      icon: "🎬",
    },
    {
      title: "GTA:V Roleplay Gym Website",
      description: "A website for a GTA roleplay server gym allowing employees to log sales and attendance. Owners could monitor staff performance and maintain oversight.",
      tags: ["PHP", "MySQL", "Bootstrap"],
      ghLink: "https://github.com/Varga-Levente/NFGym-Website",
      demoLink: "",
      gradient: "from-[#f43f5e] to-[#f97316]",
      icon: "💪",
    },
    {
      title: "RoBOT Android App",
      description: "Android mobile app to control an ESP32-based robot using TCP/IP. Features dual control modes: on-screen buttons or device tilting.",
      tags: ["Android", "Java", "ESP32"],
      ghLink: "https://github.com/Varga-Levente/RoBOT-Controller-Android-APP",
      ghLink2: "https://github.com/Varga-Levente/RoBOT",
      demoLink: "",
      gradient: "from-[#22c55e] to-[#06b6d4]",
      icon: "🤖",
    },
    {
      title: "1-Bit BMP Graph Generator",
      description: "A C program that generates 1-bit BMP files visualizing temporal variation. Features sender/receiver modes with inter-process communication.",
      tags: ["C", "Networking", "IPC"],
      ghLink: "https://github.com/Varga-Levente/rendszerkozeli-programozas-projekt",
      demoLink: "",
      gradient: "from-[#8b5cf6] to-[#d946ef]",
      icon: "📊",
    },
    {
      title: "Real Time Chat Application",
      description: "Real-time chat app with client, server, and Python API for user validation. Supports text and file transfers with secure authentication.",
      tags: ["C#", "Python", "TCP/IP"],
      ghLink: "https://github.com/Varga-Levente/Tavkozlohalo-Chat",
      ghLink2: "https://github.com/Varga-Levente/Tavkozlohalo_API",
      demoLink: "",
      gradient: "from-[#eab308] to-[#f97316]",
      icon: "💬",
    },
    {
      title: "Education Page",
      description: "A PHP website (framework-free) for tracking university courses. Contains notes, lecture presentations, and useful links for subjects.",
      tags: ["PHP", "HTML/CSS", "JavaScript"],
      ghLink: "",
      demoLink: "https://edu.vlevente.me/",
      gradient: "from-[#06b6d4] to-[#3b82f6]",
      icon: "📚",
    },
    {
      title: "Panda3D - 3D Printing Business",
      description: "My entrepreneurial venture specializing in 3D printing services. Offering custom prints, prototyping, and various 3D printing solutions.",
      tags: ["Business", "3D Printing", "E-commerce"],
      ghLink: "",
      demoLink: "https://panda3d.hu/",
      gradient: "from-[#f97316] to-[#eab308]",
      icon: "🐼",
    },
    {
      title: "PandaSoft - Software Development",
      description: "The software development branch of my business. Providing custom software solutions, web development, and IT consulting services.",
      tags: ["Business", "Web Dev", "Consulting"],
      ghLink: "",
      demoLink: "https://pandasoft.hu/",
      gradient: "from-[#7c3aed] to-[#ec4899]",
      icon: "🚀",
    },
    {
      title: "GateGuard - Smart Garage Opener",
      description: "A private Android application for my custom smart garage door system. Features secure authentication and remote control capabilities.",
      tags: ["Android", "IoT", "Java"],
      ghLink: "",
      demoLink: "",
      gradient: "from-[#22c55e] to-[#84cc16]",
      icon: "🚗",
    },
    {
      title: "Catch The IMPOSTOR",
      description: "A custom multiplayer game built with Socket.IO. Real-time gameplay with social deduction mechanics inspired by Among Us.",
      tags: ["Socket.IO", "Node.js", "Multiplayer"],
      ghLink: "",
      demoLink: "",
      gradient: "from-[#ef4444] to-[#dc2626]",
      icon: "🎭",
    },
  ];

  return (
    <section className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#f43f5e]/10 border border-[#f43f5e]/20 text-[#f43f5e] text-sm font-medium mb-4">
            My Portfolio
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
              Projects
            </span>
          </h1>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                ghLink={project.ghLink}
                ghLink2={project.ghLink2}
                demoLink={project.demoLink}
                gradient={project.gradient}
                icon={project.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
