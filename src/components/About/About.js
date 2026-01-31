import React from "react";
import { motion } from "framer-motion";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import { HiLocationMarker, HiBriefcase, HiAcademicCap } from "react-icons/hi";

function About() {
  const activities = [
    { emoji: "🎮", text: "Playing Games" },
    { emoji: "🖥️", text: "Creating Game Servers" },
    { emoji: "🎯", text: "Playing Airsoft and Paintball" },
    { emoji: "🍖", text: "Cooking/Grilling" },
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
          <span className="inline-block px-4 py-2 rounded-full bg-[#7c3aed]/10 border border-[#7c3aed]/20 text-[#7c3aed] text-sm font-medium mb-4">
            Get to know me
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">Me</span>
          </h1>
          <p className="text-[#a3a3a3] max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current skills
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[#1a1a1a]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm h-full">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Who am I?
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-[#a3a3a3]">
                  <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
                    <HiLocationMarker className="text-[#00d4ff]" />
                  </div>
                  <span>Debrecen, Hungary</span>
                </div>
                <div className="flex items-center gap-3 text-[#a3a3a3]">
                  <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 flex items-center justify-center">
                    <HiBriefcase className="text-[#7c3aed]" />
                  </div>
                  <span>Freelancer Developer & Entrepreneur</span>
                </div>
                <div className="flex items-center gap-3 text-[#a3a3a3]">
                  <div className="w-10 h-10 rounded-lg bg-[#f43f5e]/10 flex items-center justify-center">
                    <HiAcademicCap className="text-[#f43f5e]" />
                  </div>
                  <span>IT Engineering Student at University of Debrecen</span>
                </div>
              </div>

              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                Hi! I'm <span className="text-[#00d4ff] font-semibold">Levente Varga</span>, a passionate
                developer and entrepreneur. I'm proficient in multiple programming languages including
                <span className="text-[#7c3aed] font-semibold"> Java, C#, Python, PHP, JavaScript</span>,
                and I work with various frameworks in each of these ecosystems.
              </p>

              <p className="text-[#a3a3a3] leading-relaxed">
                Currently, I primarily work with <span className="text-[#7c3aed] font-semibold">Node.js and React</span>,
                while also building <span className="text-[#7c3aed] font-semibold">CI/CD pipelines</span> and optimizing
                the underlying network and server infrastructure. Security and stability are my top priorities,
                which is why I utilize <span className="text-[#7c3aed] font-semibold">Docker and Podman</span> containerization.
              </p>
            </div>
          </motion.div>

          {/* Right - Activities & Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Activities */}
            <div className="bg-[#1a1a1a]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Beyond Coding
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#00d4ff]/20 transition-all"
                  >
                    <span className="text-2xl">{activity.emoji}</span>
                    <span className="text-sm text-[#a3a3a3]">{activity.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#7c3aed]/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl text-[#7c3aed]/30 mb-4">"</div>
              <p className="text-xl text-white italic mb-4">
                Strive to build things that make a difference!
              </p>
              <p className="text-[#a3a3a3] text-sm">— My coding philosophy</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">Skillset</span>
            </h2>
            <p className="text-[#a3a3a3]">Technologies I work with</p>
          </div>
          <Techstack />
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">Tools</span> I Use
            </h2>
            <p className="text-[#a3a3a3]">My development environment</p>
          </div>
          <Toolstack />
        </motion.div>

        {/* GitHub Section */}
        <Github />
      </div>
    </section>
  );
}

export default About;
