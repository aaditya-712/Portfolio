import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Code } from 'lucide-react';

const Landing = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Building Reliable Systems
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
              from the Ground Up
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Hi, I'm <span className="text-cyan-400 font-semibold">Aaditya Deshmukh</span> – a Java backend developer who turns business ideas into working systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-sm md:text-base"
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 md:px-8 py-3 md:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Let's Connect
            </button>
          </div>

          <div className="flex justify-center space-x-4 md:space-x-6 animate-fade-in-delay-3 mb-16">
            <a href="https://github.com/aaditya-712" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/aaditya-deshmukh-05a587262/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://leetcode.com/u/aadityagdeshmukh9975/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
              <Code className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:aadityagdeshmukh9975@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;