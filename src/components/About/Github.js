import React from "react";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="text-center"
    >
      <h2
        className="text-3xl font-bold mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Days I{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#7c3aed]">
          Code
        </span>
      </h2>
      <p className="text-[#a3a3a3] mb-8">My GitHub contribution calendar</p>

      <div className="bg-[#1a1a1a]/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm inline-block">
        <GitHubCalendar
          username="Varga-Levente"
          blockSize={14}
          blockMargin={4}
          fontSize={14}
          theme={{
            dark: ['#1a1a1a', '#0d3d22', '#0e6f3a', '#2aa54c', '#3ad65e'],
          }}
          style={{
            color: '#a3a3a3',
          }}
        />
      </div>
    </motion.div>
  );
}

export default Github;
