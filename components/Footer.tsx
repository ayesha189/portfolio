
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-medium text-gray-400 italic">
          "Curious mind. Clean code. Real impact."
        </p>
        <div className="mt-6 text-xs font-bold text-gray-300 uppercase tracking-[0.3em]">
          Ayesha Rauf &bull; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
