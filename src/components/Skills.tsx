import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skills = [
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Java', level: 70, category: 'Frontend' },
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
    { name: 'VS Code', level: 95, category: 'Tools' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-900 p-2 rounded-xl shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-purple-600 font-bold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
