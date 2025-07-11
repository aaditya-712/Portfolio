import React from 'react';
import { Calendar, MapPin, GraduationCap, Code, Smartphone, Database } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Backend Specialization',
      description: 'Mastered Java Spring Boot, RESTful APIs, and database management',
      icon: <Database className="w-5 h-5" />
    },
    {
      year: '2024',
      title: 'Full-Stack Development Journey',
      description: 'Expanding skills to frontend technologies and exploring modern web development',
      icon: <Code className="w-5 h-5" />
    },
    {
      year: '2022-2026',
      title: 'BTech in Computer Science & Engineering',
      description: 'Foundation in programming, algorithms, and software engineering principles',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      year: '2022',
      title: 'High School',
      description: 'Completed my high school by securing 89.50%',
      icon: <Smartphone className="w-5 h-5" />
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Passionate Backend Developer
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
                  I'm a dedicated Java backend developer with a passion for building scalable, reliable systems. 
                  My journey in software development began with a fascination for problem-solving and has evolved 
                  into expertise in creating robust backend architectures.
                </p>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Currently expanding my skills toward Spring Boot, RestAPI's, Maven. I enjoy working with modern 
                  technologies and frameworks to bring innovative ideas to life. When I'm not coding, you'll 
                  find me exploring new technologies, solving DSA problems, or working on personal projects.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Based in India</span>
                  </div>
                  {/* <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">3+ years of coding experience</span>
                  </div> */}
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Computer Science Student</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 mt-8 md:mt-0">
              <h4 className="text-xl md:text-2xl font-semibold text-white mb-6">My Journey</h4>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 glass-card p-4 rounded-xl group-hover:bg-gray-800/60 transition-colors duration-300">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-cyan-400 font-semibold">{item.year}</span>
                        <span className="text-gray-500">•</span>
                        <h5 className="text-white font-semibold">{item.title}</h5>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;