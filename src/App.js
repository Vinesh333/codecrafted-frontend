import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Load theme from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setDarkMode(storedTheme === "dark");
    }
  }, []);

  // Apply dark class to <html> and store in localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="bg-gradient-to-br from-[#F4EADF] via-[#E3D4CA] to-[#D4BCAF] 
                 dark:from-[#1f1f1f] dark:via-[#2a2a2a] dark:to-[#3a3a3a] 
                 text-black dark:text-white snap-y snap-mandatory 
                 h-screen overflow-y-scroll scroll-smooth scrollbar-hide"
    >
      {/* Toggle Button */}
      <header className="fixed top-4 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded bg-white dark:bg-gray-800 text-black dark:text-white shadow-md"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <Navbar />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="experience" className="snap-start">
        <Experience />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <footer className="snap-start">
        <Footer />
      </footer>

      <ScrollToTop />
    </div>
  );
}

export default App;
