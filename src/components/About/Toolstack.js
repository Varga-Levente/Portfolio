import React from "react";
import { motion } from "framer-motion";
import {
  SiJetbrains,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiWindows11,
  SiDiscord,
  SiLinux,
  SiDocker,
  SiAdobephotoshop,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: SiWindows11, name: "Windows 11" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiJetbrains, name: "JetBrains" },
    { icon: SiPostman, name: "Postman" },
    { icon: SiSlack, name: "Slack" },
    { icon: SiDiscord, name: "Discord" },
    { icon: SiNetlify, name: "Netlify" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiAdobephotoshop, name: "Photoshop" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="group"
        >
          <div className="flex flex-col items-center gap-3 p-4 bg-[#1a1a1a]/50 border border-white/10 rounded-xl hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all cursor-pointer">
            <tool.icon
              className="text-4xl text-[#a3a3a3] group-hover:text-[#7c3aed] transition-colors"
            />
            <span className="text-xs text-[#a3a3a3] group-hover:text-white transition-colors text-center">
              {tool.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Toolstack;
