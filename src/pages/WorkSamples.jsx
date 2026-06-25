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
      title: 'Commercial SEEBOK',
      description: 'Accessory Dwelling Estimate',
      file: '/work-samples/Commercial Sample SEEBOK ACCESSORY DWELLING.xlsx',
    },
    {
      id: 2,
      title: 'Concrete Repair',
      description: 'Preventive Maintenance Estimate',
      file: '/work-samples/Concrete ESTIMATE - REPAIR AND PREVENTIVE MAINTENANCE.xlsx',
    },
    {
      id: 3,
      title: 'Sterling Residence',
      description: 'Detailed Residential Estimate',
      file: '/work-samples/ESTIMATE - STERLING RESIDENCE.xlsx',
    },
    {
      id: 4,
      title: 'Electrical Estimate',
      description: 'Joint Public Safety Facility',
      file: '/work-samples/Electrical Estimate - Joint Public Safety Facility.xlsx',
    },
    {
      id: 5,
      title: 'Flooring Takeoff',
      description: 'Aspire Health Partners VA Studio Apartments',
      file: '/work-samples/Flooring TAKEOFF - ASPIRE HEALTH PARTNERS VA STUDIO APARTMENTS.xlsx',
    },
    {
      id: 6,
      title: 'HVAC Estimate',
      description: 'CDA Church Project',
      file: '/work-samples/HVAC ESTIMATE - CDA CHURCH.xlsx',
    },
    {
      id: 7,
      title: 'Insulation Takeoff',
      description: 'Sleep Pods T1 Post Security Connections',
      file: '/work-samples/Insulation Takeoff - Sleep Pods T1 Post Security Connections.xlsx',
    },
    {
      id: 8,
      title: 'Lumber Takeoff',
      description: 'The Villages at Victoria Farms',
      file: '/work-samples/Lumber Takeoff - The Villages at Victoria Farms Manufactured Home Park.xlsx',
    },
    {
      id: 9,
      title: 'MEP Takeoff',
      description: 'Mechanical, Electrical, and Plumbing Takeoff',
      file: '/work-samples/MEP Take-off.xlsx',
    },
    {
      id: 10,
      title: 'Painting Estimate',
      description: '1428 St Paul St, Kelowna, BC',
      file: '/work-samples/Painting ESTIMATE - 1428 ST PAUL ST, KELOWNA, BC.xlsx',
    },
    {
      id: 11,
      title: 'Plumbing Estimate',
      description: 'Chuze Fitness Long Project',
      file: '/work-samples/Plumbing Estimate -  Chuze Fitness Long.xlsx',
    },
    {
      id: 12,
      title: 'Renovation Estimate',
      description: 'Hollygrove Campus at Pacific Clinics',
      file: '/work-samples/Renovation ESTIMATE - HOLLYGROVE CAMPUS AT PACIFIC CLINICS.xlsx',
    },
    {
      id: 13,
      title: 'Roofing Takeoff',
      description: 'Floral House Estimate',
      file: '/work-samples/Roofing TAKEOFF - FLORAL HOUSE.xlsx',
    },
    {
      id: 14,
      title: 'Site Estimate',
      description: 'Herff Road Commercial Phase I Improvements',
      file: '/work-samples/Site ESTIMATE - HERFF ROAD COMMERCIAL PHASE I IMPROVEMENTS.xlsx',
    },
    {
      id: 15,
      title: 'Solar Estimate',
      description: 'Reform Of Francisco Pereira Transportation Center',
      file: '/work-samples/Solar Estimate - Reform Of Francisco Pereira Transportation Center.xlsx',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-4">
          <Link to="/" className="inline-flex items-center text-brand-blue hover:text-brand-dark transition-colors font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-brand-dark mb-2">Our Work Samples</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Download our comprehensive estimating samples to see the level of detail and accuracy we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {samples.map((sample) => (
            <div key={sample.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between p-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-md text-green-600 shrink-0">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-dark leading-tight">{sample.title}</h3>
                  <p className="text-gray-500 text-xs hidden sm:block mt-0.5">{sample.description}</p>
                </div>
              </div>
              
              <div className="flex gap-2 sm:ml-4 shrink-0 w-full sm:w-auto">
                <a 
                  href={`ms-excel:ofv|u|${window.location.origin}${sample.file}`}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-brand-dark text-white px-3 py-1.5 rounded-md font-medium transition-colors duration-300 shadow-sm text-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </a>
                <a 
                  href={sample.file} 
                  download
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-brand-dark px-3 py-1.5 rounded-md font-medium transition-colors duration-300 border border-gray-200 text-xs"
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
