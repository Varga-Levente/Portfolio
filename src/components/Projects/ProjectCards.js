import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group h-full bg-[#1a1a1a]/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-[#00d4ff]/30 transition-all duration-300"
    >
      {/* Header with gradient and icon */}
      <div className={`relative h-48 bg-gradient-to-br ${props.gradient || 'from-[#00d4ff] to-[#7c3aed]'} flex items-center justify-center overflow-hidden`}>
        <motion.span
          className="text-6xl"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {props.icon || "💻"}
        </motion.span>

        {/* Overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Tags */}
        {props.tags && (
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {props.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-black/30 backdrop-blur-sm border border-white/20 rounded-md text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {props.title}
        </h3>
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4 line-clamp-3">
          {props.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {props.ghLink && (
            <motion.a
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-[#a3a3a3] hover:text-white hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all"
            >
              <BsGithub />
              <span>Code</span>
            </motion.a>
          )}

          {props.ghLink2 && (
            <motion.a
              href={props.ghLink2}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-[#a3a3a3] hover:text-white hover:border-[#7c3aed]/30 hover:bg-[#7c3aed]/5 transition-all"
            >
              <BsGithub />
              <span>Code 2</span>
            </motion.a>
          )}

          {props.demoLink && (
            <motion.a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] rounded-lg text-sm text-white font-medium shadow-lg shadow-[#00d4ff]/20"
            >
              <HiExternalLink />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCards;
