import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ATM Interface',
      description:
        'A full-stack banking interface built with Java and MySQL. Features include secure user authentication, balance inquiries, withdrawals, deposits, and transaction history with PIN validation.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503115/WhatsApp_Image_2025-08-02_at_12.01.20_e48ca135_y6emyu.jpg',
      technologies: ['Java', 'JDBC', 'MySQL'],
      githubUrl: 'https://github.com/adityavinay1002/Task-2',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Finance Management and Banking Application',
      description:
        'A responsive web application built with React, Firebase, and Tailwind CSS to manage finances, track expenses, and perform secure banking operations. Includes user authentication, bank account overview, fund transfers, and transaction insights.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503169/1706887784053_oxqurl.png',
      technologies: ['React', 'Spring Boot', 'Tailwind CSS'],
      githubUrl: 'https://github.com/adityavinay1002/finance-banking-application',
      liveUrl: 'https://finance-banking-application.vercel.app/',
    },
    {
      id: 3,
      title: 'Tic Tac Toe Game',
      description:
        'A responsive Tic Tac Toe web app built with React, TypeScript, and Vite, featuring single-player AI and local multiplayer with smooth animations.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503237/a703bb32-e1ba-4653-8b18-14d7d27ced66_jvisaj.jpg',
      technologies: ['React', 'TypeScript', 'Vite'],
      githubUrl: 'https://github.com/adityavinay1002/tic-tac-toe-game',
      liveUrl: 'https://tic-tac-toe-game-ten-neon.vercel.app/',
    }, // ✅ comma added here

    {
      id: 4,
      title: 'Hand & Facial Gesture–Controlled Intelligent Car Driving System',
      description:
        'A real-time computer vision–based driving system where facial head tilt controls steering and single-hand gestures control speed, braking, and reverse. Built using webcam input for hands-free and intuitive vehicle control.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/hand-gestures_udcolz.jpg',
      technologies: ['Python', 'OpenCV', 'MediaPipe'],
      githubUrl: 'https://github.com/adityavinay1002/Hands-Free-Car-Navigation-Using-Facial-and-Hand-Gestures',
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'Explainable Vision Image Processing Application',
      description:
        'An explainable computer vision system that applies image processing techniques while visually explaining each transformation step. Developed as a full-stack application with an interactive TypeScript-based frontend.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/vision_zucizf.jpg',
      technologies: ['TypeScript', 'Computer Vision', 'Full Stack'],
      githubUrl: 'https://github.com/adityavinay1002/explainable-vision',
      liveUrl: 'https://explainable-vision.vercel.app/',
    },
    {
      id: 6,
      title: 'Smart Parking Management System',
      description:
        'An IoT-based smart parking system that detects parking slot availability using sensors and displays real-time status. Designed to reduce traffic congestion and improve parking efficiency.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/smart-parking_gchrz3.jpg',
      technologies: ['Arduino', 'Sensors', 'Embedded Systems'],
      githubUrl: 'https://github.com',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail,
            performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/adityavinay1002"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Check My Github
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
