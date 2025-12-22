import React from 'react';
import { resumeData } from '../data/resumeData';
import { CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technical Skills</h2>
            <p className="mt-4 text-xl text-gray-500">
              A comprehensive overview of my technical abilities and core competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                  🛠️
                </span>
                Hard Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {resumeData.skills.hard.map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-3 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors duration-200 cursor-default text-center flex items-center justify-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-green-100 p-2 rounded-lg mr-3 text-green-600">
                  🧠
                </span>
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {resumeData.skills.soft.map((skill, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-100 hover:bg-green-100 transition-colors duration-200 cursor-default text-center flex items-center justify-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Skills;
