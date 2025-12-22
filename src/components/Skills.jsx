import React from 'react';
import { resumeData } from '../data/resumeData';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-xl text-gray-500">
            A comprehensive overview of my technical abilities and core competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hard Skills */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 p-2 rounded-lg mr-3 text-blue-600">
                🛠️
              </span>
              Hard Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeData.skills.hard.map((skill, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-100 p-2 rounded-lg mr-3 text-green-600">
                🧠
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.soft.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-100 hover:bg-green-100 transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
