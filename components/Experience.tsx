
import React from 'react';

const ITEMS = [
  { company: "FAST NUCES", role: "Computer Science Student", date: "2023 - Present" },
  { company: "Army Public School", role: "Pre-Engineering Student", date: "2021 - 2023" }
];

const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">Experience</h2>
      
      <div className="space-y-4">
        {ITEMS.map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between card-shadow hover:border-blue-100 dark:hover:border-blue-900 transition-colors">
            <div>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-1">{item.date}</div>
              <h4 className="text-2xl font-bold dark:text-white">{item.company}</h4>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{item.role}</p>
            </div>
            <div className="mt-4 md:mt-0 text-blue-600 dark:text-blue-400 font-bold text-sm hidden md:block">
              View details →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
