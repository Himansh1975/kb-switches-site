import React from 'react';
import { Building, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const Projects = React.memo(() => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Building className="w-4 h-4" />
            <span>SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Projects, Real Results</h2>
          <p className="text-xl text-gray-600">See how KB Switches transformed homes and businesses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center relative">
                <div className="absolute inset-0 diagonal-lines opacity-10"></div>
                <Building className="w-16 h-16 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{study.location}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-500">Scope:</span>
                    <span className="text-sm font-medium text-gray-800">{study.scope}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-500">Result:</span>
                    <span className="text-sm font-medium text-green-700">{study.savings}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto">
            <Building className="w-4 h-4" />
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default Projects;