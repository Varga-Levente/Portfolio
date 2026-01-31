import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import Typewriter from "typewriter-effect";

function Home() {
  const socialLinks = [
    { icon: AiFillGithub, href: "https://github.com/Varga-Levente", label: "GitHub" },
    { icon: AiOutlineTwitter, href: "https://x.com/VLevente20", label: "Twitter" },
    { icon: AiFillInstagram, href: "https://www.instagram.com/vlevente__/", label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Hi, I'm{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
                  Levente Varga
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-[#a3a3a3] mb-8 h-10"
            >
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Full Stack Developer",
                    "Freelancer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#a3a3a3] text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building modern web applications and creating
              seamless user experiences with cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="/project">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-xl shadow-lg shadow-[#00d4ff]/25 hover:shadow-[#00d4ff]/40 transition-shadow"
                >
                  View My Work
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-xl hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/5 transition-all"
                >
                  About Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#a3a3a3] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/30 to-[#7c3aed]/30 rounded-full blur-3xl" />

              {/* Avatar Container */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#333333] to-[#262626] border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Code Animation Inside */}
                    <div className="text-[#00d4ff]/60 font-mono text-xs md:text-sm leading-relaxed p-4 text-center">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-[#7c3aed]">const</span> developer = {"{"}
                        <br />
                        <span className="ml-4">name: <span className="text-[#f43f5e]">"Levente"</span>,</span>
                        <br />
                        <span className="ml-4">skills: [<span className="text-[#f43f5e]">"React"</span>, <span className="text-[#f43f5e]">"Node"</span>],</span>
                        <br />
                        <span className="ml-4">passion: <span className="text-[#f43f5e]">"coding"</span></span>
                        <br />
                        {"}"};
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-4 right-8 w-3 h-3 bg-[#00d4ff] rounded-full" />
                  <div className="absolute bottom-8 left-4 w-2 h-2 bg-[#7c3aed] rounded-full" />
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#f43f5e] rounded-full" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Home;
