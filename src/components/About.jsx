import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaClipboardCheck,
  FaCogs,
  FaRocket,
  FaBug,
  FaWrench,
  FaUserTie,
  FaTools,
} from "react-icons/fa";

const About = () => {
  const [mode, setMode] = useState("Developer");

  const toggleMode = () => {
    setMode((prev) => (prev === "Developer" ? "DevOps" : "Developer"));
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
  <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row gap-16">
    
    {/* ✅ Left Icons Section - Stick to Left Side */}
    <div className="w-full md:w-1/3 flex flex-col gap-14 justify-center">
      <div className="flex items-start gap-4">
        <FaLaptopCode className="text-3xl" />
        <span className="text-lg font-medium">Website Development</span>
      </div>
      <div className="flex items-start gap-4">
        <FaMobileAlt className="text-3xl" />
        <span className="text-lg font-medium">App Development</span>
      </div>
      <div className="flex items-start gap-4">
        <FaServer className="text-3xl" />
        <span className="text-lg font-medium">Website Hosting</span>
      </div>
    </div>

    {/* ✅ Right About Section */}
    <motion.div
      className="w-full md:w-2/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl text-indigo-600 font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        I began my journey in software with a passion for creation, evolving from visual storytelling into full-stack development. Over the years, I’ve worked across diverse domains such as logistics, banking, and IT asset management—delivering scalable, cloud-ready, microservice-based solutions that impact thousands of users.
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
        <div>
          <p className="text-3xl font-bold text-red-500">10 +</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Projects Done</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">95 %</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Client satisfaction</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">3 +</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">Years of experience</p>
        </div>
      </div>

      {/* Toggle + Dev Process */}
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <motion.div
              whileHover={{ rotate: 20 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-4xl text-indigo-400"
            >
              {mode === "Developer" ? <FaUserTie /> : <FaTools />}
            </motion.div>
            <button
              onClick={toggleMode}
              className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-full text-sm text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200"
            >
              Switch to {mode === "Developer" ? "DevOps" : "Developer"} Mode
            </button>
          </div>

          <h3 className="text-3xl font-semibold text-indigo-500 dark:text-indigo-300">
            My Development Process
          </h3>
        </div>

        {/* Process Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div>
            <FaClipboardCheck className="text-3xl mx-auto text-blue-400" />
            <p className="mt-2 text-sm">Plan</p>
          </div>
          <div>
            <FaLaptopCode className="text-3xl mx-auto text-teal-400" />
            <p className="mt-2 text-sm">Design</p>
          </div>
          <div>
            <FaCogs className="text-3xl mx-auto text-green-400" />
            <p className="mt-2 text-sm">Develop</p>
          </div>
          <div>
            <FaBug className="text-3xl mx-auto text-yellow-400" />
            <p className="mt-2 text-sm">Test</p>
          </div>
          <div>
            <FaRocket className="text-3xl mx-auto text-purple-400" />
            <p className="mt-2 text-sm">Deploy</p>
          </div>
          <div>
            <FaWrench className="text-3xl mx-auto text-red-400" />
            <p className="mt-2 text-sm">Maintain</p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

  );
};

export default About;
