import React from 'react';
import { resumeData } from '../data/resumeData';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always open to discussing networking opportunities, infrastructure projects, or creative engineering challenges.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer group">
              <div className="bg-blue-600/20 p-4 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                <Mail className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-gray-400 mb-2">Email</p>
              <a href={`mailto:${resumeData.email}`} className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                {resumeData.email}
              </a>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-800/80 transition-colors cursor-pointer group">
              <div className="bg-blue-600/20 p-4 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                <Phone className="h-8 w-8 text-blue-500" />
              </div>
              <p className="text-sm text-gray-400 mb-2">Phone</p>
              <p className="text-xl font-medium text-white">
                {resumeData.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
