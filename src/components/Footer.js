import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { HiHeart } from "react-icons/hi";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: AiFillGithub, href: "https://github.com/Varga-Levente", label: "GitHub" },
    { icon: AiOutlineTwitter, href: "https://x.com/VLevente20", label: "Twitter" },
    { icon: AiFillInstagram, href: "https://www.instagram.com/vlevente__/", label: "Instagram" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#1a1a1a]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <Link to="/">
              <div
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="text-[#00d4ff]">&lt;</span>
                <span className="text-white">VL</span>
                <span className="text-[#00d4ff]">/&gt;</span>
              </div>
            </Link>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Building modern web experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#a3a3a3] text-sm hover:text-[#00d4ff] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#a3a3a3] hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/5 transition-all"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#a3a3a3]">
          <p>
            © {year} Levente Varga. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <HiHeart className="text-[#f43f5e]" /> in Hungary
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
