import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="w-6 h-6 text-cyan-400" />
            <span className="text-white font-semibold">Aaditya.Deshmukh</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-gray-400">
              © 2025 Aaditya Deshmukh. All rights reserved.
            </p>
            <a
              href="https://github.com/aaditya-712"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;