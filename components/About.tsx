
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-5xl font-extrabold tracking-tighter dark:text-white">About</h2>
      <div className="max-w-4xl space-y-6 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
        <p>
          Currently pursuing Computer Science at FAST (NUCES), Chiniot-Faisalabad Campus, I'm driven by
          curiosity and a passion for transforming ideas into working software. My journey in technology is fueled
          by problem-solving and the desire to build systems that matter.
        </p>
        <p>
          With a strong foundation from my Pre-Engineering background at Army Public School, I've developed
          expertise in backend development, system design, and collaborative engineering. I focus on creating
          reliable, scalable solutions that solve real-world problems.
        </p>
        <p>
          My interests span across Software Development, Backend Engineering, AI/ML, System Design, and Game
          Development. I believe in writing clean code, architecting thoughtful systems, and continuously learning
          from every project.
        </p>
      </div>
    </div>
  );
};

export default About;
