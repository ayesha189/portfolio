
import React from 'react';
import { Github } from 'lucide-react';

const PROJECTS = [
  {
    title: "Full-Stack Banking System",
    date: "Dec 2025 - Present",
    desc: "Complete banking application with comprehensive account management, secure transactions, and authentication system.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express"],
    link: "https://github.com/ayesha189/Nexus-Core-Banking-System"
  },
  {
    title: "Cloud-Inspired File Versioning System",
    date: "Apr-May 2025",
    desc: "Advanced file versioning system with compression algorithms and granular access control.",
    tech: ["C++", "Data Structures", "Compression Algorithms", "Trees", "Hash Maps"],
    link: "https://github.com/ayesha189/Google-Drive-file-system"
  },
  {
    title: "Game Development Portfolio",
    date: "Apr 2024 - Present",
    desc: "Collection of console and GUI-based games demonstrating OOP mastery and game mechanics, including a Candy Crush implementation.",
    tech: ["C++", "C#", "Assembly", "OOP", "Game Mechanics"],
    link: "https://github.com/ayesha189/CandyCrush-ConsoleGame"
  },
  {
    title: "Campus Network Communication System",
    date: "2024",
    desc: "Network simulation system that demonstrates fundamental networking protocols and communication.",
    tech: ["C++", "Networking", "Protocol Implementation"],
    link: "https://github.com/ayesha189/Campus-Network-Communication-System"
  },
  {
    title: "Nyan Cats vs Cheeseburgers",
    date: "2024",
    desc: "Object-oriented game showcasing advanced OOP principles and design patterns.",
    tech: ["C++", "OOP", "Game Design"],
    link: "https://github.com/ayesha189/nyan-cat-vs-cheeseburger-game"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">Featured Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <div key={i} className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 flex flex-col h-full card-shadow transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold leading-tight flex-1 dark:text-white">{p.title}</h3>
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500 text-right ml-4">{p.date}</span>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
              {p.desc}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tech.map(t => (
                <span key={t} className="px-3 py-1 bg-white dark:bg-[#334155] border border-blue-50 dark:border-gray-700 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-lg">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-50 dark:border-gray-800 flex gap-6 text-sm">
              <a 
                href={p.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold hover:opacity-70 transition-opacity"
              >
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
