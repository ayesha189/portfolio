
import React from 'react';
import { Github } from 'lucide-react';

const GithubActivity: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">GitHub Activity</h2>
      
      <div className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-2xl p-12 card-shadow text-center transition-colors">
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 mb-10">
          <div>
            <div className="text-5xl font-extrabold mb-2 dark:text-white">5+</div>
            <div className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest font-bold">Projects</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2 dark:text-white">500+</div>
            <div className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest font-bold">Commits</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2 dark:text-white">8</div>
            <div className="text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest font-bold">Languages</div>
          </div>
        </div>
        
        <a 
          href="https://github.com/ayesha189" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          <Github size={20} />
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default GithubActivity;
