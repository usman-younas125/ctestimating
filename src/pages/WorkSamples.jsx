import React, { useEffect } from 'react';
import { Download, FileSpreadsheet, ArrowLeft, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkSamples = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const samples = [
    {
      id: 1,
      title: 'Framing Layout',
      description: 'Detailed material takeoff and labor estimate for framing.',
      file: '/work-samples/Framing-Layout.xlsx',
    },
    {
      id: 2,
      title: 'LV Cabling',
      description: 'Low voltage cabling estimate and project breakdown.',
      file: '/work-samples/LV-Cabling-Sample.xlsx',
    },
    {
      id: 3,
      title: 'MEP Estimate',
      description: 'Mechanical, Electrical, and Plumbing detailed takeoff.',
      file: '/work-samples/MEP.xlsx',
    },
    {
      id: 4,
      title: 'Mechanical Small',
      description: 'Small-scale mechanical estimate breakdown.',
      file: '/work-samples/Mechanical-Estimate-Small.xlsx',
    },
    {
      id: 5,
      title: 'Insulation & Mechanical',
      description: 'Comprehensive insulation and mechanical takeoff.',
      file: '/work-samples/Sample-Insulation-Mech-2.xlsx',
    },
    {
      id: 6,
      title: 'Irrigation & Landscape',
      description: 'Site work estimate for irrigation and landscaping.',
      file: '/work-samples/Sample-Irrigation-Landscape-Work-1.xlsx',
    },
    {
      id: 7,
      title: 'Site Works Detailed',
      description: 'Detailed takeoff for comprehensive site works.',
      file: '/work-samples/Sample-Site-Works-detailed-1.xlsx',
    },
    {
      id: 8,
      title: 'Mosque Takeoff',
      description: 'Full project estimate for Imam-e-Asr Islamic Seminary Mosque.',
      file: '/work-samples/Takeoff - IMAM-E-ASR ISLAMIC SEMINARY MOSQUE.xlsx',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">Our Work Samples</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download our comprehensive estimating samples to see the level of detail and accuracy we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {samples.map((sample) => (
            <div key={sample.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex items-center justify-between p-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="bg-green-50 p-2 rounded-md text-green-600 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <h3 className="text-sm font-bold text-brand-dark truncate">{sample.title}</h3>
                  <p className="text-gray-500 text-xs truncate hidden sm:block">{sample.description}</p>
                </div>
              </div>
              
              <div className="flex gap-2 ml-4 shrink-0">
                <a 
                  href={`ms-excel:ofv|u|${window.location.origin}${sample.file}`}
                  className="flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-dark text-white px-3 py-1.5 rounded-md font-medium transition-colors duration-300 shadow-sm text-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </a>
                <a 
                  href={sample.file} 
                  download
                  className="flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-brand-dark px-3 py-1.5 rounded-md font-medium transition-colors duration-300 border border-gray-200 text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSamples;
