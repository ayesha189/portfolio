
import React from 'react';

const Skills: React.FC = () => {
  const groups = [
    {
      title: "Languages",
      skills: ["C++", "C#", "Python", "SQL", "TypeScript", "JavaScript", "Assembly"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Oracle Database", "Database Design"]
    },
    {
      title: "Frontend",
      skills: ["React", "Vite", "React Router", "Recharts", "Lucide React"]
    },
    {
      title: "Core Competencies",
      skills: ["OOP", "Data Structures", "File Handling", "Problem Solving", "GUI Development", "Networking"]
    }
  ];

  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {groups.map((group, i) => (
          <div key={i} className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-lg hover:border-blue-200 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
