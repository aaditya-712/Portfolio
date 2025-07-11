import React from 'react';
import { ExternalLink, Github, Smartphone, Server, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    // icons: Server, Database, Smartphone, Globe
    {
      title: 'Wedding Invitation',
      description: 'It was a wedding invite project I made as a freelancer. This client wanted some unique invitation ASAP. So This was the result.',
      tech: ['HTML', 'CSS', 'JavaScript', 'TypeScript', ],
      icon: <Globe className="w-6 h-6" />,
      github: '',
      demo: 'https://bhushan-weds-vaishnavi.netlify.app/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Rock Paper Scissors Game',
      description: 'Traditional Rock Paper Scissors Game which also keeps track of Wins, Loses and Ties.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/Rock-Paper-Scissors',
      demo: 'https://aaditya-712.github.io/Rock-Paper-Scissors/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'To Do List',
      description: 'This is a todo list where you can manage tasks like adding and deleting tasks.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/To-do-List',
      demo: 'https://aaditya-712.github.io/To-do-List/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Dice Game',
      description: 'The Dice game is like flip a coin to see who won. In this game tow dice are rolled and the dice with greater number wins.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/Dice-Game',
      demo: 'https://aaditya-712.github.io/Dice-Game/Dice_Game/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Drum Kit',
      description: 'Its a drum kit that play different instrument with keyboard keys.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/Drum-Kit',
      demo: 'https://aaditya-712.github.io/Drum-Kit/',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'TinDog - Tinder for Dogs',
      description: 'Its the landing page for tinder for dogs made while learning Frontend Web Technologies from Udemy.',
      tech: ['HTML', 'CSS'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/TinDog',
      demo: 'https://aaditya-712.github.io/TinDog/',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Basic Calculator',
      description: 'A beautiful weather application with location-based forecasts, offline caching, and material design principles.',
      tech: ['HTML', 'CSS'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/CodSoft/tree/main/Calculator',
      demo: 'https://aaditya-712.github.io/CodSoft/Calculator/',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Portfolio',
      description: 'Created a Portfolio Website a task for internship at CodSoft',
      tech: ['HTML', 'CSS', 'JavaScript', 'BootStrap'],
      icon: <Globe className="w-6 h-6" />,
      github: 'https://github.com/aaditya-712/CodSoft/tree/main/Portfolio',
      demo: 'https://aaditya-712.github.io/CodSoft/Portfolio/',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-4 md:p-6 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 md:px-3 py-1 bg-gray-800/50 text-cyan-400 text-xs md:text-sm rounded-full border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;