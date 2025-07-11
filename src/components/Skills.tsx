import React from 'react';
import { Code, Database, Smartphone, Globe, Server, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Maven']
    },
    {
      title: 'Database & Storage',
      icon: <Database className="w-6 h-6" />,
      skills: ['MySQL', 'MongoDB', 'SQL']
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['JavaScript', 'React', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Tools',
      icon: <Smartphone className="w-6 h-6" />,
      skills: ['Git/GitHub', 'Postman', 'IntelliJ IDEA']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass-card p-6 rounded-2xl hover:bg-gray-800/60 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700/50 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-center"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="glass-card p-6 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">
                Certifications & Learning
              </h3>
              <div className="flex flex-col gap-4 text-gray-300 text-left">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/entrepreneurship-essentials', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Entrepreneurship Essentials
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/ai-agents-seminar', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    AI Agents Seminar
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/web-design', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Learn Web Design, Python and MySQL: Bootcamp
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/java', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Java
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/python', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Python
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/ai-nxtwave', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    AI for students: Build your own Generative AI model workshop
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/web-development', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Web Development
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/java-development', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Java Development
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/efset', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    EFSET
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/unstop-talent-park', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Unstop Talent Park
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/aws-knowledge', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    AWS Knowledge: Cloud Essentials
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/cloud-essentials', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Cloud Essentials
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/matlab', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    MATLAB Tutorial Series 2023
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/cpp', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    C++
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/consultathon', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Certificate of Participation in Consultathon 4.0
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/c', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    C Programming Course
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/ui-ux', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Introduction To UI/UX
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <button 
                    onClick={() => window.open('/certificates/basic-computer-science', '_blank')}
                    className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
                  >
                    Basic Computer Science
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;