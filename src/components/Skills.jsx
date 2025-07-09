import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { motion } from "framer-motion";

// Mapping each skill with its documentation URL
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", icon: <FaReact className="text-cyan-400" />, link: "https://reactjs.org/" },
  { name: "Redux", icon: <SiRedux className="text-purple-600" />, link: "https://redux.js.org/" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, link: "https://tailwindcss.com/docs" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, link: "https://nodejs.org/en/docs" },
  { name: "Express", icon: <SiExpress className="text-gray-400" />, link: "https://expressjs.com/" },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, link: "https://www.mongodb.com/docs/" },
  { name: "GitHub", icon: <FaGithub className="text-white" />, link: "https://docs.github.com/" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-600 mb-9 text-center flex justify-center items-center">
  My Tech Stack
</h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mb-10 px-4">
          Over the years, I’ve honed a strong skill set using the MERN stack and modern frontend technologies.
          Below are the core technologies I use regularly to build clean, scalable, and efficient applications.
        </p>
      </motion.div>

      <div className="flex justify-center items-center mb-12">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
          <div className="w-24 h-1 bg-indigo-500 rounded animate-pulse"></div>
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.a
            key={idx}
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md transform transition duration-300 hover:rotate-[5deg] hover:scale-105 hover:shadow-lg flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ rotateY: 10, scale: 1.1 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
