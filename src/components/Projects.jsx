// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    image: "/assets/projects/portfolio.png",
    description:
      "A fully responsive developer portfolio built with React and Tailwind CSS. It features animations using Framer Motion and dark mode support.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourdomain.com",
    tech: ["React", "Tailwind", "Framer Motion"],
    highlights: [
      "Built with reusable components for scalability",
      "Responsive UI with dark/light mode toggle",
      "Deployed using Netlify",
    ],
  },
  {
    title: "E-Commerce App",
    image: "/assets/projects/ecommerce.png",
    description:
      "A full-stack MERN e-commerce application featuring authentication, Stripe integration, and an admin dashboard.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    tech: ["MERN", "Stripe", "Redux"],
    highlights: [
      "Real-time cart and checkout system",
      "Secure user authentication and admin panel",
      "Payment gateway with Stripe",
    ],
  },
  {
    title: "Blog Platform",
    image: "/assets/projects/blog.png",
    description:
      "A feature-rich blogging platform that supports rich text editing, image uploads, and user authentication.",
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-demo.com",
    tech: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Built-in Markdown support and WYSIWYG editor",
      "JWT-based auth system",
      "Responsive mobile-first UI",
    ],
  },
];

const resources = [
  {
    name: "React Docs",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
  },
  {
    name: "Framer Motion Guide",
    url: "https://www.framer.com/motion/",
  },
  {
    name: "MongoDB University",
    url: "https://university.mongodb.com/",
  },
  {
    name: "Stripe API Docs",
    url: "https://stripe.com/docs/api",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-3xl font-bold text-indigo-600 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects & Case Studies
      </motion.h2>

      {/* 🔧 Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {project.description}
              </p>

              {/* ✅ Highlights */}
              <ul className="list-disc list-inside text-xs text-gray-500 dark:text-gray-400 mb-3">
                {project.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* 🧪 Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 GitHub / Live Demo */}
              <div className="flex gap-4 text-indigo-600 dark:text-indigo-400 text-lg">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 📚 Learning Resources */}
<div className="mt-20 px-6 max-w-7xl mx-auto">
  <motion.div
    className="flex flex-col md:flex-row items-start md:items-center justify-between md:gap-6"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3 className="text-2xl font-bold text-indigo-500 mb-4 md:mb-0">
      Learning Resources That Helped Me
    </h3>

    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row md:items-center">
      {resources.map((r, i) => (
        <li key={i} className="md:list-none">
          <a
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 underline"
          >
            {r.name}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
</div>

    </section>
  );
};

export default Projects;
