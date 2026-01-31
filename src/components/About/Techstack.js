import React from "react";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiNginx,
} from "react-icons/di";
import { SiMariadb, SiAmazonaws, SiFlask } from "react-icons/si";
import { TbSql, TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  const skills = [
    { icon: CgCPlusPlus, name: "C++", color: "#00599C" },
    { icon: TbBrandCSharp, name: "C#", color: "#239120" },
    { icon: DiJavascript1, name: "JavaScript", color: "#F7DF1E" },
    { icon: DiNodejs, name: "Node.js", color: "#339933" },
    { icon: DiReact, name: "React", color: "#61DAFB" },
    { icon: DiPhp, name: "PHP", color: "#777BB4" },
    { icon: DiJava, name: "Java", color: "#007396" },
    { icon: DiPython, name: "Python", color: "#3776AB" },
    { icon: SiFlask, name: "Flask", color: "#000000" },
    { icon: TbSql, name: "SQL", color: "#4479A1" },
    { icon: SiMariadb, name: "MariaDB", color: "#003545" },
    { icon: DiNginx, name: "Nginx", color: "#009639" },
    { icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
    { icon: DiGit, name: "Git", color: "#F05032" },
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
