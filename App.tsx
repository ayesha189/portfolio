
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import GithubActivity from './components/GithubActivity';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0f172a] text-[#111827] dark:text-gray-100 selection:bg-blue-100 dark:selection:bg-blue-900/40 transition-colors duration-300">
      <Header activeSection={activeSection} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="relative max-w-6xl mx-auto px-6">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="about" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <About />
        </section>
        
        <section id="projects" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <Experience />
        </section>

        <section id="github" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <GithubActivity />
        </section>

        <section id="contact" className="py-20 border-t border-gray-100 dark:border-gray-800 scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
