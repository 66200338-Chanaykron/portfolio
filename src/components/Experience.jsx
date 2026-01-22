import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { Briefcase, GraduationCap, Calendar, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealOnScroll from './RevealOnScroll';

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
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
                        className="inline-flex items-center mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        {item.attachmentLabel || "View Attachment"}
                      </a>
                    )}

                    {item.images && (
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {item.images.map((img, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => setSelectedImage(img)}
                          >
                            <img 
                              src={img} 
                              alt={`${item.title} screenshot ${imgIndex + 1}`} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
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
        </RevealOnScroll>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Project Fullscreen"
                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
