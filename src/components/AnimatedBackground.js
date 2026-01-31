import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const orbs = [
    { size: 600, x: "10%", y: "20%", delay: 0, duration: 20 },
    { size: 400, x: "80%", y: "10%", delay: 2, duration: 25 },
    { size: 300, x: "70%", y: "70%", delay: 4, duration: 22 },
    { size: 500, x: "20%", y: "80%", delay: 1, duration: 28 },
    { size: 200, x: "50%", y: "50%", delay: 3, duration: 18 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-30"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: index % 2 === 0
              ? "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
