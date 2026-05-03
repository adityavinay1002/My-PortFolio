import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Generator',
      description:
        'An automated portfolio generator that creates professional developer portfolios using predefined templates and user input.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/v1777785163/Screenshot_2026-05-03_104113_dytpsd.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/adityavinay1002/Hackathon-PortFolio-Generator',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Resume Builder',
      description:
        'A web-based resume builder that allows users to create and export professional resumes with customizable templates.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/v1777785489/image_u6mxof.webp',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/adityavinay1002/resume-builder',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Hand & Facial Gesture–Controlled Intelligent Car Driving System',
      description:
        'A real-time system using facial tilt and hand gestures to control vehicle movement using computer vision.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/hand-gestures_udcolz.jpg',
      technologies: ['Python', 'OpenCV', 'MediaPipe'],
      githubUrl:
        'https://github.com/adityavinay1002/Hands-Free-Car-Navigation-Using-Facial-and-Hand-Gestures',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Automated Attendance System for Rural Schools',
      description:
        'AI-powered attendance tracking using face recognition to automate student presence in rural classrooms.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/v1777784366/ai-based-face-recognition-attendance-system-500x500_mtanea.webp',
      technologies: ['Python', 'OpenCV', 'Face Recognition'],
      githubUrl:
        'https://github.com/adityavinay1002/Automated-Attendance-System-Specialization-Hackathon',
      liveUrl: '#',
    },
    {
      id: 5,
      title: 'AI Sports Performance Analysis',
      description:
        'A deep learning system that analyzes sports footage to extract player performance insights and movement tracking.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/v1777784347/sports-analytics-ai-optimised_b22neo.webp',
      technologies: ['Python', 'Deep Learning', 'Computer Vision'],
      githubUrl:
        'https://github.com/adityavinay1002/AI-Sports-Performance-Analysis',
      liveUrl: '#',
    },
    {
      id: 6,
      title: 'ATM Interface',
      description:
        'A full-stack banking interface built with Java and MySQL featuring authentication and transaction handling.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503115/WhatsApp_Image_2025-08-02_at_12.01.20_e48ca135_y6emyu.jpg',
      technologies: ['Java', 'JDBC', 'MySQL'],
      githubUrl: 'https://github.com/adityavinay1002/Task-2',
      liveUrl: '#',
    },
    {
      id: 7,
      title: 'Finance Management and Banking Application',
      description:
        'A responsive banking web app for managing finances, tracking expenses, and performing secure transactions.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503169/1706887784053_oxqurl.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl:
        'https://github.com/adityavinay1002/finance-banking-application',
      liveUrl: 'https://finance-banking-application.vercel.app/',
    },
    {
      id: 8,
      title: 'Expense Splitter',
      description:
        'A collaborative expense tracking tool to split bills and manage shared financial activities efficiently.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/v1777784075/Track-daily-expenses-with-AI_ur0q3a.webp',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/adityavinay1002/Expense-splitter',
      liveUrl: '#',
    },
    {
      id: 9,
      title: 'Explainable Vision Image Processing Application',
      description:
        'A system that visually explains each step of image processing transformations in an interactive way.',
      image:
        'https://res.cloudinary.com/doo9uc85i/image/upload/vision_zucizf.jpg',
      technologies: ['TypeScript', 'Computer Vision', 'Full Stack'],
      githubUrl: 'https://github.com/adityavinay1002/explainable-vision',
      liveUrl: 'https://explainable-vision.vercel.app/',
    },
    {
      id: 10,
      title: 'Tic Tac Toe Game',
      description:
        'A modern Tic Tac Toe game with AI and multiplayer support built using React and TypeScript.',
      image:
        'https://res.cloudinary.com/dpa0sb1tm/image/upload/v1754503237/a703bb32-e1ba-4653-8b18-14d7d27ced66_jvisaj.jpg',
      technologies: ['React', 'TypeScript', 'Vite'],
      githubUrl:
        'https://github.com/adityavinay1002/tic-tac-toe-game',
      liveUrl:
        'https://tic-tac-toe-game-ten-neon.vercel.app/',
    },
    {
      id: 11,
      title: 'Smart Parking Management System',
      description:
        'An IoT-based parking system that shows real-time slot availability using sensors.',
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
