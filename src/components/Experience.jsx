import React from 'react';
import { resumeData } from '../data/resumeData';
import { Briefcase, GraduationCap, Calendar, FileText } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Experience & Education</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Projects & Experience</h3>
            </div>
            
            <div className="space-y-12">
              {resumeData.experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-200 last:border-0">
                  <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-600 shadow-md ring-4 ring-white"></div>
                  <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                  <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  {item.attachment && (
                    <a 
                      href={item.attachment} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center mt-3 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-1" />
                      {item.attachmentLabel || "View Attachment"}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            <div className="space-y-8">
              {resumeData.education.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
                  <h4 className="text-lg font-bold text-gray-900">{item.school}</h4>
                  <p className="text-blue-600 font-medium mt-1">{item.degree}</p>
                  <div className="flex items-center mt-4 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.year}</span>
                    <span className="mx-2">•</span>
                    <span className="font-semibold text-gray-700">GPA: {item.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
