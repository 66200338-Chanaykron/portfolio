import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { ArrowRight, Download } from 'lucide-react';

import profileImage from '../assets/profile.jpg';
import resumePdf from '../assets/Resume_Chanatkron.pdf';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-4">
              {resumeData.title}
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hello, I'm</span>{' '}
              <span className="block text-blue-600 xl:inline">{resumeData.name.split(' ')[0]}</span>
            </h1>
            <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {resumeData.about}
            </p>
            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-all"
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href={resumePdf}
                  download="Resume_Chanatkron.pdf"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-all"
                >
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <img 
                    src={profileImage} 
                    alt={resumeData.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
