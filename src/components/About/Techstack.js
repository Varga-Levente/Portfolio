import React from "react";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiMariadb,
  SiFlask,
  SiRedis,
  SiSocketdotio
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  const skills = [
    { icon: TbBrandCSharp, name: "C#" },
    { icon: DiJava, name: "Java" },
    { icon: DiPython, name: "Python" },
    { icon: DiReact, name: "React" },
    { icon: DiJavascript1, name: "JavaScript" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: DiNodejs, name: "Node.js" },
    { icon: SiFlask, name: "Flask" },
    { icon: DiMongodb, name: "MongoDB" },
    { icon: DiPostgresql, name: "PostgreSQL" },
    { icon: SiMariadb, name: "MariaDB" },
    { icon: SiRedis, name: "Redis" },
    { icon: SiSocketdotio, name: "Socket.IO" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="group"
        >
          <div className="flex flex-col items-center gap-3 p-4 bg-[#1a1a1a]/50 border border-white/10 rounded-xl hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all cursor-pointer">
            <skill.icon
              className="text-4xl text-[#a3a3a3] group-hover:text-[#00d4ff] transition-colors"
            />
            <span className="text-xs text-[#a3a3a3] group-hover:text-white transition-colors text-center">
              {skill.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
