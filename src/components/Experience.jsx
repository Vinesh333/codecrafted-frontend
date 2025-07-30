import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    icon: <FaLaptopCode />,
    role: "Frontend Developer",
    company: "Koyya Enterprices",
    period: "2023 - Present",
    description: "Building scalable UIs with React, Tailwind, and APIs.",
  },
  {
    icon: <FaUserTie />,
    role: "Full Stack Intern",
    company: "Tricon infoTech ",
    period: "2022 - 2023",
    description: "Developed MERN stack features with focus on clean code.",
  },
  {
    icon: <FaGraduationCap />,
    role: "B.Tech CSE",
    company: "Hindustan Institute Of Technology And Science",
    period: "2019 - 2023",
    description: "Graduated with distinction. Led open source projects.",
  },
];

const certifications = [
  {
    title: "AWS Cloud Practitioner",
    name: "Issued 2023",
    description: "Fundamentals of AWS cloud infrastructure and services.",
  },
  {
    title: "Meta Front-End Developer",
    name: "Issued 2022",
    description: "Completed certification on front-end development skills.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
    >
      {/* Section Header */}
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-purple-500">Experience</span>
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-black border border-purple-700 rounded-xl p-6 text-center shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <div className="text-purple-400 text-3xl mb-4">{exp.icon}</div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{exp.company}</p>
            <p className="text-xs text-purple-500 dark:text-purple-300 italic mb-4">{exp.period}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Certifications Styled Like Testimonial */}
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-black border border-purple-700 p-8 rounded-xl relative text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6">
          Valuable <span className="text-purple-500">Certifications</span>
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-black rounded-lg p-4 border border-purple-600 text-left"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {cert.title}
              </h4>
              <p className="text-xs text-purple-500 dark:text-purple-300 mb-2">{cert.name}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
