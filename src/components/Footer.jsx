// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Vinesh333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Text */}
        <p className="text-sm text-center md:text-right">
          © {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-white">Vinesh</span> • Built with{" "}
          <FaHeart className="inline-block text-red-500 mx-1" /> React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
