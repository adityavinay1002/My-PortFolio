import React from 'react';
import { Code, User, Briefcase, Download } from 'lucide-react';

const About = () => {
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/aditya-cv.pdf';
    link.download = 'Aditya_Vinay_Raj_CV.pdf';
    link.click();
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer | Java & Front-End Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With hands-on experience gained through academic projects and independent development, I specialize in building responsive, accessible, and high-performance web applications using modern technologies like Java, React, Spring Boot, and SQL.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm passionate about solving real-world problems through clean code and intuitive design. Eager to grow as a Full Stack Developer, I continuously explore new tools, frameworks, and best practices to stay ahead in the ever-evolving web development landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get In Touch
              </button>
              <button
                onClick={downloadCV}
                className="flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-600 rounded-lg text-white mr-4">
                  <Code size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Java Programming
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Designing and building secure, scalable backend applications using Java, with a focus on clean architecture and object-oriented principles.


              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg text-white mr-4">
                  <User size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Front-End Development
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Creating clean, responsive, and accessible interfaces using modern front-end technologies like React.js, Tailwind CSS, and JavaScript.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700/50">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-600 rounded-lg text-white mr-4">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Web Development
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Building full stack applications by combining responsive front-end design with efficient backend systems for smooth user experiences.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;