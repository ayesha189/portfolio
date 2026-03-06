
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center pt-20">
      <div className="space-y-6">
        <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
          Computer Science Student at FAST NUCES
        </p>
        
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter leading-tight text-[#111827] dark:text-white">
          Ayesha Rauf
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 dark:text-gray-400">
          Building Reliable Systems & Scalable Solutions
        </h2>
        
        <p className="text-xl text-gray-400 dark:text-gray-500 max-w-2xl leading-relaxed">
          Passionate about backend engineering, data-driven systems, and AI-powered applications
        </p>

        <div className="flex flex-wrap gap-4 pt-6">
          <button 
            onClick={scrollToProjects}
            className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
          >
            View Projects
          </button>
          <a 
            href="/resume_23f_0807.docx" 
            download="resume_23f_0807.docx"
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-3.5 rounded-lg font-bold flex items-center gap-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
