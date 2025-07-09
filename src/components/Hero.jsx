import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-b from-gray-900 via-purple-900 to-purple-800 overflow-hidden"
    >
      <Helmet>
        <title>Vinesh | Full-Stack Developer</title>
        <meta name="description" content="I'm Vinesh, a passionate MERN stack developer crafting modern, scalable experiences." />
      </Helmet>

      {/* LEFT: Text Content */}
      <motion.div
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center"
        variants={heroVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6"
          variants={childVariants}
        >
          Hi, I’m Vinesh
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mb-6"
          variants={childVariants}
        >
          Full-Stack Developer specializing in MERN stack. I build scalable, modern, and user-friendly digital experiences.
        </motion.p>

        <motion.a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-base font-semibold transition-all duration-300"
          variants={childVariants}
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* RIGHT: Image */}
<motion.div
  className="flex-1 flex justify-end items-end mt-10 md:mt-0 h-full"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <img
    src="/profile.png"
    alt="Vinesh"
    className="max-h-[100vh] w-auto object-cover object-bottom md:rounded-l-[4rem]"
    style={{ marginBottom: 0 }}
  />
</motion.div>


      {/* FULL-WIDTH TOOLS BAR */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="w-full bg-black/40 backdrop-blur-sm py-4 shadow-inner">
          <div className="w-full grid grid-cols-7 gap-2 px-4 text-center text-gray-400 text-sm sm:text-base">
            {["HTML5", "CSS", "JavaScript", "Node.js", "React", "Git", "GitHub"].map((tool, index) => (
              <span
                key={index}
                className="hover:text-white transition duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
